"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, ArrowLeft, Calendar, Tag, Quote, Target, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const worksData = {
  "what-is-to-be-done": {
    title: "What Is to Be Done?",
    originalTitle: "Что делать?",
    year: "1902",
    category: "Lý thuyết chính trị",
    description: "Tác phẩm nền tảng về tổ chức đảng cách mạng và vai trò của trí thức trong phong trào công nhân.",
    keyIdeas: ["Tổ chức đảng tiên phong", "Ý thức giai cấp", "Lãnh đạo cách mạng"],
    impact: "Định hình cấu trúc tổ chức của Đảng Bolshevik",
    quote: "Không có lý thuyết cách mạng thì không có phong trào cách mạng.",
    fullContent: {
      context:
        "Được viết trong thời kỳ lưu vong tại London, tác phẩm này ra đời như một phản hồi trực tiếp đến cuộc tranh luận trong phong trào xã hội dân chủ Nga về hướng đi của cách mạng. Lenin viết để phản bác những quan điểm của nhóm 'Kinh tế học' - những người tin rằng giai cấp công nhân sẽ tự nhiên phát triển ý thức cách mạng thông qua đấu tranh kinh tế.",
      mainArguments: [
        {
          title: "Ý thức cách mạng không tự phát",
          content:
            "Lenin lập luận rằng ý thức xã hội chủ nghĩa không thể tự nhiên nảy sinh từ phong trào công nhân. Thay vào đó, nó phải được mang đến từ bên ngoài bởi những trí thức cách mạng đã được giáo dục về lý thuyết Marxist.",
        },
        {
          title: "Tổ chức đảng tiên phong",
          content:
            "Đảng cách mạng phải là một tổ chức kín đáo, kỷ luật cao, gồm những cách mạng chuyên nghiệp. Đây là điều kiện cần thiết để lãnh đạo giai cấp công nhân trong điều kiện chế độ chuyên chế Nga.",
        },
        {
          title: "Vai trò của trí thức",
          content:
            "Trí thức cách mạng đóng vai trò then chốt trong việc phát triển và truyền bá lý thuyết cách mạng. Họ là cầu nối giữa lý thuyết khoa học xã hội chủ nghĩa và phong trào thực tiễn của giai cấp công nhân.",
        },
      ],
      historicalImpact:
        "Tác phẩm này đã định hình cấu trúc tổ chức của Đảng Bolshevik và ảnh hưởng sâu sắc đến các phong trào cách mạng trên toàn thế giới. Khái niệm về 'đảng tiên phong' trở thành một trong những đặc trưng cơ bản của chủ nghĩa Leninism.",
      keyQuotes: [
        "Không có lý thuyết cách mạng thì không có phong trào cách mạng.",
        "Ý thức giai cấp công nhân không thể là ý thức chính trị thực sự nếu công nhân không được huấn luyện để phản ứng với mọi trường hợp áp bức, bạo lực và lạm quyền.",
        "Chúng ta phải huấn luyện những người cống hiến toàn bộ cuộc đời cho cách mạng.",
      ],
    },
  },
  "the-state-and-revolution": {
    title: "The State and Revolution",
    originalTitle: "Государство и революция",
    year: "1917",
    category: "Lý thuyết nhà nước",
    description: "Phân tích về bản chất của nhà nước và sự cần thiết của cách mạng vô sản.",
    keyIdeas: ["Chuyên chính vô sản", "Tiêu vong nhà nước", "Dân chủ xã hội chủ nghĩa"],
    impact: "Cơ sở lý thuyết cho việc xây dựng nhà nước Xô viết",
    quote: "Nhà nước là máy móc để một giai cấp áp bức giai cấp khác.",
    fullContent: {
      context:
        "Được viết trong những tháng trước Cách mạng Tháng Mười 1917, tác phẩm này tổng hợp quan điểm của Marx và Engels về nhà nước, đồng thời phát triển thêm lý thuyết về giai đoạn chuyển tiếp từ chủ nghĩa tư bản sang chủ nghĩa cộng sản.",
      mainArguments: [
        {
          title: "Bản chất của nhà nước",
          content:
            "Nhà nước không phải là cơ quan hòa giải giai cấp mà là công cụ của giai cấp thống trị để áp bức giai cấp bị trị. Nhà nước tư sản phục vụ lợi ích của giai cấp tư sản.",
        },
        {
          title: "Chuyên chính vô sản",
          content:
            "Sau cách mạng, giai cấp công nhân phải thiết lập chuyên chính vô sản - một hình thức nhà nước mới để đàn áp giai cấp tư sản và xây dựng xã hội xã hội chủ nghĩa.",
        },
        {
          title: "Tiêu vong của nhà nước",
          content:
            "Trong giai đoạn cao của chủ nghĩa cộng sản, khi giai cấp đã biến mất, nhà nước sẽ tự tiêu vong. Chức năng quản lý xã hội sẽ được thay thế bằng việc quản lý sản xuất.",
        },
      ],
      historicalImpact:
        "Tác phẩm này cung cấp cơ sở lý thuyết cho việc xây dựng nhà nước Xô viết và ảnh hưởng đến tất cả các cuộc cách mạng xã hội chủ nghĩa sau này.",
      keyQuotes: [
        "Nhà nước là máy móc để một giai cấp áp bức giai cấp khác.",
        "Tự do chỉ có thể tồn tại khi nhà nước bắt đầu tiêu vong.",
        "Dân chủ đối với đa số nhân dân và đàn áp bằng vũ lực đối với những kẻ bóc lột nhân dân.",
      ],
    },
  },
  "imperialism-the-highest-stage-of-capitalism": {
    title: "Imperialism: The Highest Stage of Capitalism",
    originalTitle: "Империализм как высшая стадия капитализма",
    year: "1916",
    category: "Kinh tế chính trị",
    description: "Phân tích về chủ nghĩa đế quốc như giai đoạn cuối của chủ nghĩa tư bản.",
    keyIdeas: ["Chủ nghĩa đế quốc", "Tư bản tài chính", "Phân chia thế giới"],
    impact: "Ảnh hưởng đến lý thuyết về giải phóng dân tộc",
    quote: "Chủ nghĩa đế quốc là giai đoạn cao nhất của chủ nghĩa tư bản.",
    fullContent: {
      context:
        "Được viết trong Thế chiến thứ nhất, tác phẩm này phân tích sự biến đổi của chủ nghĩa tư bản từ giai đoạn cạnh tranh tự do sang giai đoạn độc quyền đế quốc. Lenin dựa trên dữ liệu kinh tế chi tiết để chứng minh rằng chủ nghĩa đế quốc không phải là chính sách mà là giai đoạn phát triển tất yếu của chủ nghĩa tư bản.",
      mainArguments: [
        {
          title: "Tập trung sản xuất và độc quyền",
          content:
            "Sự phát triển của chủ nghĩa tư bản dẫn đến việc tập trung sản xuất và hình thành các tập đoàn độc quyền. Những tập đoàn này kiểm soát các ngành công nghiệp chủ chốt và thao túng giá cả thị trường.",
        },
        {
          title: "Vai trò của tư bản tài chính",
          content:
            "Sự hợp nhất giữa tư bản ngân hàng và tư bản công nghiệp tạo ra tư bản tài chính, trở thành lực lượng thống trị trong nền kinh tế đế quốc. Các ngân hàng không chỉ là trung gian mà còn là những nhà độc quyền quyền lực.",
        },
        {
          title: "Xuất khẩu tư bản",
          content:
            "Khác với giai đoạn trước khi chủ yếu xuất khẩu hàng hóa, giai đoạn đế quốc đặc trưng bởi việc xuất khẩu tư bản. Các nước đế quốc tìm kiếm thị trường đầu tư có lợi nhuận cao ở các nước lạc hậu.",
        },
      ],
      historicalImpact:
        "Tác phẩm này cung cấp cơ sở lý thuyết cho các phong trào giải phóng dân tộc và ảnh hưởng sâu sắc đến việc hiểu về bản chất của chủ nghĩa đế quốc hiện đại.",
      keyQuotes: [
        "Chủ nghĩa đế quốc là giai đoạn cao nhất của chủ nghĩa tư bản.",
        "Chủ nghĩa đế quốc là chủ nghĩa tư bản độc quyền.",
        "Chủ nghĩa đế quốc là chủ nghĩa tư bản hấp hối, nhưng chỉ là khởi đầu của sự hấp hối.",
      ],
    },
  },
  "april-theses": {
    title: "April Theses",
    originalTitle: "Апрельские тезисы",
    year: "1917",
    category: "Cương lệnh chính trị",
    description: 'Đề cương hành động cho Cách mạng Tháng Mười, kêu gọi "Tất cả quyền lực về tay Xô viết".',
    keyIdeas: ["Tất cả quyền lực về tay Xô viết", "Chấm dứt chiến tranh", "Cải cách ruộng đất"],
    impact: "Định hướng cho Cách mạng Tháng Mười",
    quote: "Nhân dân cần hòa bình, nhân dân cần bánh mì, nhân dân cần đất đai.",
    fullContent: {
      context:
        "Được công bố ngay sau khi Lenin trở về Nga từ lưu vong vào tháng 4/1917, April Theses đã gây chấn động trong Đảng Bolshevik vì những quan điểm cực kỳ cấp tiến. Tài liệu này đặt nền móng cho Cách mạng Tháng Mười.",
      mainArguments: [
        {
          title: "Chấm dứt chiến tranh đế quốc",
          content:
            "Lenin kêu gọi chấm dứt ngay lập tức cuộc chiến tranh đế quốc, không chấp nhận bất kỳ thỏa hiệp nào với chính phủ tư sản. Đây là yêu cầu cấp bách nhất của nhân dân Nga.",
        },
        {
          title: "Tất cả quyền lực về tay Xô viết",
          content:
            "Thay vì ủng hộ Chính phủ lâm thời, Lenin chủ trương chuyển toàn bộ quyền lực nhà nước về tay các Xô viết công nhân, nông dân và binh lính - những cơ quan quyền lực thực sự của nhân dân.",
        },
        {
          title: "Cải cách ruộng đất triệt để",
          content:
            "Tịch thu tất cả ruộng đất của địa chủ và quốc hữu hóa toàn bộ đất đai trong nước. Đất đai sẽ được phân phối lại dưới sự quản lý của các Xô viết nông dân địa phương.",
        },
      ],
      historicalImpact:
        "April Theses đã định hướng cho Cách mạng Tháng Mười và trở thành cương lệnh hành động cho việc xây dựng nhà nước xã hội chủ nghĩa đầu tiên trên thế giới.",
      keyQuotes: [
        "Nhân dân cần hòa bình, nhân dân cần bánh mì, nhân dân cần đất đai.",
        "Tất cả quyền lực về tay Xô viết!",
        "Không một sự ủng hộ nào cho Chính phủ lâm thời!",
      ],
    },
  },
  "the-development-of-capitalism-in-russia": {
    title: "The Development of Capitalism in Russia",
    originalTitle: "Развитие капитализма в России",
    year: "1899",
    category: "Phân tích kinh tế",
    description: "Nghiên cứu chi tiết về sự phát triển của chủ nghĩa tư bản ở Nga.",
    keyIdeas: ["Phân tích giai cấp nông dân", "Phát triển công nghiệp", "Thị trường nội địa"],
    impact: "Cơ sở cho chiến lược cách mạng ở Nga",
    quote: "Chủ nghĩa tư bản ở Nga không phải là khả năng mà là thực tế.",
    fullContent: {
      context:
        "Được viết trong thời gian lưu vong ở Siberia, đây là công trình nghiên cứu kinh tế đầu tiên của Lenin. Tác phẩm dựa trên phân tích thống kê chi tiết để chứng minh rằng chủ nghĩa tư bản đã và đang phát triển mạnh mẽ ở Nga.",
      mainArguments: [
        {
          title: "Sự phân hóa giai cấp nông dân",
          content:
            "Lenin chứng minh rằng giai cấp nông dân Nga đang phân hóa thành ba tầng lớp: nông dân giàu có (kulak), nông dân trung bình, và nông dân nghèo. Quá trình này là biểu hiện của sự phát triển chủ nghĩa tư bản trong nông nghiệp.",
        },
        {
          title: "Hình thành thị trường nội địa",
          content:
            "Sự phát triển của công nghiệp và nông nghiệp tư bản chủ nghĩa đã tạo ra một thị trường nội địa rộng lớn. Điều này bác bỏ quan điểm của các nhà dân túy về việc Nga không thể phát triển chủ nghĩa tư bản.",
        },
        {
          title: "Vai trò của giai cấp công nhân",
          content:
            "Sự phát triển của chủ nghĩa tư bản đã tạo ra một giai cấp công nhân hiện đại, tập trung và có tổ chức. Đây chính là lực lượng cách mạng chủ yếu trong xã hội Nga.",
        },
      ],
      historicalImpact:
        "Tác phẩm này đã cung cấp cơ sở khoa học cho chiến lược cách mạng của Đảng Bolshevik và bác bỏ những ảo tưởng của chủ nghĩa dân túy về con đường phát triển đặc biệt của Nga.",
      keyQuotes: [
        "Chủ nghĩa tư bản ở Nga không phải là khả năng mà là thực tế.",
        "Giai cấp công nhân là sản phẩm tất yếu của sự phát triển chủ nghĩa tư bản.",
        "Thị trường nội địa được tạo ra bởi chính quá trình phát triển chủ nghĩa tư bản.",
      ],
    },
  },
  "left-wing-communism-an-infantile-disorder": {
    title: "Left-Wing Communism: An Infantile Disorder",
    originalTitle: "Детская болезнь «левизны» в коммунизме",
    year: "1920",
    category: "Chiến thuật cách mạng",
    description: "Phê phán khuynh hướng cực tả trong phong trào cộng sản quốc tế.",
    keyIdeas: ["Chiến thuật linh hoạt", "Thỏa hiệp cần thiết", "Kinh nghiệm Nga"],
    impact: "Định hướng cho các đảng cộng sản thế giới",
    quote: "Không thỏa hiệp với kẻ thù giai cấp, nhưng cần biết thỏa hiệp chiến thuật.",
    fullContent: {
      context:
        "Được viết sau Cách mạng Tháng Mười và trong bối cảnh thành lập Quốc tế Cộng sản, tác phẩm này nhằm chỉ đạo các đảng cộng sản trẻ ở Tây Âu tránh những sai lầm 'cực tả' trong chiến thuật cách mạng.",
      mainArguments: [
        {
          title: "Sự cần thiết của chiến thuật linh hoạt",
          content:
            "Lenin lập luận rằng các đảng cộng sản phải biết áp dụng chiến thuật linh hoạt, không giáo điều. Trong những điều kiện cụ thể, đôi khi cần phải thỏa hiệp tạm thời để bảo tồn lực lượng và chuẩn bị cho những cuộc đấu tranh lớn hơn.",
        },
        {
          title: "Tham gia nghị viện và công đoàn",
          content:
            "Trái với quan điểm cực tả, Lenin chủ trương các đảng cộng sản nên tham gia vào nghị viện tư sản và các công đoàn cải lương để tuyên truyền và tổ chức quần chúng từ bên trong.",
        },
        {
          title: "Kinh nghiệm cách mạng Nga",
          content:
            "Lenin chia sẻ kinh nghiệm của Đảng Bolshevik trong việc kết hợp đấu tranh hợp pháp và bất hợp pháp, nhấn mạnh tầm quan trọng của việc học hỏi từ thực tiễn cách mạng.",
        },
      ],
      historicalImpact:
        "Tác phẩm này đã giúp định hình chiến thuật của phong trào cộng sản quốc tế và ảnh hưởng đến cách tiếp cận của các đảng cộng sản trong suốt thế kỷ 20.",
      keyQuotes: [
        "Không thỏa hiệp với kẻ thù giai cấp, nhưng cần biết thỏa hiệp chiến thuật.",
        "Chủ nghĩa cộng sản cực tả là một căn bệnh trẻ con.",
        "Phải học cách làm việc trong mọi tổ chức hợp pháp của quần chúng.",
      ],
    },
  },
}

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const work = worksData[params.slug as keyof typeof worksData]

  if (!work) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/#works">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại Tác phẩm
            </Button>
          </Link>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-accent/10 p-3 rounded-xl">
              <BookOpen className="h-8 w-8 text-accent" />
            </div>
            <div className="flex-1">
              <Badge variant="secondary" className="mb-3">
                {work.year}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-black mb-3 text-balance">{work.title}</h1>
              <p className="text-xl text-muted-foreground italic mb-4">{work.originalTitle}</p>
              <Badge className="mr-2">{work.category}</Badge>
            </div>
          </div>
        </div>

        {/* Quote */}
        <Card className="mb-8 border-accent/20 bg-gradient-to-r from-accent/5 to-transparent">
          <CardContent className="p-6">
            <Quote className="h-8 w-8 text-accent mb-4" />
            <blockquote className="text-xl font-medium text-balance mb-4">"{work.quote}"</blockquote>
            <cite className="text-sm text-muted-foreground">— Vladimir Ilyich Lenin</cite>
          </CardContent>
        </Card>

        {/* Overview */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Target className="h-6 w-6 text-accent" />
              Tổng quan
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{work.description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Tag className="h-4 w-4" />Ý tưởng chính
                </h3>
                <div className="space-y-2">
                  {work.keyIdeas.map((idea, i) => (
                    <Badge key={i} variant="outline" className="mr-2 mb-2">
                      {idea}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Tác động lịch sử
                </h3>
                <p className="text-sm text-muted-foreground">{work.impact}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Content */}
        <div className="space-y-8">
          {/* Context */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Bối cảnh lịch sử</h2>
              <p className="text-muted-foreground leading-relaxed">{work.fullContent.context}</p>
            </CardContent>
          </Card>

          {/* Main Arguments */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Luận điểm chính</h2>
              <div className="space-y-6">
                {work.fullContent.mainArguments.map((argument, i) => (
                  <div key={i} className="border-l-4 border-accent pl-6">
                    <h3 className="text-lg font-semibold mb-3">{argument.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{argument.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Quotes */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Trích dẫn nổi bật</h2>
              <div className="space-y-4">
                {work.fullContent.keyQuotes.map((quote, i) => (
                  <blockquote key={i} className="border-l-4 border-muted pl-6 italic text-muted-foreground">
                    "{quote}"
                  </blockquote>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Historical Impact */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Ảnh hưởng lịch sử</h2>
              <p className="text-muted-foreground leading-relaxed">{work.fullContent.historicalImpact}</p>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <Card className="mt-8 bg-muted/50">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4">
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Tải PDF
              </Button>
              <Button variant="outline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Đọc bản gốc
              </Button>
              <Button variant="outline">
                <BookOpen className="h-4 w-4 mr-2" />
                Tài liệu liên quan
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
