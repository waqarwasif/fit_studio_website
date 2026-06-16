export interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  icon: string;
  imageUrl?: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  photoUrl: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description?: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
  imageUrl?: string;
}

export interface ScheduleItem {
  id: string;
  day: string;
  morningClass: string;
  eveningClass: string;
}

export const GYM_PHONE = "1234567890"; // WhatsApp number
export const WHATSAPP_URL = `https://wa.me/${GYM_PHONE}?text=Hi,%20I%20want%20to%20book%20a%20free%20trial!`;

export const programs: Program[] = [
  {
    id: "weight-loss",
    title: "Weight Loss",
    description: "High-intensity cardio and strength circuits designed to burn fat and build lean muscle.",
    duration: "45 Min / Session",
    icon: "Activity",
    imageUrl: "https://images.unsplash.com/photo-1583500178689-665d1f77e67d?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "muscle-building",
    title: "Muscle Building",
    description: "Hypertrophy-focused training with heavy lifting and progressive overload.",
    duration: "60 Min / Session",
    icon: "Dumbbell",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661596487728-54e115969d8b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "crossfit",
    title: "CrossFit / Functional",
    description: "Dynamic full-body workouts combining weightlifting, gymnastics, and endurance.",
    duration: "50 Min / Session",
    icon: "Flame",
    imageUrl: "https://images.unsplash.com/photo-1599914476774-28c85a052868?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "personal-training",
    title: "Personal Training",
    description: "1-on-1 personalized coaching tailored entirely to your unique fitness goals.",
    duration: "60 Min / Session",
    icon: "User",
    imageUrl: "https://images.unsplash.com/photo-1704223523381-bb976da90793?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const trainers: Trainer[] = [
  {
    id: "trainer-1",
    name: "Alex Vance",
    specialization: "Strength & Conditioning",
    experience: "10+ Years",
    photoUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 5,
  },
  {
    id: "trainer-2",
    name: "David Miller",
    specialization: "CrossFit & Mobility",
    experience: "7 Years",
    photoUrl: "https://plus.unsplash.com/premium_photo-1664478096730-64026d07b5cb?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
  },
  {
    id: "trainer-3",
    name: "Mike Ross",
    specialization: "Bodybuilding",
    experience: "12 Years",
    photoUrl: "https://images.unsplash.com/photo-1655451110178-9fa93817c13b?q=80&w=430&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
];

export const transformations = [
  { id: "trans-1", imageUrl: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: "trans-2", imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: "trans-3", imageUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: "trans-4", imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "STARTER",
    price: "$49",
    description: "Everything you need to launch your fitness journey.",
    features: ["Access to Gym Floor", "Locker Room Access", "1 Free Assessment"],
  },
  {
    id: "standard",
    name: "PRO",
    price: "$79",
    description: "For members serious about their fitness goals.",
    features: ["All Basic Features", "Unlimited Group Classes", "Monthly Body Scan", "Nutrition Guide"],
    isPopular: true,
  },
  {
    id: "premium",
    name: "ENTERPRISE",
    price: "$149",
    description: "For members that need ultimate control and 1-on-1 coaching.",
    features: ["All Standard Features", "4 Personal Training Sessions", "Priority Support", "Diet Plan"],
  },
];

export const schedule: ScheduleItem[] = [
  { id: "mon", day: "Monday", morningClass: "HIIT Blast (7:00 AM)", eveningClass: "Strength Builder (6:00 PM)" },
  { id: "tue", day: "Tuesday", morningClass: "CrossFit WOD (7:00 AM)", eveningClass: "Mobility & Core (6:00 PM)" },
  { id: "wed", day: "Wednesday", morningClass: "Cardio Burn (7:00 AM)", eveningClass: "Heavy Lifts (6:00 PM)" },
  { id: "thu", day: "Thursday", morningClass: "HIIT Blast (7:00 AM)", eveningClass: "Strength Builder (6:00 PM)" },
  { id: "fri", day: "Friday", morningClass: "CrossFit WOD (7:00 AM)", eveningClass: "Open Gym (6:00 PM)" },
  { id: "sat", day: "Saturday", morningClass: "Weekend Warrior (9:00 AM)", eveningClass: "Closed" },
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "John D.",
    quote: "FitStudio completely changed my approach to fitness. The trainers are world-class.",
    rating: 5,
  },
  {
    id: "test-2",
    name: "Emily R.",
    quote: "Lost 20 lbs in 3 months! The functional training classes are intense but so worth it.",
    rating: 5,
  },
  {
    id: "test-3",
    name: "Michael B.",
    quote: "The best facilities in town. Love the dark aesthetic and the community vibe.",
    rating: 4.5,
  },
];
