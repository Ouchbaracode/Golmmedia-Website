
import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Lightbulb, MousePointer, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const cardRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { 
          duration: 0.5,
          delay: index * 0.1
        }
      });
    }
  }, [controls, inView, index]);

  // 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const resetTilt = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ y: 50, opacity: 0 }}
      className="relative"
    >
      <div
        ref={cardRef}
        className={`tilt-card h-full glassmorphism rounded-xl overflow-hidden transition-all duration-300 ${
          isHovered ? "shadow-neon" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          resetTilt();
        }}
        onMouseMove={handleMouseMove}
      >
        <div className="tilt-card-content relative h-full p-6 flex flex-col">
          {/* Background gradient effect */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br from-golm-blue/10 to-transparent opacity-0 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : ""
            }`} 
          />
          
          {/* Content */}
          <div className="tilt-card-inner relative z-10 flex-1 flex flex-col">
            <div className={`w-14 h-14 mb-6 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isHovered 
                ? "bg-golm-blue text-white shadow-neon" 
                : "bg-golm-black-lighter text-golm-blue"
            }`}>
              {icon}
            </div>
            
            <h3 className="text-xl font-display font-bold mb-3 text-white">
              {title}
            </h3>
            
            <p className="text-gray-400 mb-6 flex-grow">
              {description}
            </p>
            
            <Link
              to="/services"
              className={`inline-flex items-center text-sm font-medium transition-colors ${
                isHovered ? "text-golm-blue" : "text-white"
              }`}
            >
              <span className="link-hover">Learn More</span>
              <motion.span
                className="ml-2"
                animate={{
                  x: isHovered ? 5 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesOverview = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  const services = [
    {
      icon: <Lightbulb size={24} strokeWidth={2} />,
      title: "Content Creation",
      description: "Eye-catching social media content tailor-made for optical stores and dental clinics. We create visuals that convert scrollers into patients."
    },
    {
      icon: <MousePointer size={24} strokeWidth={2} />,
      title: "Funnel Building",
      description: "Strategic lead-generating funnels designed to capture and nurture potential patients through their decision journey."
    },
    {
      icon: <BarChart size={24} strokeWidth={2} />,
      title: "Growth Strategies",
      description: "Data-driven growth plans that leverage market insights and consumer behavior to propel your practice ahead of the competition."
    }
  ];
  
  return (
    <section ref={ref} className="py-20 relative">
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
            Specialized Services for Healthcare Professionals
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Strategic social media marketing solutions designed specifically for optical stores 
            and dental clinics looking to grow their patient base.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
