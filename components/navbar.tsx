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
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-xl border-orange-200/50"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 lg:h-20">
          {/* Left spacer for mobile (matches mobile menu button width) */}
          <div className="w-10 lg:hidden"></div>
          
          {/* Logo - Centered on mobile/tablet, left-aligned on desktop */}
          <div className="flex-1 lg:flex-initial flex justify-center lg:justify-start">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative p-2 rounded-xl transition-all duration-300">
                <img 
                  src="/logo.png" 
                  alt="Continental Automation Systems Logo" 
                  className="w-40 h-40 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="hidden lg:block">
                <span
                  className={`text-xl font-bold transition-all duration-300 ${
                    isScrolled ? "text-gray-900" : "text-orange-500"
                  }`}
                >
                  Continental Automation Systems
                </span>
                <div
                  className={`text-sm font-medium transition-all duration-300 ${
                    isScrolled ? "text-gray-400" : "text-orange-500"
                  }`}
                >
                  Pvt. Ltd.
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2 flex-1 justify-end mr-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 group overflow-hidden ${
                pathname === item.href
                  ? isScrolled
                    ? "text-white bg-orange-900 shadow-lg shadow-orange-900/25"
                    : "text-gray-900 bg-white/90 shadow-lg"
                  : isScrolled
                    ? "text-gray-700 hover:text-orange-700 hover:bg-orange-50"
                    : "text-orange-500 hover:text-white hover:bg-white/20"
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              {pathname !== item.href && (
                <div className="absolute inset-0 bg-orange-900 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 rounded-xl"></div>
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
            className={`ml-8 w-30 px-4 py-2 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 bg-orange-900 hover:bg-orange-700 text-white`}
          >
            Get Quote
          </Button>
        </div>

          {/* Mobile menu button */}
          <div className="lg:hidden w-10 flex justify-end">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    isScrolled 
                      ? "text-gray-900 hover:bg-orange-100" 
                      : "text-orange-500 hover:bg-white/20"
                  }`}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-white">
              <div className="flex flex-col h-full">
                {/* Mobile Navigation */}
                <div className="flex-1 pt-10">
                  <div className="space-y-2">
                    {navigation.map((item) => (
                      <SheetClose asChild key={item.name}>
                        <Link
                          href={item.href}
                          className={`mx-auto flex w-50 justify-center px-4 py-3 rounded-4xl text-base font-semibold transition-all duration-300 ${
                            pathname === item.href
                              ? "text-white bg-orange-900 shadow-lg shadow-orange-600/25"
                              : "text-gray-700 hover:text-orange-700 hover:bg-orange-50"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <div className="mt-8 space-y-4">
                    <Button className="w-30 mx-auto block bg-orange-900 hover:bg-orange-700 text-white py-2 rounded-4xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      Get Quote
                    </Button>
                    
                    {/* Contact Info */}
                    {/* <div className="pt-6 border-t border-gray-200 space-y-3 flex flex-col items-center">
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
                  </div> */}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}