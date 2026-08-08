import { NextRequest, NextResponse } from "next/server";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 180;
const RATE_LIMIT_MAX_ENTRIES = 10_000;

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

const SAFE_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://res.cloudinary.com https://iberica-travel.com",
  "font-src 'self' data:",
  "connect-src 'self'",
  "media-src 'self'",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "frame-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

function getClientKey(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp =
    request.headers.get("cf-connecting-ip") ??
    forwardedFor?.split(",")[0]?.trim() ??
    "anonymous";

  return `${clientIp}:${request.nextUrl.pathname}`;
}

function pruneRateLimitStore(now: number): void {
  if (rateLimitStore.size < RATE_LIMIT_MAX_ENTRIES) {
    return;
  }

  for (const [key, entry] of rateLimitStore) {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }

  if (rateLimitStore.size >= RATE_LIMIT_MAX_ENTRIES) {
    const oldestKey = rateLimitStore.keys().next().value;
    if (typeof oldestKey === "string") {
      rateLimitStore.delete(oldestKey);
    }
  }
}

function checkRateLimit(request: NextRequest): {
  allowed: boolean;
  remaining: number;
  resetAt: number;
} {
  const now = Date.now();
  pruneRateLimitStore(now);

  const key = getClientKey(request);
  const existing = rateLimitStore.get(key);

  if (!existing || existing.resetAt <= now) {
    const resetAt = now + RATE_LIMIT_WINDOW_MS;
    rateLimitStore.set(key, { count: 1, resetAt });
    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX_REQUESTS - 1,
      resetAt,
    };
  }

  existing.count += 1;
  rateLimitStore.set(key, existing);

  return {
    allowed: existing.count <= RATE_LIMIT_MAX_REQUESTS,
    remaining: Math.max(0, RATE_LIMIT_MAX_REQUESTS - existing.count),
    resetAt: existing.resetAt,
  };
}

function applySecurityHeaders(response: NextResponse): NextResponse {
  response.headers.set("Content-Security-Policy", CONTENT_SECURITY_POLICY);
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.headers.set("Cross-Origin-Resource-Policy", "same-origin");
  response.headers.set("Origin-Agent-Cluster", "?1");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-DNS-Prefetch-Control", "off");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Permitted-Cross-Domain-Policies", "none");

  return response;
}

export function proxy(request: NextRequest): NextResponse {
  if (!SAFE_METHODS.has(request.method)) {
    const response = new NextResponse(null, {
      status: 405,
      headers: {
        Allow: "GET, HEAD, OPTIONS",
        "Cache-Control": "no-store",
      },
    });

    return applySecurityHeaders(response);
  }

  if (request.method === "OPTIONS") {
    return applySecurityHeaders(
      new NextResponse(null, {
        status: 204,
        headers: {
          Allow: "GET, HEAD, OPTIONS",
          "Cache-Control": "no-store",
        },
      }),
    );
  }

  const rateLimit = checkRateLimit(request);

  if (!rateLimit.allowed) {
    const retryAfter = Math.max(
      1,
      Math.ceil((rateLimit.resetAt - Date.now()) / 1000),
    );

    const response = NextResponse.json(
      { error: "Too many requests" },
      {
        status: 429,
        headers: {
          "Cache-Control": "no-store",
          "Retry-After": String(retryAfter),
        },
      },
    );

    response.headers.set("RateLimit-Limit", String(RATE_LIMIT_MAX_REQUESTS));
    response.headers.set("RateLimit-Remaining", "0");
    response.headers.set(
      "RateLimit-Reset",
      String(Math.ceil(rateLimit.resetAt / 1000)),
    );

    return applySecurityHeaders(response);
  }

  const response = NextResponse.next();
  response.headers.set("RateLimit-Limit", String(RATE_LIMIT_MAX_REQUESTS));
  response.headers.set("RateLimit-Remaining", String(rateLimit.remaining));
  response.headers.set(
    "RateLimit-Reset",
    String(Math.ceil(rateLimit.resetAt / 1000)),
  );

  return applySecurityHeaders(response);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|robots.txt|sitemap.xml|manifest.webmanifest|.*\\.(?:avif|css|gif|ico|jpe?g|js|json|map|mp4|png|svg|webm|webp|woff2?)$).*)",
  ],
};
