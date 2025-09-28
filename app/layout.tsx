import type React from "react"
import type { Metadata } from "next"
import { Be_Vietnam_Pro } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Vladimir Ilyich Lenin - Hành Trình, Tư Tưởng, Di Sản",
  description: "Khám phá cuộc đời và di sản của Vladimir Ilyich Lenin qua hành trình tương tác đầy đủ và chi tiết",
  generator: "v0.app",
}

const beVietnam = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Added Vietnamese language support and Suspense boundary
    <html lang="vi">
      <body className={`font-sans ${beVietnam.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
