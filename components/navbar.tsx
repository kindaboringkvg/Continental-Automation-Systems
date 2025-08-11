"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact Us", href: "/contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-orange-1/95 backdrop-blur-md shadow-lg border-b border-orange-4/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Settings
                className={`h-8 w-8 transition-all duration-300 group-hover:rotate-180 ${
                  isScrolled ? "text-orange-8" : "text-white"
                }`}
              />
              <div className="absolute inset-0 bg-orange-8 rounded-full opacity-20 scale-0 group-hover:scale-110 transition-transform duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <span
                className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Continental
              </span>
              <div
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? "text-gray-600" : "text-gray-200"
                }`}
              >
                Automation Systems
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  pathname === item.href
                    ? isScrolled
                      ? "text-orange-8 bg-orange-3"
                      : "text-white bg-white/20"
                    : isScrolled
                      ? "text-gray-700 hover:text-orange-8 hover:bg-orange-2"
                      : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full group-hover:left-0 ${
                    pathname === item.href ? "w-full left-0" : ""
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden transition-colors duration-300 ${
                  isScrolled ? "text-gray-900 hover:bg-orange-2" : "text-white hover:bg-white/10"
                }`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-3 pb-4 border-b">
                  <Settings className="h-8 w-8 text-orange-8" />
                  <div>
                    <span className="text-xl font-bold text-gray-900">Continental</span>
                    <div className="text-sm font-medium text-gray-600">Automation Systems</div>
                  </div>
                </div>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      pathname === item.href
                        ? "text-orange-8 bg-orange-3 border-l-4 border-orange-8"
                        : "text-gray-700 hover:text-orange-8 hover:bg-orange-2"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
