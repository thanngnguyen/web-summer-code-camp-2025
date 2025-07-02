export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900/95 backdrop-blur-sm text-white py-16 relative overflow-hidden">
      {/* Enhanced Space Background */}
      <div className="absolute inset-0">
        {/* Nebula Background */}
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            background: `
              radial-gradient(ellipse at 10% 30%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 90% 70%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 60% 10%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)
            `
          }}
        ></div>

        {/* Floating Space Elements */}
        <div 
          className="absolute top-10 right-20 w-20 h-20 bg-cover bg-center rounded-full opacity-15 animate-float"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80')"
          }}
        ></div>
        <div 
          className="absolute bottom-20 left-16 w-16 h-16 bg-cover bg-center rounded-full opacity-12 animate-float"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80')",
            animationDelay: '3s'
          }}
        ></div>

        {/* Animated Stars */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-twinkle opacity-70"></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-twinkle opacity-80" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-purple-400 rounded-full animate-twinkle opacity-60" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-white tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg" style={{WebkitTextStroke: '2px rgba(255,255,255,0.3)'}}>
                Summer Code Camp
                </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Hành trình khám phá vũ trụ Data & AI. Kết nối cộng đồng developer, 
              học hỏi công nghệ tương lai và chinh phục những thử thách coding đầy thú vị trong không gian vô tận.
            </p>
            <div className="flex space-x-4">
                <a href="https://www.facebook.com/sfit2016" className="w-12 h-12 bg-slate-800/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600/70 transition-all duration-300 border border-blue-400/30 hover:border-blue-400/60 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                </a>
                <a href="https://www.tiktok.com/@sfit.utc_2016" className="w-12 h-12 bg-slate-800/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-600/70 transition-all duration-300 border border-red-400/30 hover:border-red-400/60 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                </a>
                <a href="mailto:clbtinhocgtvt@gmail.com" className="w-12 h-12 bg-slate-800/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-green-600/70 transition-all duration-300 border border-green-400/30 hover:border-green-400/60 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Giới thiệu</a></li>
              <li><a href="#timeline" className="text-gray-300 hover:text-white transition-colors">Lịch trình</a></li>
              <li><a href="#sponsors" className="text-gray-300 hover:text-white transition-colors">Nhà tài trợ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Đăng ký</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">clbtinhocgtvt@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">+84 **** ****</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">
                  Câu lạc bộ Tin Học - Trường Đại Học Giao Thông Vận Tải (SFIT)<br/>
                  Samsung Lab, tầng 4, tòa A4,
trường Đại học Giao thông Vận tải
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2025 CodeFest. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Điều khoản sử dụng</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
