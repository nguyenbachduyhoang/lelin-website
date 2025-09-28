"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowLeft, Clock, Users, Landmark, BookOpen } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const journeyData = {
  "simbirsk-ulyanovsk": {
    location: "Simbirsk (Ulyanovsk)",
    country: "Nga",
    period: "1870-1887",
    description: "Nơi sinh và lớn lên, nơi hình thành những ý tưởng cách mạng đầu tiên.",
    coordinates: [54.3141, 48.3794],
    detailedInfo: {
      significance: "Thành phố sinh của Lenin, nơi ông trải qua 17 năm đầu đời và hình thành nền tảng tư tưởng.",
      keyEvents: [
        {
          year: "1870",
          event: "Vladimir Ilyich Ulyanov (Lenin) sinh ngày 22/4/1870",
          details: "Sinh trong một gia đình trí thức, cha là thanh tra giáo dục tỉnh Simbirsk",
        },
        {
          year: "1887",
          event: "Anh trai Aleksandr bị hành quyết",
          details:
            "Aleksandr Ulyanov bị xử tử vì tham gia âm mưu ám sát Tsar Alexander III, sự kiện này ảnh hưởng sâu sắc đến Lenin",
        },
        {
          year: "1887",
          event: "Tốt nghiệp trung học với huy chương vàng",
          details: "Hoàn thành chương trình trung học xuất sắc và chuẩn bị vào đại học",
        },
      ],
      culturalContext:
        "Simbirsk là một thành phố tỉnh lẻ bên bờ sông Volga, với dân số khoảng 40,000 người. Thành phố có tầng lớp quan lại và trí thức nhỏ, trong bối cảnh nông thôn Nga còn mang đậm tính phong kiến.",
      familyBackground:
        "Gia đình Ulyanov thuộc tầng lớp trí thức tiến bộ. Cha Lenin - Ilya Nikolayevich Ulyanov là thanh tra giáo dục, mẹ - Maria Alexandrovna là con gái của một bác sĩ. Gia đình có truyền thống giáo dục và quan tâm đến các vấn đề xã hội.",
      earlyInfluences:
        "Môi trường gia đình dân chủ, việc đọc các tác phẩm văn học Nga tiến bộ như Chernyshevsky, và đặc biệt là cái chết của anh trai đã định hình tư tưởng cách mạng ban đầu của Lenin.",
    },
  },
  "saint-petersburg": {
    location: "Saint Petersburg",
    country: "Nga",
    period: "1893-1895",
    description: "Bắt đầu hoạt động cách mạng, thành lập Liên minh Đấu tranh Giải phóng Giai cấp Công nhân.",
    coordinates: [59.9311, 30.3351],
    detailedInfo: {
      significance:
        "Nơi Lenin bắt đầu sự nghiệp cách mạng chuyên nghiệp và tiếp xúc trực tiếp với phong trào công nhân.",
      keyEvents: [
        {
          year: "1893",
          event: "Chuyển đến Saint Petersburg",
          details: "Làm luật sư trợ lý và bắt đầu tham gia các nhóm Marxist bí mật",
        },
        {
          year: "1895",
          event: "Thành lập Liên minh Đấu tranh Giải phóng Giai cấp Công nhân",
          details: "Tổ chức đầu tiên kết hợp lý thuyết Marxist với phong trào công nhân thực tế ở Nga",
        },
        {
          year: "1895",
          event: "Bị bắt giữ lần đầu",
          details: "Bị cảnh sát Tsar bắt vào tháng 12/1895 vì hoạt động cách mạng",
        },
      ],
      culturalContext:
        "Saint Petersburg là thủ đô của Đế quốc Nga, trung tâm chính trị và văn hóa. Thành phố có sự phát triển công nghiệp mạnh mẽ với tầng lớp công nhân đông đảo, tạo điều kiện cho hoạt động cách mạng.",
      familyBackground:
        "Lenin sống độc thân, tập trung hoàn toàn vào hoạt động cách mạng. Ông thuê phòng nhỏ và dành phần lớn thời gian cho việc nghiên cứu lý thuyết và tổ chức.",
      earlyInfluences:
        "Tiếp xúc trực tiếp với giai cấp công nhân, nghiên cứu sâu các tác phẩm của Marx và Engels, và học hỏi kinh nghiệm từ các nhà cách mạng lão thành.",
    },
  },
  siberia: {
    location: "Siberia",
    country: "Nga",
    period: "1897-1900",
    description: "Thời gian lưu đày, viết nhiều tác phẩm quan trọng và kết hôn với Nadezhda Krupskaya.",
    coordinates: [52.2978, 104.2964],
    detailedInfo: {
      significance: "Thời kỳ lưu đày quan trọng giúp Lenin hoàn thiện tư tưởng và phương pháp cách mạng.",
      keyEvents: [
        {
          year: "1897",
          event: "Bị lưu đày đến Siberia",
          details: "Sau 14 tháng tù, Lenin bị lưu đày đến làng Shushenskoye ở Siberia",
        },
        {
          year: "1898",
          event: "Kết hôn với Nadezhda Krupskaya",
          details: "Krupskaya cũng bị lưu đày và họ kết hôn tại Siberia",
        },
        {
          year: "1899",
          event: "Viết 'Sự phát triển của chủ nghĩa tư bản ở Nga'",
          details: "Tác phẩm quan trọng phân tích kinh tế chính trị Nga",
        },
      ],
      culturalContext: "Siberia là vùng đất lưu đày truyền thống của Nga, nơi có nhiều trí thức và cách mạng gia.",
      familyBackground: "Cuộc sống gia đình ổn định với Krupskaya, có thời gian nghiên cứu và viết lách.",
      earlyInfluences: "Tiếp xúc với các cách mạng gia khác, nghiên cứu sâu về kinh tế chính trị và xã hội học.",
    },
  },
  london: {
    location: "London",
    country: "Anh",
    period: "1902-1903",
    description: 'Xuất bản báo Iskra, viết "What Is to Be Done?", tổ chức Đại hội Đảng lần thứ II.',
    coordinates: [51.5074, -0.1276],
    detailedInfo: {
      significance: "Trung tâm hoạt động cách mạng quốc tế và nơi hình thành đảng Bolshevik.",
      keyEvents: [
        {
          year: "1902",
          event: "Xuất bản 'What Is to Be Done?'",
          details: "Tác phẩm định hình lý thuyết về tổ chức đảng cách mạng",
        },
        {
          year: "1903",
          event: "Đại hội Đảng lần thứ II",
          details: "Sự chia tách giữa Bolshevik và Menshevik",
        },
      ],
      culturalContext: "London là trung tâm của phong trào cách mạng quốc tế và nơi tị nạn của nhiều cách mạng gia.",
      familyBackground: "Sống trong điều kiện khó khăn nhưng có môi trường tự do để hoạt động chính trị.",
      earlyInfluences: "Tiếp xúc với các nhà cách mạng quốc tế và phát triển mạng lưới tổ chức toàn cầu.",
    },
  },
  geneva: {
    location: "Geneva",
    country: "Thụy Sĩ",
    period: "1914-1917",
    description: "Thời kỳ lưu vong, phát triển lý thuyết về chủ nghĩa đế quốc và chiến tranh.",
    coordinates: [46.2044, 6.1432],
    detailedInfo: {
      significance: "Nơi Lenin phát triển lý thuyết về chủ nghĩa đế quốc và chuẩn bị cho cách mạng.",
      keyEvents: [
        {
          year: "1916",
          event: "Viết 'Chủ nghĩa đế quốc là giai đoạn cao nhất của chủ nghĩa tư bản'",
          details: "Tác phẩm quan trọng về lý thuyết kinh tế chính trị",
        },
        {
          year: "1917",
          event: "Chuẩn bị trở về Nga",
          details: "Theo dõi tình hình cách mạng tháng Hai và chuẩn bị kế hoạch trở về",
        },
      ],
      culturalContext: "Bối cảnh Chiến tranh thế giới thứ nhất và khủng hoảng chính trị ở Nga.",
      familyBackground: "Đi cùng với Krupskaya và các đồng chí cách mạng.",
      earlyInfluences: "Quyết tâm trở về để lãnh đạo cách mạng xã hội chủ nghĩa.",
    },
  },
  "sealed-train": {
    location: "Sealed Train",
    country: "Đức → Nga",
    period: "Tháng 4/1917",
    description: "Hành trình lịch sử trở về Nga qua Đức trong toa tàu niêm phong.",
    coordinates: [52.52, 13.405],
    detailedInfo: {
      significance: "Hành trình lịch sử đánh dấu sự trở lại của Lenin để lãnh đạo cách mạng.",
      keyEvents: [
        {
          year: "1917",
          event: "Khởi hành từ Zurich",
          details: "Lenin và 31 cách mạng gia khác lên tàu tại Zurich",
        },
        {
          year: "1917",
          event: "Đi qua Đức",
          details: "Tàu đi qua lãnh thổ Đức mà không dừng lại, hoàn toàn niêm phong",
        },
        {
          year: "1917",
          event: "Đến Petrograd",
          details: "Đến ga Finland Station ở Petrograd và được đón tiếp nồng nhiệt",
        },
      ],
      culturalContext: "Bối cảnh Chiến tranh thế giới thứ nhất và khủng hoảng chính trị ở Nga.",
      familyBackground: "Đi cùng với Krupskaya và các đồng chí cách mạng.",
      earlyInfluences: "Quyết tâm trở về để lãnh đạo cách mạng xã hội chủ nghĩa.",
    },
  },
  "petrograd-st-petersburg": {
    location: "Petrograd (St. Petersburg)",
    country: "Nga",
    period: "1917-1918",
    description: "Lãnh đạo Cách mạng Tháng Mười, thành lập nhà nước Xô viết đầu tiên.",
    coordinates: [59.9311, 30.3351],
    detailedInfo: {
      significance: "Nơi diễn ra Cách mạng Tháng Mười và thành lập chính quyền Xô viết.",
      keyEvents: [
        {
          year: "1917",
          event: "Luận cương tháng Tư",
          details: "Đưa ra chương trình cách mạng xã hội chủ nghĩa",
        },
        {
          year: "1917",
          event: "Cách mạng Tháng Mười",
          details: "Lãnh đạo Bolshevik chiếm quyền lực từ Chính phủ lâm thời",
        },
        {
          year: "1918",
          event: "Ký Hiệp ước Brest-Litovsk",
          details: "Kết thúc sự tham gia của Nga trong Chiến tranh thế giới thứ nhất",
        },
      ],
      culturalContext: "Trung tâm chính trị của Nga trong thời kỳ cách mạng và nội chiến.",
      familyBackground: "Sống và làm việc tại Điện Kremlin, tập trung vào công việc lãnh đạo nhà nước.",
      earlyInfluences: "Thực hiện lý tưởng cách mạng xã hội chủ nghĩa trong thực tế.",
    },
  },
  moscow: {
    location: "Moscow",
    country: "Nga",
    period: "1918-1924",
    description: "Thủ đô mới của Xô viết, nơi Lenin lãnh đạo đất nước cho đến khi qua đời.",
    coordinates: [55.7558, 37.6173],
    detailedInfo: {
      significance: "Thủ đô của nhà nước Xô viết và nơi Lenin dành những năm cuối đời.",
      keyEvents: [
        {
          year: "1918",
          event: "Chuyển thủ đô từ Petrograd về Moscow",
          details: "Moscow trở thành thủ đô của Cộng hòa Xã hội chủ nghĩa Xô viết Nga",
        },
        {
          year: "1921",
          event: "Chính sách Kinh tế Mới (NEP)",
          details: "Đưa ra chính sách kinh tế linh hoạt để phục hồi đất nước",
        },
        {
          year: "1922",
          event: "Thành lập Liên Xô",
          details: "Thành lập Liên bang Cộng hòa Xã hội chủ nghĩa Xô viết",
        },
        {
          year: "1924",
          event: "Lenin qua đời",
          details: "Qua đời ngày 21/1/1924 tại Gorki, gần Moscow",
        },
      ],
      culturalContext: "Moscow là trung tâm chính trị, kinh tế và văn hóa của nhà nước Xô viết mới.",
      familyBackground: "Sống tại Kremlin với Krupskaya, sức khỏe suy yếu trong những năm cuối.",
      earlyInfluences: "Tập trung vào việc xây dựng và củng cố nhà nước xã hội chủ nghĩa.",
    },
  },
  samara: {
    location: "Samara",
    country: "Đế quốc Nga",
    period: "1889-1893",
    description:
      "Thời gian tự học luật và chuẩn bị thi lấy bằng. Tiếp tục nghiên cứu Marxism và bắt đầu hoạt động chính trị.",
    coordinates: [53.2001, 50.15],
    detailedInfo: {
      significance: "Giai đoạn quan trọng trong việc hình thành nền tảng pháp lý và tư tưởng chính trị của Lenin.",
      keyEvents: [
        {
          year: "1889",
          event: "Chuyển đến Samara cùng gia đình",
          details: "Sau khi bị đuổi khỏi Đại học Kazan, Lenin chuyển đến Samara và bắt đầu tự học luật",
        },
        {
          year: "1891",
          event: "Thi lấy bằng luật với kết quả xuất sắc",
          details: "Thi externally tại Đại học St. Petersburg và đạt kết quả cao nhất trong số các thí sinh",
        },
        {
          year: "1892",
          event: "Có giấy phép hành nghề luật sư",
          details: "Bắt đầu làm luật sư trợ lý và bào chữa cho người nghèo, thấy rõ bất công xã hội",
        },
        {
          year: "1893",
          event: "Tham gia nhóm Marxist địa phương",
          details: "Kết nối với các nhà tư tưởng tiến bộ và nghiên cứu sâu về chủ nghĩa Marxist",
        },
      ],
      culturalContext:
        "Samara là một thành phố thương mại quan trọng bên bờ sông Volga, với dân số đa dạng và hoạt động kinh tế sôi động. Thành phố có tầng lớp trí thức và thương gia, tạo môi trường thuận lợi cho việc tiếp xúc với các tư tưởng tiến bộ.",
      familyBackground:
        "Gia đình Ulyanov sống trong điều kiện khó khăn hơn sau cái chết của cha và việc Alexander bị xử tử. Lenin phải tự lập về mặt tài chính và học tập, điều này rèn luyện tính độc lập và quyết tâm của ông.",
      earlyInfluences:
        "Việc tự học luật giúp Lenin phát triển tư duy logic và khả năng phân tích. Kinh nghiệm bào chữa cho người nghèo khiến ông thấy rõ sự bất công của hệ thống pháp luật và xã hội Nga, củng cố niềm tin vào chủ nghĩa Marxist.",
    },
  },
  kazan: {
    location: "Kazan",
    country: "Đế quốc Nga",
    period: "1887-1888",
    description:
      "Nhập học Đại học Kazan nhưng bị đuổi vì tham gia biểu tình sinh viên. Bắt đầu tự học và tiếp xúc với tư tưởng Marxist.",
    coordinates: [55.8304, 49.0661],
    detailedInfo: {
      significance:
        "Nơi Lenin lần đầu tiếp xúc với hoạt động sinh viên cách mạng và bị đuổi học vì lý tưởng chính trị.",
      keyEvents: [
        {
          year: "1887",
          event: "Nhập học Đại học Kazan",
          details: "Vào khoa Luật của Đại học Kazan, một trong những trường đại học danh tiếng của Nga",
        },
        {
          year: "1887",
          event: "Tham gia biểu tình sinh viên",
          details: "Tham gia cuộc biểu tình phản đối các quy định nghiêm khắc của trường đại học",
        },
        {
          year: "1887",
          event: "Bị bắt và đuổi học",
          details: "Bị cảnh sát bắt giữ và sau đó bị đuổi khỏi trường vì 'hoạt động chống chính phủ'",
        },
        {
          year: "1888-1889",
          event: "Thời gian tự học tại nhà",
          details: "Trở về nhà và bắt đầu tự học, đọc các tác phẩm của Marx, Engels và các nhà tư tưởng cách mạng khác",
        },
      ],
      culturalContext:
        "Kazan là trung tâm giáo dục quan trọng của vùng Volga, với truyền thống học thuật lâu đời. Đại học Kazan là nơi đào tạo nhiều trí thức tiến bộ và có không khí tự do học thuật tương đối.",
      familyBackground:
        "Lenin sống xa gia đình lần đầu tiên, phải tự lập và học cách sống độc lập. Việc bị đuổi học là một cú sốc lớn nhưng cũng là bước ngoặt quan trọng trong cuộc đời ông.",
      earlyInfluences:
        "Tiếp xúc với các sinh viên có tư tưởng tiến bộ, tham gia các cuộc thảo luận chính trị, và đặc biệt là việc đọc các tác phẩm cách mạng trong thời gian bị đuổi học đã định hình tư tưởng Marxist của Lenin.",
    },
  },
}

