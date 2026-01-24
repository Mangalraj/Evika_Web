import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Home = () => {
  // --- Visionary Manifesto State Logic ---
  const [step, setStep] = useState(0);

  const phrases = [
    "Immerse. Innovate. Inspire",
    "Heal, Learn, and Explore Beyond Boundaries",
    "Redefine the Possible",
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (step < phrases.length) {
      const phraseDuration = 2000;
      timer = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, phraseDuration);
    } 

    return () => clearTimeout(timer);
  }, [step]);

  const scrollToContent = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-secondary via-secondary via-70% to-background">
        
        {/* 1. Full Screen Particle Background */}
        <div className="absolute inset-0 z-0">
            <ParticleBackground />
            {/* Subtle Gradient Overlay for depth */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)]" />
        </div>

        {/* 2. The Text Sequence */}
        <div className="container relative z-10 px-4 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            
            {/* PHASE 1: The Phrases */}
            {step < phrases.length && (
              <motion.h2
                key={phrases[step]}
                initial={{ opacity: 0, filter: "blur(15px)", y: 30 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(20px)", y: -30 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-4xl md:text-7xl font-light tracking-[0.15em] text-slate-700 drop-shadow-sm text-center"
              >
                {phrases[step]}
              </motion.h2>
            )}

            {/* PHASE 2: The Final Reveal */}
            {step === phrases.length && (
              <motion.div
                key="final-reveal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, filter: "blur(10px)" }} 
                transition={{ duration: 1.5 }}
                className="flex flex-col items-center text-center"
              >
                <motion.h1
                  initial={{ scale: 0.95, filter: "blur(8px)" }}
                  animate={{ scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-indigo-800 mb-6 p-4"
                >
                  EVIKA INNOVATIONS 
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.0 }}
                  className="text-lg md:text-2xl font-semibold tracking-[0.4em] text-purple-600 uppercase mb-12"
                >
                  Reality Revamped
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(147, 51, 234, 0.1)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContent}
                  className="px-10 py-4 border border-purple-300 rounded-full text-sm md:text-base font-bold tracking-widest text-purple-900 hover:border-purple-500 transition-all flex items-center gap-2 group cursor-pointer bg-white/50 backdrop-blur-sm shadow-lg"
                >
                  EXPLORE
                  <ChevronRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* --- About Section (Unchanged) --- */}
      <section id="about-section" className="bg-secondary py-20 px-6 relative overflow-hidden">
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
              <Link to="/about">
                <Button variant="outline" size="lg">
                  More About us
                </Button>
              </Link>
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
                  src="/aboutusfinalimage.png"
                  alt="Team collaboration"
                  className="w-full rounded-3xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Contact/Video Section (UPDATED) --- */}
      <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* LEFT SIDE: Content */}
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-primary mb-8">
                Step into the Future.
              </h2>
              <p className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Let's discuss how our XR and AI solutions can unlock new possibilities and create a competitive advantage for your organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
                <a href="mailto:support@evikainnovations.com" className="w-full sm:w-auto">
                  <Button size="xl" className="w-full px-12 h-14 text-lg shadow-xl bg-primary hover:bg-primary/90 text-white font-semibold rounded-full">
                    Book a Demo
                  </Button>
                </a>
                <Link to="/products" className="w-full sm:w-auto">
                  <Button variant="outline" size="xl" className="w-full px-12 h-14 text-lg bg-transparent border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/10">
                    Explore Solutions
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* RIGHT SIDE: Video Player */}
            <motion.div 
              className="flex-1 w-full max-w-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                <video
                  src="/logo_aniamtion.mp4" 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                {/* Optional overlay for better contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// --- Particle Background (Unchanged) ---
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const handleResize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    const particlesArray: Particle[] = [];
    const numberOfParticles = 100; 

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        this.size = Math.random() * 6 + 4; 
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (canvas) {
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
      }
      draw() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(147, 51, 234, 0.4)"; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) { 
            ctx.beginPath();
            const opacity = Math.max(0, 1 - distance / 150);
            ctx.strokeStyle = `rgba(88, 28, 135, ${opacity * 0.5})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="block w-full h-full opacity-60" 
    />
  );
};

export default Home;
