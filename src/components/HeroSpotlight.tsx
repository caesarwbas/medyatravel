"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BG_IMAGE_1 = "https://res.cloudinary.com/lclxcm8g/image/upload/v1784416885/ChatGPT_Image_Jul_19_2026_02_18_42_AM_vhbf1s.png";
const BG_IMAGE_2 = "https://res.cloudinary.com/lclxcm8g/image/upload/v1784416885/ChatGPT_Image_Jul_19_2026_02_20_36_AM_guytz0.png";

export default function HeroSpotlight() {
  const rootRef = useRef<HTMLDivElement>(null);
  const patternRef = useRef<SVGPatternElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });
  const grid = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;
    mouse.current = { x: startX, y: startY };
    smooth.current = { x: startX, y: startY };

    const onMove = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    const onResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    
    window.addEventListener('mousemove', onMove);
    window.addEventListener('resize', onResize);
    onResize();

    const loop = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
      
      const r = rootRef.current?.getBoundingClientRect();
      if (r) {
        const cx = (smooth.current.x - r.left) / r.width - 0.5;
        const cy = (smooth.current.y - r.top) / r.height - 0.5;
        grid.current.x += (cx * 16 - grid.current.x) * 0.06;
        grid.current.y += (cy * 16 - grid.current.y) * 0.06;
        patternRef.current?.setAttribute('x', grid.current.x.toFixed(2));
        patternRef.current?.setAttribute('y', grid.current.y.toFixed(2));
      }

      const ctx = canvasRef.current?.getContext('2d');
      if (ctx && canvasRef.current) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        const g = ctx.createRadialGradient(smooth.current.x, smooth.current.y, 0, smooth.current.x, smooth.current.y, 260);
        g.addColorStop(0, 'rgba(255,255,255,1)');
        g.addColorStop(0.4, 'rgba(255,255,255,1)');
        g.addColorStop(0.6, 'rgba(255,255,255,0.75)');
        g.addColorStop(0.75, 'rgba(255,255,255,0.4)');
        g.addColorStop(0.88, 'rgba(255,255,255,0.12)');
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(smooth.current.x, smooth.current.y, 260, 0, Math.PI * 2);
        ctx.fill();
        
        if (layerRef.current) {
          const dataUrl = canvasRef.current.toDataURL();
          layerRef.current.style.maskImage = `url(${dataUrl})`;
          (layerRef.current.style as any).webkitMaskImage = `url(${dataUrl})`;
        }
      }
      requestAnimationFrame(loop);
    };
    
    const raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={rootRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* الصورة الأساسية */}
      <img src={BG_IMAGE_1} className="absolute inset-0 w-full h-full object-cover" alt="" />
      
      {/* طبقة الكشف المخفية */}
      <canvas ref={canvasRef} className="hidden" aria-hidden="true" />
      <div 
        ref={layerRef} 
        className="absolute inset-0 w-full h-full bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${BG_IMAGE_2})`,
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%'
        }} 
      />
      
      {/* الشبكة */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern ref={patternRef} id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#64748b" strokeWidth="0.6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}