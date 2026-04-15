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
      <main>
        {/* Page Header - Updated to match Products page style */}
        <section className="py-20 px-6 text-center bg-secondary">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold text-primary"
          >
            Reality as a Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            From hardware maintenance to complex spatial computing solutions, we 
            provide the full spectrum of XR services for the modern enterprise.
          </motion.p>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6">
          <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl overflow-hidden flex flex-col group shadow-md hover:shadow-xl transition-shadow border border-primary/5"
              >
                <div className="overflow-hidden bg-black h-64">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="bg-primary rounded-[2rem] p-12 text-center text-primary-foreground relative overflow-hidden shadow-2xl">
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
      </main>
      <Footer />
    </div>
  );
};

export default Services;
