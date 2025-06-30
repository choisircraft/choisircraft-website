"use client"

import { Check, Phone, Mail, MapPin, ArrowRight } from "lucide-react"

interface FooterProps {
  setCurrentPage: (page: string) => void
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const quickLinks = [
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ]

  const services = [
    "ERP Systems",
    "Web Development",
    "Mobile Apps",
    "E-Commerce",
    "Digital Marketing",
    "Cloud Solutions",
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6 group cursor-pointer" onClick={() => setCurrentPage("home")}>
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold group-hover:text-green-400 transition-colors duration-300">
                    CHOISIR
                  </span>
                  <span className="text-2xl font-bold text-green-400 ml-1">CRAFT</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Transforming businesses with cutting-edge technology solutions. We specialize in creating innovative
                digital experiences that drive growth and success.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: "📧", link: "mailto:choisircraft@gmail.com" },
                  { icon: "📱", link: "https://api.whatsapp.com/send/?phone=919744849679" },
                  { icon: "💼", link: "#" },
                  { icon: "🔗", link: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-10 h-10 bg-gray-700 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold text-green-400 mb-6 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-green-400 rounded-full"></div>
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={link.id}
                    onClick={() => setCurrentPage(link.id)}
                    className="flex items-center text-gray-300 hover:text-green-400 transition-all duration-300 group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold text-green-400 mb-6 relative">
                Our Services
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-green-400 rounded-full"></div>
              </h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300 cursor-pointer group"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold text-green-400 mb-6 relative">
                Contact Info
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-green-400 rounded-full"></div>
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a
                      href="tel:+919495257093"
                      className="text-white hover:text-green-400 transition-colors duration-300"
                    >
                      +91 94952 57093
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href="mailto:choisircraft@gmail.com"
                      className="text-white hover:text-green-400 transition-colors duration-300"
                    >
                      choisircraft@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; 2024 Choisir Craft. All rights reserved. Made with ❤️ in India
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
