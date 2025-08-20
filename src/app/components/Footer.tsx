import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AegonTech
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6 max-w-sm">
                Crafting exceptional digital experiences through innovative technology and design. 
                We transform ideas into powerful, scalable solutions.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://twitter.com/aegontech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
                >
                  <Twitter className="w-5 h-5 text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors" />
                </a>
                <a 
                  href="https://github.com/aegontech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
                >
                  <Github className="w-5 h-5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://linkedin.com/company/aegontech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-6">
                Services
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/services" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-base">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-base">
                    Mobile Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-base">
                    Cloud Architecture
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-base">
                    AI Integration
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-6">
                Company
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-base">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-base">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-base">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-base">
                  Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a href="mailto:hello@aegontech.dev" className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  <Mail className="w-5 h-5" />
                  <span className="text-base">hello@aegontech.dev</span>
                </a>
                <a href="tel:+1-555-TECH-001" className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  <Phone className="w-5 h-5" />
                  <span className="text-base">+1 (555) TECH-001</span>
                </a>
                <div className="flex items-start space-x-3 text-slate-600 dark:text-slate-400">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <span className="text-base">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              © 2024 AegonTech. All rights reserved. Built with Next.js & Tailwind CSS.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 text-sm transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 text-sm transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}