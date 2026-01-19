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
            Meet Our Team
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-primary to-primary/80 rounded-3xl overflow-hidden shadow-xl"
            >
              
              <div className="p-6 text-center text-primary-foreground">
                <h3 className="text-xl font-bold mb-1">Dr. Mangalraj</h3>
                <p className="text-sm">Director - Extended Reality Technology</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-primary to-primary/80 rounded-3xl overflow-hidden shadow-xl"
            >
             
              <div className="p-6 text-center text-primary-foreground">
                <h3 className="text-xl font-bold mb-1">Mr Antony Arul Selvaraj</h3>
                <p className="text-sm">Director - Cyberspace</p>
              </div>
            </motion.div>

             <motion.a
  href="https://www.linkedin.com/in/syed-taha-XXXXXX/"
  target="_blank"
  rel="noopener noreferrer"
  title="View LinkedIn Profile"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="group relative bg-gradient-to-b from-primary to-primary/80 rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:scale-[1.03] transition-transform"
>
  {/* Tooltip */}
  <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-xs px-3 py-1 rounded-md">
    View LinkedIn Profile
  </span>

  {/* LinkedIn Icon */}
  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="text-white"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.67-1.27 2.3-2.6 4.7-2.6C22.5 7.6 24 10.2 24 14.3V24h-5v-8.5c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5V24H8z"/>
    </svg>
  </div>

  {/* Content */}
  <div className="p-6 text-center text-primary-foreground">
    <h3 className="text-xl font-bold mb-1">Mr Syed Taha</h3>
    <p className="text-sm">Extended Reality Application Developer</p>
  </div>
</motion.a>

            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-primary to-primary/80 rounded-3xl overflow-hidden shadow-xl"
            >
              
              <div className="p-6 text-center text-primary-foreground">
                <h3 className="text-xl font-bold mb-1">Mr Pruthviraj K P</h3>
                <p className="text-sm">Extended Reality Application Developer and Web Support</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-primary to-primary/80 rounded-3xl overflow-hidden shadow-xl"
            >
              
              <div className="p-6 text-center text-primary-foreground">
                <h3 className="text-xl font-bold mb-1">Mr Sai Krishna B</h3>
                <p className="text-sm">Extended Reality Application Developer and Graphics Support</p>
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
            Our Valued Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-foreground max-w-4xl mx-auto mb-12"
          >
            We are proud to collaborate with leading organizations to drive innovation and impact across industries.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Partner Logo 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="aspect-video bg-background rounded-2xl flex items-center justify-center p-4 shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src="/hts_logo_1.png"
                alt="HTS Logo"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Partner Logo 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="aspect-video bg-background rounded-2xl flex items-center justify-center p-4 shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src="https://static.wixstatic.com/media/5d1736_acdaa4af868d426085e12932722461fe~mv2.png/v1/fill/w_336,h_334,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%20AGSRT%20LOGO%20(13).png"
                alt="Health Tech Alpha Logo"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Partner Logo 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="aspect-video bg-background rounded-2xl flex items-center justify-center p-4 shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src="/logo3.jpg"
                alt="Partner Logo 3"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* "Become a Partner" block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="aspect-video bg-primary rounded-2xl flex flex-col items-center justify-center p-4 text-primary-foreground shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:underline">Become a Partner</h3>
              <p className="text-sm text-center">Join us in shaping the future of XR & AI innovation.</p>
              <a href="/contact" className="mt-4 text-white hover:text-white/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
