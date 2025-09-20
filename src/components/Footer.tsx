import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Droplets, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Water Treatment Systems",
    "Industrial Filtration",
    "Reverse Osmosis",
    "Water Quality Testing",
    "Maintenance Services",
    "System Installation",
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/30 border-t">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="IDS Water Tech" className="h-10 md:h-12 w-auto water-droplet" />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-primary">IDS Water Tech</h3>
                <div className="flex items-center space-x-1 text-xs md:text-sm text-muted-foreground">
                  <Droplets className="h-3 w-3" />
                  <span>Clean Water Solutions</span>
                </div>
              </div>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Leading water treatment company in Tanzania, providing innovative solutions for clean, safe water across industrial and commercial sectors.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-base md:text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-base md:text-lg font-semibold text-foreground">Our Services</h4>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4 md:space-y-6">
            <h4 className="text-base md:text-lg font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 md:h-5 w-4 md:w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base text-muted-foreground">
                  Dar es Salaam, Tanzania
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 md:h-5 w-4 md:w-5 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base text-muted-foreground">+255 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 md:h-5 w-4 md:w-5 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base text-muted-foreground">info@idswatertech.com</span>
              </div>
            </div>
            <Button className="w-full bg-gradient-accent hover:bg-accent/90 text-sm md:text-base">
              Get Free Consultation
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-4 md:py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-muted-foreground text-xs md:text-sm text-center md:text-left">
              © {currentYear} IDS Water Tech. All rights reserved.
            </p>
            <div className="flex space-x-4 md:space-x-6 text-xs md:text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;