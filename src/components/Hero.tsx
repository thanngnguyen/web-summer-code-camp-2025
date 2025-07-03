import Link from "next/dist/client/link";
import WaveHoverText from "./BigText";
import ColorfulHoverText from "./ColorfulHoverText";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[url('/background.png')] bg-cover bg-center bg-no-repeat"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-purple-500/40 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-40 w-28 h-28 bg-cyan-500/35 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-20 h-20 bg-pink-500/30 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mt-12 md:mt-30">
          {/* Title */}
          <WaveHoverText
            text="SFIT SUMMER CODE CAMP"
            className="text-white font-bold"
            fontSize="5rem"
          />
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Data & AI
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Lần đầu tiên tổ chức tại Trường Đại học Giao thông Vận tải
            <br />
            <span className="text-cyan-400 font-semibold">
              Data Science • AI Innovation • Hackathon
            </span>
          </p>

          {/* CTA Button */}
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

          {/* Our Clients Section */}
          <div className="mt-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
              Đơn vị tổ chức
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 items-center justify-items-center opacity-70">
              {/* Airbnb */}
              <div className="flex items-center justify-center p-4">
                <img
                  src="/truong.png"
                  alt="Trường Đại học Giao thông Vận tải"
                  className="h-16 w-auto object-contain"
                />
              </div>

              {/* BookMyShow */}
              <div className="flex items-center justify-center p-4">
                <img
                  src="/khoa.png"
                  alt="Khoa Công Nghệ Thông tin - Trường Đại học Giao thông Vận tải"
                  className="h-20 w-auto object-contain"
                />
              </div>

              {/* Walmart */}
              <div className="flex items-center justify-center p-4">
                <img
                  src="/sfit.png"
                  alt="Trường Đại học Giao thông Vận tải - SFIT"
                  className="h-16 w-auto object-contain"
                />
              </div>

              {/* Amazon */}
              <div className="flex items-center justify-center p-4">
                <img
                  src="/doan.png"
                  alt="Đoàn Trường Đại học Giao thông Vận tải"
                  className="h-16 w-auto object-contain"
                />
              </div>

              {/* OLA */}
              <div className="flex items-center justify-center p-4">
                <img
                  src="/data-ai.jpg"
                  alt="Đoàn Trường Đại học Giao thông Vận tải"
                  className="h-16 w-auto object-contain rounded-full "
                />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
