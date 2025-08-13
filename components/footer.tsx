"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Settings,
  ArrowRight,
  Award,
  Shield,
  Zap,
} from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-12 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex justify-start items-center mb-6">
              <Image 
                src="/logo.png" 
                width={160}
                height={160}
                alt="Continental Automation Systems Logo" 
                className="object-contain"
              />
            </div>

            <p className="text-gray-8 mb-6 leading-relaxed text-justify">
              We are a professionally managed organization with a solid track record in Woven Taxtiles Design Systems Worldwide. We are easy weave Label Weaving Machine Vendor and CAD/CAM Software service Provider.
            </p>

            {/* Certifications */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wide">Certifications</h4>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2 bg-gray-11 px-3 py-1 rounded-full">
                  <Award className="h-4 w-4 text-orange-7" />
                  <span className="text-xs text-gray-8">ISO 9001</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-11 px-3 py-1 rounded-full">
                  <Shield className="h-4 w-4 text-orange-8" />
                  <span className="text-xs text-gray-8">CE Certified</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-11 px-3 py-1 rounded-full">
                  <Zap className="h-4 w-4 text-blue-400" />
                  <span className="text-xs text-gray-8">Industry 4.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Products", href: "/products" },
                { name: "Weaving Machines", href: "/products#weaving" },
                { name: "Software Services", href: "/products#software" },
                { name: "Contact Us", href: "/contact" },
                { name: "Support", href: "/support" },
                { name: "Downloads", href: "/downloads" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-8 hover:text-orange-7 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Industrial Automation",
                "Process Control Systems",
                "Robotic Solutions",
                "Custom Software Development",
                "System Integration",
                "Maintenance & Support",
                "Training & Consultation",
                "Remote Monitoring",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-8 hover:text-orange-7 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-7 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-8">
                  <p>123 Industrial Avenue</p>
                  <p>Tech Park, Suite 456</p>
                  <p>Mumbai, Maharashtra 400001</p>
                  <p>India</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-7 flex-shrink-0" />
                <div className="text-sm text-gray-8">
                  <p>+91 22 1234 5678</p>
                  <p>+91 22 8765 4321</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-7 flex-shrink-0" />
                <div className="text-sm text-gray-8">
                  <p>info@continentalautomation.com</p>
                  <p>sales@continentalautomation.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-7 flex-shrink-0" />
                <div className="text-sm text-gray-8">
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-11 p-4 rounded-lg">
              <h4 className="text-sm font-semibold mb-3">Stay Updated</h4>
              <p className="text-xs text-gray-2 mb-4">
                Subscribe to our newsletter for the latest automation insights and product updates.
              </p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 text-sm"
                />
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600 px-3">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Bottom Bar */}
      <div className="border-t border-gray-11">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social Media Links */}
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-9">Follow Us:</span>
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Youtube, href: "#", label: "YouTube" },
                ].map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="text-gray-9 hover:text-orange-7 transition-colors duration-200 p-2 hover:bg-orange-500 rounded-full"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Awards & Recognition */}
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-7">25+</div>
                <div className="text-xs text-gray-9">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-8">500+</div>
                <div className="text-xs text-gray-9">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">50+</div>
                <div className="text-xs text-gray-9">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Legal */}
      <div className="border-t border-gray-11 bg-gray-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-9">
              © {currentYear} Continental Automation Systems Pvt. Ltd. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-9 hover:text-orange-7 transition-colors duration-200"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Additional Legal Text */}
          <div className="mt-4 pt-4 border-t border-gray-11">
            <p className="text-xs text-gray-10 text-center">
              Continental Automation Systems Pvt. Ltd. is a registered trademark. All product names, logos, and brands
              are property of their respective owners. All company, product and service names used in this website are
              for identification purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
