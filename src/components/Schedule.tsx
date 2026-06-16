"use client";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate";
import { schedule } from "@/data/mockData";

export default function Schedule() {
  return (
    <section className="py-24 bg-[#FAFAFA] text-slate-900 relative z-20" id="schedule">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Weekly Plan</div>
          <TextAnimate animation="slideUp" by="word" className="text-4xl md:text-5xl font-semibold tracking-tight text-[#112A22]">
            Class Schedule
          </TextAnimate>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Plan your week and commit to the grind.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {/* Header row - Hidden on mobile, shown on desktop */}
          <div className="hidden md:flex flex-row items-center px-8 text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            <div className="w-1/3">Day</div>
            <div className="w-1/3">Morning Session</div>
            <div className="w-1/3">Evening Session</div>
          </div>

          {/* Schedule Data Rows */}
          {schedule.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 md:px-8 md:py-6 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row md:items-center gap-6 md:gap-0 group"
            >
              {/* Day Column */}
              <div className="w-full md:w-1/3">
                <h3 className="font-bold text-xl md:text-lg text-slate-800 group-hover:text-emerald-600 transition-colors">{item.day}</h3>
              </div>
              
              {/* Morning Session */}
              <div className="w-full md:w-1/3 flex flex-col md:block">
                <span className="md:hidden text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Morning Session</span>
                <span className="text-slate-600 font-medium bg-slate-50 px-3 py-1.5 md:px-0 md:bg-transparent rounded-lg inline-block w-fit">{item.morningClass}</span>
              </div>
              
              {/* Evening Session */}
              <div className="w-full md:w-1/3 flex flex-col md:block">
                <span className="md:hidden text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Evening Session</span>
                <span className="text-slate-600 font-medium bg-slate-50 px-3 py-1.5 md:px-0 md:bg-transparent rounded-lg inline-block w-fit">
                  {item.eveningClass === "Closed" ? (
                    <span className="text-rose-500 font-bold">{item.eveningClass}</span>
                  ) : (
                    item.eveningClass
                  )}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
