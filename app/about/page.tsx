import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LinkedinIcon, TwitterIcon, GithubIcon } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative w-48 h-48">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bradcoughlin-linkedin-dShwbtrtvsHmIeeMzjtzAPejT47IFB.jpeg"
                alt="Brad Coughlin, Founder of HitchHike.social"
                width={400}
                height={400}
                className="rounded-2xl shadow-md object-cover"
                priority
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-4">Hi, I'm Brad</h1>
              <p className="text-lg text-gray-600 mb-6">Founder of HitchHike.social</p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button variant="outline" size="icon" className="rounded-full">
                  <LinkedinIcon className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <TwitterIcon className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <GithubIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="mt-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-green-600">Why I Started HitchHike.social</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Back in 2023, I found myself at a crossroads in my career. Despite having a stable job in tech, I felt
                  something was missing. What struck me most was how many of my peers felt the same way - talented
                  professionals wanting to explore new paths but feeling stuck or unsure how to make their next move.
                </p>
                <p>
                  The lightbulb moment came during a casual coffee chat with a friend who had successfully pivoted from
                  finance to UX design. Their journey wasn't linear - it was filled with chance encounters, unexpected
                  mentors, and serendipitous opportunities. That's when it hit me: what if we could create a platform
                  that facilitates these kinds of meaningful connections and career transitions?
                </p>
                <p>
                  HitchHike.social was born from this idea - a place where professionals can "hitchhike" their way
                  through their career journey, meeting fellow travelers, finding mentors, and discovering opportunities
                  they might never have encountered otherwise. It's not just another professional network; it's a
                  community built on the belief that the best career opportunities often come from unexpected
                  connections and shared experiences.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-green-600">Our Mission</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At HitchHike.social, we're building more than just a platform - we're nurturing a community where
                  career growth feels less like a solo journey and more like an exciting adventure shared with others.
                  We believe that everyone has something to learn and something to teach, and that the best
                  opportunities come from authentic connections.
                </p>
                <p>
                  Whether you're looking to switch careers, level up in your current role, or simply explore what's
                  possible, HitchHike.social is here to help you find your path - and the right people to share the
                  journey with. Join us in making career development more collaborative, more serendipitous, and most
                  importantly, more human.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Ready to Join Our Community?</h3>
              <p className="text-gray-600 mb-6">
                Be part of a growing network of professionals helping each other succeed.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">Join HitchHike Today</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

