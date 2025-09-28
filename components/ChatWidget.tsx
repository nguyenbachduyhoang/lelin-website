"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ id: string; role: "user" | "bot"; text: string }>
  >([{ id: "m1", role: "bot", text: "Chào bạn 👋 Mình có thể giúp gì?" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        if ((e.target as HTMLElement).closest("#chat-fab")) return;
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const send = async () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", text },
    ]);
    setLoading(true);

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "bot",
          text: data.reply || "Không có phản hồi",
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "bot", text: "⚠️ Lỗi gọi Gemini API" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Nút mở chat */}
      <button
        id="chat-fab"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-black/10 bg-gradient-to-br from-slate-50 to-white px-4 py-3 shadow-lg hover:shadow-xl active:scale-95 transition"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline text-sm font-medium">Chat</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]" />
      )}

      <div
        ref={panelRef}
        className={`fixed z-50 bottom-20 right-5 w-[92vw] max-w-sm rounded-2xl border border-black/10 bg-white/95 shadow-2xl transition-all ${
          open
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-4"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <p className="text-sm font-semibold">Trợ lý AI (Gemini)</p>
          <button
            onClick={() => setOpen(false)}
            className="p-1.5 rounded-full hover:bg-slate-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="max-h-80 min-h-56 overflow-y-auto px-4 py-3 space-y-3">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-2xl px-3.5 py-2 text-sm shadow-sm border max-w-[85%] whitespace-pre-wrap ${
                  m.role === "user" ? "bg-emerald-50" : "bg-slate-50"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="text-sm text-slate-500 animate-pulse">
              Đang trả lời...
            </div>
          )}
        </div>

        {/* Input */}
        <div className="flex gap-2 border-t p-3">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Nhập tin nhắn..."
            className="flex-1 rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <button
            onClick={send}
            disabled={loading}
            className="rounded-xl bg-emerald-500 text-white px-3 py-2 text-sm font-semibold hover:bg-emerald-600"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );
}
