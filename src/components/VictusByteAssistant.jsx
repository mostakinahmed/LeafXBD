import React, { useState, useRef, useEffect } from "react";
import {
  FiMessageSquare,
  FiX,
  FiSend,
  FiHelpCircle,
  FiUser,
  FiCpu,
  FiChevronRight,
} from "react-icons/fi";

// Fixed Knowledge Base Questions & Answers
const FAQ_DATABASE = [
  {
    q: "What are your top-selling gaming accessories?",
    a: "Our top sellers include mechanical keyboards with customizable RGB, ultra-lightweight wireless mice, and precision desk mats.",
  },
  {
    q: "Do you offer fast shipping for tech gear?",
    a: "Yes! We offer expedited shipping across all regions with live order tracking updates.",
  },
  {
    q: "How can I track my Victus Byte order?",
    a: "You can track your order directly from your account dashboard or by using the tracking link sent via email upon dispatch.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a hassle-free 30-day return policy on all hardware and accessories in their original packaging.",
  },
  {
    q: "How do I contact customer support?",
    a: "You can reach our support team 24/7 right here through this chat or via email at support@victusbyte.com.",
  },
];

export default function VictusByteAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! Welcome to Victus Byte. Select a common question below or click an option to get an instant answer.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSelectQuestion = (item) => {
    // Add user selection bubble
    const userMsg = { sender: "user", text: item.q };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    // Simulate instant smooth response
    setTimeout(() => {
      const botMsg = { sender: "bot", text: item.a };
      setMessages((prev) => [...prev, botMsg]);
      setLoading(false);
    }, 250);
  };

  const handleResetChat = () => {
    setMessages([
      {
        sender: "bot",
        text: "How else can I help you today? Choose from the options below:",
      },
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {/* 1. Floating Action Button (Bottom Right) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-white/15"
          aria-label="Open Support Chat"
        >
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <FiMessageSquare className="text-xl text-pink-400" />
          <span className="font-semibold text-xs tracking-wide uppercase pr-0.5">
            Support
          </span>
        </button>
      )}

      {/* 2. Compact Professional Chat Modal */}
      {isOpen && (
        <div className="w-[340px] sm:w-[310px] h-[390px] bg-slate-900 border border-white/15 rounded-lg shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl animate-fade-in">
          {/* Header */}
          <div className="bg-slate-950/80 pr-5 pl-3 py-2 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-pink-500/20 border border-pink-500/30">
                <FiHelpCircle className="text-pink-400 text-base" />
              </div>
              <div>
                <h4 className="font-bold text-white text-xs tracking-tight">
                  Victus Byte Help Desk
                </h4>
               
              </div>
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 2 && (
                <button
                  onClick={handleResetChat}
                  className="text-[10px] text-gray-400 hover:text-white px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition"
                >
                  Menu
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
                aria-label="Close Chat"
              >
                <FiX className="text-xl" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2.5 bg-slate-950/40 text-xs">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 ${
                  msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    msg.sender === "user"
                      ? "bg-pink-600 text-white"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {msg.sender === "user" ? (
                    <FiUser size={11} />
                  ) : (
                    <FiCpu size={11} />
                  )}
                </div>
                <div
                  className={`max-w-[80%] p-2.5 rounded-xl leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-pink-600 text-white rounded-tr-none"
                      : "bg-white/10 text-gray-200 border border-white/5 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                  <FiCpu size={11} />
                </div>
                <div className="bg-white/10 text-gray-400 p-2.5 rounded-xl rounded-tl-none flex items-center gap-1 border border-white/5">
                  <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce"></span>
                  <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Interactive Question Option Cards Footer */}
          <div className="p-2.5 bg-slate-900 border-t border-white/10 flex flex-col gap-1.5 max-h-[160px] overflow-y-auto">
            <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold px-1">
              Frequently Asked Questions:
            </span>
            {FAQ_DATABASE.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectQuestion(item)}
                disabled={loading}
                className="text-left text-[11px] bg-white/5 hover:bg-white/10 active:bg-white/15 text-gray-200 px-2.5 py-2 rounded-lg transition flex items-center justify-between border border-white/5 group disabled:opacity-50"
              >
                <span className="truncate pr-2">{item.q}</span>
                <FiChevronRight
                  size={13}
                  className="text-gray-400 group-hover:text-pink-400 transition-transform group-hover:translate-x-0.5 flex-shrink-0"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
