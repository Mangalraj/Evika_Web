
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@/components/SpeedInsights";
import ScrollToTop from "@/components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";

import Products from "./pages/Products";
import Services from "./pages/Services";
import ProductDetailPage from "./pages/ProductDetailPage";
import VitaVersePrivacyPolicy from "./pages/VitaVersePrivacyPolicy";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />

          {/* Individual Product Details */}
          <Route
            path="/products/:slug"
            element={<ProductDetailPage />}
          />

          {/* VitaVerse Privacy Policy */}
          <Route
            path="/vitaverse-privacy-policy"
            element={<VitaVersePrivacyPolicy />}
          />

          <Route path="/contact" element={<Contact />} />

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <SpeedInsights />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
