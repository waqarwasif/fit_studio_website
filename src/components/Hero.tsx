"use client";

import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force video to load metadata to ensure we have the duration
    video.load();

    let duration = video.duration || 0;
    
    const handleLoadedMetadata = () => {
      duration = video.duration;
    };
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Sync video time with scroll progress
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      if (video && duration > 0) {
        // requestAnimationFrame ensures smooth scrubbing linked to the browser's refresh rate
        requestAnimationFrame(() => {
          video.currentTime = progress * duration;
        });
      }
    });

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      unsubscribe();
    };
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative w-full bg-black" style={{ height: "200vh" }}>
      {/* Sticky Background - locks to screen for the duration of the scroll */}
      <div className="sticky top-0 left-0 w-full h-[100dvh] overflow-hidden bg-black">
        
        {/* Scroll-Scrubbed Video */}
        <video
          ref={videoRef}
          src="/hero-animation.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-[1.3] sepia-[.20] contrast-125 saturate-50 brightness-90 pointer-events-none"
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
