// src/pages/ProductDetailPage.tsx

import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

// UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Icons
import {
  ArrowLeft, Check, Play, ClipboardCheck, Gamepad, BarChart,
  ShieldCheck, Brain, Hand, Stethoscope, Users, RefreshCw,
  Gauge, Workflow, Cloud, AlertTriangle, Settings, Award, Activity,
  Globe, FlaskConical, BookOpen, Download, Camera, Map, Home,
  Landmark, Laptop, BrainCircuit, Paintbrush, Loader2, PartyPopper
} from "lucide-react";

// Icon Mapper
const getLucideIcon = (iconName: string) => {
  const icons: { [key: string]: React.ElementType } = {
    ClipboardCheck, Gamepad, BarChart, ShieldCheck, Brain, Hand, Stethoscope, Users,
    RefreshCw, Gauge, Workflow, Cloud, AlertTriangle, Settings, Award, Activity, Globe,
    FlaskConical, BookOpen, Camera, Map, Home, Landmark, Laptop, BrainCircuit, Paintbrush,
  };
  return icons[iconName] || Check;
};

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  const [formData, setFormData] = useState({ name: "", email: "", company: "", reason: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center text-center">
          <h1 className="text-4xl font-bold">Product Not Found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleBrochureRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch("/api/request-brochure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          productName: product.title,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "An error occurred.");
      }

      setIsSubmissionSuccessful(true);
      setFormData({ name: "", email: "", company: "", reason: "" });
    } catch (error: any) {
      setFormError(error.message || "Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalOpenChange = (open: boolean) => {
    setIsModalOpen(open);
    if (!open) {
      setTimeout(() => setIsSubmissionSuccessful(false), 300);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>

        {/* Hero Section */}
        <section className="py-20 px-6 bg-secondary">
          <div className="container mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-primary max-w-4xl mx-auto"
            >
              {product.title}
            </motion.h1>
          </div>
        </section>

        {/* Detailed Content Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full rounded-3xl shadow-xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col h-full"
              >
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Overview</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.longDescription}
                  </p>
                </div>

                <div className="mt-8 flex justify-end">
                  <Dialog open={isModalOpen} onOpenChange={handleModalOpenChange}>
                    <DialogTrigger asChild>
                      <Button size="lg">
                        <Download className="mr-2 h-5 w-5" />
                        Request Brochure
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[480px]">
                      {isSubmissionSuccessful ? (
                        <div>
                          <DialogHeader>
                            <DialogTitle className="text-center text-2xl">Thank You!</DialogTitle>
                          </DialogHeader>
                          <div className="py-6 text-center">
                            <PartyPopper className="h-16 w-16 text-green-500 mx-auto mb-4" />
                            <p className="text-muted-foreground">
                              Your request has been received. Our team will send the brochure within{" "}
                              <strong>24 business hours</strong>.
                            </p>
                          </div>
                          <DialogFooter>
                            <Button onClick={() => setIsModalOpen(false)}>Close</Button>
                          </DialogFooter>
                        </div>
                      ) : (
                        <form onSubmit={handleBrochureRequest}>
                          <DialogHeader>
                            <DialogTitle>Request the Brochure</DialogTitle>
                            <DialogDescription>
                              Please provide your details below.
                            </DialogDescription>
                          </DialogHeader>

                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="name" className="text-right">Name</Label>
                              <Input id="name" value={formData.name} onChange={handleInputChange} className="col-span-3" required />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="email" className="text-right">Email</Label>
                              <Input id="email" type="email" value={formData.email} onChange={handleInputChange} className="col-span-3" required />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="company" className="text-right">Company</Label>
                              <Input id="company" value={formData.company} onChange={handleInputChange} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-start gap-4">
                              <Label htmlFor="reason" className="text-right pt-2">Purpose</Label>
                              <Textarea id="reason" value={formData.reason} onChange={handleInputChange} className="col-span-3" required />
                            </div>
                          </div>

                          {formError && (
                            <p className="text-sm text-red-500 text-center mb-4">{formError}</p>
                          )}

                          <DialogFooter>
                            <Button type="submit" disabled={isSubmitting}>
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Submitting...
                                </>
                              ) : "Submit Request"}
                            </Button>
                          </DialogFooter>
                        </form>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-secondary">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">
              Key Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {product.features.map((feature, index) => {
                const IconComponent = getLucideIcon(feature.icon);
                return (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-background rounded-xl shadow-md"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{feature.name}</h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Demo Video Section – Simbott style */}
        <section className="py-20 px-6 bg-background">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-12">
              Watch it in Action
            </h2>

            {product.demoVideoUrl ? (
              <div className="max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-lg">
                <iframe
                  src={product.demoVideoUrl}
                  title={`${product.title} Demo Video`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-muted rounded-3xl aspect-video flex items-center justify-center max-w-4xl mx-auto cursor-pointer group shadow-lg"
              >
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Play className="w-12 h-12 text-primary" fill="currentColor" />
                  </div>
                  <p className="text-muted-foreground font-semibold">
                    Play Demo Video
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </section>

      </main>

      {/* Floating Back Button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="fixed top-20 right-8 z-50"
            >
              <Button asChild size="icon" className="h-14 w-14 rounded-full shadow-lg">
                <Link to="/products">
                  <ArrowLeft className="h-6 w-6" />
                </Link>
              </Button>
            </motion.div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Back to All Products</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
