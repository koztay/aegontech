"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Code, Smartphone, Globe, Shield, Zap, Users, TrendingUp, Settings } from "lucide-react";
import Link from "next/link";

export default function ServicesClient() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies like React, Next.js, and Node.js.",
      features: [
        "Progressive Web Apps",
        "E-commerce Solutions",
        "Enterprise Applications",
        "API Development",
        "Real-time Applications",
        "Microservices Architecture"
      ],
      tech: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android with exceptional user experience.",
      features: [
        "iOS & Android Apps",
        "React Native Development",
        "Flutter Development",
        "Native Performance",
        "Offline Functionality",
        "Push Notifications"
      ],
      tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Amplify"]
    },
    {
      icon: Globe,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps solutions to power your business growth.",
      features: [
        "AWS & Azure Deployment",
        "Microservices Architecture",
        "CI/CD Pipelines",
        "Auto-scaling",
        "Load Balancing",
        "Disaster Recovery"
      ],
      tech: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins"]
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Comprehensive security audits and implementations to protect your digital assets.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Solutions",
        "Vulnerability Assessment",
        "Security Training",
        "Incident Response"
      ],
      tech: ["OWASP", "NIST", "SOC 2", "ISO 27001", "Penetration Testing", "Security Scanning"]
    },
    {
      icon: Zap,
      title: "Digital Strategy",
      description: "Strategic consulting to help you leverage technology for business growth and digital transformation.",
      features: [
        "Technology Roadmap",
        "Digital Transformation",
        "Architecture Planning",
        "Performance Optimization",
        "Cost Optimization",
        "Scalability Planning"
      ],
      tech: ["Strategy", "Architecture", "Planning", "Analysis", "Optimization", "Consulting"]
    },
    {
      icon: Users,
      title: "Team Augmentation",
      description: "Extend your team with our expert developers and specialists for short-term or long-term projects.",
      features: [
        "Dedicated Teams",
        "Staff Augmentation",
        "Project-based Hiring",
        "Technical Leadership",
        "Code Reviews",
        "Best Practices"
      ],
      tech: ["Full-stack", "Frontend", "Backend", "DevOps", "Mobile", "QA"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your requirements and create a detailed project roadmap."
    },
    {
      step: "02",
      title: "Design",
      description: "Our team creates intuitive designs and user experiences tailored to your needs."
    },
    {
      step: "03",
      title: "Development",
      description: "We build robust, scalable solutions using industry best practices."
    },
    {
      step: "04",
      title: "Launch",
      description: "We deploy your solution and provide ongoing support and maintenance."
    }
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
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto">
              Comprehensive software development solutions tailored to your business needs
            </p>
            <Link
              href="/contact"
              className="neumorphic-convex px-8 py-4 rounded-lg text-lg font-semibold text-foreground hover:neumorphic-pressed transition-all duration-300 flex items-center gap-2 mx-auto w-fit"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="neumorphic-flat rounded-2xl p-8 hover:neumorphic-convex transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-secondary mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-secondary">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              A proven 4-step process to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-secondary">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-secondary mb-8">
              Let's discuss your requirements and create a custom solution that drives real results.
            </p>
            <Link
              href="/contact"
              className="neumorphic-convex px-8 py-4 rounded-lg text-lg font-semibold text-foreground hover:neumorphic-pressed transition-all duration-300 inline-flex items-center gap-2"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}