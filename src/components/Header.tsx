"use client";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative">
      <div className="fixed z-50 top-0 w-full">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1
                className="text-2xl lg:text-4xl font-bold text-white tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text drop-shadow-lg"
                style={{ WebkitTextStroke: "2px rgba(255,255,255,0.3)" }}
              >
                SUMMER CODE CAMP
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-12">
              <a
                href="#home"
                className="text-white hover:text-cyan-400 transition-colors text-lg font-medium relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full after:rounded-full focus:after:w-full after:pointer-events-none"
              >
                TRANG CHỦ
              </a>
              <a
                href="#about"
                className="text-white hover:text-cyan-400 transition-colors text-lg font-medium relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full after:rounded-full focus:after:w-full after:pointer-events-none"
              >
                GIỚI THIỆU
              </a>
              <a
                href="#timeline"
                className="text-white hover:text-cyan-400 transition-colors text-lg font-medium relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full after:rounded-full focus:after:w-full after:pointer-events-none"
              >
                TIMELINE
              </a>
              <a
                href="#sponsors"
                className="text-white hover:text-cyan-400 transition-colors text-lg font-medium relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full after:rounded-full focus:after:w-full after:pointer-events-none"
              >
                NHÀ TÀI TRỢ
              </a>
              <a
                href="#contact"
                className="text-white hover:text-cyan-400 transition-colors text-lg font-medium relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full after:rounded-full focus:after:w-full after:pointer-events-none"
              >
                LIÊN HỆ
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-300"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 bg-white/2 backdrop-blur-md border-t border-cyan-400/20 pt-4 rounded-lg">
              <div className="flex flex-col space-y-4 px-2">
                <a
                  href="#home"
                  className="text-gray-300 pl-3 hover:text-cyan-400 transition-colors"
                >
                  Trang chủ
                </a>
                <a
                  href="#about"
                  className="text-gray-300 pl-3 hover:text-cyan-400 transition-colors"
                >
                  Giới thiệu
                </a>
                <a
                  href="#timeline"
                  className="text-gray-300 pl-3 hover:text-cyan-400 transition-colors"
                >
                  Timeline
                </a>
                <a
                  href="#sponsors"
                  className="text-gray-300 pl-3 hover:text-cyan-400 transition-colors"
                >
                  Nhà tài trợ
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 pl-3 hover:text-cyan-400 transition-colors"
                >
                  Liên hệ
                </a>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all w-full">
                  Đăng kí
                </button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
