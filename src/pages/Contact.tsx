import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-primary mb-12"
          >
            Contact us
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-secondary p-8 rounded-3xl border-2 border-primary/30"
              >
                <h2 className="text-2xl font-bold text-primary mb-4">Address</h2>
                <p className="text-foreground">Room no 427,Shivaji Bhavan, GITAM-Bengaluru</p>

                <h2 className="text-2xl font-bold text-primary mb-4 mt-6">Phone Number</h2>
                <p className="text-foreground">+91 9585985444</p>

                <h2 className="text-2xl font-bold text-primary mb-4 mt-6">Email</h2>
                <p className="text-foreground">support@evikainnovations.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-secondary rounded-3xl border-2 border-primary/30 overflow-hidden aspect-square"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8!2d77.6!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Location Map"
                ></iframe>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-secondary p-8 rounded-3xl border-2 border-primary/30 space-y-6"
            >
              <div>
                <label className="text-primary font-semibold mb-2 block">Name</label>
                <Input
                  placeholder="Enter here"
                  className="h-12 bg-background border-primary/30"
                />
              </div>

              <div>
                <label className="text-primary font-semibold mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="Enter here"
                  className="h-12 bg-background border-primary/30"
                />
              </div>

              <div>
                <label className="text-primary font-semibold mb-2 block">Phone</label>
                <Input
                  type="tel"
                  placeholder="Enter here"
                  className="h-12 bg-background border-primary/30"
                />
              </div>

              <div>
                <label className="text-primary font-semibold mb-2 block">Message</label>
                <Textarea
                  placeholder="Enter here"
                  className="min-h-[160px] bg-background border-primary/30"
                />
              </div>

              <Button size="lg" className="w-full">
                Contact us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
