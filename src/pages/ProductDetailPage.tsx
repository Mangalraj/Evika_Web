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
import { Textarea } from "@/components/ui/textarea"; // --- NEW: Import Textarea ---
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


// A utility function to get the Lucide icon component by its string name
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

  // --- MODIFIED: Updated form state ---
  const [formData, setFormData] = useState({ name: "", email: "", company: "", reason: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false); // --- NEW: Track success state

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

  // Handle both input and textarea changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle form submission
  const handleBrochureRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch('/api/request-brochure', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          productName: product.title,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "An error occurred.");
      }
      
      // --- MODIFIED: On success, show the success message ---
      setIsSubmissionSuccessful(true);
      setFormData({ name: "", email: "", company: "", reason: "" }); // Reset form

    } catch (error: any) {
      setFormError(error.message || "Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Reset success state when modal is closed
  const handleModalOpenChange = (open: boolean) => {
    setIsModalOpen(open);
    if (!open) {
      setTimeout(() => setIsSubmissionSuccessful(false), 300); // Delay reset to allow closing animation
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
                  {/* --- MODIFIED: Dialog now handles success state --- */}
                  <Dialog open={isModalOpen} onOpenChange={handleModalOpenChange}>
                    <DialogTrigger asChild>
                      <Button size="lg">
                        <Download className="mr-2 h-5 w-5" />
                        Request Brochure
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[480px]">
                      {isSubmissionSuccessful ? (
                        // --- NEW: Success Message View ---
                        <div>
                          <DialogHeader>
                            <DialogTitle className="text-center text-2xl">Thank You!</DialogTitle>
                          </DialogHeader>
                          <div className="py-6 text-center">
                              <PartyPopper className="h-16 w-16 text-green-500 mx-auto mb-4" />
                              <p className="text-muted-foreground">
                                  Your request has been received. Our team will review it and send the brochure to your email within <strong>24 business hours</strong>.
                              </p>
                          </div>
                          <DialogFooter>
                            <Button onClick={() => setIsModalOpen(false)}>Close</Button>
                          </DialogFooter>
                        </div>
                      ) : (
                        // --- EXISTING: Form View ---
                        <form onSubmit={handleBrochureRequest}>
                          <DialogHeader>
                            <DialogTitle>Request the Brochure</DialogTitle>
                            <DialogDescription>
                              To receive the brochure, please provide your details below.
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
                              <Input id="company" value={formData.company} onChange={handleInputChange} className="col-span-3" placeholder="(Optional)"/>
                            </div>
                            {/* --- NEW: 'Reason for Request' Field --- */}
                            <div className="grid grid-cols-4 items-start gap-4 pt-2">
                                <Label htmlFor="reason" className="text-right pt-2">Purpose</Label>
                                <Textarea id="reason" value={formData.reason} onChange={handleInputChange} className="col-span-3" placeholder="e.g., Evaluating for a project, academic research, etc." required />
                            </div>
                          </div>

                          {formError && <p className="text-sm text-red-500 text-center mb-4">{formError}</p>}
                          
                          <DialogFooter>
                            <Button type="submit" disabled={isSubmitting}>
                              {isSubmitting ? (
                                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</>
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
            {/*... (rest of the section remains the same) ...*/}
        </section>

        {/* Demo Video Section */}
        <section className="py-20 px-6 bg-background">
            {/*... (rest of the section remains the same) ...*/}
        </section>
      </main>

      {/* Floating "Back to Products" Button */}
      <TooltipProvider>
        {/*... (rest of the component remains the same) ...*/}
      </TooltipProvider>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
