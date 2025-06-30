"use client"

import { useState, useEffect } from "react"
import { Users, Target, Award, TrendingUp, Clock, Shield, Zap } from "lucide-react"

export default function AboutPage() {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    support: 0,
  })

  const stats = [
    { number: 50, label: "Projects Completed", icon: <Award className="w-8 h-8" /> },
    { number: 30, label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
    { number: 3, label: "Years Experience", icon: <Clock className="w-8 h-8" /> },
    { number: 24, label: "24/7 Support", icon: <Shield className="w-8 h-8" /> },
  ]

  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that drive business growth.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their needs and deliver tailored solutions.",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest quality deliverables.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Efficiency",
      description: "We optimize processes and leverage technology to deliver results faster and more effectively.",
    },
  ]

  const team = [
    {
      name: "Rajesh Kumar",
      role: "CEO & Founder",
      image: "👨‍💼",
      description: "Visionary leader with 10+ years in tech industry",
      skills: ["Leadership", "Strategy", "Innovation"],
    },
    {
      name: "Priya Sharma",
      role: "Lead Developer",
      image: "👩‍💻",
      description: "Full-stack developer specializing in modern web technologies",
      skills: ["React", "Node.js", "Python"],
    },
    {
      name: "Amit Patel",
      role: "UI/UX Designer",
      image: "👨‍🎨",
      description: "Creative designer focused on user-centered design principles",
      skills: ["Figma", "Adobe XD", "Prototyping"],
    },
    {
      name: "Sneha Reddy",
      role: "Project Manager",
      image: "👩‍💼",
      description: "Experienced PM ensuring smooth project delivery",
      skills: ["Agile", "Scrum", "Communication"],
    },
  ]

  // Animated counters
  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        let start = 0
        const end = stat.number
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            start = end
            clearInterval(timer)
          }
          setCounters((prev) => ({
            ...prev,
            [index === 0 ? "projects" : index === 1 ? "clients" : index === 2 ? "years" : "support"]: Math.floor(start),
          }))
        }, 16)
      })
    }

    const timer = setTimeout(animateCounters, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full animate-float opacity-30"
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
              About <span className="text-green-600">Choisir Craft</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300 leading-relaxed">
              Pioneering digital transformation with innovative solutions that empower businesses to thrive in the
              modern world
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {index === 0
                    ? counters.projects
                    : index === 1
                      ? counters.clients
                      : index === 2
                        ? counters.years
                        : counters.support}
                  {index === 0 ? "+" : index === 1 ? "+" : index === 2 ? "+" : "/7"}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-green-600">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Choisir Craft was born from a simple yet powerful vision: to bridge the gap between traditional
                  business operations and cutting-edge digital solutions. Founded in 2021, we've been on a mission to
                  transform how businesses operate in the digital age.
                </p>
                <p>
                  Our journey began when our founders recognized the growing need for businesses to adapt to digital
                  transformation. We started with a small team of passionate developers and designers, united by the
                  belief that technology should empower, not complicate.
                </p>
                <p>
                  Today, we're proud to have helped over 30 businesses across various industries streamline their
                  operations, enhance customer experiences, and achieve sustainable growth through innovative digital
                  solutions.
                </p>
              </div>
            </div>

            <div className="relative animate-fade-in-up animation-delay-300">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and
                    success in the digital marketplace.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Our Vision</h4>
                      <p className="text-sm text-gray-600">Leading digital transformation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Our <span className="text-green-600">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Meet Our <span className="text-green-600">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              The talented individuals behind our success, dedicated to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up text-center border border-gray-100"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
