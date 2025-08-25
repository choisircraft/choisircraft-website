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
import { Menu, X } from "lucide-react"

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage("home")}>
            <Image
              src="/choisircraft_logo_transparent.png" 
              alt="Choisir Craft Logo"
              width={400} 
              height={200}
              className="h-12 w-auto transition-transform duration-300 hover:scale-105" 
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    currentPage === item.id
                      ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isMenuOpen 
                  ? "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id)
                  setIsMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  currentPage === item.id
                    ? "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}