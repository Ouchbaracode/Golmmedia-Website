
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
    businessType: "optical" // Default value
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We've received your inquiry and will get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        business: "",
        message: "",
        businessType: "optical"
      });
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact | Golmmedia</title>
        <meta name="description" content="Get in touch with Golmmedia for specialized social media marketing services for your optical store or dental clinic." />
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
              Get in <span className="text-gradient-blue">Touch</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Ready to grow your optical store or dental clinic with strategic social media marketing? Let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-golm-blue/20 flex items-center justify-center text-golm-blue mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email Us</h3>
                    <p className="text-gray-400">info@golmmedia.com</p>
                    <p className="text-gray-400 text-sm mt-1">We respond to all inquiries within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-golm-blue/20 flex items-center justify-center text-golm-blue mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Call Us</h3>
                    <p className="text-gray-400">(555) 123-4567</p>
                    <p className="text-gray-400 text-sm mt-1">Monday-Friday, 9AM-5PM EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-golm-blue/20 flex items-center justify-center text-golm-blue mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Visit Us</h3>
                    <p className="text-gray-400">123 Innovation Drive</p>
                    <p className="text-gray-400">Suite 200</p>
                    <p className="text-gray-400">San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-white font-bold mb-4">Our Hours</h3>
                <div className="glassmorphism rounded-xl p-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="glassmorphism rounded-xl overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Send Us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-golm-black-lighter border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-golm-blue focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-golm-black-lighter border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-golm-blue focus:border-transparent transition-all"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="business" className="block text-white mb-2">Business Name</label>
                        <input
                          type="text"
                          id="business"
                          name="business"
                          value={formData.business}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-golm-black-lighter border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-golm-blue focus:border-transparent transition-all"
                          placeholder="Your Practice Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="businessType" className="block text-white mb-2">Business Type</label>
                        <select
                          id="businessType"
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-golm-black-lighter border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-golm-blue focus:border-transparent transition-all"
                        >
                          <option value="optical">Optical Store</option>
                          <option value="dental">Dental Clinic</option>
                          <option value="other">Other Healthcare</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-golm-black-lighter border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-golm-blue focus:border-transparent transition-all"
                        placeholder="Tell us about your business and what you're looking for..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-glow w-full flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            Send Message
                            <Send size={18} className="ml-2" />
                          </div>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
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
                question: "What happens after I submit my contact form?", 
                answer: "One of our specialists will reach out to you within 24 hours to schedule a free strategy session. During this call, we'll discuss your business goals and how we can help you achieve them." 
              },
              { 
                question: "Is there a minimum contract period?", 
                answer: "We typically recommend a 3-month minimum engagement to see meaningful results, but we offer flexible options depending on your needs and goals." 
              },
              { 
                question: "What information should I prepare for our first call?", 
                answer: "It's helpful to have information about your current social media presence, business goals, target audience, and any previous marketing efforts you've tried. This helps us tailor our approach to your specific situation." 
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

      {/* Map Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="glassmorphism rounded-xl overflow-hidden">
            <div className="h-80 bg-golm-black-lighter flex items-center justify-center">
              <p className="text-gray-400">Interactive Map Would Be Embedded Here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
