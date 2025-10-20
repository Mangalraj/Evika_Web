// src/data/products.ts

// Update the interface to reflect the new feature structure
export interface Product {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  alt: string;
  // Change features to an array of objects
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
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=800&q=80",
    alt: "A person using a VR headset for physical therapy",
    features: [
      // Update each feature to be an object with name and icon
      { name: "Personalized Therapy Plans", icon: "ClipboardCheck" }, // Example Lucide icon name
      { name: "Gamified Exercises for High Retention", icon: "Gamepad" },
      { name: "Real-time Performance Analytics", icon: "BarChart" },
      { name: "Safe, Controlled Virtual Environments", icon: "ShieldCheck" },
    ],
  },
  {
    slug: "interactive-medical-simulations",
    title: "Interactive Medical Simulations",
    description:
      "Advanced medical training simulations using extended reality and artificial intelligence.",
    longDescription:
      "We provide hyper-realistic medical training simulations that allow healthcare professionals to practice complex procedures in a risk-free environment, enhancing surgical skills and decision-making.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    alt: "A doctor viewing a digital medical interface",
    features: [
      { name: "Realistic Anatomical Models", icon: "Brain" },
      { name: "Haptic Feedback for Tactile Learning", icon: "Hand" },
      { name: "Surgical Skill Development Modules", icon: "Stethoscope" },
      { name: "Team-based Training Scenarios", icon: "Users" },
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
];
