"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function Navigation() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-foreground">Lenin</div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("timeline")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Hành Trình
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Bản Đồ
            </button>
            <button
              onClick={() => scrollToSection("works")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Tác Phẩm
            </button>
            <button
              onClick={() => scrollToSection("legacy")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Di Sản
            </button>
            <button
              onClick={() => scrollToSection("sources")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Nguồn
            </button>
          </div>

          <Button variant="ghost" size="icon" onClick={toggleTheme} className="ml-4">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  )
}
