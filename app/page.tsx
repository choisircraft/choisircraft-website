"use client"

import { useState } from "react"
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import ServicesPage from "./components/ServicesPage"
import PortfolioPage from "./components/PortfolioPage"
import ContactPage from "./components/ContactPage"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

export default function ChoisirCraftWebsite() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />
      case "about":
        return <AboutPage />
      case "services":
        return <ServicesPage />
      case "portfolio":
        return <PortfolioPage />
      case "contact":
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="transition-all duration-500 ease-in-out">{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}
