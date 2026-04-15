import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Laptop, 
  Building2, 
  GraduationCap, 
  Activity, 
  Cpu, 
  Globe, 
  Wrench, 
  LayoutDashboard, 
  Layers 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Holographic Solutions",
      description: "State-of-the-art holographic projects for Holofans and 3D displays. We transform static content into floating, 360-degree visual experiences for retail and events.",
      icon: <Cpu className="w-10 h-10 text-primary" />,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "XR Hardware Support & AMC",
      description: "Dedicated maintenance for Meta Quest, HTC Vive, and HoloLens devices. We provide hardware troubleshooting, hygiene solutions, and Annual Maintenance Contracts (AMC).",
      icon: <Wrench className="w-10 h-10 text-primary" />,
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "3D Architectural Visualization",
      description: "High-fidelity 3D modeling and elevation models for apartments. We create immersive walkthroughs allowing clients to 'step inside' buildings before construction.",
      icon: <Building2 className="w-10 h-10 text-primary" />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "VR Lab Setup & Infrastructure",
      description: "End-to-end setup of XR Labs for educational institutions and corporate training centers, including specialized PCs, sensor calibration, and networking.",
      icon: <LayoutDashboard className="w-10 h-10 text-primary" />,
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Vitaverse VR Rehab Services",
      description: "Our flagship clinical service using XR for physical and cognitive rehabilitation. We provide data-driven recovery pathways for patients in healthcare facilities.",
      icon: <Activity className="w-10 h-10 text-primary" />,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Industrial Simulators",
      description: "Custom VR training solutions for high-risk industrial environments. Our simulators mitigate hazards and reduce training costs through digital twin technology.",
      icon: <GraduationCap className="w-10 h-10 text-primary" />,
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Digital Twin Integration",
      description: "Creating real-time virtual representations of physical assets to monitor performance and predict maintenance needs accurately using XR overlays.",
      icon: <Globe className="w-10 h-10 text-primary" />,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mixed Reality Consultancy",
      description: "Strategic advice on implementing XR into your existing workflow. We help you choose the right tech stack (AR vs VR) and calculate ROI for your startup.",
      icon: <Layers className="w-10 h-10 text-primary" />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-indigo-800 mb-6"
          >
            Reality as a Service
          </motion.h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            From hardware maintenance to complex spatial computing solutions, we provide the full spectrum of XR services for the modern enterprise.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-primary/5"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-foreground/80 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
            <div className="bg-primary rounded-[3rem] p-12 text-center text-primary-foreground relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <img src="https://www.transparenttextures.com/patterns/cubes.png" alt="pattern" />
                </div>
                <h2 className="text-4xl font-bold mb-6 relative z-10">Ready to build the Future?</h2>
                <p className="text-xl mb-10 opacity-90 relative z-10">Our engineering team is ready to deploy custom XR hardware and software solutions.</p>
                <a href="/contact" className="relative z-10 inline-block">
                    <button className="bg-white text-primary px-12 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg">
                    Contact Our Tech Team
                    </button>
                </a>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
