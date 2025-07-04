"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

function Countdown({ unlockDate }: { unlockDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = unlockDate.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [unlockDate]);

  return (
    <div className="flex justify-center gap-4 text-center mb-4">
      <div>
        <span className="text-3xl font-bold text-cyan-400">
          {timeLeft.days}
        </span>
        <div className="text-xs text-gray-400">ngày</div>
      </div>
      <div>
        <span className="text-3xl font-bold text-cyan-400">
          {timeLeft.hours}
        </span>
        <div className="text-xs text-gray-400">giờ</div>
      </div>
      <div>
        <span className="text-3xl font-bold text-cyan-400">
          {timeLeft.minutes}
        </span>
        <div className="text-xs text-gray-400">phút</div>
      </div>
      <div>
        <span className="text-3xl font-bold text-cyan-400">
          {timeLeft.seconds}
        </span>
        <div className="text-xs text-gray-400">giây</div>
      </div>
    </div>
  );
}

export default function Hackathon() {
  // Đặt ngày mở khóa tại đây (ví dụ: 2025-08-01T09:00:00+07:00)
  const unlockDate = new Date("2025-08-01T09:00:00+07:00");
  const prizeCategories = [
    {
      title: "Giải Nhất",
      prize: "50.000.000 VNĐ",
      extras: ["Cơ hội thực tập tại Big Tech", "Học bổng khóa học AI"],
    },
    {
      title: "Giải Nhì",
      prize: "30.000.000 VNĐ",
      extras: ["Học bổng khóa học Data Science"],
    },
    {
      title: "Giải Ba",
      prize: "20.000.000 VNĐ",
      extras: ["Chứng chỉ và quà tặng công nghệ"],
    },
  ];

  return (
    <section
      id="hackathon"
      className="py-20 bg-slate-900/90 backdrop-blur-sm relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Cuộc thi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              HACKATHON
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Thử thách sáng tạo với AI và Data Engineering
          </p>
        </div>

        {/* Locked Content Overlay */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 via-purple-900/80 to-slate-800/90 backdrop-blur-sm flex items-center justify-center z-10 rounded-xl">
            <div className="text-center p-8">
              <svg
                className="w-20 h-20 mx-auto mb-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <Countdown unlockDate={unlockDate} />
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Sắp diễn ra
              </h3>
              <p className="text-cyan-400 text-lg mb-6 font-bold">
                Chi tiết cuộc thi sẽ được công bố trong thời gian tới
              </p>
              <div className="inline-block relative group">
                <button className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                  <Link
                    href="https://forms.gle/rx8j4Bm4ci5ncWdFA"
                    className="relative z-10"
                    target="_blank"
                  >
                    Đăng ký ngay để nhận thông báo
                  </Link>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur"></div>
              </div>
            </div>
          </div>

          {/* Hackathon Content (Blurred) */}
          <div className="filter blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {prizeCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {category.title}
                  </h3>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-6">
                    {category.prize}
                  </p>
                  <ul className="space-y-3">
                    {category.extras.map((extra, i) => (
                      <li key={i} className="text-gray-400 flex items-center">
                        <svg
                          className="w-5 h-5 text-cyan-400 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {extra}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Thông tin cuộc thi
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Thời gian</h4>
                    <p className="text-gray-400">48 giờ liên tục</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Đội thi</h4>
                    <p className="text-gray-400">3-5 thành viên/đội</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Địa điểm</h4>
                    <p className="text-gray-400">Trường ĐH GTVT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
