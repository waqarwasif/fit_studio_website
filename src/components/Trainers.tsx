"use client";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate";
import { trainers } from "@/data/mockData";

export default function Trainers() {
  return (
    <section className="py-24 bg-[#FAFAFA] text-slate-900 relative z-20" id="trainers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Expert Team</div>
          <TextAnimate animation="slideUp" by="word" className="text-4xl md:text-5xl font-semibold tracking-tight text-[#112A22]">
            Elite Coaching
          </TextAnimate>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Learn from the absolute best in the industry.
          </p>
        </motion.div>

        {/* group/bento for the sibling blur effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 group/bento">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden group/card border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500
              group-hover/bento:blur-md hover:!blur-none group-hover/bento:opacity-50 hover:!opacity-100"
            >
              <div className="h-72 w-full overflow-hidden relative bg-slate-100">
                <img 
                  src={trainer.photoUrl} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{trainer.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Specializing in {trainer.specialization.toLowerCase()} with over {trainer.experience.toLowerCase()} of helping clients achieve peak performance.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
