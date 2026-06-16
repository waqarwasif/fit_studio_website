"use client";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate";
import { transformations, WHATSAPP_URL } from "@/data/mockData";

export default function TransformationGallery() {
  return (
    <section className="py-24 bg-zinc-950 text-white relative z-20" id="transformations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <TextAnimate animation="slideUp" by="word" highlight={["Results"]} className="text-4xl font-extrabold uppercase tracking-tight">
            Real Results
          </TextAnimate>
          <p className="mt-4 text-zinc-400">See the transformations achieved by our members.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {transformations.map((trans, index) => (
            <motion.div
              key={trans.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <img 
                src={trans.imageUrl} 
                alt={`Transformation ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 bg-[#39FF14] text-black font-bold uppercase rounded-md tracking-wide text-sm"
                >
                  Start Yours
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
