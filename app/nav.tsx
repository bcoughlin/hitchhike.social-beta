"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

const Backpack = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10z" fill="#4ade80" />
    <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke="#166534" />
    <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" stroke="#166534" />
    <path d="M8 10h8" stroke="#166534" />
    <path d="M8 18h8" stroke="#166534" />
  </svg>
)

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const NavItems = () => (
    <>
      <Link href="/about" className="text-gray-600 hover:text-gray-900">
        About
      </Link>
      <Link href="/success-stories" className="text-gray-600 hover:text-gray-900">
        Success Stories
      </Link>
      <Button className="bg-green-600 hover:bg-green-700">Join Now</Button>
    </>
  )

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative w-10 h-10">
                <Backpack className="w-10 h-10 text-green-600 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="text-xl font-bold text-gray-900">HitchHike.social</span>
              <span className="inline-flex items-center rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
                BETA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavItems />
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-2 border-green-600 text-green-600 flex items-center gap-2"
                >
                  <Menu className="h-5 w-5" />
                  <span>Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="mt-8 flex flex-col gap-6">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <div className="relative w-8 h-8">
                      <Backpack className="w-8 h-8 text-green-600" />
                    </div>
                    <span className="text-lg font-bold text-gray-900">HitchHike.social</span>
                    <span className="inline-flex items-center rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
                      BETA
                    </span>
                  </Link>
                  <div className="flex flex-col space-y-4">
                    <Link
                      href="/about"
                      className="text-gray-600 hover:text-gray-900 text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/success-stories"
                      className="text-gray-600 hover:text-gray-900 text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Success Stories
                    </Link>
                    <div className="pt-4">
                      <Button
                        className="w-full justify-center bg-green-600 hover:bg-green-700"
                        onClick={() => setIsOpen(false)}
                      >
                        Join Now
                      </Button>
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

