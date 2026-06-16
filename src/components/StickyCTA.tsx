"use client";
import { useState, useEffect } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/data/mockData";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down 500px (past the hero)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 p-4 z-50 md:hidden animate-in slide-in-from-bottom-full duration-300">
      <div className="flex gap-3 max-w-md mx-auto">
        <a 
          href="#pricing"
          className="flex-1 bg-[#39FF14] text-black font-bold uppercase rounded-md py-3 px-2 flex items-center justify-center text-sm tracking-wide"
        >
          Join Now <ArrowRight size={16} className="ml-1" />
        </a>
        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-transparent border-2 border-white text-white font-bold uppercase rounded-md py-3 px-2 flex items-center justify-center text-sm tracking-wide hover:border-[#39FF14] hover:text-[#39FF14] transition-colors"
        >
          <MessageCircle size={16} className="mr-2" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
