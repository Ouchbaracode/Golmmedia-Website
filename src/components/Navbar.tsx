
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 glassmorphism-dark" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container px-6 mx-auto flex justify-between items-center">
        <Link to="/" className="relative z-50">
          <div className="flex items-center gap-2">
            <div className={`relative w-10 h-10 rounded-lg overflow-hidden ${isScrolled ? "neon-glow" : ""}`}>
              <div className="w-full h-full bg-gradient-to-br from-golm-blue to-golm-neon-blue flex items-center justify-center font-display font-bold text-white">
                G
              </div>
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              <span className="text-white">Golm</span>
              <span className="text-golm-blue">media</span>
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative text-sm font-medium transition-colors hover:text-golm-blue ${
                location.pathname === item.path 
                ? "text-golm-blue" 
                : "text-white"
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.span 
                  layoutId="navbar-underline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-golm-blue"
                />
              )}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-glow flex items-center"
          >
            Get Free Strategy
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-50 text-white focus:outline-none"
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-golm-black-light glassmorphism-dark pt-24"
            >
              <nav className="container px-6 mx-auto flex flex-col space-y-8 py-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-xl font-medium transition-colors ${
                      location.pathname === item.path 
                      ? "text-golm-blue" 
                      : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="btn-glow w-full text-center mt-4"
                >
                  Get Free Strategy
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
