import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Continental Automation Systems</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the automation revolution with innovative solutions that transform industries and drive
              technological advancement.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To revolutionize industrial processes through cutting-edge automation technology, delivering solutions
                  that enhance efficiency, safety, and productivity for our clients worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Globe className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the global leader in automation systems, setting industry standards and pioneering innovations
                  that shape the future of manufacturing and industrial operations.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Excellence",
                  description:
                    "We strive for excellence in every project, delivering solutions that exceed expectations.",
                },
                {
                  icon: Users,
                  title: "Innovation",
                  description: "Continuous innovation drives our development of cutting-edge automation technologies.",
                },
                {
                  icon: Target,
                  title: "Reliability",
                  description:
                    "Our systems are built for reliability, ensuring consistent performance and minimal downtime.",
                },
              ].map((value, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Story */}
          <div className="bg-blue-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Founded with a vision to transform industrial automation, Continental Automation Systems has grown from
                a small engineering firm to a global leader in automation solutions. Our journey began with a simple
                belief: that technology should make industrial processes more efficient, safer, and more sustainable.
              </p>
              <p className="mb-4">
                Over the years, we have developed expertise across multiple industries, from manufacturing and
                automotive to pharmaceuticals and energy. Our team of skilled engineers and technicians work tirelessly
                to create solutions that not only meet today's challenges but anticipate tomorrow's needs.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible in automation, leveraging emerging
                technologies like AI, IoT, and advanced robotics to create smarter, more connected industrial systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
