"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export function TextAnimate({
  children,
  className,
  highlight = [],
  animation = "slideUp",
  by = "word",
}: {
  children: string;
  className?: string;
  highlight?: string[];
  animation?: string;
  by?: string;
}) {
  const words = children.split(" ");
  
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={cn("flex flex-wrap items-center justify-center gap-x-[0.3em]", className)}
    >
      {words.map((word, i) => {
        // Strip punctuation for matching if necessary, or just exact match
        const isHighlighted = highlight.some(h => word.includes(h));
        
        return (
          <motion.span 
            key={i} 
            variants={item} 
            className={cn("inline-block", isHighlighted && "text-[#39FF14]")}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
