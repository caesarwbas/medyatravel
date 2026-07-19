"use client";

import { useEffect, useRef, useState } from "react";

const BG_IMAGE_1 =
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1784416885/ChatGPT_Image_Jul_19_2026_02_18_42_AM_vhbf1s.png";

const BG_IMAGE_2 =
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1784416885/ChatGPT_Image_Jul_19_2026_02_20_36_AM_guytz0.png";

const SPOTLIGHT_R = 260;
const GRID_CELL = 48;

interface Point {
  x: number;
  y: number;
}

interface RevealLayerProps {
  cursorPos: Point;
  isActive: boolean;
}

function RevealLayer({ cursorPos, isActive }: RevealLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;

      if (!canvas) {
        return;
      }

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Intentionally runs after each cursor-position render.
  useEffect(() => {
    const canvas = canvasRef.current;
    const revealElement = revealRef.current;

    if (!canvas || !revealElement) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    const gradient = context.createRadialGradient(
      cursorPos.x,
      cursorPos.y,
      0,
      cursorPos.x,
      cursorPos.y,
      SPOTLIGHT_R,
    );

    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.4, "rgba(255,255,255,1)");
    gradient.addColorStop(0.6, "rgba(255,255,255,0.75)");
    gradient.addColorStop(0.75, "rgba(255,255,255,0.4)");
    gradient.addColorStop(0.88, "rgba(255,255,255,0.12)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    context.beginPath();
    context.arc(
      cursorPos.x,
      cursorPos.y,
      SPOTLIGHT_R,
      0,
      Math.PI * 2,
    );
    context.fillStyle = gradient;
    context.fill();

    const maskImage = `url("${canvas.toDataURL("image/png")}")`;

    revealElement.style.maskImage = maskImage;
    revealElement.style.webkitMaskImage = maskImage;

    revealElement.style.maskSize = "100% 100%";
    revealElement.style.webkitMaskSize = "100% 100%";

    revealElement.style.maskPosition = "0 0";
    revealElement.style.webkitMaskPosition = "0 0";

    revealElement.style.maskRepeat = "no-repeat";
    revealElement.style.webkitMaskRepeat = "no-repeat";
  });

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="hidden"
      />

      <div
        ref={revealRef}
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-200"
        style={{
          backgroundImage: `url("${BG_IMAGE_2}")`,
          opacity: isActive ? 1 : 0,
          willChange: "opacity, mask-image, -webkit-mask-image",
        }}
      />
    </>
  );
}

export default function HeroMouseReveal() {
  const rootRef = useRef<HTMLDivElement>(null);
  const patternRef = useRef<SVGPatternElement>(null);

  const animationFrameRef = useRef<number | null>(null);
  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const smoothRef = useRef<Point>({ x: 0, y: 0 });
  const gridOffsetRef = useRef<Point>({ x: 0, y: 0 });
  const activeRef = useRef(false);

  const [cursorPos, setCursorPos] = useState<Point>({
    x: 0,
    y: 0,
  });

  const [isActive, setIsActive] = useState(false);
  const [supportsHover, setSupportsHover] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );

    const updatePointerMode = () => {
      setSupportsHover(mediaQuery.matches);
    };

    updatePointerMode();

    mediaQuery.addEventListener("change", updatePointerMode);

    return () => {
      mediaQuery.removeEventListener("change", updatePointerMode);
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const moveToCenter = () => {
      const rect = root.getBoundingClientRect();

      const center = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };

      mouseRef.current = center;
      smoothRef.current = center;

      setCursorPos({
        x: rect.width / 2,
        y: rect.height / 2,
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = root.getBoundingClientRect();

      const insideHero =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (insideHero) {
        mouseRef.current = {
          x: event.clientX,
          y: event.clientY,
        };
      }

      if (insideHero !== activeRef.current) {
        activeRef.current = insideHero;
        setIsActive(insideHero);
      }
    };

    const handleResize = () => {
      if (!activeRef.current) {
        moveToCenter();
      }
    };

    const animate = () => {
      const currentRoot = rootRef.current;

      if (!currentRoot) {
        return;
      }

      const rect = currentRoot.getBoundingClientRect();

      smoothRef.current.x +=
        (mouseRef.current.x - smoothRef.current.x) * 0.1;

      smoothRef.current.y +=
        (mouseRef.current.y - smoothRef.current.y) * 0.1;

      const cx =
        (smoothRef.current.x - rect.left) / rect.width - 0.5;

      const cy =
        (smoothRef.current.y - rect.top) / rect.height - 0.5;

      gridOffsetRef.current.x +=
        (cx * 16 - gridOffsetRef.current.x) * 0.06;

      gridOffsetRef.current.y +=
        (cy * 16 - gridOffsetRef.current.y) * 0.06;

      if (patternRef.current) {
        patternRef.current.setAttribute(
          "x",
          gridOffsetRef.current.x.toFixed(3),
        );

        patternRef.current.setAttribute(
          "y",
          gridOffsetRef.current.y.toFixed(3),
        );
      }

      setCursorPos({
        x: smoothRef.current.x - rect.left,
        y: smoothRef.current.y - rect.top,
      });

      animationFrameRef.current =
        window.requestAnimationFrame(animate);
    };

    moveToCenter();

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    animationFrameRef.current =
      window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Default background: completely unchanged */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${BG_IMAGE_1}")`,
        }}
      />

      {/* Mouse spotlight reveals the second image */}
      {supportsHover ? (
        <RevealLayer
          cursorPos={cursorPos}
          isActive={isActive}
        />
      ) : (
        /* Mobile/touch fallback: show image 2 normally */
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${BG_IMAGE_2}")`,
          }}
        />
      )}

      {/* Moving grid */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-10"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            ref={patternRef}
            id="hero-reveal-grid"
            x="0"
            y="0"
            width={GRID_CELL}
            height={GRID_CELL}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${GRID_CELL} 0 L 0 0 0 ${GRID_CELL}`}
              fill="none"
              stroke="#64748b"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#hero-reveal-grid)"
        />
      </svg>
    </div>
  );
}