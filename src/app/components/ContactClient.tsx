"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        message: ""
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@aegontech.dev",
      href: "mailto:hello@aegontech.dev"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) TECH-001",
      href: "tel:+15558324001"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "8 The Green STE B, Dover, DE 19901 United States",
      href: "https://maps.google.com/?q=8+The+Green+STE+B,+Dover,+DE+19901+United+States"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Monday - Friday: 9:00 AM - 6:00 PM PST",
      href: null
    }
  ];

  const services = [
    "Web Development",
    "Mobile Development",
    "Cloud Solutions",
    "Security Solutions",
    "Digital Strategy",
    "Team Augmentation"
  ];

  const budgetRanges = [
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Not sure yet"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto">
              Ready to transform your business? Let&apos;s discuss your project and create a custom solution that drives real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
              <p className="text-secondary mb-8">
                We&apos;re here to help you succeed. Reach out to us through any of the following channels, 
                and we&apos;ll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      {info.href ? (
                        <a href={info.href} className="text-secondary hover:text-blue-600 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-secondary">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                <p className="text-secondary">
                  We typically respond to inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
              
              {isSubmitted ? (
                <motion.div
                  className="text-center p-8 bg-green-50 rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-secondary">
                    Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 neumorphic-flat rounded-lg focus:neumorphic-convex focus:outline-none transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 neumorphic-flat rounded-lg focus:neumorphic-convex focus:outline-none transition-all duration-300"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 neumorphic-flat rounded-lg focus:neumorphic-convex focus:outline-none transition-all duration-300"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 neumorphic-flat rounded-lg focus:neumorphic-convex focus:outline-none transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 neumorphic-flat rounded-lg focus:neumorphic-convex focus:outline-none transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 neumorphic-flat rounded-lg focus:neumorphic-convex focus:outline-none transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 neumorphic-flat rounded-lg focus:neumorphic-convex focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, requirements, timeline, and any specific goals you have in mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full neumorphic-convex px-6 py-4 rounded-lg text-lg font-semibold text-foreground hover:neumorphic-pressed transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-foreground border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-secondary">
              Common questions about our services and process
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. Small projects typically take 4-8 weeks, while larger enterprise solutions may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you offer ongoing support and maintenance?",
                answer: "Yes, we offer comprehensive support and maintenance packages to ensure your solution continues to perform optimally. This includes bug fixes, security updates, performance monitoring, and feature enhancements."
              },
              {
                question: "What is your pricing model?",
                answer: "We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team arrangements. We'll work with you to find the best approach for your budget and requirements."
              },
              {
                question: "Can you work with existing systems?",
                answer: "Absolutely! We have extensive experience integrating with existing systems, APIs, and databases. We'll assess your current infrastructure and provide seamless integration solutions."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="neumorphic-flat rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-secondary">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}