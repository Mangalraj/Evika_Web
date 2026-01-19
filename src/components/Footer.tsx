import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          {/* LOGO IMAGE */}
          <img
            src="/logo.png"
            alt="Evika Innovations Logo"
            className="w-82 h-16"
          />

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Get in Touch
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              {/* Phone Section */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Call Us</p>
                  <a 
                    href="tel:+916363252306" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                  >
                    +91 6363252306
                  </a>
                </div>
              </div>

              {/* Mail Section */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Mail us</p>
                  <p className="text-sm text-muted-foreground">
                    support@evikainnovations.com
                  </p>
                </div>
              </div>

              {/* Address Section */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Find us</p>
                  <p className="text-sm text-muted-foreground">
                    Venture Development Centre, GITAM Bengaluru,
                    <br />
                    Nagadenahalli, Karnataka - 561203
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
