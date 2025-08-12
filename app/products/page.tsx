import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cpu, Cog, Zap, Shield, ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      icon: Cpu,
      title: "Industrial Control Systems",
      description: "Advanced PLC and SCADA systems for comprehensive industrial automation and process control.",
      features: ["Real-time monitoring", "Remote access", "Scalable architecture", "Industry 4.0 ready"],
    },
    {
      icon: Cog,
      title: "Robotic Automation",
      description: "Cutting-edge robotic solutions for manufacturing, assembly, and material handling operations.",
      features: ["Precision control", "AI-powered", "Flexible deployment", "Safety certified"],
    },
    {
      icon: Zap,
      title: "Power Management",
      description: "Intelligent power distribution and management systems for optimal energy efficiency.",
      features: ["Energy optimization", "Load balancing", "Fault detection", "Smart grid integration"],
    },
    {
      icon: Shield,
      title: "Safety Systems",
      description: "Comprehensive safety solutions ensuring worker protection and regulatory compliance.",
      features: ["Emergency stops", "Safety interlocks", "Risk assessment", "Compliance monitoring"],
    },
  ]

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-orange-1 to-orange-2">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-12 mb-6">Our Products & Solutions</h1>
            <p className="text-xl text-gray-11 max-w-3xl mx-auto">
              Comprehensive automation solutions designed to optimize your industrial processes and drive operational
              excellence.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-orange-3 rounded-lg group-hover:bg-orange-8 transition-colors duration-300">
                      <product.icon className="h-8 w-8 text-orange-8 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-2xl text-gray-12">{product.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-11 mb-6 leading-relaxed">{product.description}</p>
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-8 rounded-full"></div>
                        <span className="text-gray-11">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="group/btn hover:bg-orange-8 hover:text-white transition-all duration-300 bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-orange-8 to-orange-9 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-orange-2 mb-8 max-w-2xl mx-auto">
              Let our experts help you choose the right automation solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-orange-8 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Request Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-8 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
