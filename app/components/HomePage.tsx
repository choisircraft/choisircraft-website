// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import {
//   ChevronLeft,
//   ChevronRight,
//   Check,
//   Star,
//   ShoppingCart,
//   Code,
//   Cog as Cogs,
//   ArrowRight,
//   X // Import the X icon for closing
// } from "lucide-react"

// export default function HomePage() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [typedText, setTypedText] = useState("")
//   const [isTyping, setIsTyping] = useState(true)
//   const [isModalOpen, setIsModalOpen] = useState(false) // State to control modal visibility
//   const [modalContentUrl, setModalContentUrl] = useState("") // State to hold the URL for the modal

//   // Hero Slider Data
//   const slides = [
//     {
//       title: "Digital Excellence",
//       subtitle: "Transforming businesses with cutting-edge technology solutions",
//       cta: "Get Started",
//       image: "/slider-1.jpg", // Ensure you have public/slider-1.jpg
//     },
//     {
//       title: "Web & App Development",
//       subtitle: "Creating responsive and user-friendly digital experiences",
//       cta: "Our Services",
//       image: "/slider-2.jpg", // Ensure you have public/slider-2.jpg
//     },
//     {
//       title: "ERP Solutions",
//       subtitle: "Streamline your business operations with our ERP systems",
//       cta: "View Portfolio",
//       image: "/slider-3.jpg", // Ensure you have public/slider-3.jpg
//     },
//   ]

//   // Services Section Data
//   const services = [
//     {
//       icon: <Cogs className="w-8 h-8 text-blue-600" />,
//       title: "ERP Systems",
//       description: "Comprehensive enterprise resource planning solutions to streamline your business operations, from inventory to financial reporting.",
//       features: ["Inventory Management", "Financial Reporting", "HR Management", "Production Planning"],
//       image: "/erp.png", // Ensure you have public/erp.png
//     },
//     {
//       icon: <Code className="w-8 h-8 text-blue-600" />,
//       title: "Web & App Development",
//       description: "Custom web and mobile applications built with modern technologies and best practices for a seamless user experience.",
//       features: ["Responsive Design", "Mobile Apps (iOS & Android)", "Progressive Web Apps", "API Development"],
//       image: "/development.png", // Ensure you have public/development.png
//     },
//     {
//       icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
//       title: "E-Commerce Solutions",
//       description: "Complete e-commerce platforms with secure payment integration, inventory management, and powerful analytics.",
//       features: ["Online Storefronts", "Secure Payment Gateway", "Order Management", "Sales Analytics"],
//       image: "/ecommerce.png", // Ensure you have public/ecommerce.png
//     },
//     {
//       icon: <Star className="w-8 h-8 text-blue-600" />,
//       title: "Digital Excellence",
//       description: "Comprehensive digital transformation services including strategy, cloud solutions, and automation to elevate your business.",
//       features: ["Digital Strategy", "Cloud Solutions", "Business Analytics", "Process Automation"],
//       image: "/analysis.png", // Ensure you have public/analysis.png
//     },
//   ]

//   // Client Data (Keeping as is if you want to include it)
//   const clients = [
//     { name: "Tech Solutions Inc.", logo: "/erp.png", url: "#" },
//     { name: "Global Pharma Ltd.", logo: "/development.png", url: "#" },
//     { name: "Innovate Ventures", logo: "/ecommerce.png", url: "#" },
//     { name: "Creative Minds Agency", logo: "/analysis.png", url: "#" },
//     { name: "Alpha Logistics", logo: "/erp.png", url: "#" },
//     { name: "Beta Finance Group", logo: "/development.png", url: "#" },
//     { name: "Quantum Leap Inc.", logo: "/ecommerce.png", url: "#" },
//     { name: "Stellar Innovations", logo: "/analysis.png", url: "#" },
//   ];

//   // External Link for Digital Restaurant Menu Plans
//   const digitalMenuPlansLink = "https://sirajbinsyed.github.io/restaurant_menu_system_plans/";

//   // Effect for typing animation on the hero section
//   useEffect(() => {
//     const text = "Welcome to Choisir Craft"
//     let index = 0
//     const timer = setInterval(() => {
//       if (index < text.length) {
//         setTypedText(text.slice(0, index + 1))
//         index++
//       } else {
//         setIsTyping(false)
//         clearInterval(timer)
//       }
//     }, 100)
//     return () => clearInterval(timer)
//   }, [])

