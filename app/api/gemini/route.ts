import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as cheerio from "cheerio";

const MY_SITE_URL = "https://tenmiencuaban.com"; // web của bạn

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // 1. Kiểm tra xem user có hỏi về web hay không
    const askAboutSite =
      /trang web|website|site|tenmiencuaban\.com/i.test(message);

    let webContent = "";
    if (askAboutSite) {
      try {
        const resp = await fetch(MY_SITE_URL);
        const html = await resp.text();
        const $ = cheerio.load(html);
        webContent = $("body").text().replace(/\s+/g, " ").slice(0, 5000);
      } catch (e) {
        console.error("Lỗi fetch web:", e);
      }
    }

    const externalKnowledge = `
Thông tin nền tảng về Vladimir Lenin:
- Lenin (1870–1924) là lãnh tụ cách mạng Nga, người sáng lập Đảng Bolshevik và Liên bang Xô viết.
- Ông lãnh đạo Cách mạng Tháng Mười 1917, lật đổ chính phủ lâm thời và đặt nền móng cho chế độ xã hội chủ nghĩa.
- Tác phẩm nổi bật: “Nhà nước và cách mạng”, “Làm gì?”...
- Ảnh hưởng lớn tới phong trào cộng sản và công nhân quốc tế.
`;

    // 2. Prompt chính
    const prompt = `
Bạn là trợ lý AI thông minh. ${
      askAboutSite
        ? `Dưới đây là nội dung website của tôi để bạn tham khảo:\n${webContent}`
        : ""
    }

Kiến thức bổ sung về Vladimir Lenin:
${externalKnowledge}

Câu hỏi của người dùng: ${message}
`;

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(prompt);
    const replyText = result.response.text();

    return NextResponse.json({ reply: replyText });
  } catch (error) {
    console.error("Gemini API error:", error);
    return NextResponse.json({ error: "Gemini API error" }, { status: 500 });
  }
}
