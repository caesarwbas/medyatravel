# MEDYA TRAVEL production security review

## Scope reviewed

The current codebase is a public Next.js marketing/travel site. It contains no API route handlers, no Server Actions, no database client, no user table/model, and no authenticated write path.

The dependency manifest in this source does not contain Convex or Clerk. Because they are not present, no fake Convex/Clerk types or authorization code were added. If those services are introduced later, use the official packages and generated/provider types rather than local casts.

## TypeScript and ESLint

- TypeScript remains in strict mode.
- `npm run typecheck` runs `tsc --noEmit`.
- `npm run lint` fails on warnings (`--max-warnings=0`).
- `npm run check` runs both checks.
- No `any` casts, `eslint-disable`, `@ts-ignore`, or `@ts-expect-error` suppressions were added.

## Server Components

Every `src/app/**/page.tsx` file is already a Server Component. Client Components are limited to browser-only interaction such as navigation state, mouse/video effects, document locale updates, social UI, and the WhatsApp request composer.

The journey request form intentionally keeps visitor-entered contact data in the visitor's browser and opens WhatsApp only after submission. Moving that data through the MEDYA TRAVEL server would create an additional PII-processing path without a functional need and would contradict the site's existing privacy copy.

## Authorization and IDOR

There are currently no authenticated resources, object IDs, write endpoints, server mutations, or database queries. Therefore there is no current IDOR write surface to authorize. Public marketing pages remain intentionally public.

The global proxy rejects unsafe HTTP methods (`POST`, `PUT`, `PATCH`, `DELETE`, etc.) because the current site has no legitimate server-side writes. If an authenticated API or Server Action is added later, explicitly allow only that route after adding authentication and ownership checks at the data-access layer.

## Data protection

- No secrets, tokens, passwords, database credentials, or private user objects are present in client code.
- `.env*` files are ignored by Git.
- Security headers are applied to application responses, including CSP, HSTS, clickjacking protection, MIME sniffing protection, referrer restrictions, permissions policy, and cross-origin isolation headers.
- The CSP permits only the image origins currently used by the site (`res.cloudinary.com` and `iberica-travel.com`).

## Rate limiting

An application-level fixed-window limiter is active in `src/proxy.ts` for document/page requests. It limits a client/path pair to 180 requests per minute and returns HTTP 429 with `Retry-After` and RateLimit headers when exceeded.

This limiter is a defense-in-depth layer. On Cloudflare Workers, memory is isolate-local and must not be treated as a globally consistent abuse-control system. For distributed production enforcement, also create a Cloudflare WAF Rate Limiting Rule or use Cloudflare's Rate Limiting binding. Cloudflare's Workers Rate Limiting API requires Wrangler 4.36.0 or later.

## Before adding Convex / Clerk

When authenticated functionality is added:

1. Keep Clerk secret keys and Convex deployment/admin credentials server-only; never prefix them with `NEXT_PUBLIC_` unless the vendor explicitly documents the value as publishable.
2. Use Clerk's server authentication APIs in Server Components/Route Handlers and verify authorization again inside every Convex query/mutation that reads or writes user-owned data.
3. Never authorize a mutation merely because the client supplied a `userId`, document ID, booking ID, or tenant ID. Derive identity from the verified auth context and check record ownership/role server-side.
4. Return DTOs containing only fields that the receiving user is allowed to see; do not serialize raw user/database records to Client Components.
5. Regenerate Cloudflare binding types with Wrangler after every binding change instead of hand-writing casts.
