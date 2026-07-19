"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

export const BG_IMAGE_1 =
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1784416885/ChatGPT_Image_Jul_19_2026_02_18_42_AM_vhbf1s.png";
export const BG_IMAGE_2 =
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1784416885/ChatGPT_Image_Jul_19_2026_02_20_36_AM_guytz0.png";

export const SPOTLIGHT_R = 260;
export const GRID_CELL = 48;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

/**
 * Full-viewport hero background with a smooth cursor spotlight that reveals
 * BG_IMAGE_2 over BG_IMAGE_1. The mask uses a CSS radial gradient rather than
 * serialising a full canvas on every frame, preserving the requested visual
 * result while keeping pointer movement fluid on high-resolution displays.
 */
export default function HeroSpotlight() {
  const rootRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const patternRef = useRef<SVGPatternElement>(null);
  const reduceMotion = useReducedMotion();

  const mouseRef = useRef({ x: 0, y: 0 });
  const smoothRef = useRef({ x: 0, y: 0 });
  const gridOffsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const root = rootRef.current;
    const reveal = revealRef.current;

    if (!root || !reveal) return;

    const setInitialPosition = () => {
      const rect = root.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      mouseRef.current = { x, y };
      smoothRef.current = { x, y };
    };

    setInitialPosition();

    const finePointer = window.matchMedia("(pointer: fine)");

    const onPointerMove = (event: PointerEvent) => {
      if (!finePointer.matches || reduceMotion) return;
      mouseRef.current = { x: event.clientX, y: event.clientY };
    };

    const onPointerLeave = () => {
      const rect = root.getBoundingClientRect();
      mouseRef.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onPointerLeave);
    window.addEventListener("resize", setInitialPosition, { passive: true });

    let raf = 0;

    const loop = () => {
      const smooth = smoothRef.current;
      const easing = reduceMotion ? 1 : 0.1;

      smooth.x += (mouseRef.current.x - smooth.x) * easing;
      smooth.y += (mouseRef.current.y - smooth.y) * easing;

      const rect = root.getBoundingClientRect();

      if (rect.width > 0 && rect.height > 0) {
        const localX = clamp(smooth.x - rect.left, 0, rect.width);
        const localY = clamp(smooth.y - rect.top, 0, rect.height);
        const cx = localX / rect.width - 0.5;
        const cy = localY / rect.height - 0.5;

        const grid = gridOffsetRef.current;
        grid.x += (cx * 16 - grid.x) * (reduceMotion ? 1 : 0.06);
        grid.y += (cy * 16 - grid.y) * (reduceMotion ? 1 : 0.06);

        patternRef.current?.setAttribute("x", grid.x.toFixed(2));
        patternRef.current?.setAttribute("y", grid.y.toFixed(2));

        const mask = `radial-gradient(circle ${SPOTLIGHT_R}px at ${localX.toFixed(
          1,
        )}px ${localY.toFixed(1)}px, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, rgba(255,255,255,0) 100%)`;

        reveal.style.maskImage = mask;
        reveal.style.webkitMaskImage = mask;
      }

      raf = window.requestAnimationFrame(loop);
    };

    raf = window.requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
      window.removeEventListener("resize", setInitialPosition);
      window.cancelAnimationFrame(raf);
    };
  }, [reduceMotion]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-black"
    >
      <motion.img
        src={BG_IMAGE_1}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top"
        initial={reduceMotion ? false : { filter: "blur(16px)", opacity: 0, scale: 1.03 }}
        animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        draggable={false}
      />

      <div
        ref={revealRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BG_IMAGE_2})`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            ref={patternRef}
            id="hero-spotlight-grid"
            width={GRID_CELL}
            height={GRID_CELL}
            patternUnits="userSpaceOnUse"
            x={0}
            y={0}
          >
            <path
              d={`M ${GRID_CELL} 0 L 0 0 0 ${GRID_CELL}`}
              fill="none"
              stroke="#64748b"
              strokeWidth={0.6}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-spotlight-grid)" />
      </svg>
    </div>
  );
}
