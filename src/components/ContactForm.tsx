"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { GYM_PHONE } from "@/data/mockData";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", goal: "Weight Loss" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, my name is ${formData.name}. I'm interested in ${formData.goal}. My phone number is ${formData.phone}.`;
    const url = `https://wa.me/${GYM_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-24 bg-zinc-950 text-white relative z-20" id="contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold uppercase tracking-tight">Claim Your <span className="text-[#39FF14]">Free Trial</span></h2>
          <p className="mt-4 text-zinc-400">Fill out the form below and our team will reach out via WhatsApp.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="custom-form-container"
        >
          <div className="custom-form-heading">Claim Trial</div>
          <form onSubmit={handleSubmit} className="custom-form-body">
            <input 
              type="text" 
              id="name" 
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="input"
              placeholder="Full Name"
            />
            <input 
              type="tel" 
              id="phone" 
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="input"
              placeholder="Phone Number"
            />
            <select 
              id="goal" 
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              className="input appearance-none"
            >
              <option>Weight Loss</option>
              <option>Muscle Building</option>
              <option>CrossFit & Functional</option>
              <option>General Fitness</option>
            </select>
            <button 
              type="submit" 
              className="login-button"
            >
              Get Free Trial Pass
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
