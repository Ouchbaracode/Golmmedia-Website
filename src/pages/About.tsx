
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useEffect } from "react";
import CTASection from "@/components/CTASection";

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About | Golmmedia</title>
        <meta name="description" content="Learn about Golmmedia, the premier social media marketing agency for optical stores and dental clinics." />
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
              About <span className="text-gradient-blue">Golmmedia</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              We're a specialized social media marketing agency dedicated to helping optical stores and dental clinics grow their patient base through strategic digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Our <span className="text-gradient-blue">Story</span>
              </h2>
              <p className="text-gray-400 mb-4">
                Golmmedia was founded in 2023 with a clear mission: to provide specialized social media marketing services for healthcare professionals who were being underserved by generic marketing agencies.
              </p>
              <p className="text-gray-400 mb-4">
                Our founder, having worked with several optical and dental practices, noticed these businesses faced unique challenges in patient acquisition and retention that weren't being addressed by standard marketing approaches.
              </p>
              <p className="text-gray-400">
                Today, we've grown into a team of specialists who understand the nuances of healthcare marketing, privacy regulations, and the specific needs of optical stores and dental clinics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glassmorphism rounded-xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-lg bg-golm-blue/20 flex items-center justify-center text-golm-blue mr-6">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Vision-Focused</h3>
                      <p className="text-gray-400">Creating marketing that resonates with patients seeking eye care</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-lg bg-golm-blue/20 flex items-center justify-center text-golm-blue mr-6">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.5 9C8.32843 9 9 8.32843 9 7.5C9 6.67157 8.32843 6 7.5 6C6.67157 6 6 6.67157 6 7.5C6 8.32843 6.67157 9 7.5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.5 18C8.32843 18 9 17.3284 9 16.5C9 15.6716 8.32843 15 7.5 15C6.67157 15 6 15.6716 6 16.5C6 17.3284 6.67157 18 7.5 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.5 18C17.3284 18 18 17.3284 18 16.5C18 15.6716 17.3284 15 16.5 15C15.6716 15 15 15.6716 15 16.5C15 17.3284 15.6716 18 16.5 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Dental Specialists</h3>
                      <p className="text-gray-400">Building trust and showcasing expertise for dental practices</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-lg bg-golm-blue/20 flex items-center justify-center text-golm-blue mr-6">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Data-Driven</h3>
                      <p className="text-gray-400">Using analytics to guide marketing decisions and optimize ROI</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Meet Our <span className="text-gradient-blue">Team</span>
            </h2>
            <p className="text-gray-400">
              A dedicated group of marketing specialists who understand the unique needs of healthcare professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mohamed Ouchbara",
                position: "Founder & CEO",
                bio: "With over 3 years in healthcare marketing, Mohamed built Golmmedia to fill the gap in specialized social media for healthcare providers."
              }
              
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism rounded-xl overflow-hidden group"
              >
                <div className="p-6">
                  <div className="w-16 h-16 rounded-full bg-golm-blue/20 mb-4 group-hover:bg-golm-blue/40 transition-all duration-300 flex items-center justify-center text-xl font-bold text-white">
                    {member.name.split(' ').map(name => name[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-golm-blue text-sm mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our <span className="text-gradient-blue">Values</span>
            </h2>
            <p className="text-gray-400">
              The core principles that guide our work and ensure we deliver exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Specialization", description: "We focus exclusively on optical and dental practices, giving us unmatched expertise in these fields." },
              { title: "Transparency", description: "Clear reporting and honest communication are the foundation of our client relationships." },
              { title: "Innovation", description: "We constantly explore new strategies and technologies to keep our clients ahead of the curve." },
              { title: "Results-Driven", description: "We measure our success by the tangible growth we create for our healthcare clients." }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism rounded-xl overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">
                    {value.description}
                  </p>
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

export default About;
