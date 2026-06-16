import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Trainers from "@/components/Trainers";
import TransformationGallery from "@/components/TransformationGallery";
import Pricing from "@/components/Pricing";
import Schedule from "@/components/Schedule";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/LocationMap";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#39FF14] selection:text-black pb-16 md:pb-0">
      <Hero />
      <Programs />
      <TransformationGallery />
      <Trainers />
      <Pricing />
      <Schedule />
      <Testimonials />
      <LocationMap />
      <ContactForm />
      
      {/* Footer */}
      <footer className="py-8 bg-zinc-950 text-center text-zinc-500 text-sm border-t border-zinc-900 pb-24 md:pb-8 relative z-20">
        <p>&copy; {new Date().getFullYear()} FitStudio. All rights reserved.</p>
      </footer>

      {/* Mobile Sticky CTA */}
      <StickyCTA />
    </main>
  );
}
