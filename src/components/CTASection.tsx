
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-16 md:py-24 relative">
      {/* Background glowing elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-golm-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/3 bg-gradient-to-t from-golm-blue/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          initial="hidden"
          animate={controls}
          className="glassmorphism rounded-2xl overflow-hidden p-8 md:p-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <motion.div
                variants={variants}
                className="inline-block mb-4"
              >
                <p className="bg-golm-black-lighter text-golm-blue px-4 py-1.5 rounded-full text-sm font-medium inline-flex items-center">
                  <span className="w-2 h-2 bg-golm-blue-light rounded-full mr-2 animate-pulse"></span>
                  Limited Free Consultations Available
                </p>
              </motion.div>
              
              <motion.h2
                variants={variants}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Ready to Transform Your Healthcare Practice's <span className="text-gradient-blue">Social Media Presence?</span>
              </motion.h2>
              
              <motion.p
                variants={variants}
                className="text-gray-400 text-lg max-w-2xl"
              >
                Get a complimentary growth strategy session with our specialists. 
                We'll analyze your current social media performance and provide 
                actionable insights tailored to your practice.
              </motion.p>
            </div>
            
            <motion.div
              variants={variants}
              className="w-full lg:w-auto flex justify-center"
            >
              <Link
                to="/contact"
                className="btn-glow text-center w-full lg:w-auto flex items-center justify-center lg:justify-start"
              >
                Get Your Free Strategy
                <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            variants={variants}
            className="mt-10 pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between"
          >
            <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-0">
              <div className="flex -space-x-3 mb-3 sm:mb-0 sm:mr-4">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-golm-black bg-golm-black-light flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-white">{i}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                Join 400+ healthcare professionals who've boosted their practice with our strategies
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <div className="text-yellow-400 mr-2">★★★★★</div>
                <span className="text-white">5.0</span>
              </div>
              <p className="text-gray-400 text-sm">
                Based on 120+ reviews
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
