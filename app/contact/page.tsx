import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-orange-1 to-orange-2">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-12 mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-10 max-w-3xl mx-auto">
              Ready to discuss your automation needs? Our team of experts is here to help you find the perfect solution
              for your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-gray-12">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-11 mb-2">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-11 mb-2">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-11 mb-2">Email</label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-11 mb-2">Company</label>
                    <Input placeholder="Your Company Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-11 mb-2">Subject</label>
                    <Input placeholder="How can we help you?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-11 mb-2">Message</label>
                    <Textarea placeholder="Tell us about your automation requirements..." rows={5} />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-orange-8 hover:bg-orange-9 text-white py-3 text-lg font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-orange-8 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-12 mb-2">Our Location</h3>
                      <p className="text-gray-10">
                        F55 Industrial Area
                        <br />
                        Chopanki, Bhiwadi
                        <br />
                        Rajasthan 301019
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-orange-8 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-12 mb-2">Phone</h3>
                      <p className="text-gray-10">
                        +91 83769 42945
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-orange-8 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-12 mb-2">Email</h3>
                      <p className="text-gray-10">
                        info@continentalsystems.in
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-orange-8 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-12 mb-2">Business Hours</h3>
                      <p className="text-gray-10">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
