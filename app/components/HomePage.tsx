"use client"

import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Star,
  ShoppingCart,
  Code,
  CogIcon as Cogs,
  ArrowRight,
} from "lucide-react"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  const slides = [
    {
      title: "Digital Excellence",
      subtitle: "Transforming businesses with cutting-edge technology solutions",
      cta: "Get Started",
      image: "/slider-1.jpg",
    },
    {
      title: "Web & App Development",
      subtitle: "Creating responsive and user-friendly digital experiences",
      cta: "Our Services",
      image: "/slider-2.jpg",
    },
    {
      title: "ERP Solutions",
      subtitle: "Streamline your business operations with our ERP systems",
      cta: "View Portfolio",
      image: "/slider-3.jpg",
    },
  ]

  const services = [
    {
      icon: <Cogs className="w-8 h-8" />,
      title: "ERP Systems",
      description:
        "Comprehensive enterprise resource planning solutions to streamline your business operations",
      features: ["Inventory Management", "Financial Reporting", "HR Management", "Production Planning"],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web & App Development",
      description:
        "Custom web and mobile applications built with modern technologies and best practices",
      features: ["Responsive Design", "Mobile Apps", "Progressive Web Apps", "API Development"],
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Solutions",
      description:
        "Complete e-commerce platforms with payment integration and inventory management",
      features: ["Online Stores", "Payment Gateway", "Order Management", "Analytics"],
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Digital Excellence",
      description:
        "Comprehensive digital transformation services to elevate your business presence",
      features: ["Digital Strategy", "Cloud Solutions", "Analytics", "Automation"],
    },
  ]

  const pricingPlans = [
    {
      name: "Base Plan",
      price: "₹2,000",
      color: "green",
      features: ["Updated Menu", "QR Requirements", "Ad Support"],
      whatsappLink:
        "https://api.whatsapp.com/send/?phone=919744849679&text=I%27m+interested+in+the+Base+Plan+for+the+contactless+dining+system&type=phone_number&app_absent=0",
    },
    {
      name: "Standard Plan",
      price: "₹5,000",
      color: "blue",
      popular: true,
      features: ["Updated Menu", "Admin Panel", "App or Web", "Customer Suggestions"],
      whatsappLink:
        "https://api.whatsapp.com/send/?phone=919744849679&text=I%27m+interested+in+the+Standard+Plan+for+the+contactless+dining+system&type=phone_number&app_absent=0",
    },
    {
      name: "Premium Plan",
      price: "₹15,000",
      color: "orange",
      features: [
        "All Standard Features",
        "Full Customization",
        "Payment Gateway",
        "Admin & Staff Panel",
        "Google Review Integration",
        "Online Ordering",
        "Billing System",
      ],
      whatsappLink:
        "https://api.whatsapp.com/send/?phone=919744849679&text=I%27m+interested+in+the+Premium+Plan+for+the+contactless+dining+system&type=phone_number&app_absent=0",
    },
  ]

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="pt-16">
      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-white/20 rounded-full animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt="Slide"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-center h-full text-white text-center px-4 relative z-10 bg-black/40">
              <div className="max-w-4xl mx-auto">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm animate-fade-in-up">
                    {typedText}
                    {isTyping && <span className="animate-pulse">|</span>}
                  </span>
                </div>
                <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-300">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-600 leading-relaxed">
                  {slide.subtitle}
                </p>
                <button className="group bg-white/20 hover:bg-white hover:text-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-900 backdrop-blur-sm border border-white/30">
                  {slide.cta}
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm group"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full -translate-x-32 -translate-y-32 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full translate-x-48 translate-y-48 opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Our <span className="text-green-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              Comprehensive digital solutions designed to transform your business and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up border border-gray-100"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    {service.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping opacity-75 group-hover:opacity-100"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Digital Menu <span className="text-green-600">Plans</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              Choose the perfect plan for your restaurant's digital transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up border-2 ${
                  plan.popular
                    ? "scale-105 border-blue-500 bg-gradient-to-br from-blue-50 to-white"
                    : plan.color === "green"
                      ? "border-green-200 hover:border-green-400"
                      : plan.color === "orange"
                        ? "border-orange-200 hover:border-orange-400"
                        : "border-gray-200"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                    <div
                      className={`text-5xl font-bold mb-2 ${
                        plan.color === "green"
                          ? "text-green-500"
                          : plan.color === "blue"
                            ? "text-blue-500"
                            : "text-orange-500"
                      }`}
                    >
                      {plan.price}
                    </div>
                    <p className="text-gray-500">per setup</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center group">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors duration-300">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={plan.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                      plan.color === "green"
                        ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                        : plan.color === "blue"
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                          : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                    }`}
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