export default function JourneyDetailPage({ params }: { params: { slug: string } }) {
  const journey = journeyData[params.slug as keyof typeof journeyData]

  if (!journey) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/#journey">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại Hành trình
            </Button>
          </Link>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-accent/10 p-3 rounded-xl">
              <MapPin className="h-8 w-8 text-accent" />
            </div>
            <div className="flex-1">
              <Badge variant="secondary" className="mb-3">
                {journey.period}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-black mb-3 text-balance">{journey.location}</h1>
              <p className="text-xl text-muted-foreground mb-4">{journey.country}</p>
              <p className="text-lg text-muted-foreground">{journey.description}</p>
            </div>
          </div>
        </div>

        {/* Significance */}
        <Card className="mb-8 border-accent/20 bg-gradient-to-r from-accent/5 to-transparent">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Landmark className="h-6 w-6 text-accent" />Ý nghĩa lịch sử
            </h2>
            <p className="text-lg leading-relaxed">{journey.detailedInfo.significance}</p>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Clock className="h-6 w-6 text-accent" />
              Các sự kiện quan trọng
            </h2>
            <div className="space-y-6">
              {journey.detailedInfo.keyEvents.map((event, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Badge variant="outline" className="font-mono">
                      {event.year}
                    </Badge>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{event.event}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{event.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Context Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                Bối cảnh xã hội
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">{journey.detailedInfo.culturalContext}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-accent" />
                Ảnh hưởng tư tưởng
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">{journey.detailedInfo.earlyInfluences}</p>
            </CardContent>
          </Card>
        </div>

        {/* Family Background */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Hoàn cảnh gia đình</h2>
            <p className="text-muted-foreground leading-relaxed">{journey.detailedInfo.familyBackground}</p>
          </CardContent>
        </Card>

        {/* Navigation */}
        <Card className="bg-muted/50">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Điểm trước
              </Button>
              <span className="text-sm text-muted-foreground">{journey.period}</span>
              <Button variant="outline">
                Điểm tiếp theo
                <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
