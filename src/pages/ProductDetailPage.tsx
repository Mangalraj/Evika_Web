// src/pages/ProductDetailPage.tsx

import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ArrowLeft,
  Check,
  Play,
  ClipboardCheck,
  Gamepad,
  BarChart,
  ShieldCheck,
  Brain,
  Hand,
  Stethoscope,
  Users,
  RefreshCw,
  Gauge,
  Workflow,
  Cloud,
  AlertTriangle,
  Settings,
  Award,
  Activity,
  Globe,
  FlaskConical,
  BookOpen,
  Download,
} from "lucide-react";
import { products } from "@/data/products";

// A utility function to get the Lucide icon component by its string name
const getLucideIcon = (iconName: string) => {
  const icons: { [key: string]: React.ElementType } = {
    ClipboardCheck,
    Gamepad,
    BarChart,
    ShieldCheck,
    Brain,
    Hand,
    Stethoscope,
    Users,
    RefreshCw,
    Gauge,
    Workflow,
    Cloud,
    AlertTriangle,
    Settings,
    Award,
    Activity,
    Globe,
    FlaskConical,
    BookOpen,
  };
  return icons[iconName] || Check;
};

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

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

  // Path for the brochure PDF in your /public folder
  const brochurePath = `/Pruthvi_resume_2__Copy_.pdf`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section for the Product */}
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
                className="flex flex-col h-full" // Added for layout
              >
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Overview
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.longDescription}
                  </p>
                </div>

                {/* --- DOWNLOAD BUTTON --- */}
                <div className="mt-8 flex justify-end">
                  <Button asChild size="lg">
                    <a href={brochurePath} download>
                      <Download className="mr-2 h-5 w-5" />
                      Download Brochure
                    </a>
                  </Button>
                </div>
                {/* --- END OF BUTTON --- */}

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
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.name}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Demo Video Section */}
        <section className="py-20 px-6 bg-background">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-12">
              Watch it in Action
            </h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-muted rounded-3xl aspect-video flex items-center justify-center max-w-4xl mx-auto cursor-pointer group shadow-lg"
            >
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-all duration-300 transform group-hover:scale-110">
                  <Play
                    className="w-12 h-12 text-primary"
                    fill="currentColor"
                  />
                </div>
                <p className="text-muted-foreground font-semibold">
                  Play Demo Video
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Floating "Back to Products" Button with Tooltip */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
              className="fixed top-20 right-8 z-50"
            >
              <Button
                asChild
                size="icon"
                className="h-14 w-14 rounded-full shadow-lg"
              >
                <Link to="/products" aria-label="Back to All Products">
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
