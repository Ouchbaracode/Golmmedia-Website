
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-golm-black-lighter border-t border-white/5 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-golm-blue to-golm-neon-blue flex items-center justify-center font-display font-bold text-white">
                  G
                </div>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                <span className="text-white">Golm</span>
                <span className="text-golm-blue">media</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-md mb-6">
              Premium social media marketing agency specializing in content creation and funnel building 
              for optical stores and dental clinics.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://web.facebook.com/profile.php?id=100090645045014" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-golm-black-light text-white hover:bg-golm-blue transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/golmmedia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-golm-black-light text-white hover:bg-golm-blue transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/company/golmmedia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-golm-black-light text-white hover:bg-golm-blue transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-display font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="text-white font-display font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Content Creation</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Funnel Building</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Growth Strategies</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Analytics & Reporting</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="text-white font-display font-medium text-lg mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="text-gray-400 mb-2">HAY ATLAS</p>
              <p className="text-gray-400 mb-2">Beni Mellal, 23030</p>
              <p className="text-gray-400 mb-4">Morocco</p>
              <p className="text-gray-400 hover:text-white transition-colors mb-1">
                <a href="mailto:golmmedia@gmail.com">Golmmedia Email</a>
              </p>
              <p className="text-gray-400 hover:text-white transition-colors">
                <a href="tel:+212 612-822713">+212 612-822713</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            © {currentYear} Golmmedia. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
