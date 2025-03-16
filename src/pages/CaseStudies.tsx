
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Eye, Stethoscope, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";

const CaseStudies = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseStudies = [
    {
      icon: <Eye size={28} />,
      type: "Optical Store",
      title: "20/20 Vision Center",
      description: "How we increased patient bookings by 175% in just 90 days through targeted Instagram campaigns.",
      results: [
        "175% increase in new patient bookings within 90 days",
        "12,400+ new Instagram followers",
        "8.5x return on ad spend",
        "43% reduction in cost per lead"
      ],
      approach: [
        "Created a content strategy focusing on eye health education and frame style tips",
        "Developed a lead generation funnel with free vision consultation offer",
        "Implemented targeted Instagram and Facebook ad campaigns",
        "Established a retargeting system for website visitors"
      ],
      testimonial: {
        quote: "The Golmmedia team transformed our social media presence and directly impacted our bottom line. Their understanding of the optical industry made all the difference.",
        author: "Dr. Sarah Chen",
        position: "Owner, 20/20 Vision Center"
      },
      imageFallback: `linear-gradient(135deg, #1a88ff 0%, #0052cc 100%)`
    },
    {
      icon: <Stethoscope size={28} />,
      type: "Dental Clinic",
      title: "Smile Bright Dentistry",
      description: "A complete social media overhaul that generated 230+ new patient inquiries per month.",
      results: [
        "230+ new patient inquiries monthly",
        "68% conversion rate from lead to appointment",
        "15,000+ monthly content reach",
        "324% increase in engagement rate"
      ],
      approach: [
        "Developed a content strategy highlighting patient transformations and dental education",
        "Created a multi-step patient acquisition funnel",
        "Implemented Facebook and Instagram advertising campaigns",
        "Established an automated new patient nurturing sequence"
      ],
      testimonial: {
        quote: "Since working with Golmmedia, we've had to hire two additional hygienists to keep up with demand. Their social media strategies completely changed our practice growth trajectory.",
        author: "Dr. Michael Rodriguez",
        position: "Founder, Smile Bright Dentistry"
      },
      imageFallback: `linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)`
    },
    {
      icon: <Eye size={28} />,
      type: "Optical Chain",
      title: "Clear View Opticals",
      description: "Helped a 3-location optical chain establish brand consistency and increase foot traffic across all stores.",
      results: [
        "145% increase in walk-in customers",
        "87% boost in high-end frame sales",
        "35% growth in returning customer rate",
        "9,800+ new followers across platforms"
      ],
      approach: [
        "Created consistent brand identity across all social channels",
        "Developed location-specific content strategies",
        "Implemented specialized frame showcase campaigns",
        "Established a social media-driven loyalty program"
      ],
      testimonial: {
        quote: "Golmmedia helped us unify our brand across multiple locations while still tailoring content to each community. The results have exceeded our expectations at every store.",
        author: "James Wilson",
        position: "Marketing Director, Clear View Opticals"
      },
      imageFallback: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
    },
    {
      icon: <Stethoscope size={28} />,
      type: "Dental Practice",
      title: "Family Dental Associates",
      description: "Transformed a struggling family dental practice into the area's top-rated choice for new patients.",
      results: [
        "218% increase in new family patients",
        "42 positive reviews generated monthly",
        "76% increase in website traffic from social media",
        "189% growth in cosmetic procedure inquiries"
      ],
      approach: [
        "Developed family-focused content strategy",
        "Created dedicated campaigns for key services",
        "Implemented review generation system",
        "Established community outreach initiatives"
      ],
      testimonial: {
        quote: "We were struggling to attract new patients until we partnered with Golmmedia. Their approach to family dental marketing completely changed our practice. We're now the go-to family dentist in our area.",
        author: "Dr. Amanda Lewis",
        position: "Partner, Family Dental Associates"
      },
      imageFallback: `linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)`
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Golmmedia</title>
        <meta name="description" content="Real results from our social media marketing strategies for optical stores and dental clinics. See how we've helped healthcare professionals grow their practices." />
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
              Real <span className="text-gradient-blue">Results</span> For Healthcare Professionals
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Discover how we've helped optical stores and dental clinics transform their social media presence and achieve remarkable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism rounded-xl overflow-hidden"
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-10">
                    <div className="md:w-3/5">
                      {/* Header */}
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-golm-blue/20 flex items-center justify-center text-golm-blue mr-3">
                          {study.icon}
                        </div>
                        <span className="text-sm text-golm-blue font-medium">{study.type}</span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {study.title}
                      </h2>
                      
                      <p className="text-gray-400 text-lg mb-8">
                        {study.description}
                      </p>
                      
                      {/* Results */}
                      <div className="mb-8">
                        <h3 className="text-white font-bold mb-4 text-xl">Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-golm-blue mr-2">•</span>
                              <span className="text-gray-400">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Approach */}
                      <div>
                        <h3 className="text-white font-bold mb-4 text-xl">Our Approach</h3>
                        <ul className="space-y-2">
                          {study.approach.map((approach, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-golm-blue mr-2">•</span>
                              <span className="text-gray-400">{approach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Testimonial */}
                    <div className="md:w-2/5">
                      <div 
                        className="glassmorphism-dark rounded-xl p-6 h-full"
                        style={{ 
                          background: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), ${study.imageFallback}`, 
                          backgroundBlendMode: 'overlay'
                        }}
                      >
                        <div className="flex flex-col h-full justify-between">
                          <div className="mb-8">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6 opacity-50">
                              <path d="M14.0251 21.6H22.0251V30.4C22.0251 35.6 17.8251 40 12.8251 40V36.8C16.0251 36.8 18.6251 34 18.6251 30.4H14.0251V21.6ZM30.0251 21.6H38.0251V30.4C38.0251 35.6 33.8251 40 28.8251 40V36.8C32.0251 36.8 34.6251 34 34.6251 30.4H30.0251V21.6Z" fill="#0070F3"/>
                            </svg>
                            <p className="text-white text-lg italic mb-6">
                              "{study.testimonial.quote}"
                            </p>
                          </div>
                          
                          <div>
                            <p className="font-bold text-white">{study.testimonial.author}</p>
                            <p className="text-gray-400 text-sm">{study.testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              The <span className="text-gradient-blue">Numbers</span> Speak For Themselves
            </h2>
            <p className="text-gray-400">
              Consistent results across our client portfolio demonstrate our expertise in healthcare social media marketing.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "150%+", label: "Average Growth in Patient Inquiries" },
              { value: "7.5x", label: "Average Return on Ad Spend" },
              { value: "85%", label: "Client Retention Rate" },
              { value: "50+", label: "Healthcare Clients Served" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
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

export default CaseStudies;