//   // Effect for hero slider auto-advance
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [slides.length])

//   // Navigation functions for hero slider
//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
//   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

//   // Handler for opening the modal
//   const handleOpenModal = (url) => {
//     setModalContentUrl(url);
//     setIsModalOpen(true);
//   };

//   // Handler for closing the modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setModalContentUrl(""); // Clear the URL when closing
//   };

//   return (
//     <div className="pt-16 bg-white">
//       {/* 1. Hero Slider Section */}
//       <section className="relative h-screen overflow-hidden">
//         {/* Background particle effects */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(20)].map((_, i) => (
//             <div key={i} className="absolute w-2 h-2 bg-white/20 rounded-full animate-float" style={{left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s`, animationDuration: `${3 + Math.random() * 4}s`}}/>
//           ))}
//         </div>
//         {slides.map((slide, index) => (
//           <div key={index} className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}>
//             <div className="absolute inset-0"><img src={slide.image} alt="Slide Background" className="w-full h-full object-cover"/></div>
//             <div className="flex items-center justify-center h-full text-white text-center px-4 relative z-10 bg-black/40">
//               <div className="max-w-4xl mx-auto">
//                 <div className="mb-4"><span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm animate-fade-in-up">{typedText}{isTyping && <span className="animate-pulse">|</span>}</span></div>
//                 <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-300">{slide.title}</h1>
//                 <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-600 leading-relaxed">{slide.subtitle}</p>
//                 <button className="group bg-white/20 hover:bg-white hover:text-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-900 backdrop-blur-sm border border-white/30">
//                   {slide.cta}
//                   <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//         {/* Navigation Buttons */}
//         <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm group z-20">
//           <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
//         </button>
//         <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm group z-20">
//           <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
//         </button>
//         {/* Dots Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
//           {slides.map((_, index) => (
//             <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"}`}/>
//           ))}
//         </div>
//       </section>

//       {/* 2. Classic Services Section */}
//       <section id="services" className="py-20 md:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//               Our Core Services
//             </h2>
//             <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//               We provide a complete suite of digital services to meet your business needs.
//             </p>
//           </div>
//           <div className="space-y-24">
//             {services.map((service, index) => (
//               <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
//                 <div className={`relative w-full h-80 overflow-hidden rounded-lg shadow-xl ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
//                   <Image
//                     src={service.image}
//                     alt={service.title}
//                     layout="fill"
//                     objectFit="contain"
//                     sizes="(max-width: 768px) 100vw, 50vw"
//                   />
//                 </div>
//                 <div>
//                   <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">{service.icon}</div>
//                   <h3 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h3>
//                   <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
//                   <ul className="space-y-2 mb-8">
//                     {service.features.map((feature) => (
//                       <li key={feature} className="flex items-center">
//                         <Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
//                         <span className="text-gray-700">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <a href="#" className="inline-flex items-center group font-semibold text-blue-600">
//                     Learn More
//                     <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. Dedicated Call to Action for Digital Menu Plans (Opens Modal) */}
//       <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center">
//         <div className="max-w-3xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Revolutionize Your Restaurant's Ordering</h2>
//           <p className="text-lg mb-8 opacity-90">Explore our innovative digital solutions designed to enhance customer experience and streamline operations.</p>
//           <button
//             onClick={() => handleOpenModal(digitalMenuPlansLink)} // Use button to open modal
//             className="inline-flex items-center group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:bg-gray-100"
//           >
//             See Our Digital Restaurant Menu Plans
//             <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//           </button>
//         </div>
//       </section>

//       {/* 4. Clients Section (Optional - uncomment if you want to keep it) */}
//       {/*
//       <section id="clients" className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Trusted Clients</h2>
//             <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We partner with businesses across various industries to drive digital transformation.</p>
//           </div>
//           <div className="flex justify-center items-center space-x-8 overflow-x-auto p-4">
//             {clients.map((client, index) => (
//               <div key={index} className="flex-shrink-0">
//                 <Image src={client.logo} alt={client.name} width={100} height={50} objectFit="contain"/>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       */}

