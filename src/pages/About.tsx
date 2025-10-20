import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const commitments = [
    {
      title: "Empowering with Technology",
      description: "We believe XR and AI should empower everyone by being transformative, accessible, ethical, and inclusive.",
    },
    {
      title: "Focus Areas",
      description: "Our solutions are designed for healthcare, education, and enterprise to create real-world impact.",
    },
    {
      title: "Ethical Standards",
      description: "We uphold privacy, data integrity, and responsible development in every project.",
    },
    {
      title: "Transparent Leadership",
      description: "Our team champions accountability, cultural respect, and human-centered design.",
    },
    {
      title: "Vision for the Future",
      description: "We aim to break barriers in digital engagement, setting benchmarks for smarter healthcare, richer learning, and effective enterprise training.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                Innovating with XR & AI
              </h1>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Evika Innovations drives digital transformation by integrating extended reality (XR) and artificial intelligence (AI) across healthcare, education, and enterprise.
                </p>
                <p>
                  Our mission is to unlock human potential through immersive, data-driven solutions. We envision a world where XR and AI accelerate recovery, enhance learning, and elevate performance.
                </p>
                <p>
                  Backed by experts and researchers, we deliver tailored solutions—from medical simulations to enterprise training—designed to solve real challenges and spark innovation.
                </p>
                <p>
                  With integrity, collaboration, and continuous learning at our core, we are committed to responsible, ethical, and sustainable digital transformation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
                alt="XR & AI Innovation"
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary text-center mb-12"
          >
            Meet Our Leadership Team
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-primary to-primary/80 rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="aspect-[3/4] bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                  alt="Dr. Mangalraj"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center text-primary-foreground">
                <h3 className="text-xl font-bold mb-1">Dr. Mangalraj</h3>
                <p className="text-sm">Chief Executive Officer</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-primary to-primary/80 rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="aspect-[3/4] bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80"
                  alt="Mr Antony Arul Selvaraj"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center text-primary-foreground">
                <h3 className="text-xl font-bold mb-1">Mr Antony Arul Selvaraj</h3>
                <p className="text-sm">Chief Technology Officer</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80"
                alt="VR Headset"
                className="w-full rounded-3xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-8">
                Our Commitment to Ethical, Inclusive Innovation
              </h2>
              <ul className="space-y-4">
                {commitments.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-bold text-foreground mb-1">• {item.title}</h3>
                    <p className="text-muted-foreground pl-4">{item.description}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Partner With Evika Innovations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-foreground max-w-4xl mx-auto mb-12"
          >
            Ready to accelerate digital transformation in healthcare, education, or enterprise? Connect with our team to explore how our XR and AI-driven solutions can elevate your organization's impact, learning, and engagement.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square bg-muted rounded-2xl flex items-center justify-center"
              >
                <span className="text-muted-foreground">Logo {i}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
