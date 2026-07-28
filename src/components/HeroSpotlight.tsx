"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const BG_IMAGE_1 =
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1784416885/ChatGPT_Image_Jul_19_2026_02_18_42_AM_vhbf1s.png";
export const BG_IMAGE_2 =
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1784416885/ChatGPT_Image_Jul_19_2026_02_20_36_AM_guytz0.png";

export const SPOTLIGHT_R = 260;
export const GRID_CELL = 48;

type CursorPos = { x: number; y: number };

function RevealLayer({ cursorPos }: { cursorPos: CursorPos }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const reveal = revealRef.current;
    if (!canvas || !reveal) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (
      canvas.width !== window.innerWidth ||
      canvas.height !== window.innerHeight
    ) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const { x: cursorX, y: cursorY } = cursorPos;

    const gradient = ctx.createRadialGradient(
      cursorX,
      cursorY,
      0,
      cursorX,
      cursorY,
      SPOTLIGHT_R,
    );
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.4, "rgba(255,255,255,1)");
    gradient.addColorStop(0.6, "rgba(255,255,255,0.75)");
    gradient.addColorStop(0.75, "rgba(255,255,255,0.4)");
    gradient.addColorStop(0.88, "rgba(255,255,255,0.12)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    ctx.beginPath();
    ctx.arc(cursorX, cursorY, SPOTLIGHT_R, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    const dataUrl = canvas.toDataURL();
    reveal.style.maskImage = `url("${dataUrl}")`;
    reveal.style.webkitMaskImage = `url("${dataUrl}")`;
  });

  useEffect(() => {
    const onResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="hidden" aria-hidden="true" />
      <div
        ref={revealRef}
        className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BG_IMAGE_2})`,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
      />
    </>
  );
}

export default function HeroSpotlight() {
  const rootRef = useRef<HTMLDivElement>(null);
  const patternRef = useRef<SVGPatternElement>(null);
  const reduceMotion = useReducedMotion();

  const mouseRef = useRef<CursorPos>({ x: 0, y: 0 });
  const smoothRef = useRef<CursorPos>({ x: 0, y: 0 });
  const gridOffsetRef = useRef<CursorPos>({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState<CursorPos>({ x: 0, y: 0 });

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const setInitialPosition = () => {
      const rect = root.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      mouseRef.current = { x, y };
      smoothRef.current = { x, y };
      setCursorPos({ x, y });
    };

    setInitialPosition();

    const finePointer = window.matchMedia("(pointer: fine)");

    const onMouseMove = (event: MouseEvent) => {
      if (!finePointer.matches || reduceMotion) return;
      mouseRef.current = { x: event.clientX, y: event.clientY };
    };

    const onMouseLeave = () => {
      const rect = root.getBoundingClientRect();
      mouseRef.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", setInitialPosition, { passive: true });

    let raf = 0;

    const loop = () => {
      const smooth = smoothRef.current;
      const smoothFactor = reduceMotion ? 1 : 0.1;

      smooth.x += (mouseRef.current.x - smooth.x) * smoothFactor;
      smooth.y += (mouseRef.current.y - smooth.y) * smoothFactor;

      const rect = root.getBoundingClientRect();

      if (rect.width > 0 && rect.height > 0) {
        const cx = (smooth.x - rect.left) / rect.width - 0.5;
        const cy = (smooth.y - rect.top) / rect.height - 0.5;

        const grid = gridOffsetRef.current;
        const gridFactor = reduceMotion ? 1 : 0.06;
        grid.x += (cx * 16 - grid.x) * gridFactor;
        grid.y += (cy * 16 - grid.y) * gridFactor;

        patternRef.current?.setAttribute("x", grid.x.toFixed(2));
        patternRef.current?.setAttribute("y", grid.y.toFixed(2));
      }

      setCursorPos({ x: smooth.x, y: smooth.y });
      raf = window.requestAnimationFrame(loop);
    };

    raf = window.requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", setInitialPosition);
      window.cancelAnimationFrame(raf);
    };
  }, [reduceMotion]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <motion.img
        src={BG_IMAGE_1}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center bg-no-repeat"
        initial={
          reduceMotion ? false : { filter: "blur(16px)", opacity: 0, scale: 1.03 }
        }
        animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        draggable={false}
      />

      <RevealLayer cursorPos={cursorPos} />

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
