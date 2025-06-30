"use client"

import { useState } from "react"
import { ExternalLink, Github, Filter, X } from "lucide-react"

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "erp", label: "ERP Systems" },
    { id: "ecommerce", label: "E-Commerce" },
  ]

  const projects = [
    {
      id: 1,
      title: "Restaurant POS System",
      category: "web",
      description: "Complete point-of-sale system with digital menu, order management, and billing integration",
      longDescription:
        "A comprehensive restaurant management system featuring digital menu displays, QR code ordering, real-time order tracking, integrated payment processing, inventory management, and detailed analytics. Built with modern web technologies to provide seamless user experience for both customers and staff.",
      image: "🍽️",
      coverImage: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      features: [
        "Digital Menu Management",
        "QR Code Ordering",
        "Real-time Order Tracking",
        "Payment Integration",
        "Inventory Management",
        "Staff Management Panel",
        "Customer Feedback System",
        "Sales Analytics",
      ],
      demoUrl: "https://restaurant-pos-demo.choisircraft.com",
      githubUrl: "https://github.com/choisircraft/restaurant-pos",
      status: "Completed",
      client: "Spice Garden Restaurant",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "ecommerce",
      description: "Full-featured online store with payment gateway, inventory management, and admin panel",
      longDescription:
        "Modern e-commerce solution with advanced product catalog, secure payment processing, order management, customer accounts, wishlist functionality, and comprehensive admin dashboard. Optimized for performance and SEO.",
      image: "🛍️",
      coverImage: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "Tailwind CSS"],
      features: [
        "Product Catalog Management",
        "Shopping Cart & Checkout",
        "Payment Gateway Integration",
        "Order Management",
        "User Authentication",
        "Admin Dashboard",
        "Inventory Tracking",
        "Email Notifications",
      ],
      demoUrl: "https://ecommerce-demo.choisircraft.com",
      githubUrl: "https://github.com/choisircraft/ecommerce-platform",
      status: "Completed",
      client: "Fashion Hub",
    },
    {
      id: 3,
      title: "Manufacturing ERP",
      category: "erp",
      description:
        "Enterprise resource planning system for manufacturing company with inventory and production tracking",
      longDescription:
        "Comprehensive ERP solution designed for manufacturing operations, featuring production planning, quality control, supply chain management, financial reporting, and real-time analytics dashboard.",
      image: "📊",
      coverImage: "/placeholder.svg?height=300&width=400",
      technologies: ["Angular", "Java Spring Boot", "MySQL", "Apache Kafka", "Docker"],
      features: [
        "Production Planning",
        "Inventory Management",
        "Quality Control",
        "Supply Chain Management",
        "Financial Reporting",
        "HR Management",
        "Equipment Maintenance",
        "Real-time Analytics",
      ],
      demoUrl: "https://erp-demo.choisircraft.com",
      githubUrl: "https://github.com/choisircraft/manufacturing-erp",
      status: "Completed",
      client: "TechManu Industries",
    },
    {
      id: 4,
      title: "Food Delivery App",
      category: "mobile",
      description: "Mobile application for food delivery with real-time tracking and payment integration",
      longDescription:
        "Cross-platform mobile application for food delivery service with restaurant discovery, menu browsing, order placement, real-time tracking, and integrated payment system. Available on both iOS and Android.",
      image: "📱",
      coverImage: "/placeholder.svg?height=300&width=400",
      technologies: ["React Native", "Firebase", "Razorpay", "Google Maps API", "Redux"],
      features: [
        "Restaurant Discovery",
        "Menu Browsing",
        "Order Placement",
        "Real-time Tracking",
        "Payment Integration",
        "Rating & Reviews",
        "Push Notifications",
        "Order History",
      ],
      demoUrl: "https://foodapp-demo.choisircraft.com",
      githubUrl: "https://github.com/choisircraft/food-delivery-app",
      status: "Completed",
      client: "QuickBite Delivery",
    },
    {
      id: 5,
      title: "Hotel Booking System",
      category: "web",
      description: "Online booking platform with room management, payment processing, and customer portal",
      longDescription:
        "Comprehensive hotel management system with online booking, room availability checking, guest management, payment processing, and administrative tools for hotel operations.",
      image: "🏨",
      coverImage: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "PayPal API"],
      features: [
        "Room Availability Search",
        "Booking Management",
        "Payment Processing",
        "Guest Check-in/out",
        "Room Service Management",
        "Reporting Dashboard",
        "Email Confirmations",
        "Multi-language Support",
      ],
      demoUrl: "https://hotel-booking-demo.choisircraft.com",
      githubUrl: "https://github.com/choisircraft/hotel-booking",
      status: "Completed",
      client: "Grand Palace Hotel",
    },
    {
      id: 6,
      title: "CRM Dashboard",
      category: "web",
      description: "Customer relationship management system with analytics, lead tracking, and automation",
      longDescription:
        "Advanced CRM system for managing customer relationships, tracking leads, automating sales processes, and generating detailed reports and analytics for business growth.",
      image: "👥",
      coverImage: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Express.js", "MongoDB", "Chart.js", "SendGrid"],
      features: [
        "Lead Management",
        "Customer Database",
        "Sales Pipeline",
        "Task Management",
        "Email Integration",
        "Reporting & Analytics",
        "Contact Management",
        "Deal Tracking",
      ],
      demoUrl: "https://crm-demo.choisircraft.com",
      githubUrl: "https://github.com/choisircraft/crm-system",
      status: "Completed",
      client: "SalesForce Pro",
    },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
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
              Our <span className="text-green-600">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300 leading-relaxed">
              Showcasing our successful projects and innovative digital solutions that have transformed businesses
              across various industries
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 animate-fade-in-up ${
                  selectedCategory === category.id
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-md"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Filter className="inline-block w-4 h-4 mr-2" />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.coverImage || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white text-4xl">{project.image}</div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      {categories
                        .find((cat) => cat.id === project.category)
                        ?.label.replace(" Development", "")
                        .replace(" Systems", "")
                        .replace("E-Commerce", "Shop")}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Client: {project.client}</span>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors duration-300">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                        <Github className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="relative h-64 bg-gradient-to-br from-green-400 to-green-600 rounded-xl overflow-hidden mb-6">
                    <img
                      src={selectedProject.coverImage || "/placeholder.svg"}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 text-white text-6xl">{selectedProject.image}</div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech: string, index: number) => (
                          <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Project Details</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>
                          <span className="font-medium">Client:</span> {selectedProject.client}
                        </p>
                        <p>
                          <span className="font-medium">Status:</span> {selectedProject.status}
                        </p>
                        <p>
                          <span className="font-medium">Category:</span>{" "}
                          {categories.find((cat) => cat.id === selectedProject.category)?.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Project Description</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{selectedProject.longDescription}</p>

                  <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Demo</span>
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