//       {/* Modal Component */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm overflow-y-auto p-4 transition-all duration-300">
//           <div className="relative w-full max-w-screen-lg bg-white rounded-2xl shadow-2xl p-4 animate-fade-in-up">
//             <button
//               onClick={handleCloseModal}
//               className="absolute top-4 right-4 z-20 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//               aria-label="Close modal"
//             >
//               <X className="w-6 h-6 text-gray-700" />
//             </button>
//             <div className="w-full h-[70vh] flex justify-center items-center">
//               {/*
//                 This iframe is how we embed the external page.
//                 You might encounter CORS issues with iframes depending on the server's configuration.
//                 For publicly accessible pages like your example, it usually works.
//               */}
//               <iframe
//                 src={modalContentUrl}
//                 title="Digital Restaurant Menu Plans"
//                 className="w-full h-full rounded-lg border-0"
//                 sandbox="allow-scripts allow-same-origin allow-popups" // Adjust sandbox attributes as needed for security
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

"use client"

import { useState, useEffect, useRef } from "react"
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
  X,
  ExternalLink,
  Github
} from "lucide-react"

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContentUrl, setModalContentUrl] = useState("")
  const showcaseRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState(0)

  // Hero Slider Data
  const slides = [
    {
      title: "Digital Excellence",
      subtitle: "Transforming businesses with cutting-edge technology solutions",
      cta: "Get Started",
      image: "/slider-1.jpg",
      overlay: "bg-gradient-to-r from-blue-900/70 to-purple-900/50"
    },
    {
      title: "Web & App Development",
      subtitle: "Creating responsive and user-friendly digital experiences",
      cta: "Our Services",
      image: "/slider-2.jpg",
      overlay: "bg-gradient-to-r from-indigo-900/70 to-pink-900/50"
    },
    {
      title: "ERP Solutions",
      subtitle: "Streamline your business operations with our ERP systems",
      cta: "View Portfolio",
      image: "/slider-3.jpg",
      overlay: "bg-gradient-to-r from-cyan-900/70 to-emerald-900/50"
    },
  ]

  // Services Section Data
  const services = [
    {
      icon: <Cogs className="w-10 h-10 text-emerald-600" />,
      title: "ERP Systems",
      description: "Comprehensive enterprise resource planning solutions to streamline your business operations, from inventory to financial reporting.",
      features: ["Inventory Management", "Financial Reporting", "HR Management", "Production Planning"],
      image: "/erp.png",
      color: "bg-emerald-100"
    },
    {
      icon: <Code className="w-10 h-10 text-emerald-600" />,
      title: "Web & App Development",
      description: "Custom web and mobile applications built with modern technologies and best practices for a seamless user experience.",
      features: ["Responsive Design", "Mobile Apps (iOS & Android)", "Progressive Web Apps", "API Development"],
      image: "/development.png",
      color: "bg-teal-100"
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-emerald-600" />,
      title: "E-Commerce Solutions",
      description: "Complete e-commerce platforms with secure payment integration, inventory management, and powerful analytics.",
      features: ["Online Storefronts", "Secure Payment Gateway", "Order Management", "Sales Analytics"],
      image: "/ecommerce.png",
      color: "bg-green-100"
    },
    {
      icon: <Star className="w-10 h-10 text-emerald-600" />,
      title: "Digital Excellence",
      description: "Comprehensive digital transformation services including strategy, cloud solutions, and automation to elevate your business.",
      features: ["Digital Strategy", "Cloud Solutions", "Business Analytics", "Process Automation"],
      image: "/analysis.png",
      color: "bg-cyan-100"
    },
  ]

  // Showcase Projects
  const showcaseProjects = [
    {
      id: 1,
      title: "Adstudio (Menswear E-commerce)",
      description: "Full-fledged e-commerce website for a menswear brand, featuring product catalog, secure checkout, and order management.",
      coverImage: "/adstudios.png",
      websiteUrl: "https://adstudios.in/",
      githubUrl: null,
      client: "Adstudio, Kochi",
    },
    {
      id: 2,
      title: "BakeCity Hyper (Restaurant & Hotel)",
      description: "Integrated website for a restaurant, hotel, and bakery, showcasing services, menus, and booking.",
      coverImage: "/bakecity.png",
      websiteUrl: "https://bakecityhyper.com/",
      githubUrl: null,
      client: "BakeCity Hyper, Calicut",
    },
    {
      id: 3,
      title: "Mahesh GANGADHARAN (Portrait Artist)",
      description: "Artist portfolio website to showcase his renowned portrait works and facilitate inquiries.",
      coverImage: "/maheshgangatharan.png",
      websiteUrl: "https://sirajbinsyed.github.io/mahesh/",
      githubUrl: "https://github.com/sirajbinsyed/mahesh",
      client: "Mahesh GANGADHARAN, Portrait Artist",
    }
  ]

  // External Links
  const digitalMenuPlansLink = "https://sirajbinsyed.github.io/restaurant_menu_system_plans/"
  const digitalMenuBasePlanLink = "https://choisircraft.github.io/digital-Menu-Base-Plan/"

  // Typing animation effect
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

  // Hero slider auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  // Navigation functions
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  // Handler for opening the modal
  const handleOpenModal = (url: string) => {
    setModalContentUrl(url)
    setIsModalOpen(true)
  }

  // Handler for closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setModalContentUrl("")
  }

  // Project modal functions
  const openProjectModal = (project: typeof showcaseProjects[number]) => {
    setModalContentUrl(project.websiteUrl || "")
    setIsModalOpen(true)
  }

  // Scroll to showcase
  const scrollToShowcase = () => {
    showcaseRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="pt-16 bg-gray-50 overflow-hidden">
      {/* Hero Slider Section */}
      <section className="relative h-screen overflow-hidden bg-gray-100">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute right-20 top-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt="Slide Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
            </div>

            <div className="flex items-center justify-center h-full text-white px-4 relative z-10">
              <div className="max-w-4xl mx-auto px-8">
                <div className="mb-6">
                  <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10 animate__animated animate__fadeInDown">
                    {typedText}{isTyping && <span className="animate-pulse">|</span>}
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate__animated animate__zoomIn">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                    {slide.title}
                  </span>
                </h1>
                <p className="text-xl mb-8 max-w-2xl text-white/90 leading-relaxed animate__animated animate__fadeInUp animate__delay-1s">
                  {slide.subtitle}
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg animate__animated animate__pulse animate__infinite">
                    {slide.cta}
                  </button>
                  <button
                    onClick={scrollToShowcase}
                    className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all transform hover:scale-105 animate__animated animate__pulse animate__infinite animate__delay-1s"
                  >
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
          <button
            onClick={prevSlide}
            className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Futuristic Contactless Dining Plans Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-vector-green opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-emerald-100 text-emerald-800 rounded-full text-base font-semibold mb-4 animate__animated animate__fadeInDown">
              Futuristic Contactless Dining
            </span>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4 animate__animated animate__zoomIn">Basic Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
              Transform your restaurant with our digital menu solutions
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-10 shadow-xl animate__animated animate__fadeInUp">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 bg-red-500 text-white rounded-full text-lg font-semibold animate__animated animate__pulse animate__infinite">
                60% OFF
              </span>
              <h3 className="text-3xl font-bold text-gray-900 mt-4">₹2000 <span className="line-through text-gray-500">₹5000</span> / First Year</h3>
              <p className="text-gray-600 mt-2">Yearly Renewal: ₹1000</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start animate__animated animate__fadeInUp animate__delay-1s">
                <Check className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Live Menu Management: Instantly upload and update menu items, prices, and descriptions through a simple admin panel.</span>
              </li>
              <li className="flex items-start animate__animated animate__fadeInUp animate__delay-2s">
                <Check className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Real-Time Item Availability: Easily mark items as 'Available' or 'Unavailable' with a single click to keep customers informed.</span>
              </li>
              <li className="flex items-start animate__animated animate__fadeInUp animate__delay-3s">
                <Check className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Dynamic QR Code: One permanent QR code for your restaurant. All menu changes update automatically, no reprinting needed.</span>
              </li>
            </ul>

            {/* <div className="text-center mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 animate__animated animate__fadeInUp animate__delay-4s">See It In Action</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Digital Menu Showcase 1", "Digital Menu Showcase 2", "Digital Menu Showcase 3", "Digital Menu Showcase 4"].map((showcase, index) => (
                  <div key={index} className={`bg-gray-200 h-32 rounded-lg flex items-center justify-center text-gray-700 font-medium animate__animated animate__fadeInUp animate__delay-${index + 5}s`}>
                    {showcase}
                  </div>
                ))}
              </div>
            </div> */}

            <button
              onClick={() => handleOpenModal(digitalMenuBasePlanLink)}
              className="w-full px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-md animate__animated animate__pulse animate__infinite"
            >
              Choose Plan
              <ArrowRight className="inline-block ml-3 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-vector-green opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4 animate__animated animate__fadeInDown">Our Digital Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
              Transformative solutions for the modern business landscape
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="space-y-4 sticky top-8">
                {services.map((service, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-8 py-6 rounded-xl transition-all flex items-center gap-4 shadow-md hover:shadow-lg ${
                      activeTab === index
                        ? 'bg-emerald-100 text-emerald-700 border-l-4 border-emerald-600'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    } animate__animated animate__fadeInLeft animate__delay-${index}s`}
                    onClick={() => setActiveTab(index)}
                  >
                    <div className="p-3 rounded-full bg-white shadow-md">
                      {service.icon}
                    </div>
                    <span className="font-semibold text-lg">{service.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="bg-gray-50 rounded-2xl p-10 shadow-xl animate__animated animate__fadeInRight">
                <div className="relative h-72 mb-10 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                  <div className="relative w-full h-full max-w-[80%] max-h-[80%]">
                    <img
                      src={services[activeTab].image}
                      alt={services[activeTab].title}
                      className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className={`absolute inset-0 ${services[activeTab].color} opacity-20`}></div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4 animate__animated animate__fadeInUp">{services[activeTab].title}</h3>
                <p className="text-gray-600 mb-6 text-lg animate__animated animate__fadeInUp animate__delay-1s">{services[activeTab].description}</p>

                <ul className="space-y-4 mb-8">
                  {services[activeTab].features.map((feature, i) => (
                    <li key={i} className={`flex items-center animate__animated animate__fadeInUp animate__delay-${i + 2}s`}>
                      <Check className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-md animate__animated animate__pulse animate__infinite"
                >
                  Learn more
                  <ArrowRight className="ml-3 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-24 bg-gray-50 relative" ref={showcaseRef}>
        <div className="absolute inset-0 bg-vector-green opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-emerald-100 text-emerald-800 rounded-full text-base font-semibold mb-4 animate__animated animate__fadeInDown">
              Our Works
            </span>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4 animate__animated animate__zoomIn">Project Showcase</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
              Discover how we transform ideas into digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white animate__animated animate__fadeInUp animate__delay-${index}s`}
              >
                <div className="relative h-64" onClick={() => openProjectModal(project)}>
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>

                <div className="absolute top-4 right-4 bg-emerald-100/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  {project.client}
                </div>

                <div className="p-8 bg-white relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                      {project.title.includes("Adstudio") ? "E-commerce" :
                        project.title.includes("BakeCity") ? "Service" : "Portfolio"}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 text-lg line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex space-x-6">
                    {project.websiteUrl && (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener"
                        onClick={(e) => e.stopPropagation()}
                        className="text-base text-emerald-600 hover:text-emerald-800 flex items-center font-semibold"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" /> Visit
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener"
                        onClick={(e) => e.stopPropagation()}
                        className="text-base text-gray-600 hover:text-gray-900 flex items-center font-semibold"
                      >
                        <Github className="w-5 h-5 mr-2" /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Call to Action for Digital Menu Plans */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-teal-800 text-white text-center relative">
        <div className="absolute inset-0 bg-vector-green opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 animate__animated animate__zoomIn">Revolutionize Your Restaurant's Ordering</h2>
          <p className="text-xl mb-10 opacity-90 animate__animated animate__fadeInUp animate__delay-1s">Explore our innovative digital solutions designed to enhance customer experience and streamline operations.</p>
          <button
            onClick={() => handleOpenModal(digitalMenuPlansLink)}
            className="inline-flex items-center group bg-white text-emerald-600 px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:bg-gray-100 animate__animated animate__pulse animate__infinite"
          >
            See Our Digital Restaurant Menu Plans
            <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm overflow-y-auto p-4 transition-all duration-300">
          <div className="relative w-full max-w-screen-lg bg-white rounded-2xl shadow-2xl p-6 animate__animated animate__zoomIn">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-20 p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <div className="w-full h-[70vh] flex justify-center items-center">
              <iframe
                src={modalContentUrl}
                title="Digital Menu Content"
                className="w-full h-full rounded-lg border-0"
                sandbox="allow-scripts allow-same-origin allow-popups"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage