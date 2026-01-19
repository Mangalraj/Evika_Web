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
    slug: "xr-rehabilitation",
    title: "XR Rehabilitation for Locomotory Disabilities",
    description:
      "Immersive XR therapy with high retention for patients with locomotory disabilities.",
    longDescription:
      "Our immersive XR platform accelerates recovery for patients with locomotory disabilities through engaging, gamified therapy sessions that provide real-time feedback and track progress with high precision.",
    image:
      "/Vita_Verse_d.png",
    alt: "A person using a VR headset for physical therapy",
    features: [
      { name: "Personalized Therapy Plans", icon: "ClipboardCheck" },
      { name: "Gamified Exercises for High Retention", icon: "Gamepad" },
      { name: "Real-time Performance Analytics", icon: "BarChart" },
      { name: "Safe, Controlled Virtual Environments", icon: "ShieldCheck" },
    ],
  },
  // Virtual Tours
  {
    slug: "virtual-expeditions",
    title: "Immersive Virtual Expeditions",
    description:
      "Explore the world from anywhere with our breathtakingly realistic virtual tours and trips.",
    longDescription:
      "Step into breathtakingly realistic virtual environments. Our XR platform allows users to explore famous landmarks, visit potential properties, or tour cultural heritage sites from anywhere in the world, offering an unparalleled sense of presence and discovery.",
    image:
      "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?auto=format&fit=crop&w=800&q=80",
    alt: "A person looking at a world map, planning a virtual trip",
    features: [
      { name: "High-Fidelity 360° Environments", icon: "Camera" },
      { name: "Interactive Guided Tours", icon: "Map" },
      { name: "Real Estate & Hospitality Showcases", icon: "Home" },
      { name: "Cultural Heritage Preservation", icon: "Landmark" },
    ],
  },
  {
    slug: "digital-twin-technology",
    title: "Digital Twin Technology",
    description:
      "Revolutionary digital twin solutions that create virtual replicas of physical systems.",
    longDescription:
      "Our digital twin solutions create dynamic, virtual replicas of physical assets and systems. This enables predictive maintenance, operational optimization, and scenario testing for complex industrial processes.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    alt: "Abstract digital representation of global connections",
    features: [
      { name: "Real-time Data Synchronization", icon: "RefreshCw" },
      { name: "Predictive Analytics & Maintenance", icon: "Gauge" },
      { name: "Process & Workflow Optimization", icon: "Workflow" },
      { name: "Scalable for Complex Systems", icon: "Cloud" },
    ],
  },
  {
    slug: "enterprise-training-modules",
    title: "Enterprise Training Modules",
    description:
      "Immersive XR training solutions designed for enterprise organizations.",
    longDescription:
      "Transform your corporate training with our immersive XR solutions. We create modules for safety training, complex machinery operation, and soft skills development, improving employee performance and retention.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    alt: "A team collaborating around a table with charts",
    features: [
      { name: "Hazard Identification Training", icon: "AlertTriangle" },
      { name: "Equipment Operation Simulation", icon: "Settings" },
      { name: "Leadership & Communication Skills", icon: "Award" },
      { name: "Measurable Performance Metrics", icon: "Activity" },
    ],
  },
  {
    slug: "educational-xr-platform",
    title: "Educational XR Platform",
    description: "Transform education with our immersive XR learning platform.",
    longDescription:
      "Our platform revolutionizes learning by transforming abstract concepts into tangible, interactive experiences. From virtual science labs to historical explorations, we make education more engaging and effective.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    alt: "A classroom with a teacher pointing to a chalkboard",
    features: [
      { name: "Interactive 3D Models & Environments", icon: "Globe" },
      { name: "Virtual Science Lab Experiments", icon: "FlaskConical" },
      { name: "Collaborative Learning Spaces", icon: "Users" },
      { name: "Curriculum-aligned Content", icon: "BookOpen" },
    ],
  },
  //  PRODUCT: Game Development
  {
    slug: "game-development",
    title: "Game Development",
    description:
      "Engaging and immersive game development services using the latest XR and AI technologies.",
    longDescription:
      "We craft unforgettable gaming experiences by blending creative storytelling with cutting-edge XR and AI technology. From concept to launch, our team builds immersive worlds and intelligent gameplay that captivate players.",
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=80",
    alt: "A game developer working on a 3D model on a computer",
    features: [
      { name: "Cross-Platform XR Development", icon: "Laptop" },
      { name: "AI-Powered NPCs & Mechanics", icon: "BrainCircuit" },
      { name: "Stunning Visuals & Art Direction", icon: "Paintbrush" },
      { name: "Multiplayer & Social Integration", icon: "Users" },
    ],
  },
];
