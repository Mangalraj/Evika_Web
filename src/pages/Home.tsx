import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";

const Home = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const projects = [
    {
      title: "XR Rehabilitation for Locomotory Disabilities",
      description: "Experience our XR Rehabilitation for Locomotory Disabilities with High Retention",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=800&q=80",
      alt: "VR Rehabilitation"
    },
    {
      title: "Interactive Medical Simulations",
      description: "Advanced medical training simulations using extended reality and artificial intelligence",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      alt: "Medical Simulations"
    },
    {
      title: "Digital Twin Technology",
      description: "Revolutionary digital twin solutions that create virtual replicas of physical systems",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      alt: "Digital Twin"
    },
    {
      title: "Enterprise Training Modules",
      description: "Immersive XR training solutions designed for enterprise organizations",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      alt: "Enterprise Training"
    },
    {
      title: "Educational XR Platform",
      description: "Transform education with our immersive XR learning platform",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      alt: "Educational Platform"
    }
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Carousel */}
      <section className="bg-gradient-to-b from-secondary to-background py-20 px-6">
        <div className="container mx-auto">
          <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            opts={{
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                        {project.title}
                      </h1>
                      <p className="text-lg text-foreground mb-8">
                        {project.description}
                      </p>
                      <Button variant="outline" size="lg">
                        Know More
                      </Button>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative"
                    >
                      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  current === index ? "w-8 bg-primary" : "w-3 bg-primary/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-secondary py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary opacity-20 transform skew-x-12 translate-x-1/4"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                About us
              </h2>
              <p className="text-foreground mb-6 leading-relaxed">
                Evika Innovations is pioneering digital transformation by integrating extended reality (XR) and artificial intelligence (AI) across healthcare, education, and enterprise sectors. With a mission to unlock human potential through immersive, data-driven solutions, we create impactful innovations such as interactive medical simulations, digital twins, and enterprise training modules. Guided by integrity, collaboration, and continuous learning, our team of experts delivers tailored XR solutions that accelerate recovery, enhance learning outcomes, and elevate performance—driving responsible, ethical, and sustainable transformation.
              </p>
              <Button variant="outline" size="lg">
                More About us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="w-full rounded-3xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === FINAL CALL TO ACTION (CTA) SECTION START === */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-secondary p-8 sm:p-12 rounded-3xl border-2 border-primary/30">
            {/* Left Column: The Pitch */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Step into the Future.
              </h2>
              <p className="text-lg text-foreground mb-8">
                Let's discuss how our XR and AI solutions can unlock new possibilities and create a competitive advantage for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto">
                  Book a Demo
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Solutions
                </Button>
              </div>
            </motion.div>

            {/* Right Column: Interactive Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-64 md:h-full w-full"
            >
              {/* This div is the container for the animation */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl">
                {/* Glowing Orb 1 */}
                <div 
                  className="absolute w-48 h-48 bg-primary/20 rounded-full filter blur-2xl"
                  style={{ animation: 'move-orb-1 15s infinite ease-in-out' }}
                />
                {/* Glowing Orb 2 */}
                <div 
                  className="absolute w-40 h-40 bg-purple-500/20 rounded-full filter blur-2xl"
                  style={{ animation: 'move-orb-2 18s infinite ease-in-out -4s' }}
                />
                {/* Glowing Orb 3 */}
                <div 
                  className="absolute w-32 h-32 bg-teal-500/20 rounded-full filter blur-2xl"
                  style={{ animation: 'move-orb-3 12s infinite ease-in-out -2s' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
