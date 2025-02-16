import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import Nav from "./nav"
import type React from "react"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HitchHike.social - Your Career Journey Starts Here",
  description:
    "Connect with mentors, find opportunities, and navigate your career path with our supportive professional community.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-gradient-to-br from-green-50 to-yellow-50 min-h-screen`}>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  )
}

