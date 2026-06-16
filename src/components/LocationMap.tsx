"use client";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function LocationMap() {
  return (
    <section className="py-24 bg-[#FAFAFA] text-slate-900 relative z-20" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Visit Us</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#112A22] mb-6">
              Your new fitness home awaits.
            </h2>
            <p className="text-slate-500 text-lg mb-10 max-w-md">
              Drop by our state-of-the-art facility to see the equipment, meet the team, and feel the energy firsthand.
            </p>

            {/* Premium Location Card */}
            <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 mb-10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow duration-300">
              <div className="p-3 bg-emerald-50 rounded-xl shrink-0">
                <MapPin className="text-emerald-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-xl mb-2">FitStudio HQ</h3>
                <p className="text-slate-500 leading-relaxed">
                  123 Iron Street, Fitness District<br />
                  Metropolis, NY 10001
                </p>
              </div>
            </div>

            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-max px-8 py-4 bg-[#112A22] text-white font-medium rounded-full hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Get Directions
              <Navigation className="w-4 h-4" />
            </a>
          </motion.div>
          
          {/* Map Container */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 border border-slate-200 bg-slate-100"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.987844!3d40.758895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDAlNDUnMzIuMCJOIDczwrA1OScxNi4yIlc!5e0!3m2!1sen!2sus!4v1621532890000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
