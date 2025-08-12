import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play, Cpu, Code, Zap, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <video
            src="/1.mp4" // your video file path
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          ></video>

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center max-w-5xl mx-auto">
              {/* Company Logo/Icon */}
              <div className="mb-4 animate-fade-in">
                <div className="inline-flex items-center justify-center w-75 h-75 rounded-2xl mb-4 overflow-hidden">
                  <Image
                    src="/logo.png" 
                    alt="Continental Automation Systems Logo" 
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="mb-8 animate-slide-up">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                  Continental Automation
                  <span className="block text-orange-7 text-4xl sm:text-5xl lg:text-6xl mt-2">Systems</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 font-light">Pvt. Ltd.</p>
              </div>

              {/* Tagline */}
              <div className="mb-12 animate-fade-in-delay">
                <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                  Pioneering the future of industrial automation with cutting-edge technology and innovative solutions
                  that transform manufacturing processes worldwide.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delay justify-center">
                <Button
                  size="lg"
                  className="bg-orange-9 hover:bg-orange-9 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-orange-8/25 transition-all duration-300 hover:scale-105 group"
                >
                  Explore Our Solutions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm bg-white/10 transition-all duration-300 hover:scale-105 group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 animate-fade-in-delay-2 max-w-4xl mx-auto">
                {[
                  { number: "500+", label: "Projects Completed" },
                  { number: "50+", label: "Countries Served" },
                  { number: "25+", label: "Years Experience" },
                  { number: "99%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-sm sm:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weaving Machines Section */}
      <section className="py-20 bg-gradient-to-br from-orange-1 to-orange-2 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 3D Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-3 to-orange-4">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Advanced Weaving Machine"
                  fill
                  className="object-cover"
                />
                {/* 3D Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-8/20 via-transparent to-orange-9/20"></div>

                {/* Floating Elements */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float">
                  <Cpu className="h-6 w-6 text-orange-8" />
                </div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float-delay">
                  <Zap className="h-6 w-6 text-orange-7" />
                </div>
                <div className="absolute top-1/2 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg animate-pulse">
                  <div className="text-xs font-semibold text-gray-800">AI Powered</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-orange-3 text-orange-9 rounded-full text-sm font-medium mb-6">
                <Cpu className="h-4 w-4 mr-2" />
                Advanced Manufacturing
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Precision
                <span className="text-blue-600 block">Weaving Machines</span>
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Revolutionary weaving technology that combines traditional craftsmanship with cutting-edge automation.
                Our machines deliver unparalleled precision, efficiency, and quality in textile production.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "AI-powered pattern recognition and quality control",
                  "Real-time monitoring and predictive maintenance",
                  "Energy-efficient operation with 40% power savings",
                  "Seamless integration with existing production lines",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-8 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-8 hover:bg-orange-9 text-white px-8 py-4 rounded-xl group">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 rounded-xl hover:bg-gray-50 bg-transparent">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-12 via-orange-12 to-gray-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-orange-8/20 text-orange-5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Code className="h-4 w-4 mr-2" />
                Digital Solutions
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Intelligent
                <span className="text-orange-7 block">Software Services</span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive software solutions that bridge the gap between hardware and intelligence. Our custom
                applications and platforms optimize your entire automation ecosystem.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Code, title: "Custom Development", desc: "Tailored software solutions" },
                  { icon: Cpu, title: "System Integration", desc: "Seamless connectivity" },
                  { icon: Shield, title: "Cybersecurity", desc: "Industrial-grade protection" },
                  { icon: Zap, title: "Real-time Analytics", desc: "Data-driven insights" },
                ].map((service, index) => (
                  <Card
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <CardContent className="p-4">
                      <service.icon className="h-8 w-8 text-orange-7 mb-3" />
                      <h3 className="text-white font-semibold mb-1">{service.title}</h3>
                      <p className="text-gray-400 text-sm">{service.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-8 hover:bg-orange-9 text-white px-8 py-4 rounded-xl group">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl bg-transparent"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>

            {/* 3D Visual */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 to-blue-900">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Software Development Interface"
                  fill
                  className="object-cover opacity-90"
                />

                {/* Code Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-8/30 via-transparent to-orange-9/30"></div>

                {/* Floating Code Elements */}
                <div className="absolute top-8 left-8 bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 shadow-xl animate-float font-mono text-sm">
                  <div className="text-green-400">{"> system.status()"}</div>
                  <div className="text-blue-400">{"  online: true"}</div>
                  <div className="text-yellow-400">{"  efficiency: 98%"}</div>
                </div>

                <div className="absolute bottom-8 right-8 bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 shadow-xl animate-float-delay">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-semibold">AI Processing</span>
                  </div>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-7 to-orange-8 rounded-full animate-pulse"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-6 shadow-2xl animate-spin-slow">
                  <Code className="h-12 w-12 text-orange-7" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}