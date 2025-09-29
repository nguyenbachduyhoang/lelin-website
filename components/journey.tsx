"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Train,
  Plane,
  Clock,
  ArrowRight,
  BookOpen,
  Users,
  Gavel,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import EuropeMap from "./europe-map";

const journeyStops = [
  {
    id: 1,
    location: "Simbirsk (Ulyanovsk)",
    country: "Đế quốc Nga",
    period: "1870-1887",
    description:
      "Nơi sinh và lớn lên. Cha là thanh tra trường học, mẹ có gốc Đức-Thụy Điển-Do Thái. Lenin học xuất sắc tại Gymnasium, nhận huy chương vàng.",
    keyEvents: [
      "22/4/1870: Sinh ra với tên Vladimir Ilyich Ulyanov",
      "12/1/1886: Cha qua đời",
      "8/5/1887: Anh trai Alexander bị xử tử vì âm mưu ám sát Sa hoàng",
    ],
    icon: MapPin,
    image: "/simbirsk-russia-1870s-historical-city.jpg",
    coordinates: [54.3141, 48.3794],
    category: "childhood",
  },
  {
    id: 2,
    location: "Kazan",
    country: "Đế quốc Nga",
    period: "1887-1888",
    description:
      "Nhập học Đại học Kazan nhưng bị đuổi vì tham gia biểu tình sinh viên. Bắt đầu tự học và tiếp xúc với tư tưởng Marxist.",
    keyEvents: [
      "1887: Vào Đại học Kazan",
      "1887: Bị bắt và đuổi học vì biểu tình",
      "1888-1889: Tự học, đọc Marx và các tài liệu cách mạng",
    ],
    icon: BookOpen,
    image: "/kazan-university-1880s-historical-building.jpg",
    coordinates: [55.8304, 49.0661],
    category: "education",
  },
  {
    id: 3,
    location: "Samara",
    country: "Đế quốc Nga",
    period: "1889-1893",
    description:
      "Thời gian tự học luật và chuẩn bị thi lấy bằng. Tiếp tục nghiên cứu Marxism và bắt đầu hoạt động chính trị.",
    keyEvents: [
      "1891: Thi lấy bằng luật với kết quả xuất sắc",
      "1892: Có giấy phép hành nghề luật sư",
      "1892: Bào chữa cho người nghèo, thấy rõ bất công xã hội",
    ],
    icon: Gavel,
    image: "/samara-russia-1890s-volga-river.jpg",
    coordinates: [53.2001, 50.15],
    category: "education",
  },
  {
    id: 4,
    location: "Saint Petersburg",
    country: "Đế quốc Nga",
    period: "1893-1895",
    description:
      "Bắt đầu hoạt động cách mạng nghiêm túc, tham gia các nhóm Marxist, thành lập Liên minh Đấu tranh Giải phóng Giai cấp Công nhân.",
    keyEvents: [
      "1893: Chuyển đến St. Petersburg",
      "1893-1895: Tham gia hoạt động Marxist",
      "20/12/1895: Bị bắt vì xuất bản báo bất hợp pháp",
    ],
    icon: Users,
    image: "/saint-petersburg-1890s-winter-palace.jpg",
    coordinates: [59.9311, 30.3351],
    category: "revolution",
  },
  {
    id: 5,
    location: "Siberia (Shushenskoye)",
    country: "Đế quốc Nga",
    period: "1897-1900",
    description:
      "Thời gian lưu đày ở Siberia. Kết hôn với Nadezhda Krupskaya, viết tác phẩm 'Sự phát triển của chủ nghĩa tư bản ở Nga'.",
    keyEvents: [
      "1897-1900: Lưu đày tại Shushenskoye",
      "22/7/1898: Kết hôn với Nadezhda Krupskaya",
      "1899: Xuất bản 'The Development of Capitalism in Russia'",
    ],
    icon: BookOpen,
    image: "/siberia-exile-village-1890s-snow.jpg",
    coordinates: [52.2978, 104.2964],
    category: "exile",
  },
  {
    id: 6,
    location: "Munich & London",
    country: "Đức & Anh",
    period: "1900-1903",
    description:
      "Lưu vong ở châu Âu, xuất bản báo Iskra, viết 'What Is to Be Done?', tổ chức Đại hội Đảng lần thứ II.",
    keyEvents: [
      "1900: Rời Nga, sang châu Âu",
      "1901: Bắt đầu dùng bí danh 'Lenin'",
      "1902: Xuất bản 'What Is To Be Done?'",
      "1903: Đại hội 2 RSDLP, phân chia Bolshevik-Menshevik",
    ],
    icon: Plane,
    image: "/london-1900s-british-museum-reading-room.jpg",
    coordinates: [51.5074, -0.1276],
    category: "exile",
  },
  {
    id: 7,
    location: "Geneva",
    country: "Thụy Sĩ",
    period: "1914-1917",
    description:
      "Thời kỳ lưu vong cuối, phát triển lý thuyết về chủ nghĩa đế quốc và chiến tranh. Viết nhiều tác phẩm quan trọng.",
    keyEvents: [
      "1905: Tham gia Cách mạng 1905",
      "1914-1917: Lưu vong tại Geneva",
      "1916: Viết 'Chủ nghĩa đế quốc là giai đoạn cao nhất của chủ nghĩa tư bản'",
    ],
    icon: BookOpen,
    image: "/geneva-switzerland-1910s-lake-geneva.jpg",
    coordinates: [46.2044, 6.1432],
    category: "theory",
  },
  {
    id: 8,
    location: "Sealed Train Journey",
    country: "Đức → Nga",
    period: "Tháng 4/1917",
    description:
      "Hành trình lịch sử trở về Nga qua Đức trong toa tàu niêm phong. Đức đồng ý cho Lenin qua để gây bất ổn cho Nga.",
    keyEvents: [
      "16/4/1917: Trở về Nga qua toa tàu kín",
      "Tháng 4/1917: Đưa ra 'Luận cương tháng Tư'",
      "Kêu gọi 'Tất cả quyền lực về Soviet'",
    ],
    icon: Train,
    image: "/sealed-train-1917-lenin-return-russia.jpg",
    coordinates: [52.52, 13.405],
    category: "revolution",
  },
  {
    id: 9,
    location: "Petrograd (St. Petersburg)",
    country: "Nga Xô viết",
    period: "1917-1918",
    description:
      "Lãnh đạo Cách mạng Tháng Mười, lật đổ Chính phủ lâm thời, thành lập nhà nước Xô viết đầu tiên trên thế giới.",
    keyEvents: [
      "Tháng 10/1917: Cách mạng Tháng Mười",
      "Bolshevik giành chính quyền",
      "Lenin trở thành lãnh đạo Nhà nước Xô viết",
      "30/8/1918: Bị ám sát hụt bởi Fanny Kaplan",
    ],
    icon: Users,
    image: "/petrograd-1917-october-revolution-winter-palace.jpg",
    coordinates: [59.9311, 30.3351],
    category: "revolution",
  },
  {
    id: 10,
    location: "Moscow",
    country: "Liên Xô",
    period: "1918-1924",
    description:
      "Thủ đô mới của Xô viết. Lenin lãnh đạo đất nước qua Nội chiến, thực hiện NEP, thành lập Liên Xô cho đến khi qua đời.",
    keyEvents: [
      "1918: Chuyển thủ đô về Moscow",
      "1918-1921: Lãnh đạo trong Nội chiến",
      "1921: Thực hiện Chính sách Kinh tế Mới (NEP)",
      "1922: Thành lập Liên Xô",
      "1922-1924: Sức khỏe suy giảm, nhiều lần đột quỵ",
      "21/1/1924: Qua đời tại Gorki",
    ],
    icon: MapPin,
    image: "/moscow-kremlin-1920s-red-square.jpg",
    coordinates: [55.7558, 37.6173],
    category: "leadership",
  },
];

