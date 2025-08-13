"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Cpu,
  Cog,
  Zap,
  Shield,
  ArrowRight,
  Play,
  Monitor,
  Database,
  Cloud,
  Settings,
  BarChart3,
  Lock,
  Wifi,
  Gauge,
} from "lucide-react"
import Image from "next/image"

export default function ProductsPage() {
  const softwareFeatures = [
    {
      icon: Monitor,
      title: "Real-time Monitoring",
      description: "Live dashboard with instant alerts and notifications",
      position: "top-8 left-8",
      delay: "animate-float",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Advanced reporting and predictive insights",
      position: "top-16 right-12",
      delay: "animate-float-delay",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless cloud connectivity and remote access",
      position: "bottom-20 left-16",
      delay: "animate-float",
    },
    {
      icon: Settings,
      title: "Process Control",
      description: "Automated workflow management and optimization",
      position: "bottom-8 right-8",
      delay: "animate-float-delay",
    },
    {
      icon: BarChart3,
      title: "Performance Metrics",
      description: "Comprehensive KPI tracking and analysis",
      position: "top-1/2 left-4",
      delay: "animate-float",
    },
    {
      icon: Lock,
      title: "Security",
      description: "Enterprise-grade security and compliance",
      position: "top-1/2 right-4",
      delay: "animate-float-delay",
    },
  ]

  const hardwareProducts = [
    {
      icon: Cpu,
      title: "Industrial Control Systems",
      description: "Advanced PLC and SCADA systems for comprehensive industrial automation and process control.",
      features: ["Real-time monitoring", "Remote access", "Scalable architecture", "Industry 4.0 ready"],
      image: "/placeholder.svg?height=300&width=400&text=PLC+Control+System",
    },
    {
      icon: Cog,
      title: "Robotic Automation",
      description: "Cutting-edge robotic solutions for manufacturing, assembly, and material handling operations.",
      features: ["Precision control", "AI-powered", "Flexible deployment", "Safety certified"],
      image: "/placeholder.svg?height=300&width=400&text=Robotic+Arm",
    },
    {
      icon: Zap,
      title: "Power Management",
      description: "Intelligent power distribution and management systems for optimal energy efficiency.",
      features: ["Energy optimization", "Load balancing", "Fault detection", "Smart grid integration"],
      image: "/placeholder.svg?height=300&width=400&text=Power+Management",
    },
    {
      icon: Shield,
      title: "Safety Systems",
      description: "Comprehensive safety solutions ensuring worker protection and regulatory compliance.",
      features: ["Emergency stops", "Safety interlocks", "Risk assessment", "Compliance monitoring"],
      image: "/placeholder.svg?height=300&width=400&text=Safety+System",
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF9F6" }}>
      {/* Hero Section with MacBook Mockup - First Thing Visible */}
      <section className="pt-24 pb-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: "#f8e4db", color: "#562005" }}
            >
              <Monitor className="h-4 w-4 mr-2" />
              Software Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: "#1a1a1a" }}>
              Intelligent
              <span className="block" style={{ color: "#562005" }}>
                Automation Software
              </span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: "#6A6A6A" }}>
              Our proprietary software suite provides complete control and visibility over your automation systems
            </p>
          </div>

          {/* Apple MacBook Mockup with Floating Bubbles */}
          <div className="relative max-w-7xl mx-auto">
            {/* MacBook Mockup */}
            <div className="relative z-10 mx-auto max-w-5xl">
              <div className="relative">
                {/* MacBook Lid/Screen */}
                <div className="relative">
                  {/* Screen Bezel */}
                  <div
                    className="rounded-t-3xl p-6 shadow-2xl"
                    style={{
                      background: "linear-gradient(145deg, #e8e8e8, #f5f5f5)",
                      border: "1px solid #d0d0d0",
                    }}
                  >
                    {/* Screen */}
                    <div
                      className="rounded-2xl overflow-hidden relative shadow-inner"
                      style={{
                        aspectRatio: "16/10",
                        background: "linear-gradient(145deg, #000000, #1a1a1a)",
                        border: "2px solid #2a2a2a",
                      }}
                    >
                      {/* Video/Demo Content */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=600&width=960&text=Continental+Automation+Software+Demo"
                          alt="Software Demo Video"
                          fill
                          className="object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-black/30"></div>

                        {/* macOS-style Menu Bar */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800/90 backdrop-blur-sm flex items-center px-4">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="flex-1 text-center">
                            <span className="text-white text-sm font-medium">Continental Automation Suite</span>
                          </div>
                        </div>

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button className="bg-white/20 backdrop-blur-sm rounded-full p-8 hover:bg-white/30 transition-all duration-300 group hover:scale-110">
                            <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
                          </button>
                        </div>

                        {/* Software UI Elements Overlay */}
                        <div className="absolute top-12 left-6 bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-white text-sm font-semibold">System Online</span>
                          </div>
                          <div className="text-green-400 text-sm font-mono">Efficiency: 98.5%</div>
                          <div className="text-blue-400 text-sm font-mono">Uptime: 99.9%</div>
                        </div>

                        <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                          <div className="text-white text-sm mb-2 font-semibold">Active Processes</div>
                          <div className="flex space-x-1">
                            {[...Array(12)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1.5 bg-blue-400 rounded-full animate-pulse"
                                style={{
                                  height: `${Math.random() * 30 + 15}px`,
                                  animationDelay: `${i * 0.1}s`,
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>

                        {/* Additional UI Elements */}
                        <div className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                          <div className="text-white text-xs mb-1">Temperature</div>
                          <div className="text-orange-400 text-lg font-bold">72°C</div>
                        </div>

                        <div className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                          <div className="text-white text-xs mb-1">Production</div>
                          <div className="text-green-400 text-lg font-bold">2,847</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MacBook Base/Keyboard */}
                  <div
                    className="rounded-b-3xl relative shadow-2xl"
                    style={{
                      height: "60px",
                      background: "linear-gradient(145deg, #e8e8e8, #f5f5f5)",
                      border: "1px solid #d0d0d0",
                      borderTop: "none",
                    }}
                  >
                    {/* Keyboard Area */}
                    <div className="absolute inset-x-6 top-3 bottom-3 rounded-xl bg-gray-700/20 flex items-center justify-center">
                      {/* Trackpad */}
                      <div
                        className="w-24 h-8 rounded-lg border border-gray-400/30"
                        style={{ background: "linear-gradient(145deg, #f0f0f0, #e0e0e0)" }}
                      ></div>
                    </div>

                    {/* Apple Logo */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 opacity-30">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-600">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Feature Bubbles */}
            {softwareFeatures.map((feature, index) => (
              <div key={index} className={`absolute ${feature.position} ${feature.delay} z-20 hidden lg:block`}>
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-2xl border border-gray-200/50 max-w-xs group hover:scale-105 transition-all duration-300 hover:shadow-3xl">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl" style={{ backgroundColor: "#f8e4db" }}>
                      <feature.icon className="h-6 w-6" style={{ color: "#562005" }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-base mb-2" style={{ color: "#1a1a1a" }}>
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#6A6A6A" }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Connection Line */}
                  <div className="absolute w-px h-12 bg-gradient-to-b from-gray-300 to-transparent -bottom-12 left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
            ))}

            {/* Background Decorative Elements */}
            <div
              className="absolute -top-32 -left-32 w-64 h-64 rounded-full blur-3xl opacity-10"
              style={{ backgroundColor: "#562005" }}
            ></div>
            <div
              className="absolute -bottom-32 -right-32 w-48 h-48 rounded-full blur-3xl opacity-10"
              style={{ backgroundColor: "#e6855c" }}
            ></div>
          </div>
        </div>
      </section>

      {/* Software Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wifi,
                title: "Remote Connectivity",
                description:
                  "Access and control your systems from anywhere in the world with secure cloud connectivity.",
              },
              {
                icon: Gauge,
                title: "Performance Optimization",
                description:
                  "AI-driven insights help optimize your processes for maximum efficiency and minimal downtime.",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Military-grade encryption and security protocols protect your critical industrial data.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200"
              >
                <CardContent className="p-0">
                  <div className="p-4 rounded-xl mx-auto w-fit mb-6" style={{ backgroundColor: "#f8e4db" }}>
                    <benefit.icon className="h-10 w-10" style={{ color: "#562005" }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#1a1a1a" }}>
                    {benefit.title}
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: "#6A6A6A" }}>
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Showcase Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: "#f8e4db", color: "#562005" }}
            >
              <Cog className="h-4 w-4 mr-2" />
              Hardware Solutions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: "#1a1a1a" }}>
              Industrial
              <span className="block" style={{ color: "#562005" }}>
                Hardware Systems
              </span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: "#6A6A6A" }}>
              Robust, reliable hardware solutions engineered for the most demanding industrial environments
            </p>
          </div>

          {/* Hardware Products Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {hardwareProducts.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-gray-200"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 rounded-xl bg-white/90 backdrop-blur-sm">
                      <product.icon className="h-7 w-7" style={{ color: "#562005" }} />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl" style={{ color: "#1a1a1a" }}>
                    {product.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="mb-6 leading-relaxed text-lg" style={{ color: "#6A6A6A" }}>
                    {product.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#562005" }}></div>
                        <span className="text-lg" style={{ color: "#6A6A6A" }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="group/btn hover:text-white transition-all duration-300 bg-transparent border-2"
                    style={{
                      borderColor: "#562005",
                      color: "#562005",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#562005"
                      e.currentTarget.style.color = "white"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent"
                      e.currentTarget.style.color = "#562005"
                    }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div
            className="rounded-3xl p-12 text-center text-white"
            style={{ background: "linear-gradient(135deg, #562005, #6b331a)" }}
          >
            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h3>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Let our experts help you choose the right automation solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white hover:bg-gray-100 px-10 py-4 text-lg font-semibold"
                style={{ color: "#562005" }}
              >
                Request Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white px-10 py-4 text-lg font-semibold bg-transparent"
                // style={{ "--hover-color": "#562005" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#562005"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "white"
                }}
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
