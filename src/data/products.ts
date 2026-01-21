// src/data/products.ts

export interface Product {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  alt: string;
  features: { name: string; icon: string }[];
}

export const products: Product[] = [
  {
    slug: "vita-verse",
    title: "Vita Verse",
    description:
      "Play Your Way To Heal. A gamified XR rehabilitation ecosystem designed to make physical therapy engaging, measurable, and effective for locomotory disabilities.",
    longDescription:
      "Vita Verse transforms physical therapy into an engaging, gamified experience. Our XR rehabilitation ecosystem is specifically designed for locomotory disabilities, offering personalized exercise plans, real-time feedback, and high-retention gameplay that makes healing fun and measurable.",
    image:
      "/Vita_Verse_d.png",
    alt: "Patient using Vita Verse XR rehabilitation system",
    features: [
      { name: "Personalized Therapy Plans", icon: "ClipboardCheck" },
      { name: "Gamified Exercises for High Retention", icon: "Gamepad" },
      { name: "Real-time Performance Analytics", icon: "BarChart" },
      { name: "Safe, Controlled Virtual Environments", icon: "ShieldCheck" },
    ],
  },
  {
    slug: "immersa",
    title: "Immersa",
    description:
      "Redefining brand presence with Advanced Digital Advertising using Holographic Projection.",
    longDescription:
      "Immersa elevates your brand with Advanced Digital Advertising using cutting-edge Holographic Projection. We create attention-grabbing, 3D marketing experiences that stop customers in their tracks, offering a futuristic way to visualize products and tell your brand story.",
    image:
      "/immersafinalimage.png",
    alt: "Holographic advertising display in a modern setting",
    features: [
      { name: "Holographic 3D Projection", icon: "Monitor" },
      { name: "Interactive Brand Storytelling", icon: "Zap" },
      { name: "High-Impact Visual Marketing", icon: "Megaphone" },
      { name: "Futuristic Product Displays", icon: "Box" },
    ],
  },
  {
    slug: "chronos-vr",
    title: "ChronosVR",
    description:
      "Preserving the past, virtually. Experience high-fidelity Virtual Tours of Heritage and Tourism sites.",
    longDescription:
      "ChronosVR is dedicated to preserving culture and history through high-fidelity Virtual Tours. Our platform allows users to explore heritage sites and tourism destinations from anywhere in the world, offering an immersive, educational journey through time and space.",
    image:
      "/chronosvrfinaleimage.jpg",
    alt: "User exploring a virtual heritage site",
    features: [
      { name: "High-Fidelity 360° Tours", icon: "Camera" },
      { name: "Cultural Heritage Preservation", icon: "Landmark" },
      { name: "Interactive Historical Guides", icon: "Map" },
      { name: "Global Remote Exploration", icon: "Globe" },
    ],
  },
  {
    slug: "synclathe",
    title: "SyncLathe",
    description:
      "Industry 5.0 defined. A Digital Twin technology solution for CNC Lathe training synchronized with real-world physics.",
    longDescription:
      "SyncLathe implies synchronization between the digital model and real-world physics. It is a cutting-edge Digital Twin Technology application designed for Industry support, specifically for CNC Lathe Machines, enabling safe, risk-free training and operational optimization in an Industry 5.0 environment.",
    image:
      "/synclathefinaleimage.jpg",
    alt: "Digital twin of a CNC machine interface",
    features: [
      { name: "Real-time Physics Synchronization", icon: "RefreshCw" },
      { name: "CNC Lathe Machine Simulation", icon: "Settings" },
      { name: "Industry 5.0 Training Standards", icon: "Cpu" },
      { name: "Risk-free Operational Environment", icon: "Shield" },
    ],
  },
];
