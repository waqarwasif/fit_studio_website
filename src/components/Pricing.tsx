"use client";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate";
import { pricingPlans, WHATSAPP_URL } from "@/data/mockData";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-24 bg-[#050505] text-white relative z-20 font-sans" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section (Left Aligned as per screenshot) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 max-w-xl"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#333] text-zinc-400 text-xs font-medium mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
            Pricing
          </div>
          
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Clear pricing plans<br />that scale with you
          </h2>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 items-center">
          {pricingPlans.map((plan, index) => {
            const isMiddle = index === 1;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 md:p-10 flex flex-col relative transition-all duration-500 ease-out group ${
                  isMiddle
                    ? "bg-[#1E1E1E] border border-[#333] rounded-2xl z-10 md:scale-[1.03] shadow-2xl py-12"
                    : "bg-[#111111] border border-[#222] rounded-2xl md:rounded-none z-0 hover:bg-[#151515]"
                } ${index === 0 ? "md:rounded-l-2xl md:border-r-0" : ""} ${index === 2 ? "md:rounded-r-2xl md:border-l-0" : ""}`}
              >
                
                {/* Plan Title */}
                <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-8">
                  {plan.name}
                </h3>
                
                {/* Price */}
                <div className="mb-4 flex items-baseline">
                  <span className="text-5xl font-medium tracking-tight text-white">{plan.price}</span>
                  <span className="text-zinc-500 ml-1 text-sm font-medium">/month</span>
                </div>
                
                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 min-h-[40px]">
                  {plan.description}
                </p>
                
                {/* CTA Button */}
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`block w-max px-6 py-2.5 text-center text-sm font-medium rounded-full transition-all duration-300 ${
                    isMiddle 
                      ? "bg-white text-black hover:bg-zinc-200 hover:scale-105 active:scale-95" 
                      : "bg-[#2A2A2A] text-zinc-200 hover:bg-[#333] hover:text-white hover:scale-105 active:scale-95"
                  }`}
                >
                  {isMiddle ? "Get Started" : plan.name === "ENTERPRISE" ? "Contact us" : "Get Started"}
                </a>

                {/* Features List */}
                <ul className="mt-10 flex flex-col">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center py-4 border-b border-zinc-800/50 last:border-0 group-hover:border-zinc-700/50 transition-colors">
                      <div className="w-5 h-5 rounded-full bg-[#2A2A2A] flex items-center justify-center mr-4 shrink-0">
                        <Check size={12} className="text-zinc-300" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-zinc-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
