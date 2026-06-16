"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const TOTAL_FRAMES = 300;
const PRELOAD_FRAMES = 50;

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [framesLoaded, setFramesLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to frame index (0 to 299)
  const currentFrame = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    
    // Helper to load an image
    const loadImage = (index: number) => {
      return new Promise<HTMLImageElement>((resolve) => {
        const img = new Image();
        img.src = `/frames/frame_ (${index}).png`;
        img.onload = () => {
          loadedImages[index - 1] = img;
          setFramesLoaded((prev) => prev + 1);
          resolve(img);
        };
      });
    };

    // Preload first 50 frames immediately
    const preloadInitial = async () => {
      const initialPromises = [];
      for (let i = 1; i <= PRELOAD_FRAMES; i++) {
        initialPromises.push(loadImage(i));
      }
      await Promise.all(initialPromises);
      setImages([...loadedImages]);

      // Lazy load the rest
      for (let i = PRELOAD_FRAMES + 1; i <= TOTAL_FRAMES; i++) {
        await loadImage(i);
        // Occasionally update the state so later frames become available
        if (i % 20 === 0 || i === TOTAL_FRAMES) {
          setImages([...loadedImages]);
        }
      }
    };

    preloadInitial();
  }, []);

  // Handle Canvas Drawing and Resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      const frameIndex = Math.round(currentFrame.get());
      const img = images[frameIndex];

      if (img) {
        // Handle High DPI displays
        const dpr = window.devicePixelRatio || 1;
        // The display size
        const displayWidth = window.innerWidth;
        const displayHeight = window.innerHeight;

        // Set actual size in memory (scaled to account for extra pixel density).
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;

        // Normalize coordinate system to use css pixels.
        ctx.scale(dpr, dpr);

        // Calculate "object-fit: cover" math
        const imgRatio = img.width / img.height;
        const canvasRatio = displayWidth / displayHeight;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
          // Canvas is wider than image
          drawWidth = displayWidth;
          drawHeight = displayWidth / imgRatio;
        } else {
          // Canvas is taller than image
          drawWidth = displayHeight * imgRatio;
          drawHeight = displayHeight;
        }

        // Apply 30% zoom to crop edges and hide the AI logo
        const zoomFactor = 1.3;
        drawWidth *= zoomFactor;
        drawHeight *= zoomFactor;

        offsetX = (displayWidth - drawWidth) / 2;
        offsetY = (displayHeight - drawHeight) / 2;

        ctx.clearRect(0, 0, displayWidth, displayHeight);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    // Render initially and on resize
    render();

    const handleResize = () => {
      render();
    };

    window.addEventListener("resize", handleResize);

    // Subscribe to Framer Motion currentFrame updates
    const unsubscribe = currentFrame.on("change", () => {
      render();
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      unsubscribe();
    };
  }, [images, currentFrame]);

  return (
    <div ref={containerRef} className="relative w-full bg-black" style={{ height: "200vh" }}>
      {/* Sticky Background - locks to screen for the duration of the scroll */}
      <div className="sticky top-0 left-0 w-full h-[100dvh] overflow-hidden bg-black">
        {/* Canvas for frames */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block sepia-[.20] contrast-125 saturate-50 brightness-90"
          style={{ width: "100%", height: "100%" }}
        />

        {/* UI Overlay for Text Readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Scrolling Text Layer - moves up normally with the 200vh container */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
        <div className="h-[100dvh] flex flex-col items-start justify-end pb-24 px-8 md:px-16 lg:px-24 text-left w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter uppercase mb-4 pointer-events-auto"
          >
            Redefine Your <br className="hidden md:block" /> <span className="text-[#39FF14] drop-shadow-[0_0_15px_rgba(57,255,20,0.8)]">Limits</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-zinc-300 max-w-xl mb-8 leading-relaxed font-medium pointer-events-auto"
          >
            Turn your commitment into results. Experience premier coaching and top-tier facilities designed exclusively for progression.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-start pointer-events-auto"
          >
            <button className="px-8 py-4 bg-[#39FF14] text-black font-bold uppercase rounded-md tracking-wide transition-all hover:shadow-[0_0_20px_rgba(57,255,20,0.6)] hover:scale-105 active:scale-95 pointer-events-auto">
              Book Free Trial
            </button>
            <button className="px-8 py-4 bg-transparent text-white border-2 border-white font-bold uppercase rounded-md tracking-wide transition-all hover:border-[#39FF14] hover:text-[#39FF14] hover:scale-105 active:scale-95 pointer-events-auto">
              WhatsApp Trainer
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
