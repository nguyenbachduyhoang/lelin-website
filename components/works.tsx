"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

const works = [
  {
    title: "What Is to Be Done?",
    originalTitle: "Что делать?",
    year: "1902",
    category: "Lý thuyết chính trị",
    description: "Tác phẩm nền tảng về tổ chức đảng cách mạng và vai trò của trí thức trong phong trào công nhân.",
    keyIdeas: ["Tổ chức đảng tiên phong", "Ý thức giai cấp", "Lãnh đạo cách mạng"],
    impact: "Định hình cấu trúc tổ chức của Đảng Bolshevik",
    quote: '"Không có lý thuyết cách mạng thì không có phong trào cách mạng."',
  },
  {
    title: "The State and Revolution",
    originalTitle: "Государство и революция",
    year: "1917",
    category: "Lý thuyết nhà nước",
    description: "Phân tích về bản chất của nhà nước và sự cần thiết của cách mạng vô sản.",
    keyIdeas: ["Chuyên chính vô sản", "Tiêu vong nhà nước", "Dân chủ xã hội chủ nghĩa"],
    impact: "Cơ sở lý thuyết cho việc xây dựng nhà nước Xô viết",
    quote: '"Nhà nước là máy móc để một giai cấp áp bức giai cấp khác."',
  },
  {
    title: "Imperialism: The Highest Stage of Capitalism",
    originalTitle: "Империализм как высшая стадия капитализма",
    year: "1916",
    category: "Kinh tế chính trị",
    description: "Phân tích về chủ nghĩa đế quốc như giai đoạn cuối của chủ nghĩa tư bản.",
    keyIdeas: ["Chủ nghĩa đế quốc", "Tư bản tài chính", "Phân chia thế giới"],
    impact: "Ảnh hưởng đến lý thuyết về giải phóng dân tộc",
    quote: '"Chủ nghĩa đế quốc là giai đoạn cao nhất của chủ nghĩa tư bản."',
  },
  {
    title: "April Theses",
    originalTitle: "Апрельские тезисы",
    year: "1917",
    category: "Cương lệnh chính trị",
    description: 'Đề cương hành động cho Cách mạng Tháng Mười, kêu gọi "Tất cả quyền lực về tay Xô viết".',
    keyIdeas: ["Tất cả quyền lực về tay Xô viết", "Chấm dứt chiến tranh", "Cải cách ruộng đất"],
    impact: "Định hướng cho Cách mạng Tháng Mười",
    quote: '"Nhân dân cần hòa bình, nhân dân cần bánh mì, nhân dân cần đất đai."',
  },
  {
    title: "The Development of Capitalism in Russia",
    originalTitle: "Развитие капитализма в России",
    year: "1899",
    category: "Phân tích kinh tế",
    description: "Nghiên cứu chi tiết về sự phát triển của chủ nghĩa tư bản ở Nga.",
    keyIdeas: ["Phân tích giai cấp nông dân", "Phát triển công nghiệp", "Thị trường nội địa"],
    impact: "Cơ sở cho chiến lược cách mạng ở Nga",
    quote: '"Chủ nghĩa tư bản ở Nga không phải là khả năng mà là thực tế."',
  },
  {
    title: "Left-Wing Communism: An Infantile Disorder",
    originalTitle: "Детская болезнь «левизны» в коммунизме",
    year: "1920",
    category: "Chiến thuật cách mạng",
    description: "Phê phán khuynh hướng cực tả trong phong trào cộng sản quốc tế.",
    keyIdeas: ["Chiến thuật linh hoạt", "Thỏa hiệp cần thiết", "Kinh nghiệm Nga"],
    impact: "Định hướng cho các đảng cộng sản thế giới",
    quote: '"Không thỏa hiệp với kẻ thù giai cấp, nhưng cần biết thỏa hiệp chiến thuật."',
  },
]

export function Works() {
  return (
    <section id="works" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Tác Phẩm & Tư Tưởng</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Những công trình lý thuyết định hình tư tưởng cách mạng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <BookOpen className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2">
                      {work.year}
                    </Badge>
                    <h3 className="text-lg font-semibold text-balance mb-1">{work.title}</h3>
                    <p className="text-sm text-muted-foreground italic">{work.originalTitle}</p>
                  </div>
                </div>

                <Badge className="mb-3" variant="outline">
                  {work.category}
                </Badge>

                <p className="text-sm text-muted-foreground mb-4 text-pretty">{work.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Ý tưởng chính:</h4>
                  <div className="flex flex-wrap gap-1">
                    {work.keyIdeas.map((idea, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {idea}
                      </Badge>
                    ))}
                  </div>
                </div>

                <blockquote className="border-l-4 border-accent pl-4 mb-4">
                  <p className="text-sm italic text-muted-foreground">{work.quote}</p>
                </blockquote>

                <div className="mb-4">
                  <p className="text-xs text-muted-foreground">
                    <strong>Tác động:</strong> {work.impact}
                  </p>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground"
                  asChild
                >
                  <Link
                    href={`/works/${work.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/^-|-$/g, "")}`}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Đọc tác phẩm
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
