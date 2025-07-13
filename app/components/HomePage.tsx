"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Star,
  ShoppingCart,
  Code,
  Cog as Cogs,
  ArrowRight,
  X // Import the X icon for closing
} from "lucide-react"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false) // State to control modal visibility
  const [modalContentUrl, setModalContentUrl] = useState("") // State to hold the URL for the modal

  // Hero Slider Data
  const slides = [
    {
      title: "Digital Excellence",
      subtitle: "Transforming businesses with cutting-edge technology solutions",
      cta: "Get Started",
      image: "/slider-1.jpg", // Ensure you have public/slider-1.jpg
    },
    {
      title: "Web & App Development",
      subtitle: "Creating responsive and user-friendly digital experiences",
      cta: "Our Services",
      image: "/slider-2.jpg", // Ensure you have public/slider-2.jpg
    },
    {
      title: "ERP Solutions",
      subtitle: "Streamline your business operations with our ERP systems",
      cta: "View Portfolio",
      image: "/slider-3.jpg", // Ensure you have public/slider-3.jpg
    },
  ]

  // Services Section Data
  const services = [
    {
      icon: <Cogs className="w-8 h-8 text-blue-600" />,
      title: "ERP Systems",
      description: "Comprehensive enterprise resource planning solutions to streamline your business operations, from inventory to financial reporting.",
      features: ["Inventory Management", "Financial Reporting", "HR Management", "Production Planning"],
      image: "/erp.png", // Ensure you have public/erp.png
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Web & App Development",
      description: "Custom web and mobile applications built with modern technologies and best practices for a seamless user experience.",
      features: ["Responsive Design", "Mobile Apps (iOS & Android)", "Progressive Web Apps", "API Development"],
      image: "/development.png", // Ensure you have public/development.png
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
      title: "E-Commerce Solutions",
      description: "Complete e-commerce platforms with secure payment integration, inventory management, and powerful analytics.",
      features: ["Online Storefronts", "Secure Payment Gateway", "Order Management", "Sales Analytics"],
      image: "/ecommerce.png", // Ensure you have public/ecommerce.png
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: "Digital Excellence",
      description: "Comprehensive digital transformation services including strategy, cloud solutions, and automation to elevate your business.",
      features: ["Digital Strategy", "Cloud Solutions", "Business Analytics", "Process Automation"],
      image: "/analysis.png", // Ensure you have public/analysis.png
    },
  ]

  // Client Data (Keeping as is if you want to include it)
  const clients = [
    { name: "Tech Solutions Inc.", logo: "/erp.png", url: "#" },
    { name: "Global Pharma Ltd.", logo: "/development.png", url: "#" },
    { name: "Innovate Ventures", logo: "/ecommerce.png", url: "#" },
    { name: "Creative Minds Agency", logo: "/analysis.png", url: "#" },
    { name: "Alpha Logistics", logo: "/erp.png", url: "#" },
    { name: "Beta Finance Group", logo: "/development.png", url: "#" },
    { name: "Quantum Leap Inc.", logo: "/ecommerce.png", url: "#" },
    { name: "Stellar Innovations", logo: "/analysis.png", url: "#" },
  ];

  // External Link for Digital Restaurant Menu Plans
  const digitalMenuPlansLink = "https://sirajbinsyed.github.io/restaurant_menu_system_plans/";

  // Effect for typing animation on the hero section
  useEffect(() => {
    const text = "Welcome to Choisir Craft"
    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  // Effect for hero slider auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  // Navigation functions for hero slider
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  // Handler for opening the modal
  const handleOpenModal = (url) => {
    setModalContentUrl(url);
    setIsModalOpen(true);
  };

  // Handler for closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContentUrl(""); // Clear the URL when closing
  };

  return (
    <div className="pt-16 bg-white">
      {/* 1. Hero Slider Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background particle effects */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute w-2 h-2 bg-white/20 rounded-full animate-float" style={{left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s`, animationDuration: `${3 + Math.random() * 4}s`}}/>
          ))}
        </div>
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}>
            <div className="absolute inset-0"><img src={slide.image} alt="Slide Background" className="w-full h-full object-cover"/></div>
            <div className="flex items-center justify-center h-full text-white text-center px-4 relative z-10 bg-black/40">
              <div className="max-w-4xl mx-auto">
                <div className="mb-4"><span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm animate-fade-in-up">{typedText}{isTyping && <span className="animate-pulse">|</span>}</span></div>
                <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-300">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-600 leading-relaxed">{slide.subtitle}</p>
                <button className="group bg-white/20 hover:bg-white hover:text-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-900 backdrop-blur-sm border border-white/30">
                  {slide.cta}
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* Navigation Buttons */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm group z-20">
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm group z-20">
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"}`}/>
          ))}
        </div>
      </section>

      {/* 2. Classic Services Section */}
      <section id="services" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Core Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a complete suite of digital services to meet your business needs.
            </p>
          </div>
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`relative w-full h-80 overflow-hidden rounded-lg shadow-xl ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">{service.icon}</div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="inline-flex items-center group font-semibold text-blue-600">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Dedicated Call to Action for Digital Menu Plans (Opens Modal) */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Revolutionize Your Restaurant's Ordering</h2>
          <p className="text-lg mb-8 opacity-90">Explore our innovative digital solutions designed to enhance customer experience and streamline operations.</p>
          <button
            onClick={() => handleOpenModal(digitalMenuPlansLink)} // Use button to open modal
            className="inline-flex items-center group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:bg-gray-100"
          >
            See Our Digital Restaurant Menu Plans
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* 4. Clients Section (Optional - uncomment if you want to keep it) */}
      {/*
      <section id="clients" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Trusted Clients</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We partner with businesses across various industries to drive digital transformation.</p>
          </div>
          <div className="flex justify-center items-center space-x-8 overflow-x-auto p-4">
            {clients.map((client, index) => (
              <div key={index} className="flex-shrink-0">
                <Image src={client.logo} alt={client.name} width={100} height={50} objectFit="contain"/>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm overflow-y-auto p-4 transition-all duration-300">
          <div className="relative w-full max-w-screen-lg bg-white rounded-2xl shadow-2xl p-4 animate-fade-in-up">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-20 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <div className="w-full h-[70vh] flex justify-center items-center">
              {/*
                This iframe is how we embed the external page.
                You might encounter CORS issues with iframes depending on the server's configuration.
                For publicly accessible pages like your example, it usually works.
              */}
              <iframe
                src={modalContentUrl}
                title="Digital Restaurant Menu Plans"
                className="w-full h-full rounded-lg border-0"
                sandbox="allow-scripts allow-same-origin allow-popups" // Adjust sandbox attributes as needed for security
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}