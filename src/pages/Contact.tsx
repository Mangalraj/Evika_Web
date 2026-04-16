import { useState } from 'react'; 
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [result, setResult] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending....");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setResult("Message sent successfully! ");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      console.error("Error:", data.message);
      setResult(data.message || "Something went wrong! ");
    }
  };

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
                <h2 className="text-2xl font-bold text-primary mb-4">Registered Address</h2>
                <p className="text-foreground mb-6">3/46 B Gandhinagar, Kappalur, Madurai - 625008</p>
                
                <h2 className="text-2xl font-bold text-primary mb-4 mt-6">Phone Number</h2>
                <p className="text-foreground">+91 6363252306</p>
                <h2 className="text-2xl font-bold text-primary mb-4 mt-6">Email</h2>
                <p className="text-foreground">support@evikainnovations.com</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-secondary rounded-3xl border-2 border-primary/30 overflow-hidden aspect-square"
              >
                {/* UPDATED: Uses a valid Google Maps Embed URL for Kappalur, Madurai */}
                <iframe src="https://www.google.com/maps/embed?pb=!4v1776313262908!6m8!1m7!1svPI-vFWWbQpIMB--yftukQ!2m2!1d9.84789948267985!2d78.01484127360955!3f256.13!4f-0.5499999999999972!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                  height="100%"
                  style={{ border:0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-secondary p-8 rounded-3xl border-2 border-primary/30"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-primary font-semibold mb-2 block">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter here"
                    className="h-12 bg-background border-primary/30"
                    required
                  />
                </div>
                <div>
                  <label className="text-primary font-semibold mb-2 block">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter here"
                    className="h-12 bg-background border-primary/30"
                    required
                  />
                </div>
                <div>
                  <label className="text-primary font-semibold mb-2 block">Phone</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter here"
                    className="h-12 bg-background border-primary/30"
                  />
                </div>
                <div>
                  <label className="text-primary font-semibold mb-2 block">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter here"
                    className="min-h-[160px] bg-background border-primary/30"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Contact us
                </Button>
              </form>
              
              {result && <p className="text-center mt-4 text-primary">{result}</p>}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
