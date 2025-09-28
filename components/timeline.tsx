"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, BookOpen, Users, Gavel, Skull } from "lucide-react"

const timelineEvents = [
  {
    year: "1870",
    date: "22 tháng 4",
    title: "Sinh ra tại Simbirsk",
    description: "Vladimir Ilyich Ulyanov sinh ra trong một gia đình trí thức tại Simbirsk (nay là Ulyanovsk), Nga.",
    category: "Tuổi thơ",
  },
  {
    year: "1887",
    date: "Tháng 5",
    title: "Anh trai bị hành quyết",
    description: "Alexander Ulyanov, anh trai của Lenin, bị hành quyết vì âm mưu ám sát Tsar Alexander III.",
    category: "Gia đình",
  },
  {
    year: "1895",
    date: "Tháng 12",
    title: "Bị bắt lần đầu",
    description: "Lenin bị bắt vì hoạt động cách mạng và bị lưu đày đến Siberia.",
    category: "Cách mạng",
  },
  {
    year: "1902",
    date: "Tháng 3",
    title: 'Xuất bản "What Is to Be Done?"',
    description: "Tác phẩm quan trọng về lý thuyết tổ chức đảng cách mạng được xuất bản.",
    category: "Tác phẩm",
  },
  {
    year: "1917",
    date: "Tháng 4",
    title: "Trở về Nga",
    description: 'Lenin trở về Nga từ Thụy Sĩ bằng "sealed train" qua Đức, đến Ga Finland ở Saint Petersburg.',
    category: "Cách mạng",
  },
  {
    year: "1917",
    date: "Tháng 10",
    title: "Cách mạng Tháng Mười",
    description: "Lãnh đạo Cách mạng Tháng Mười, lật đổ Chính phủ Lâm thời.",
    category: "Cách mạng",
  },
  {
    year: "1918-1921",
    date: "",
    title: "Chủ nghĩa Cộng sản Chiến tranh",
    description: "Thực hiện chính sách kinh tế khắc nghiệt trong thời kỳ Nội chiến.",
    category: "Chính sách",
  },
  {
    year: "1921",
    date: "Tháng 3",
    title: "Chính sách Kinh tế Mới (NEP)",
    description: "Đưa ra NEP để phục hồi kinh tế sau chiến tranh.",
    category: "Chính sách",
  },
  {
    year: "1924",
    date: "21 tháng 1",
    title: "Qua đời",
    description: "Lenin qua đời tại Gorki, gần Moscow, ở tuổi 53.",
    category: "Cuối đời",
  },
]

const categoryColors = {
  "Tuổi thơ": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "Gia đình": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "Cách mạng": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  "Tác phẩm": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Chính sách": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  "Cuối đời": "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
}

const categoryIcons = {
  "Tuổi thơ": Calendar,
  "Gia đình": Users,
  "Cách mạng": Gavel,
  "Tác phẩm": BookOpen,
  "Chính sách": MapPin,
  "Cuối đời": Skull,
}

export function Timeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="timeline" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-accent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-balance bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Hành Trình Cuộc Đời
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Những mốc quan trọng trong cuộc đời Vladimir Ilyich Lenin
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-accent rounded-full" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const IconComponent = categoryIcons[event.category as keyof typeof categoryIcons]
              const isVisible = visibleItems.includes(index)

              return (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  className={`relative flex items-start gap-8 transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-accent rounded-full border-4 border-background shadow-2xl shadow-accent/25">
                    <IconComponent className="h-6 w-6 text-accent-foreground" />
                    <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20" />
                  </div>

                  <Card className="flex-1 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 group border-l-4 border-l-accent/20 hover:border-l-accent">
                    <CardContent className="p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <span className="text-3xl font-black text-accent group-hover:scale-110 transition-transform">
                            {event.year}
                          </span>
                          {event.date && (
                            <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                              {event.date}
                            </span>
                          )}
                        </div>
                        <Badge
                          className={`${categoryColors[event.category as keyof typeof categoryColors]} group-hover:scale-105 transition-transform`}
                        >
                          {event.category}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold mb-3 text-balance group-hover:text-accent transition-colors">
                        {event.title}
                      </h3>

                      <p className="text-muted-foreground text-pretty leading-relaxed text-lg">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
