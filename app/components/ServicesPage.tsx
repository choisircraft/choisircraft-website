"use client"

import { Code, Cog, ShoppingCart, Star, ArrowRight, Check, Zap, Shield, TrendingUp } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <Cog className="w-12 h-12" />,
      title: "ERP Systems",
      description:
        "Comprehensive enterprise resource planning solutions designed to streamline your business operations and boost productivity.",
      features: [
        "Custom ERP Development",
        "System Integration",
        "Data Migration",
        "Training & Support",
        "Real-time Analytics",
        "Multi-location Support",
      ],
      technologies: ["Java", "Spring Boot", "Angular", "MySQL", "Apache Kafka"],
      color: "green",
      price: "Starting from ₹50,000",
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web & App Development",
      description:
        "Create stunning, responsive websites and mobile applications that engage your audience and drive business growth.",
      features: [
        "Responsive Web Design",
        "Mobile App Development",
        "Progressive Web Apps",
        "API Development",
        "E-commerce Integration",
        "Performance Optimization",
      ],
      technologies: ["React", "Next.js", "React Native", "Node.js", "MongoDB"],
      color: "blue",
      price: "Starting from ₹25,000",
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-Commerce Solutions",
      description:
        "Launch your online store with our comprehensive e-commerce platforms featuring secure payments and inventory management.",
      features: [
        "Online Store Development",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Processing",
        "Customer Management",
        "Analytics Dashboard",
      ],
      technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal"],
      color: "purple",
      price: "Starting from ₹35,000",
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Digital Excellence",
      description:
        "Transform your business with our comprehensive digital transformation services and cloud solutions.",
      features: [
        "Digital Strategy Consulting",
        "Cloud Migration",
        "DevOps Implementation",
        "Digital Marketing Integration",
        "Analytics & Reporting",
        "Automation Solutions",
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
      color: "orange",
      price: "Starting from ₹40,000",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a comprehensive project roadmap.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Our team creates intuitive designs and develops robust solutions.",
      icon: <Code className="w-8 h-8" />,
    },
    {
      step: "03",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your solution meets the highest standards.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing support and maintenance.",
      icon: <TrendingUp className="w-8 h-8" />,
    },
  ]

  const benefits = [
    "24/7 Technical Support",
    "Scalable Solutions",
    "Modern Technologies",
    "Agile Development",
    "Quality Assurance",
    "Competitive Pricing",
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Our <span className="text-green-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300 leading-relaxed">
              Comprehensive digital solutions designed to transform your business and accelerate growth in the digital
              age
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up border border-green-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Check className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${
                        service.color === "green"
                          ? "from-green-400 to-green-600"
                          : service.color === "blue"
                            ? "from-blue-400 to-blue-600"
                            : service.color === "purple"
                              ? "from-purple-400 to-purple-600"
                              : "from-orange-400 to-orange-600"
                      } rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg hover:scale-110 hover:rotate-6 transition-all duration-300`}
                    >
                      {service.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-75"></div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-green-100 hover:text-green-700 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-green-600">{service.price}</p>
                      <p className="text-sm text-gray-500">Custom pricing available</p>
                    </div>
                    <button
                      className={`group bg-gradient-to-r ${
                        service.color === "green"
                          ? "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                          : service.color === "blue"
                            ? "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                            : service.color === "purple"
                              ? "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                              : "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                      } text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg`}
                    >
                      Get Quote
                      <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div
                    className={`bg-gradient-to-br ${
                      service.color === "green"
                        ? "from-green-100 to-green-200"
                        : service.color === "blue"
                          ? "from-blue-100 to-blue-200"
                          : service.color === "purple"
                            ? "from-purple-100 to-purple-200"
                            : "from-orange-100 to-orange-200"
                    } rounded-3xl p-8 transform hover:scale-105 transition-all duration-500`}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                      <div className="text-center">
                        <div className="text-6xl mb-4">
                          {service.color === "green"
                            ? "⚙️"
                            : service.color === "blue"
                              ? "💻"
                              : service.color === "purple"
                                ? "🛒"
                                : "⭐"}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Professional Service</h4>
                        <p className="text-gray-600">End-to-end solution delivery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Our <span className="text-green-600">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              A proven methodology that ensures successful project delivery and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">{step.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-green-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
