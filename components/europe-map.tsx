"use client";

import { useState } from "react";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const journeyStops = [
  {
    id: 1,
    location: "Simbirsk (Ulyanovsk)",
    country: "Đế quốc Nga",
    period: "1870-1887",
    description:
      "Nơi sinh và lớn lên. Vladimir Ilyich Ulyanov sinh ra tại thành phố Simbirsk bên sông Volga",
    coordinates: { x: 68, y: 32 }, // Tọa độ chính xác trên bản đồ chi tiết
    category: "childhood",
  },
  {
    id: 2,
    location: "Kazan",
    country: "Đế quốc Nga",
    period: "1887-1888",
    description:
      "Học đại học và bị đuổi học vì tham gia biểu tình sinh viên chống chế độ Tsarist",
    coordinates: { x: 65, y: 30 },
    category: "education",
  },
  {
    id: 3,
    location: "Saint Petersburg",
    country: "Đế quốc Nga",
    period: "1893-1895",
    description:
      "Bắt đầu hoạt động cách mạng nghiêm túc, thành lập Liên minh Đấu tranh Giải phóng Công nhân",
    coordinates: { x: 50, y: 16 },
    category: "revolution",
  },
  {
    id: 4,
    location: "Siberia (Shushenskoye)",
    country: "Đế quốc Nga",
    period: "1897-1900",
    description:
      "Thời gian lưu đày ở Siberia, kết hôn với Nadezhda Krupskaya và viết nhiều tác phẩm",
    coordinates: { x: 78, y: 28 },
    category: "exile",
  },
  {
    id: 5,
    location: "Munich",
    country: "Đế chế Đức",
    period: "1900-1902",
    description:
      "Lưu vong ở châu Âu, xuất bản báo Iskra và tổ chức hoạt động cách mạng từ xa",
    coordinates: { x: 37, y: 42 },
    category: "exile",
  },
  {
    id: 6,
    location: "London",
    country: "Đế chế Anh",
    period: "1902-1903",
    description:
      "Tiếp tục xuất bản Iskra, viết 'What Is to Be Done?' và chuẩn bị Đại hội Đảng",
    coordinates: { x: 22, y: 32 },
    category: "exile",
  },
  {
    id: 7,
    location: "Geneva",
    country: "Thụy Sĩ",
    period: "1914-1917",
    description:
      "Phát triển lý thuyết về chủ nghĩa đế quốc và chiến tranh, viết nhiều tác phẩm quan trọng",
    coordinates: { x: 33, y: 48 },
    category: "theory",
  },
  {
    id: 8,
    location: "Sealed Train Journey",
    country: "Đức → Nga",
    period: "Tháng 4/1917",
    description:
      "Hành trình lịch sử trở về Nga qua Đức trong toa tàu niêm phong do chính quyền Đức tổ chức",
    coordinates: { x: 40, y: 35 },
    category: "revolution",
  },
  {
    id: 9,
    location: "Petrograd",
    country: "Nga Xô viết",
    period: "1917-1918",
    description:
      "Lãnh đạo Cách mạng Tháng Mười, lật đổ Chính phủ lâm thời và thành lập nhà nước Xô viết",
    coordinates: { x: 50, y: 16 },
    category: "revolution",
  },
  {
    id: 10,
    location: "Moscow",
    country: "Liên bang Xô viết",
    period: "1918-1924",
    description:
      "Thủ đô mới của Xô viết, lãnh đạo đất nước qua Nội chiến và thực hiện chính sách NEP",
    coordinates: { x: 55, y: 25 },
    category: "leadership",
  },
];

const categoryColors = {
  childhood: "#A0522D",
  education: "#D2B48C",
  revolution: "#8B4513",
  exile: "#CD853F",
  theory: "#DEB887",
  leadership: "#654321",
};

