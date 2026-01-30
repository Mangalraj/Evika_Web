import { Phone, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12 px-6">
      <div className="container mx-auto">
        {/* TOP SECTION: Logo & Contact */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          {/* LOGO IMAGE */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src="/logo.png"
              alt="Evika Innovations Logo"
              className="w-82 h-16 object-contain" // Added object-contain for safety
            />
          </div>

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
                  <a 
                    href="mailto:support@evikainnovations.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                    >
                    support@evikainnovations.com
                  </a>
                </div>
              </div>

              {/* LinkedIn Section */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Follow us</p>
                  <a 
                    href="https://www.linkedin.com/company/evika-innovations/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                  >
                    Evika Innovations
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright & Legal */}
        <div className="mt-12 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Evika Innovations. All rights reserved.
          </p>
          
          {/* GSTIN Section - Professional Placement */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">GSTIN:</span>
            <span className="text-sm font-semibold text-primary/80 tracking-wide">
              33AAMFE4978K1ZV
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
