"use client";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Jack D.",
    username: "@jack_fit",
    body: "The dark aesthetic and intense vibe are exactly what I needed to push past my limits.",
    img: "https://avatar.vercel.sh/jack",
    rating: 5,
  },
  {
    name: "Jill M.",
    username: "@jilllifts",
    body: "I've never seen a gym like this before. The functional training area is amazing. I love it.",
    img: "https://avatar.vercel.sh/jill",
    rating: 5,
  },
  {
    name: "John R.",
    username: "@john_shreds",
    body: "I'm at a loss for words. The trainers here are on another level. This is amazing.",
    img: "https://avatar.vercel.sh/john",
    rating: 4.5,
  },
  {
    name: "Jane K.",
    username: "@janefitness",
    body: "Best equipment in the city. The community is so supportive and focused on real results.",
    img: "https://avatar.vercel.sh/jane",
    rating: 5,
  },
  {
    name: "Jenny T.",
    username: "@jenny_trains",
    body: "Lost 15lbs in my first month of CrossFit. The coaches make sure your form is perfect.",
    img: "https://avatar.vercel.sh/jenny",
    rating: 5,
  },
  {
    name: "James S.",
    username: "@james_strong",
    body: "If you are serious about fitness, this is the only place to be. Pure dedication.",
    img: "https://avatar.vercel.sh/james",
    rating: 4.5,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  rating,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  rating: number;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6 mx-2",
        "border-zinc-800 bg-zinc-900 hover:border-[#39FF14]/50 transition-colors"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full border border-zinc-700" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold text-[#39FF14]">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-zinc-500">{username}</p>
        </div>
      </div>
      <div className="flex mt-3 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={14} 
            fill={i < Math.floor(rating) ? "#39FF14" : "transparent"} 
            className={i < Math.floor(rating) ? "text-[#39FF14]" : "text-zinc-600"} 
          />
        ))}
      </div>
      <blockquote className="text-sm text-zinc-300 italic leading-relaxed">"{body}"</blockquote>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <section className="py-24 bg-black text-white relative z-20 overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <TextAnimate animation="slideUp" by="word" highlight={["Reviews"]} className="text-4xl font-extrabold uppercase tracking-tight">
            Member Reviews
          </TextAnimate>
          <p className="mt-4 text-zinc-400">Don't just take our word for it.</p>
        </motion.div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4">
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s] mt-4">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        
        {/* Gradient fades for the edges to blend into the black background */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </section>
  );
}
