
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Lightbulb, MousePointer, BarChart, TrendingUp, Eye, BarChart3, BookOpen } from "lucide-react";
import CTASection from "@/components/CTASection";

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Lightbulb size={28} />,
      title: "Content Creation",
      description: "Eye-catching visual content designed specifically for healthcare providers. We create posts that resonate with patients and highlight your expertise.",
      features: [
        "Customized photo and video content",
        "Engaging social media posts and carousels",
        "Professional graphic design for healthcare",
        "Patient testimonial formatting"
      ]
    },
    {
      icon: <MousePointer size={28} />,
      title: "Funnel Building",
      description: "Strategic lead-generating funnels that turn interested viewers into patients. We create seamless pathways from discovery to booking.",
      features: [
        "Multi-stage conversion funnels",
        "Landing page optimization",
        "Lead capture systems",
        "Automated follow-up sequences"
      ]
    },
    {
      icon: <BarChart size={28} />,
      title: "Growth Strategies",
      description: "Data-driven growth plans tailored to optical stores and dental clinics. We analyze market trends and competitor performance to position you strategically.",
      features: [
        "Market and competitor analysis",
        "Audience targeting and refinement",
        "Content calendar planning",
        "Performance analytics and reporting"
      ]
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Social Media Management",
      description: "Full-service social media management that handles everything from content scheduling to community engagement for busy healthcare professionals.",
      features: [
        "Platform-specific content strategies",
        "Content scheduling and publishing",
        "Community management and engagement",
        "Monthly performance reporting"
      ]
    },
    {
      icon: <Eye size={28} />,
      title: "Paid Advertising",
      description: "Targeted social media advertising campaigns that put your practice in front of ideal patients in your service area.",
      features: [
        "Facebook and Instagram Ads",
        "Custom audience creation",
        "A/B testing and optimization",
        "Conversion tracking"
      ]
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics that translate social media metrics into business impact, showing the ROI of your marketing efforts.",
      features: [
        "Custom dashboard setup",
        "Patient acquisition tracking",
        "Conversion analytics",
        "ROI reporting"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | Golmmedia</title>
        <meta name="description" content="Specialized social media marketing services for optical stores and dental clinics. Content creation, funnel building, and growth strategies." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-golm-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-golm-blue/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Specialized Services for <span className="text-gradient-blue">Healthcare Professionals</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Tailored social media marketing solutions designed specifically for optical stores and dental clinics looking to grow their patient base and enhance their online presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism rounded-xl overflow-hidden h-full"
              >
                <div className="p-8">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-golm-black-lighter text-golm-blue mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="border-t border-white/5 pt-6">
                    <h4 className="text-sm font-medium text-white mb-4">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-golm-blue mr-2">•</span>
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our Proven <span className="text-gradient-blue">Process</span>
            </h2>
            <p className="text-gray-400">
              We follow a systematic approach to ensure your practice's social media strategy delivers measurable results and ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { number: "01", title: "Discovery & Analysis", description: "We analyze your practice, competitors, and target audience to understand your unique positioning." },
              { number: "02", title: "Strategy Development", description: "Based on our analysis, we create a custom social media strategy tailored to your practice's goals." },
              { number: "03", title: "Content Creation & Execution", description: "Our team produces high-quality content and implements the strategy across platforms." },
              { number: "04", title: "Optimization & Scaling", description: "We continuously analyze performance data to refine the strategy for maximum results." }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism rounded-xl overflow-hidden"
              >
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-gradient-blue opacity-50">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Frequently Asked <span className="text-gradient-blue">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              { 
                question: "How long until we see results from social media marketing?", 
                answer: "While some improvements can be seen within the first month, significant results typically begin to show after 2-3 months of consistent strategy implementation. We provide monthly reports to track progress." 
              },
              { 
                question: "Do you specialize in any specific social platforms?", 
                answer: "We specialize in platforms that perform best for healthcare professionals, primarily Instagram, Facebook, and increasingly TikTok. We'll recommend the optimal platform mix based on your specific practice and target demographic." 
              },
              { 
                question: "How do you handle patient privacy concerns in healthcare marketing?", 
                answer: "We are fully versed in HIPAA compliance and privacy regulations for healthcare providers. All content is created with strict adherence to patient privacy guidelines, and we can provide guidance on compliant testimonial collection." 
              },
              { 
                question: "What makes your agency different from general social media agencies?", 
                answer: "Unlike general agencies, we exclusively serve optical stores and dental clinics, giving us specialized knowledge of your industry, patient acquisition process, and regulatory environment. Our strategies are built specifically for healthcare providers." 
              },
              { 
                question: "How much time will I need to invest in the process?", 
                answer: "We design our services to be low-maintenance for busy healthcare professionals. After an initial consultation and strategy session, most clients spend just 1-2 hours per month on approval and feedback." 
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <div className="glassmorphism rounded-xl overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Services;
