export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-slate-900/90 backdrop-blur-sm relative"
    >
      {/* Space decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-10 left-10 w-32 h-32 bg-cover bg-center rounded-full blur-xl opacity-20 animate-float"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80')",
          }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-24 h-24 bg-cover bg-center rounded-full blur-xl opacity-15 animate-float"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80')",
            animationDelay: "3s",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Về{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Summer Code Camp
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Summer Code Camp là hành trình khám phá Data & AI, kết hợp chương
            trình đào tạo chuyên sâu về AI, Big Data và sân chơi Hackathon để
            các developer thử sức với những bài toán công nghệ thực tiễn.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Tại sao tham gia Summer Code Camp?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-cyan-400/30">
                  <span className="text-2xl">S</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Thử thách vũ trụ
                  </h4>
                  <p className="text-gray-300">
                    Giải quyết các bài toán công nghệ từ thực tế với Data&AI
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-purple-400/30">
                  <span className="text-2xl">C</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Kết nối thiên hà
                  </h4>
                  <p className="text-gray-300">
                    Gặp gỡ các senior, diễn giả và chuyên gia từ khắp vũ trụ
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-yellow-400/30">
                  <span className="text-2xl">C</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Kho báu vô tận
                  </h4>
                  <p className="text-gray-300">
                    Cơ hội nhận giải thưởng từ cuộc thi hackathon
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-80 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
              {/* Main background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/clbsfit.webp')",
                }}
              >
                <div className="absolute inset-0 bg-purple-900/50"></div>
              </div>

              {/* Floating space elements */}
              <div
                className="absolute top-10 left-10 w-16 h-16 bg-cover bg-center rounded-full opacity-70 animate-float shadow-lg"
                style={{
                  backgroundImage: "url('/sfit.webp')",
                }}
              ></div>
              <div
                className="absolute bottom-10 right-10 w-12 h-12 bg-cover bg-center rounded-full opacity-60 animate-float shadow-lg"
                style={{
                  backgroundImage: "url('/data-ai.webp')",
                  animationDelay: "2s",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-cyan-400/20">
            <div className="text-3xl font-bold text-cyan-400 mb-2">19</div>
            <div className="text-gray-300">Buổi học</div>
          </div>
          <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-400/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
            <div className="text-gray-300">Buổi workshop</div>
          </div>
          <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-green-400/20">
            <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
            <div className="text-gray-300">Mục tiêu số lượng</div>
          </div>
          <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-yellow-400/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">1</div>
            <div className="text-gray-300">Hackathon</div>
          </div>
        </div>
      </div>
    </section>
  );
}
