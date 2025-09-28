"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Book, Globe, Archive, Newspaper } from "lucide-react"

const sources = [
  {
    category: "Tài liệu gốc",
    icon: Archive,
    items: [
      {
        title: "Marxists Internet Archive",
        description: "Bộ sưu tập đầy đủ các tác phẩm của Lenin bằng nhiều ngôn ngữ",
        url: "https://www.marxists.org/archive/lenin/",
        type: "Tác phẩm gốc",
      },
      {
        title: "Lenin Collected Works",
        description: "45 tập tác phẩm toàn tập của Lenin được xuất bản bởi Progress Publishers",
        url: "#",
        type: "Tác phẩm in",
      },
      {
        title: "Russian State Archive",
        description: "Tài liệu lưu trữ chính thức về Lenin và thời kỳ cách mạng",
        url: "#",
        type: "Lưu trữ nhà nước",
      },
    ],
  },
  {
    category: "Nghiên cứu học thuật",
    icon: Book,
    items: [
      {
        title: "Lenin: A Biography - Robert Service",
        description: "Tiểu sử toàn diện và cân bằng về cuộc đời Lenin",
        url: "#",
        type: "Tiểu sử",
      },
      {
        title: "The Lenin Anthology - Robert C. Tucker",
        description: "Tuyển tập các tác phẩm quan trọng nhất của Lenin với bình luận",
        url: "#",
        type: "Tuyển tập",
      },
      {
        title: "Lenin and the Russian Revolution - Christopher Hill",
        description: "Phân tích vai trò của Lenin trong Cách mạng Nga",
        url: "#",
        type: "Nghiên cứu",
      },
    ],
  },
  {
    category: "Tài liệu lịch sử",
    icon: Newspaper,
    items: [
      {
        title: "Pravda Archives",
        description: "Báo Pravda - cơ quan ngôn luận chính thức của Đảng Bolshevik",
        url: "#",
        type: "Báo chí",
      },
      {
        title: "Iskra Collection",
        description: "Tập hợp các số báo Iskra do Lenin sáng lập và chỉ đạo",
        url: "#",
        type: "Báo chí",
      },
      {
        title: "Soviet Historical Documents",
        description: "Tài liệu chính thức về thời kỳ đầu của Liên Xô",
        url: "#",
        type: "Tài liệu chính thức",
      },
    ],
  },
  {
    category: "Nguồn trực tuyến",
    icon: Globe,
    items: [
      {
        title: "Lenin Museum Moscow",
        description: "Bảo tàng Lenin tại Moscow với bộ sưu tập hiện vật và tài liệu",
        url: "#",
        type: "Bảo tàng",
      },
      {
        title: "Russian Revolution Digital Archive",
        description: "Kho tài liệu số về Cách mạng Nga và thời kỳ Lenin",
        url: "#",
        type: "Kho số",
      },
      {
        title: "Seventeen Moments in Soviet History",
        description: "Dự án giáo dục về lịch sử Liên Xô với nhiều tài liệu về Lenin",
        url: "#",
        type: "Giáo dục",
      },
    ],
  },
]

export function Sources() {
  return (
    <section id="sources" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nguồn Tham Khảo</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Tài liệu và nguồn đáng tin cậy để tìm hiểu thêm về Lenin
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sources.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-accent/10 p-2 rounded-lg">
                      <IconComponent className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.items.map((item, i) => (
                      <div key={i} className="border-l-2 border-muted pl-4 hover:border-accent transition-colors">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-medium text-balance">{item.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {item.type}
                          </Badge>
                        </div>

                        <p className="text-sm text-muted-foreground mb-3 text-pretty">{item.description}</p>

                        <Button variant="ghost" size="sm" className="h-8 px-3">
                          <ExternalLink className="h-3 w-3 mr-2" />
                          Truy cập
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-muted/50">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Lưu ý về Nguồn</h3>
              <p className="text-muted-foreground text-pretty max-w-3xl mx-auto">
                Tất cả thông tin trên website này được tham khảo từ các nguồn học thuật đáng tin cậy. Lenin là một nhân
                vật lịch sử gây tranh cãi, và chúng tôi khuyến khích người đọc tham khảo nhiều quan điểm khác nhau để có
                cái nhìn toàn diện. Các trích dẫn và tài liệu được ghi rõ nguồn gốc và có thể được xác minh.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
