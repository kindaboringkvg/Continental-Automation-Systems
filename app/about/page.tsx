import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-orange-1 to-orange-2">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-12 mb-6">About Continental Automation Systems</h1>
            <p className="text-xl text-gray-11 max-w-3xl mx-auto">
              Leading the automation revolution with innovative solutions that transform industries and drive
              technological advancement.
            </p>
          </div>

          {/* Company Story */}
          <div className="mb-15 bg-orange-3 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-12 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-11 text-justify">
              <p className="mb-4">
                CONTINENTAL AUTOMATION SYSTEMS PVT. LTD. ( CASL ) was founded in April 1997. It is an ISO 9001 certified company since 1999 and is promoted and <strong>managed by experienced professionals from India’s premier technical educational institutes like IITs</strong>. The CASL is a leading CAD/CAM software solutions provider for woven textile industries.
              </p>
              <p className="mb-4">
                CASL has developed a truly revolutionary Woven textiles designing system, <strong>Continental’s TexDesigner CAD/CAM</strong> for a range of fabrics like Home Furnishings, Woven Labels, Carpets, Decorative Beddings, Curtains, Dress Materials and Woven Wall Coverings. The software is compatible with both electronic as well as mechanical jacquards (through Card punching machines). We have developed Windows OS based multitasking software which includes the most powerful CAD/CAM-tools. The designing, weaving and presentation modules make new design creating and viewing very simple and enhance the creativity of designers tremendously. The software is very cost-effective, technologically superior, dependable, accurate, compatible, easy to operate and all this is backed by a service which makes it virtually trouble-free.
              </p>
              <p className="mb-4">
                CASL is a 100% Export Oriented Unit (EOU) under the Software Technology Parks (STP) scheme, an autonomous society under the Ministry of Information Technology, Government of India. CASL has been a registered member of the Electronics & Computer Software Export Promotion Council (ESC) under the Ministry of Commerce, Government of India. <strong>CASL has been awarded “International Gold Star Award for Quality 2000 on account of corporate achievement in quality & innovation in technology” by Business Initiative Directions, Spain</strong> and <strong>has been selected for the 29th “International Trophy for Quality-New Millennium Award” by the “Trade Leaders Club”</strong> for being a distinguished firm whose product have deserved a universal acclaim throughout the year.
              </p>
              <p className="mb-4">
                A dedicated team of experienced software professionals, textile technologists & designers at CASL, constantly upgrade the system to keep ahead of the changing industry standards and trend forecasts. Also, CASL has a strong marketing team, to cover all over the world textile industries. We are a leader in India and also have a good marketing hold in other Asian & European countries.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Target className="h-12 w-12 text-orange-8 mb-4" />
                <h3 className="text-2xl font-bold text-gray-12 mb-4">Our Mission</h3>
                <p className="text-gray-11 leading-relaxed">
                  To revolutionize industrial processes through cutting-edge automation technology, delivering solutions
                  that enhance efficiency, safety, and productivity for our clients worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Globe className="h-12 w-12 text-orange-8 mb-4" />
                <h3 className="text-2xl font-bold text-gray-12 mb-4">Our Vision</h3>
                <p className="text-gray-11 leading-relaxed">
                  To be the global leader in automation systems, setting industry standards and pioneering innovations
                  that shape the future of manufacturing and industrial operations.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-12 mb-12">Our Core Values</h2>
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
                    <value.icon className="h-12 w-12 text-orange-8 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-12 mb-3">{value.title}</h3>
                    <p className="text-gray-11">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