export function EuropeMap() {
  const [selectedStop, setSelectedStop] = useState<number | null>(null);
  const [hoveredStop, setHoveredStop] = useState<number | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Bản đồ châu Âu với style vintage */}
      <div className="relative bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-8 border-2 border-amber-200 shadow-2xl">
        <h3 className="text-2xl font-bold text-amber-900 text-center mb-6">
          HÀNH TRÌNH CUỘC ĐỜI LENIN
        </h3>

        {/* Container bản đồ */}
        <div className="relative aspect-[4/3] bg-gradient-to-br from-stone-100 to-amber-50 rounded-xl border-2 border-amber-300 overflow-hidden shadow-inner">
          {/* Background với texture giấy cũ */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50 opacity-80"></div>

          {/* Bản đồ châu Âu chi tiết */}
          <div className="absolute inset-0">
            <svg viewBox="0 0 800 600" className="w-full h-full">
              {/* Định nghĩa gradient cho các quốc gia */}
              <defs>
                <linearGradient
                  id="russiaGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#DEB887" />
                  <stop offset="100%" stopColor="#D2B48C" />
                </linearGradient>
                <linearGradient
                  id="germanyGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#CD853F" />
                  <stop offset="100%" stopColor="#A0522D" />
                </linearGradient>
                <linearGradient
                  id="franceGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#D2B48C" />
                  <stop offset="100%" stopColor="#BC9A6A" />
                </linearGradient>
                <linearGradient
                  id="britainGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#F5DEB3" />
                  <stop offset="100%" stopColor="#DEB887" />
                </linearGradient>
                <linearGradient
                  id="seaGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#E6F3FF" />
                  <stop offset="100%" stopColor="#B8E6FF" />
                </linearGradient>
              </defs>

              {/* Biển và đại dương */}
              <rect
                width="800"
                height="600"
                fill="url(#seaGrad)"
                opacity="0.3"
              />

              {/* Baltic Sea */}
              <ellipse
                cx="350"
                cy="120"
                rx="80"
                ry="40"
                fill="url(#seaGrad)"
                opacity="0.6"
              />

              {/* North Sea */}
              <ellipse
                cx="200"
                cy="160"
                rx="60"
                ry="35"
                fill="url(#seaGrad)"
                opacity="0.6"
              />

              {/* Mediterranean Sea */}
              <path
                d="M180 420 Q400 400 620 430 Q500 460 300 450 Z"
                fill="url(#seaGrad)"
                opacity="0.6"
              />

              {/* Nga - phần châu Âu và châu Á */}
              <path
                d="M420 30 L780 30 L780 50 L760 80 L750 120 L770 150 L780 200 L760 250 L720 300 L680 340 L620 360 L580 350 L540 330 L500 310 L460 290 L430 260 L410 220 L400 180 L410 140 L420 100 L430 60 Z"
                fill="url(#russiaGrad)"
                stroke="#8B4513"
                strokeWidth="1.5"
                opacity="0.9"
              />
              <text
                x="580"
                y="180"
                fill="#654321"
                fontSize="16"
                fontWeight="bold"
                fontFamily="serif"
              >
                RUSSIAN FEDERATION
              </text>

              {/* Phần châu Âu của Nga */}
              <path
                d="M420 180 L500 170 L520 200 L480 230 L450 220 L430 200 Z"
                fill="url(#russiaGrad)"
                stroke="#8B4513"
                strokeWidth="1.5"
                opacity="0.9"
              />

              {/* Đức */}
              <path
                d="M300 220 L380 210 L390 250 L385 280 L370 300 L350 310 L330 305 L310 290 L300 270 L295 245 Z"
                fill="url(#germanyGrad)"
                stroke="#8B4513"
                strokeWidth="1.5"
                opacity="0.9"
              />
              <text
                x="330"
                y="260"
                fill="#654321"
                fontSize="14"
                fontWeight="bold"
                fontFamily="serif"
              >
                GERMANY
              </text>

              {/* Pháp */}
              <path
                d="M200 260 L290 250 L285 290 L270 320 L250 350 L220 370 L190 360 L180 340 L185 310 L195 285 Z"
                fill="url(#franceGrad)"
                stroke="#8B4513"
                strokeWidth="1.5"
                opacity="0.9"
              />
              <text
                x="230"
                y="320"
                fill="#654321"
                fontSize="14"
                fontWeight="bold"
                fontFamily="serif"
              >
                FRANCE
              </text>

              {/* Anh Quốc */}
              <path
                d="M120 200 L180 190 L190 220 L185 250 L170 270 L150 275 L130 270 L115 250 L110 225 Z"
                fill="url(#britainGrad)"
                stroke="#8B4513"
                strokeWidth="1.5"
                opacity="0.9"
              />
              <text
                x="140"
                y="235"
                fill="#654321"
                fontSize="12"
                fontWeight="bold"
                fontFamily="serif"
              >
                GREAT BRITAIN
              </text>

              {/* Ireland */}
              <path
                d="M90 220 L120 215 L125 235 L115 250 L95 245 L85 235 Z"
                fill="#E6D3A3"
                stroke="#8B4513"
                strokeWidth="1"
                opacity="0.9"
              />
              <text
                x="100"
                y="235"
                fill="#654321"
                fontSize="9"
                fontWeight="bold"
                fontFamily="serif"
              >
                IRELAND
              </text>

              {/* Thụy Sĩ */}
              <path
                d="M270 320 L310 315 L315 335 L300 345 L280 340 L265 335 Z"
                fill="#DEB887"
                stroke="#8B4513"
                strokeWidth="1"
                opacity="0.9"
              />
              <text
                x="285"
                y="332"
                fill="#654321"
                fontSize="10"
                fontWeight="bold"
                fontFamily="serif"
              >
                SWITZERLAND
              </text>

              {/* Áo-Hungary */}
              <path
                d="M320 310 L420 305 L425 340 L410 355 L380 350 L340 345 L325 330 Z"
                fill="#D2B48C"
                stroke="#8B4513"
                strokeWidth="1"
                opacity="0.9"
              />
              <text
                x="360"
                y="330"
                fill="#654321"
                fontSize="11"
                fontWeight="bold"
                fontFamily="serif"
              >
                AUSTRIA-HUNGARY
              </text>

              {/* Italia */}
              <path
                d="M320 350 L350 345 L360 380 L355 420 L345 450 L340 480 L335 450 L330 420 L325 390 L320 365 Z"
                fill="#CD853F"
                stroke="#8B4513"
                strokeWidth="1.5"
                opacity="0.9"
              />
              <text
                x="340"
                y="400"
                fill="#654321"
                fontSize="12"
                fontWeight="bold"
                fontFamily="serif"
              >
                ITALY
              </text>

              {/* Tây Ban Nha */}
              <path
                d="M100 380 L220 370 L230 400 L220 430 L200 450 L150 455 L120 440 L95 420 L100 395 Z"
                fill="#BC9A6A"
                stroke="#8B4513"
                strokeWidth="1.5"
                opacity="0.9"
              />
              <text
                x="150"
                y="415"
                fill="#654321"
                fontSize="14"
                fontWeight="bold"
                fontFamily="serif"
              >
                SPAIN
              </text>

              {/* Bồ Đào Nha */}
              <path
                d="M80 390 L120 385 L125 420 L115 440 L90 435 L80 410 Z"
                fill="#D2B48C"
                stroke="#8B4513"
                strokeWidth="1"
                opacity="0.9"
              />
              <text
                x="95"
                y="415"
                fill="#654321"
                fontSize="9"
                fontWeight="bold"
                fontFamily="serif"
              >
                PORTUGAL
              </text>

              {/* Phần Lan */}
              <path
                d="M380 80 L420 75 L425 120 L410 140 L390 135 L380 110 Z"
                fill="#E6D3A3"
                stroke="#8B4513"
                strokeWidth="1"
                opacity="0.9"
              />
              <text
                x="395"
                y="110"
                fill="#654321"
                fontSize="10"
                fontWeight="bold"
                fontFamily="serif"
              >
                FINLAND
              </text>

              {/* Thụy Điển */}
              <path
                d="M340 70 L380 65 L385 120 L375 140 L355 135 L345 110 Z"
                fill="#DEB887"
                stroke="#8B4513"
                strokeWidth="1"
                opacity="0.9"
              />
              <text
                x="360"
                y="105"
                fill="#654321"
                fontSize="10"
                fontWeight="bold"
                fontFamily="serif"
              >
                SWEDEN
              </text>

              {/* Na Uy */}
              <path
                d="M300 50 L340 45 L350 90 L340 110 L320 105 L310 80 Z"
                fill="#CD853F"
                stroke="#8B4513"
                strokeWidth="1"
                opacity="0.9"
              />
              <text
                x="320"
                y="80"
                fill="#654321"
                fontSize="10"
                fontWeight="bold"
                fontFamily="serif"
              >
                NORWAY
              </text>

              {/* Đan Mạch */}
              <path
                d="M280 170 L320 165 L325 185 L315 195 L285 190 Z"
                fill="#A0522D"
                stroke="#8B4513"
                strokeWidth="1"
                opacity="0.9"
              />
              <text
                x="300"
                y="180"
                fill="#654321"
                fontSize="9"
                fontWeight="bold"
                fontFamily="serif"
              >
                DENMARK
              </text>

              {/* Hà Lan */}
              <path
                d="M250 200 L290 195 L295 215 L285 225 L255 220 Z"
                fill="#DEB887"
                stroke="#8B4513"
                strokeWidth="1"
                opacity="0.9"
              />
              <text
                x="270"
                y="210"
                fill="#654321"
                fontSize="9"
                fontWeight="bold"
                fontFamily="serif"
              >
                NETHERLANDS
              </text>

              {/* Bỉ */}
              <path
                d="M240 230 L280 225 L285 245 L275 255 L245 250 Z"
                fill="#CD853F"
                stroke="#8B4513"
                strokeWidth="1"
                opacity="0.9"
              />
              <text
                x="260"
                y="240"
                fill="#654321"
                fontSize="9"
                fontWeight="bold"
                fontFamily="serif"
              >
                BELGIUM
              </text>

              {/* Ba Lan */}
              <path
                d="M380 230 L440 225 L445 265 L430 280 L400 275 L385 250 Z"
                fill="#A0522D"
                stroke="#8B4513"
                strokeWidth="1.5"
                opacity="0.9"
              />
              <text
                x="410"
                y="255"
                fill="#654321"
                fontSize="12"
                fontWeight="bold"
                fontFamily="serif"
              >
                POLAND
              </text>

              {/* Ukraine */}
              <path
                d="M440 270 L520 265 L525 305 L510 320 L480 315 L450 300 Z"
                fill="#D2B48C"
                stroke="#8B4513"
                strokeWidth="1.5"
                opacity="0.9"
              />
              <text
                x="480"
                y="292"
                fill="#654321"
                fontSize="12"
                fontWeight="bold"
                fontFamily="serif"
              >
                UKRAINE
              </text>

              {/* Ottoman Empire */}
              <path
                d="M400 360 L550 355 L560 400 L540 430 L480 425 L420 420 L400 390 Z"
                fill="#A0522D"
                stroke="#8B4513"
                strokeWidth="1.5"
                opacity="0.9"
              />
              <text
                x="470"
                y="390"
                fill="#654321"
                fontSize="12"
                fontWeight="bold"
                fontFamily="serif"
              >
                OTTOMAN EMPIRE
              </text>

              {/* Romania */}
              <path
                d="M420 320 L480 315 L485 345 L470 360 L440 355 L425 340 Z"
                fill="#BC9A6A"
                stroke="#8B4513"
                strokeWidth="1"
                opacity="0.9"
              />
              <text
                x="450"
                y="340"
                fill="#654321"
                fontSize="10"
                fontWeight="bold"
                fontFamily="serif"
              >
                ROMANIA
              </text>

              {/* Serbia */}
              <path
                d="M380 350 L420 345 L425 370 L410 385 L385 380 Z"
                fill="#D2B48C"
                stroke="#8B4513"
                strokeWidth="1"
                opacity="0.9"
              />
              <text
                x="400"
                y="365"
                fill="#654321"
                fontSize="9"
                fontWeight="bold"
                fontFamily="serif"
              >
                SERBIA
              </text>

              {/* Bulgaria */}
              <path
                d="M420 370 L460 365 L465 395 L450 410 L425 405 Z"
                fill="#A0522D"
                stroke="#8B4513"
                strokeWidth="1"
                opacity="0.9"
              />
              <text
                x="440"
                y="385"
                fill="#654321"
                fontSize="9"
                fontWeight="bold"
                fontFamily="serif"
              >
                BULGARIA
              </text>

              {/* Greece */}
              <path
                d="M380 420 L420 415 L430 445 L420 470 L390 465 L375 445 Z"
                fill="#DEB887"
                stroke="#8B4513"
                strokeWidth="1"
                opacity="0.9"
              />
              <text
                x="400"
                y="445"
                fill="#654321"
                fontSize="10"
                fontWeight="bold"
                fontFamily="serif"
              >
                GREECE
              </text>

              {/* Iceland */}
              <ellipse
                cx="100"
                cy="80"
                rx="25"
                ry="15"
                fill="#E6D3A3"
                stroke="#8B4513"
                strokeWidth="1"
                opacity="0.9"
              />
              <text
                x="100"
                y="85"
                fill="#654321"
                fontSize="8"
                fontWeight="bold"
                fontFamily="serif"
                textAnchor="middle"
              >
                ICELAND
              </text>
            </svg>
          </div>

          {/* Đường kết nối các điểm với hiệu ứng đẹp */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <defs>
              <linearGradient
                id="pathGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#8B4513" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#A0522D" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#654321" stopOpacity="0.8" />
              </linearGradient>
              <filter
                id="pathGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {journeyStops.slice(0, -1).map((stop, index) => {
              const nextStop = journeyStops[index + 1];
              return (
                <g key={`path-${index}`}>
                  {/* Shadow line */}
                  <line
                    x1={`${stop.coordinates.x}%`}
                    y1={`${stop.coordinates.y}%`}
                    x2={`${nextStop.coordinates.x}%`}
                    y2={`${nextStop.coordinates.y}%`}
                    stroke="#000"
                    strokeWidth="4"
                    strokeDasharray="15,10"
                    opacity="0.2"
                    transform="translate(2,2)"
                  />
                  {/* Main path */}
                  <line
                    x1={`${stop.coordinates.x}%`}
                    y1={`${stop.coordinates.y}%`}
                    x2={`${nextStop.coordinates.x}%`}
                    y2={`${nextStop.coordinates.y}%`}
                    stroke="url(#pathGradient)"
                    strokeWidth="3"
                    strokeDasharray="15,10"
                    strokeLinecap="round"
                    filter="url(#pathGlow)"
                  />
                  {/* Direction indicator */}
                  <circle
                    cx={`${(stop.coordinates.x + nextStop.coordinates.x) / 2}%`}
                    cy={`${(stop.coordinates.y + nextStop.coordinates.y) / 2}%`}
                    r="3"
                    fill="#654321"
                    opacity="0.8"
                  />
                </g>
              );
            })}
          </svg>

          {/* Các điểm dừng với hiệu ứng nâng cao */}
          {journeyStops.map((stop, index) => (
            <div
              key={stop.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
              style={{
                left: `${stop.coordinates.x}%`,
                top: `${stop.coordinates.y}%`,
              }}
              onMouseEnter={() => setHoveredStop(index)}
              onMouseLeave={() => setHoveredStop(null)}
              onClick={() => setSelectedStop(index)}
            >
              {/* Outer pulse ring */}
              <div
                className={`absolute inset-0 rounded-full border-2 border-opacity-40 transition-all duration-500 ${
                  hoveredStop === index
                    ? "scale-150 opacity-100"
                    : "scale-100 opacity-0"
                }`}
                style={{
                  borderColor:
                    categoryColors[
                      stop.category as keyof typeof categoryColors
                    ],
                }}
              />

              {/* Main marker với gradient và shadow */}
              <div
                className={`w-10 h-10 rounded-full border-3 border-white shadow-2xl flex items-center justify-center text-white font-bold text-sm transition-all duration-300 relative ${
                  hoveredStop === index ? "scale-125 z-30" : "scale-100"
                } ${
                  selectedStop === index
                    ? "ring-4 ring-amber-400 ring-opacity-60"
                    : ""
                }`}
                style={{
                  background: `linear-gradient(135deg, ${
                    categoryColors[stop.category as keyof typeof categoryColors]
                  }, ${
                    categoryColors[stop.category as keyof typeof categoryColors]
                  }dd)`,
                  boxShadow: `0 6px 20px rgba(0,0,0,0.3), inset 0 1px 3px rgba(255,255,255,0.3)`,
                }}
              >
                {stop.id}

                {/* Inner highlight */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
              </div>

              {/* Enhanced tooltip */}
              {hoveredStop === index && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 z-40">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-2xl border-2 border-amber-200 p-4 min-w-[280px] max-w-[320px]">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-5 h-5 rounded-full border-2 border-white/70 shadow-sm"
                        style={{
                          backgroundColor:
                            categoryColors[
                              stop.category as keyof typeof categoryColors
                            ],
                        }}
                      />
                      <div className="font-bold text-amber-900 text-base leading-tight">
                        {stop.location}
                      </div>
                    </div>
                    <div className="text-sm text-amber-700 mb-2 font-medium bg-amber-100/50 px-2 py-1 rounded">
                      {stop.country} • {stop.period}
                    </div>
                    <div className="text-sm text-amber-800 leading-relaxed">
                      {stop.description}
                    </div>

                    {/* Enhanced arrow pointer */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                      <div className="border-[10px] border-transparent border-t-amber-50" />
                      <div className="absolute top-[-21px] left-1/2 transform -translate-x-1/2 border-[11px] border-transparent border-t-amber-200" />
                    </div>
                  </div>
                </div>
              )}

              {/* Selected state animation */}
              {selectedStop === index && (
                <div className="absolute inset-0 rounded-full border-2 border-amber-400 animate-ping opacity-75" />
              )}
            </div>
          ))}

          {/* Enhanced Legend */}
          <div className="absolute top-4 left-4 bg-gradient-to-br from-amber-50/95 to-orange-50/95 backdrop-blur-md rounded-xl p-4 border-2 border-amber-200/50 shadow-xl z-30">
            <div className="text-sm font-bold text-amber-900 mb-3 flex items-center gap-2">
              <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
              Hành trình cuộc đời
            </div>
            <div className="space-y-2">
              {Object.entries(categoryColors).map(([category, color]) => {
                const labels = {
                  childhood: "Thời thơ ấu",
                  education: "Học tập",
                  revolution: "Cách mạng",
                  exile: "Lưu vong",
                  theory: "Lý thuyết",
                  leadership: "Lãnh đạo",
                };
                return (
                  <div key={category} className="flex items-center gap-3 group">
                    <div
                      className="w-4 h-4 rounded-full border border-white/50 shadow-sm group-hover:scale-110 transition-transform"
                      style={{
                        background: `linear-gradient(135deg, ${color}, ${color}dd)`,
                        boxShadow: `0 2px 6px rgba(0,0,0,0.2)`,
                      }}
                    />
                    <span className="text-sm text-amber-800 font-medium">
                      {labels[category as keyof typeof labels]}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Path legend */}
            <div className="flex items-center gap-3 mt-4 pt-3 border-t border-amber-200/50">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full animate-pulse opacity-50"></div>
              </div>
              <span className="text-xs text-amber-700 font-medium">
                Lộ trình
              </span>
            </div>
          </div>

          {/* Enhanced Statistics */}
          <div className="absolute top-4 right-4 bg-gradient-to-br from-amber-50/95 to-orange-50/95 backdrop-blur-md rounded-xl p-4 border-2 border-amber-200/50 shadow-xl text-center z-30">
            <div className="text-2xl font-bold text-amber-900 mb-1">
              {journeyStops.length}
            </div>
            <div className="text-xs text-amber-700 font-medium uppercase tracking-wide">
              Điểm dừng
            </div>
            <div className="mt-2 text-xs text-amber-600 font-medium">
              54 năm cuộc đời
            </div>
            <div className="text-xs text-amber-600">1870 - 1924</div>
          </div>

          {/* Vintage Compass */}
          <div className="absolute bottom-4 right-4 w-20 h-20 z-30 opacity-70">
            <svg viewBox="0 0 80 80" className="w-full h-full">
              <defs>
                <radialGradient id="compassGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#DEB887" />
                  <stop offset="100%" stopColor="#8B4513" />
                </radialGradient>
              </defs>

              {/* Outer ring */}
              <circle
                cx="40"
                cy="40"
                r="38"
                fill="none"
                stroke="#8B4513"
                strokeWidth="2"
                opacity="0.8"
              />
              <circle
                cx="40"
                cy="40"
                r="32"
                fill="none"
                stroke="#8B4513"
                strokeWidth="1"
                opacity="0.6"
              />
              <circle
                cx="40"
                cy="40"
                r="26"
                fill="none"
                stroke="#8B4513"
                strokeWidth="0.5"
                opacity="0.4"
              />

              {/* Cardinal directions */}
              <line
                x1="40"
                y1="4"
                x2="40"
                y2="76"
                stroke="#8B4513"
                strokeWidth="1.5"
                opacity="0.8"
              />
              <line
                x1="4"
                y1="40"
                x2="76"
                y2="40"
                stroke="#8B4513"
                strokeWidth="1.5"
                opacity="0.8"
              />

              {/* Intercardinal directions */}
              <line
                x1="12"
                y1="12"
                x2="68"
                y2="68"
                stroke="#8B4513"
                strokeWidth="0.8"
                opacity="0.5"
              />
              <line
                x1="68"
                y1="12"
                x2="12"
                y2="68"
                stroke="#8B4513"
                strokeWidth="0.8"
                opacity="0.5"
              />

              {/* Direction labels */}
              <text
                x="40"
                y="12"
                textAnchor="middle"
                fill="#654321"
                fontSize="10"
                fontWeight="bold"
                fontFamily="serif"
              >
                N
              </text>
              <text
                x="68"
                y="44"
                textAnchor="middle"
                fill="#654321"
                fontSize="10"
                fontWeight="bold"
                fontFamily="serif"
              >
                E
              </text>
              <text
                x="40"
                y="72"
                textAnchor="middle"
                fill="#654321"
                fontSize="10"
                fontWeight="bold"
                fontFamily="serif"
              >
                S
              </text>
              <text
                x="12"
                y="44"
                textAnchor="middle"
                fill="#654321"
                fontSize="10"
                fontWeight="bold"
                fontFamily="serif"
              >
                W
              </text>

              {/* Center ornament */}
              <circle
                cx="40"
                cy="40"
                r="4"
                fill="url(#compassGrad)"
                stroke="#654321"
                strokeWidth="1"
              />
              <circle cx="40" cy="40" r="2" fill="#654321" />
            </svg>
          </div>

          {/* Decorative border elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-amber-300 opacity-60"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-amber-300 opacity-60"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-amber-300 opacity-60"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-amber-300 opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Thông tin chi tiết điểm được chọn */}
      {selectedStop !== null && (
        <Card className="mt-6 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{
                  backgroundColor:
                    categoryColors[
                      journeyStops[selectedStop]
                        .category as keyof typeof categoryColors
                    ],
                }}
              >
                {journeyStops[selectedStop].id}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-amber-900">
                    {journeyStops[selectedStop].location}
                  </h3>
                  <span className="text-sm text-amber-700 bg-amber-100 px-2 py-1 rounded">
                    {journeyStops[selectedStop].country}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-amber-700 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">
                    {journeyStops[selectedStop].period}
                  </span>
                </div>
                <p className="text-amber-800 mb-4">
                  {journeyStops[selectedStop].description}
                </p>
                <Button
                  size="sm"
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() => setSelectedStop(null)}
                >
                  Đóng <ArrowRight className="ml-1 w-3 h-3" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default EuropeMap;
