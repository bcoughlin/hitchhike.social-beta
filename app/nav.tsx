import Link from "next/link"
import { Button } from "@/components/ui/button"

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
          <div className="flex items-center space-x-4">
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-gray-900">
              Success Stories
            </Link>
            <Button variant="outline" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">Join Now</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