const categoryConfig = {
  childhood: { color: "#8B5CF6", icon: MapPin, label: "Thời thơ ấu" },
  education: { color: "#06B6D4", icon: BookOpen, label: "Học tập" },
  revolution: { color: "#EF4444", icon: Users, label: "Cách mạng" },
  exile: { color: "#F59E0B", icon: Plane, label: "Lưu vong" },
  theory: { color: "#10B981", icon: BookOpen, label: "Lý thuyết" },
  leadership: { color: "#8B5CF6", icon: MapPin, label: "Lãnh đạo" },
};

export function Journey() {
  const [activeStop, setActiveStop] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<"cards" | "map">("cards");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(
            entry.target.getAttribute("data-index") || "0"
          );
          if (entry.isIntersecting && !isNaN(index)) {
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll("[data-journey-card]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="journey"
      className="py-20 px-6 bg-gradient-to-br from-amber-50/30 via-background to-orange-50/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qUHUE0PfwgCtNP8QaiHEp3KpUcP4WU.png"
          alt="Europe vintage map"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-balance bg-gradient-to-r from-amber-800 via-orange-600 to-amber-800 bg-clip-text text-transparent">
            Hành Trình Cuộc Đời
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            54 năm cuộc đời qua 10 điểm dừng quan trọng từ Simbirsk đến Moscow
          </p>

          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">10</div>
              <div className="text-sm text-muted-foreground">Điểm dừng</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">54</div>
              <div className="text-sm text-muted-foreground">Năm cuộc đời</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">6</div>
              <div className="text-sm text-muted-foreground">Quốc gia</div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div
              className="inline-flex items-center gap-2 p-1 rounded-full border border-amber-200 bg-white/80 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/50"
              role="tablist"
              aria-label="Chuyển chế độ hiển thị"
            >
              <Button
                variant="ghost"
                size="sm"
                aria-pressed={viewMode === "cards"}
                onClick={() => setViewMode("cards")}
                className={`${
                  viewMode === "cards"
                    ? "bg-amber-600 text-white shadow hover:bg-amber-700"
                    : "text-amber-700 hover:bg-amber-50"
                } rounded-full px-4`}
              >
                Danh sách
              </Button>
              <Button
                variant="ghost"
                size="sm"
                aria-pressed={viewMode === "map"}
                onClick={() => setViewMode("map")}
                className={`${
                  viewMode === "map"
                    ? "bg-amber-600 text-white shadow hover:bg-amber-700"
                    : "text-amber-700 hover:bg-amber-50"
                } rounded-full px-4`}
              >
                Bản đồ
              </Button>
            </div>
          </div>
        </div>

        {viewMode === "map" ? (
          <div className="mb-16">
            <EuropeMap />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {journeyStops.map((stop, index) => {
              const isVisible = visibleCards.includes(index);
              const isActive = activeStop === index;
              const categoryColor =
                categoryConfig[stop.category as keyof typeof categoryConfig]
                  .color;

              return (
                <Card
                  key={`card-${index}`}
                  data-journey-card
                  data-index={index}
                  className={`group cursor-pointer transition-all duration-700 hover:shadow-2xl hover:shadow-amber-500/20 border-amber-200/50 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  } ${
                    isActive
                      ? "ring-2 ring-amber-500 scale-105"
                      : "hover:-translate-y-2"
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setActiveStop(index)}
                  onMouseLeave={() => setActiveStop(null)}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={stop.image || "/historical-city-vintage.jpg"}
                      alt={`${stop.location}, ${stop.country}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        console.log(
                          "[v0] Image load error for:",
                          stop.location
                        );
                        e.currentTarget.src = "/historical-city-vintage.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div
                      className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: categoryColor }}
                    >
                      {stop.id}
                    </div>

                    <div
                      className="absolute bottom-4 right-4 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: `${categoryColor}90` }}
                    >
                      {stop.period}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-balance group-hover:text-amber-600 transition-colors">
                          {stop.location}
                        </h3>
                        <span
                          className="px-2 py-1 rounded-full text-xs font-semibold text-white"
                          style={{ backgroundColor: categoryColor }}
                        >
                          {
                            categoryConfig[
                              stop.category as keyof typeof categoryConfig
                            ].label
                          }
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{stop.country}</span>
                        <Clock className="h-3 w-3 ml-2" />
                        <span>{stop.period}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground text-pretty mb-4 leading-relaxed">
                      {stop.description}
                    </p>

                    <div className="bg-amber-50 rounded-lg p-3 mb-4 border border-amber-200">
                      <h4 className="font-semibold text-amber-900 text-xs mb-1">
                        Sự kiện chính:
                      </h4>
                      <ul className="space-y-1">
                        {stop.keyEvents.slice(0, 2).map((event, i) => (
                          <li key={i} className="text-xs text-amber-800">
                            • {event}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full group-hover:bg-amber-600 group-hover:text-white transition-all duration-300"
                      asChild
                    >
                      <Link
                        href={`/journey/${stop.location
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")
                          .replace(/^-|-$/g, "")}`}
                      >
                        Tìm hiểu thêm
                        <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-amber-100/50 px-4 py-2 rounded-full border border-amber-200">
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" />
            Hành trình từ cậu bé Simbirsk đến lãnh tụ cách mạng vĩ đại
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
