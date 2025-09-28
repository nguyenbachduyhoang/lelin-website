"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, Users, Globe, BookOpen, Zap } from "lucide-react"

const positiveImpacts = [
  {
    title: "Cách mạng xã hội chủ nghĩa",
    description: "Mở đường cho các phong trào giải phóng dân tộc và xã hội trên toàn thế giới.",
    icon: Globe,
    examples: ["Cách mạng Trung Quốc 1949", "Cách mạng Cuba 1959", "Các phong trào giải phóng châu Phi"],
  },
  {
    title: "Lý thuyết chính trị hiện đại",
    description: "Đóng góp quan trọng vào lý thuyết về nhà nước, cách mạng và tổ chức chính trị.",
    icon: BookOpen,
    examples: ["Lý thuyết về đảng tiên phong", "Chuyên chính vô sản", "Dân chủ tập trung"],
  },
  {
    title: "Phát triển kinh tế",
    description: "NEP và các chính sách kinh tế đặt nền móng cho công nghiệp hóa Liên Xô.",
    icon: TrendingUp,
    examples: ["Kế hoạch hóa kinh tế", "Công nghiệp hóa nhanh", "Giáo dục đại chúng"],
  },
  {
    title: "Giải phóng phụ nữ",
    description: "Thúc đẩy bình đẳng giới và quyền của phụ nữ trong xã hội.",
    icon: Users,
    examples: ["Quyền bầu cử cho phụ nữ", "Bình đẳng trong lao động", "Giáo dục cho tất cả"],
  },
]

const controversies = [
  {
    title: "Chủ nghĩa khủng bố đỏ",
    description: "Sử dụng bạo lực và khủng bố để duy trì quyền lực, gây ra nhiều thương vong.",
    icon: Zap,
    examples: ["Cheka và cảnh sát bí mật", "Thanh trừng chính trị", "Đàn áp nông dân"],
  },
  {
    title: "Hạn chế dân chủ",
    description: "Tập trung quyền lực và hạn chế các quyền tự do dân chủ cơ bản.",
    icon: TrendingDown,
    examples: ["Cấm các đảng đối lập", "Kiểm duyệt báo chí", "Hạn chế tự do di chuyển"],
  },
  {
    title: "Khủng hoảng kinh tế",
    description: "Các chính sách kinh tế gây ra nạn đói và khó khăn cho người dân.",
    icon: TrendingDown,
    examples: ["Nạn đói 1921-1922", "Suy thoái sản xuất", "Thiếu hụt hàng tiêu dùng"],
  },
  {
    title: "Di sản độc tài",
    description: "Tạo tiền lệ cho các chế độ độc tài cộng sản sau này.",
    icon: Users,
    examples: ["Stalinism", "Các chế độ cộng sản độc tài", "Tập trung quyền lực cá nhân"],
  },
]

const modernDebates = [
  {
    question: "Lenin có phải là một nhà dân chủ?",
    perspectives: [
      "Ủng hộ: Đấu tranh cho quyền của giai cấp công nhân và nông dân",
      "Phê phán: Thiết lập chế độ một đảng và hạn chế dân chủ",
    ],
  },
  {
    question: "Tác động của Lenin đến thế kỷ XX?",
    perspectives: [
      "Tích cực: Truyền cảm hứng cho các phong trào giải phóng",
      "Tiêu cực: Mở đường cho các chế độ độc tài cộng sản",
    ],
  },
  {
    question: "Lenin và bạo lực cách mạng?",
    perspectives: [
      "Biện hộ: Bạo lực là cần thiết để lật đổ chế độ áp bức",
      "Chỉ trích: Bạo lực dẫn đến chu kỳ đàn áp và khủng bố",
    ],
  },
]

export function Legacy() {
  return (
    <section id="legacy" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Di Sản & Tranh Luận</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Tác động và những tranh cãi xung quanh di sản của Lenin
          </p>
        </div>

        <Tabs defaultValue="impact" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="impact">Tác Động Tích Cực</TabsTrigger>
            <TabsTrigger value="controversy">Tranh Cãi</TabsTrigger>
            <TabsTrigger value="debate">Tranh Luận Hiện Đại</TabsTrigger>
          </TabsList>

          <TabsContent value="impact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {positiveImpacts.map((impact, index) => {
                const IconComponent = impact.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                          <IconComponent className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2 text-balance">{impact.title}</h3>
                          <p className="text-muted-foreground text-pretty mb-4">{impact.description}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-2">Ví dụ:</h4>
                        <div className="space-y-1">
                          {impact.examples.map((example, i) => (
                            <Badge key={i} variant="secondary" className="mr-2 mb-1">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="controversy">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {controversies.map((controversy, index) => {
                const IconComponent = controversy.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-red-100 dark:bg-red-900 p-3 rounded-lg">
                          <IconComponent className="h-6 w-6 text-red-600 dark:text-red-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2 text-balance">{controversy.title}</h3>
                          <p className="text-muted-foreground text-pretty mb-4">{controversy.description}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-2">Ví dụ:</h4>
                        <div className="space-y-1">
                          {controversy.examples.map((example, i) => (
                            <Badge key={i} variant="destructive" className="mr-2 mb-1">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="debate">
            <div className="space-y-6">
              {modernDebates.map((debate, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-balance">{debate.question}</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {debate.perspectives.map((perspective, i) => {
                        const isPositive =
                          perspective.startsWith("Ủng hộ") ||
                          perspective.startsWith("Tích cực") ||
                          perspective.startsWith("Biện hộ")
                        return (
                          <div
                            key={i}
                            className={`p-4 rounded-lg border-l-4 ${
                              isPositive
                                ? "bg-green-50 dark:bg-green-950 border-green-500"
                                : "bg-red-50 dark:bg-red-950 border-red-500"
                            }`}
                          >
                            <p className="text-sm text-pretty">{perspective}</p>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
