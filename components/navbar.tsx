"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact Us", href: "/contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-orange-200/50" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative p-2 rounded-xl transition-all duration-300">
              <img 
                src="/logo.png" 
                alt="Continental Automation Systems Logo" 
                className="w-12 h-12 lg:w-40 lg:h-40 object-contain transition-transform duration-300 group-hover:scale-120"
              />
            </div>
            <div className="hidden sm:block">
              <span
                className={`text-lg lg:text-xl font-bold transition-all duration-300 ${
                  isScrolled ? "text-gray-900" : "text-orange-500"
                }`}
              >
                Continental Automation Systems
              </span>
              <div
                className={`text-xs lg:text-sm font-medium transition-all duration-300 ${
                  isScrolled ? "text-gray-400" : "text-orange-500"
                }`}
              >
                Pvt. Ltd.
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 group overflow-hidden ${
                  pathname === item.href
                    ? isScrolled
                      ? "text-white bg-orange-600 shadow-lg shadow-orange-600/25"
                      : "text-gray-900 bg-white/90 shadow-lg"
                    : isScrolled
                      ? "text-gray-700 hover:text-orange-700 hover:bg-orange-50"
                      : "text-orange-500 hover:text-white hover:bg-white/20"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {pathname !== item.href && (
                  <div className="absolute inset-0 bg-orange-600 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 rounded-xl"></div>
                )}
                {pathname !== item.href && (
                  <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 font-semibold">
                    {item.name}
                  </span>
                )}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Button
              className={`ml-4 px-6 py-2 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
                isScrolled
                  ? "bg-orange-600 hover:bg-orange-700 text-white shadow-orange-600/25"
                  : "bg-white hover:bg-gray-50 text-gray-900"
              }`}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                  isScrolled 
                    ? "text-gray-900 hover:bg-orange-100" 
                    : "text-white hover:bg-white/20"
                }`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px] bg-white">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-orange-100 rounded-xl">
                      <img 
                        src="/logo.png" 
                        alt="Continental Automation Systems Logo" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-gray-900">Continental</span>
                      <div className="text-sm font-medium text-orange-700">Automation Systems</div>
                    </div>
                  </div>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="rounded-xl hover:bg-gray-100">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 py-6">
                  <div className="space-y-2">
                    {navigation.map((item) => (
                      <SheetClose asChild key={item.name}>
                        <Link
                          href={item.href}
                          className={`flex items-center px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 group ${
                            pathname === item.href
                              ? "text-white bg-orange-600 shadow-lg shadow-orange-600/25"
                              : "text-gray-700 hover:text-orange-700 hover:bg-orange-50"
                          }`}
                        >
                          <span className="relative z-10">{item.name}</span>
                          {pathname !== item.href && (
                            <div className="absolute inset-0 bg-orange-600 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 rounded-xl"></div>
                          )}
                          {pathname !== item.href && (
                            <span className="absolute inset-0 z-10 flex items-center px-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 font-semibold">
                              {item.name}
                            </span>
                          )}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <div className="mt-8 space-y-4">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      Get Quote
                    </Button>
                    
                    {/* Contact Info */}
                    <div className="pt-6 border-t border-gray-200 space-y-3">
                      <div className="flex items-center space-x-3 text-gray-600">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Phone className="h-4 w-4 text-orange-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Call Us</div>
                          <div className="text-sm text-gray-500">+91 XXX XXX XXXX</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Mail className="h-4 w-4 text-orange-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Email Us</div>
                          <div className="text-sm text-gray-500">info@continental.com</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}