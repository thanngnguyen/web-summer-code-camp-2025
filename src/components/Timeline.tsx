"use client";

import React from "react";
import Link from "next/link";
export default function Timeline() {
  const timelineEvents = [
    {
      date: "03/07/2025 - 12/07/2025",
      title: "Mở đăng ký",
      description: "Bắt đầu nhận đăng ký tham gia Summer Code Camp 2025",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      color: "blue",
    },
    {
      date: "14/07/2025 - 11/08/2025",
      title: "Workshop Series",
      description:
        "Tổ chức các Workshop về Python cơ bản, SQL, Xử lý dữ liệu, AI, Data,...",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      color: "purple",
    },
    {
      date: "16/08/2025",
      title: "Talkshow",
      description:
        "Tổ chức Talkshow gặp gỡ các senior, diễn giả và chuyên gia trong ngành",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      color: "green",
    },
    {
      date: "25/08/2025 - 27/08/2025",
      title: "Training Hackathon",
      description:
        "Training Hackathon chính của Summer Code Camp 2025(AWS, NLP, CV)",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      color: "yellow",
    },
    {
      date: "30/08/2025 - 12/09/2025",
      title: "Hackathon chính",
      description:
        "Coding và phát triển sản phẩm đề tài cho trước trong 5 ngày",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      color: "yellow",
    },
    {
      date: "Chưa mở khóa",
      title: "Chung kết và trao giải",
      description:
        "Tổ chức buổi chung kết và trao giải cho các đội xuất sắc nhất",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      color: "pink",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-cyan-400/50 shadow-cyan-400/20",
      purple: "border-purple-400/50 shadow-purple-400/20",
      green: "border-green-400/50 shadow-green-400/20",
      yellow: "border-yellow-400/50 shadow-yellow-400/20",
      pink: "border-pink-400/50 shadow-pink-400/20",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section
      id="timeline"
      className="py-20 bg-slate-900/90 backdrop-blur-sm relative overflow-hidden"
    >
      {/* Enhanced Space Background */}
      <div className="absolute inset-0">
        {/* Nebula Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 40% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)
            `,
          }}
        ></div>

        {/* Floating Planets */}
        <div
          className="absolute top-20 right-10 w-32 h-32 bg-cover bg-center rounded-full opacity-15 animate-float"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80')",
          }}
        ></div>
        <div
          className="absolute bottom-40 left-10 w-24 h-24 bg-cover bg-center rounded-full opacity-12 animate-float"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80')",
            animationDelay: "4s",
          }}
        ></div>

        {/* Animated Stars */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-twinkle opacity-70"></div>
        <div
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-twinkle opacity-80"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-2/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-twinkle opacity-60"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Hành trình{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              khám phá
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Theo dõi toàn bộ lịch trình của Summer Code Camp 2025 từ đăng ký đến
            Hackathon
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 shadow-lg"></div>

            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Enhanced Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-slate-900 border-4 border-cyan-400 rounded-full z-20 shadow-xl shadow-cyan-400/50 animate-pulse"></div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl hover:shadow-3xl hover:shadow-purple-500/20 transition-all duration-500 border border-white/10 hover:border-purple-400/30 group">
                    {/* Image Icon */}

                    <div className="text-sm text-cyan-400 font-bold mb-3 tracking-wider">
                      {event.date}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-slate-800/90 via-purple-900/80 to-slate-800/90 backdrop-blur-md rounded-3xl p-10 text-white border border-purple-400/30 shadow-2xl">
            <h3 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Sẵn sàng khám phá Data & AI?
            </h3>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Đăng ký ngay để không bỏ lỡ cơ hội tham gia Summer Code Camp 2025
              và trở thành nhà khám phá công nghệ
            </p>
            <button className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <Link
                href="https://forms.gle/rx8j4Bm4ci5ncWdFA"
                className="relative z-10"
                target="_blank"
              >
                ĐĂNG KÝ NGAY
              </Link>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
