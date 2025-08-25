// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { Menu, X } from "lucide-react"

// interface NavigationProps {
//   currentPage: string
//   setCurrentPage: (page: string) => void
// }

// export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const navItems = [
//     { id: "home", label: "Home" },
//     { id: "about", label: "About" },
//     { id: "services", label: "Services" },
//     { id: "portfolio", label: "Portfolio" },
//     { id: "contact", label: "Contact" },
//   ]

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage("home")}>
//             <Image
//               src="/choisircraft_logo_transparent.png" 
//               alt="Choisir Craft Logo"
//               width={400} 
//               height={200}
//               // === CHANGE IS HERE: Increased h-10 to h-12 ===
//               className="h-12 w-auto transition-transform duration-300 hover:scale-105" 
//               priority
//             />
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => setCurrentPage(item.id)}
//                   className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
//                     currentPage === item.id ? "text-green-600" : "text-gray-700 hover:text-green-600"
//                   }`}
//                 >
//                   {item.label}
//                   <span
//                     className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-green-600 transform origin-left transition-transform duration-300 ${
//                       currentPage === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
//                     }`}
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-700 hover:text-green-600 transition-colors duration-300"
//             >
//               {isMenuOpen ? (
//                 <X className="w-6 h-6 transform rotate-180 transition-transform duration-300" />
//               ) : (
//                 <Menu className="w-6 h-6 transform transition-transform duration-300" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div
//         className={`md:hidden transition-all duration-300 ease-in-out ${
//           isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
//         }`}
//       >
//         <div className="bg-white/95 backdrop-blur-md border-t border-gray-200">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {navItems.map((item, index) => (
//               <button
//                 key={item.id}
//                 onClick={() => {
//                   setCurrentPage(item.id)
//                   setIsMenuOpen(false)
//                 }}
//                 className={`block w-full text-left px-3 py-2 text-base font-medium transition-all duration-300 transform ${
//                   currentPage === item.id
//                     ? "text-green-600 bg-green-50 translate-x-2"
//                     : "text-gray-700 hover:text-green-600 hover:bg-green-50 hover:translate-x-2"
//                 }`}
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, Phone, ChevronDown } from "lucide-react"

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2" 
          : "bg-white/90 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo (Left) */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={() => setCurrentPage("home")}
          >
            <Image
              src="/choisircraft_logo_transparent.png"
              alt="Choisir Craft Logo"
              width={160}
              height={60}
              className="h-10 w-auto md:h-12"
              priority
            />
          </div>

          {/* Center Navigation */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-2xl p-1.5 shadow-sm border border-gray-100">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    currentPage === item.id
                      ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-200"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                  {(hoveredItem === item.id || currentPage === item.id) && (
                    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-500 ${currentPage === item.id ? "animate-pulse" : ""}`}></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side Contact */}
          <div className="hidden md:flex ml-auto flex-shrink-0 items-center">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-50 to-cyan-50 px-4 py-2.5 rounded-xl border border-emerald-100 shadow-sm">
              <div className="bg-emerald-500 p-1.5 rounded-full">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-600">Available 24/7</p>
                <p className="text-emerald-700 font-bold text-sm">+91 94952 57093</p>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0 ml-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                isMenuOpen
                  ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
              }`}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200/50 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id)
                  setIsMenuOpen(false)
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 flex items-center justify-between ${
                  currentPage === item.id
                    ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
            ))}

            {/* Contact section in mobile menu */}
            <div className="mt-4 pt-4 border-t border-gray-200/50">
              <div className="flex items-center space-x-3 bg-gradient-to-r from-emerald-50 to-cyan-50 p-4 rounded-xl border border-emerald-100">
                <div className="bg-emerald-500 p-2 rounded-full shadow-sm">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Call us anytime</p>
                  <p className="text-emerald-700 font-bold">+91 94952 57093</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}