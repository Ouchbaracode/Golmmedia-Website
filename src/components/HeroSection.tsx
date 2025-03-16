
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MousePointer } from "lucide-react";

const HeroSection = () => {
  const btnRef = useRef<HTMLAnchorElement>(null);

  // Ripple effect for buttons
  const createRipple = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add("ripple");
    
    // Remove existing ripples
    const currentRipples = button.getElementsByClassName("ripple");
    if (currentRipples.length > 0) {
      Array.from(currentRipples).forEach(ripple => ripple.remove());
    }
    
    button.appendChild(ripple);
    
    // Remove ripple after animation completes
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  useEffect(() => {
    if (btnRef.current) {
      btnRef.current.addEventListener("click", createRipple as any);
    }
    
    return () => {
      if (btnRef.current) {
        btnRef.current.removeEventListener("click", createRipple as any);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-golm-blue-light blur-3xl animate-float"></div>
          <div className="absolute top-1/3 right-10 w-32 h-32 rounded-full bg-golm-blue blur-3xl animate-float" style={{animationDelay: "-2s"}}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-golm-neon-blue blur-3xl animate-float" style={{animationDelay: "-4s"}}></div>
        </div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 2px, transparent 0)",
            backgroundSize: "40px 40px"
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-4">
                <p className="bg-golm-black-lighter text-golm-blue px-4 py-1.5 rounded-full text-sm font-medium inline-flex items-center">
                  <span className="w-2 h-2 bg-golm-blue-light rounded-full mr-2"></span>
                  Premium Social Media Marketing
                </p>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                We Turn <span className="text-gradient-blue">Eyeballs</span> into <br className="hidden md:block" /> 
                <span className="relative">
                  Customers
                  <motion.svg
                    width="100%"
                    height="8"
                    viewBox="0 0 200 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -bottom-2 left-0 w-full"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <path
                      d="M1 5.5C36.5 2 72.5 1.5 199 6.5"
                      stroke="#0070f3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </motion.svg>
                </span>
              </h1>
              
              <p className="text-gray-400 text-lg mb-8 max-w-xl">
                Social Media Growth for Optical & Dental Brands. Specialized strategies 
                to elevate your practice with engaging content that converts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  ref={btnRef}
                  className="btn-glow relative inline-flex items-center justify-center group"
                >
                  Get Your Free Growth Strategy
                  <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center px-6 py-3 text-white bg-transparent border border-white/20 rounded-md hover:bg-golm-black-lighter transition-colors duration-300"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Right side 3D visualization */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px]"
            >
              <div className="absolute inset-0 glassmorphism rounded-xl overflow-hidden neon-glow">
                <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                
                {/* 3D Social Media Growth Visualization */}
                <div className="relative h-full flex items-center justify-center p-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 border border-golm-blue/20 rounded-full animate-pulse opacity-40"></div>
                    <div className="w-64 h-64 border border-golm-blue/15 rounded-full animate-pulse opacity-30" style={{animationDelay: "300ms"}}></div>
                    <div className="w-80 h-80 border border-golm-blue/10 rounded-full animate-pulse opacity-20" style={{animationDelay: "600ms"}}></div>
                  </div>
                  
                  <div className="relative z-10 text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="w-16 h-16 bg-golm-blue rounded-full flex items-center justify-center animate-float shadow-neon">
                        <MousePointer size={28} className="text-white" />
                      </div>
                    </div>
                    
                    <div className="glassmorphism-dark rounded-lg p-4 mb-4">
                      <div className="text-2xl font-bold text-white mb-1">+278%</div>
                      <div className="text-sm text-gray-400">Engagement Growth</div>
                    </div>
                    
                    <div className="relative w-full h-8 bg-golm-black-lighter rounded-full mb-4 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-golm-blue to-golm-neon-blue"
                        initial={{ width: "0%" }}
                        animate={{ width: "78%" }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      ></motion.div>
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end px-3">
                        <span className="text-xs font-semibold text-white">78% Conversion</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between gap-2">
                      <div className="glassmorphism-dark rounded-lg p-3 flex-1">
                        <div className="text-lg font-bold text-white mb-1">12K</div>
                        <div className="text-xs text-gray-400">New Followers</div>
                      </div>
                      <div className="glassmorphism-dark rounded-lg p-3 flex-1">
                        <div className="text-lg font-bold text-white mb-1">35%</div>
                        <div className="text-xs text-gray-400">ROI Increase</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="text-gray-400 text-sm mb-2">Scroll Down</div>
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-golm-blue rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
