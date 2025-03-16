
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Eye, Stethoscope } from "lucide-react";

const CaseStudiesPreview = () => {
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

  const caseStudies = [
    {
      icon: <Eye size={28} />,
      type: "Optical Store",
      title: "20/20 Vision Center",
      description: "How we increased patient bookings by 175% in just 90 days through targeted Instagram campaigns.",
      stats: [
        { value: "175%", label: "Booking Increase" },
        { value: "12K", label: "New Followers" },
        { value: "8.5x", label: "ROI" }
      ],
      image: "/src/assets/optical-store.jpg",
      imageFallback: `linear-gradient(135deg, #1a88ff 0%, #0052cc 100%)` // Fallback gradient
    },
    {
      icon: <Stethoscope size={28} />,
      type: "Dental Clinic",
      title: "Smile Bright Dentistry",
      description: "A complete social media overhaul that generated 230+ new patient inquiries per month.",
      stats: [
        { value: "230+", label: "Monthly Leads" },
        { value: "68%", label: "Conversion Rate" },
        { value: "15K", label: "Content Reach" }
      ],
      image: "/src/assets/dental-clinic.jpg",
      imageFallback: `linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)` // Fallback gradient
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-golm-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-golm-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Success Stories That Speak For Themselves
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how we've helped optical stores and dental clinics achieve remarkable growth through strategic social media marketing.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative glassmorphism rounded-xl overflow-hidden group"
            >
              <div className="relative z-10 p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-golm-blue/20 flex items-center justify-center text-golm-blue mr-3">
                    {study.icon}
                  </div>
                  <span className="text-sm text-golm-blue font-medium">{study.type}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {study.title}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {study.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.stats.map((stat, idx) => (
                    <div key={idx} className="text-center glassmorphism-dark rounded-lg p-3">
                      <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/case-studies"
                  className="inline-flex items-center text-white hover:text-golm-blue transition-colors"
                >
                  <span className="link-hover">View Case Study</span>
                  <motion.span
                    className="ml-2"
                    animate={{
                      x: 0
                    }}
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
              
              {/* Background gradient fallback */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{ 
                  background: study.imageFallback,
                  zIndex: 0
                }}
              ></div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="mt-12 text-center"
        >
          <Link
            to="/case-studies"
            className="btn-glow inline-flex items-center"
          >
            View All Case Studies
            <motion.span
              className="ml-2"
              animate={{
                x: 0
              }}
              whileHover={{
                x: 5,
                transition: { duration: 0.2 }
              }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
