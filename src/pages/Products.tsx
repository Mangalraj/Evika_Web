// src/pages/Products.tsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products"; // Import your new data file

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="py-20 px-6 text-center bg-secondary">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold text-primary"
          >
            Our Innovative Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Discover how Evika Innovations is leveraging XR and AI to redefine
            possibilities in healthcare, education, and enterprise.
          </motion.p>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-6">
          <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl overflow-hidden flex flex-col group shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {product.description}
                  </p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link to={`/products/${product.slug}`}>Learn More</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
