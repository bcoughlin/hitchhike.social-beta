import { Rocket, Users, Target, Sparkles, TreePine, Compass } from "lucide-react"
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

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative w-24 h-24 group">
                <div className="absolute inset-0 bg-yellow-200 rounded-full animate-ping opacity-20"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <Backpack className="w-20 h-20 text-green-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Cross Paths, Spark Careers
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Hitchhike through your career journey! Connect with awesome mentors, stumble upon cool opportunities, and
              navigate your path with a crew that's got your back. Ready for your next adventure? Let's go! 🚀✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg bg-green-600 hover:bg-green-700">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-green-600 text-green-600 hover:bg-green-50">
                Explore Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">How HitchHike Works</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Your career journey doesn't have to be a solo trek! Join our community of professionals helping each other
            grow. 🌱
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Compass className="h-8 w-8 text-green-600" />}
              title="Find Your Direction"
              description="Not sure where to go next? Connect with professionals who've been there and can guide your way."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-green-600" />}
              title="Supportive Community"
              description="Join a friendly network of professionals sharing insights, opportunities, and encouragement."
            />
            <FeatureCard
              icon={<Target className="h-8 w-8 text-green-600" />}
              title="Set Your Goals"
              description="Define your career objectives and get matched with opportunities that align with your aspirations."
            />
            <FeatureCard
              icon={<Sparkles className="h-8 w-8 text-green-600" />}
              title="Discover Opportunities"
              description="Access exclusive job listings, mentorship programs, and skill-building resources."
            />
            <FeatureCard
              icon={<TreePine className="h-8 w-8 text-green-600" />}
              title="Grow Together"
              description="Share your experiences, learn from others, and celebrate career milestones as a community."
            />
            <FeatureCard
              icon={<Rocket className="h-8 w-8 text-green-600" />}
              title="Level Up"
              description="Access resources and connections that help you take your career to new heights."
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-yellow-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Thousands of Happy Hitchhikers!</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <TestimonialCard
              quote="Found my dream job through a connection on HitchHike. The community here is incredibly supportive! 🙌"
              author="Alex K."
              role="Software Developer"
            />
            <TestimonialCard
              quote="My mentor from HitchHike helped me transition into tech from finance. Forever grateful! ✨"
              author="Sarah M."
              role="Product Manager"
            />
            <TestimonialCard
              quote="The friendliest professional network I've ever been part of. Real people, real support! 💚"
              author="James R."
              role="Marketing Lead"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our community of professionals helping each other grow. Your next career adventure is just one
            connection away! 🚀
          </p>
          <Button size="lg" variant="secondary" className="text-green-600">
            Join HitchHike Today
          </Button>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-3">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function TestimonialCard({ quote, author, role }) {
  return (
    <div className="p-6 rounded-xl bg-white shadow-sm">
      <p className="text-gray-600 mb-4">{quote}</p>
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  )
}

