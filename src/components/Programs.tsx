"use client";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate";
import { programs, Program } from "@/data/mockData";
import { Activity, Dumbbell, Flame, User } from "lucide-react";

const icons = {
  Activity,
  Dumbbell,
  Flame,
  User,
};

// Define the exact pastel gradients from the image for each card
const cardGradients = [
  "from-[#FFF0B3] via-[#FFE699] to-[#FFF9E5]", // Yellow/Gold
  "from-[#FFD9CC] via-[#FFC2B3] to-[#FFEBE5]", // Peach/Pink
  "from-[#E6CCFF] via-[#D9B3FF] to-[#F2E5FF]", // Purple/Lavender
  "from-[#CCE5FF] via-[#B3D9FF] to-[#E5F2FF]", // Light Blue
];

function ProgramCard({ program, index }: { program: Program; index: number }) {
  const IconComponent = icons[program.icon as keyof typeof icons] || Activity;
  const isLarge = index === 0 || index === 3;
  const gradient = cardGradients[index % cardGradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`flex flex-col rounded-[2rem] bg-white overflow-hidden relative group/card hover:-translate-y-1 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] 
      group-hover/bento:blur-md hover:!blur-none group-hover/bento:opacity-50 hover:!opacity-100 ${
        isLarge ? "md:col-span-2" : "md:col-span-1"
      }`}
    >
      {/* Visual Header Area */}
      <div className={`relative flex-1 p-8 flex items-center justify-center min-h-[280px] bg-slate-100 overflow-hidden`}>
        
        {/* Background Image with Premium Duotone Blend */}
        {program.imageUrl && (
          <img 
            src={program.imageUrl} 
            alt={program.title} 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover/card:scale-110 group-hover/card:opacity-100 transition-all duration-700 ease-out"
          />
        )}

        {/* Pastel Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} ${program.imageUrl ? 'opacity-70 mix-blend-multiply' : 'opacity-100'} group-hover/card:opacity-50 transition-opacity duration-500 pointer-events-none`} />

        {/* Floating UI Element (mimicking the white boxes in the image) */}
        <div className="relative z-10 px-6 py-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-3 group-hover/card:scale-105 transition-all duration-500">
          <div className="p-2 bg-gradient-to-br from-orange-100 to-rose-100 rounded-full">
            <IconComponent className="w-5 h-5 text-orange-500" />
          </div>
          <span className="font-semibold text-sm text-slate-700">{program.title}</span>
        </div>
        
        {/* Subtle grid pattern background matching the image aesthetic */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none mix-blend-overlay opacity-50" />
      </div>

      {/* Text Content Area */}
      <div className="px-8 py-6 bg-white flex flex-col justify-between">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{program.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">{program.description}</p>
      </div>
    </motion.div>
  );
}

export default function Programs() {
  return (
    <section className="py-24 bg-[#FAFAFA] text-slate-900 relative z-20" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Core Features</div>
          <TextAnimate animation="slideUp" by="word" className="text-4xl md:text-5xl font-semibold tracking-tight text-[#112A22]">
            Built for Speed & Quality
          </TextAnimate>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Everything you need to go from idea to image
          </p>
        </motion.div>

        {/* group/bento allows child cards to react when any card in the grid is hovered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 group/bento">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
