"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Play } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 300)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTimeline = () => {
    document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background_70%)]" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div
        className="absolute right-10 top-1/2 -translate-y-1/2 opacity-15 dark:opacity-8 transition-all duration-1000"
        style={{ transform: `translateY(${-scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})` }}
      >
        <div className="relative">
          <img src="/vladimir-lenin-dramatic-portrait-silhouette.jpg" alt="Lenin silhouette" className="w-96 h-auto filter grayscale" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/50" />
        </div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div
          className={`transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <div className="mb-8">
            <div className="overflow-hidden">
              <h1
                className={`text-7xl md:text-9xl font-black mb-2 text-balance leading-none transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0" : "translate-y-full"}`}
              >
                VLADIMIR
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1
                className={`text-7xl md:text-9xl font-black mb-2 text-accent transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0" : "translate-y-full"}`}
              >
                ILYICH
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1
                className={`text-7xl md:text-9xl font-black text-balance leading-none transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0" : "translate-y-full"}`}
              >
                LENIN
              </h1>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty font-light leading-relaxed">
              Khám phá hành trình, tư tưởng và di sản của một trong những nhân vật
              <span className="text-accent font-medium"> có ảnh hưởng nhất </span>
              trong lịch sử thế kỷ XX
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Button
              size="lg"
              onClick={scrollToTimeline}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-4 text-xl font-semibold rounded-full shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              Bắt Đầu Hành Trình
            </Button>

            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="h-px w-12 bg-muted-foreground/30" />
              <span className="text-lg font-mono">1870 - 1924</span>
              <div className="h-px w-12 bg-muted-foreground/30" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Cuộn xuống</span>
            <ArrowDown className="h-6 w-6 text-accent" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_70%,background_100%)]" />
    </section>
  )
}
