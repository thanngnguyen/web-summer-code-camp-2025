export default function Speakers() {
  const speakers = [
    {
      name: "TS. Nguyễn Văn A",
      role: "Chuyên gia AI",
      company: "Google DeepMind",
      image: "/speakers/speaker1.jpg",
      topic: "Trí tuệ nhân tạo và tương lai của công nghệ",
    },
    {
      name: "TS. Trần Thị B",
      role: "Data Scientist",
      company: "Microsoft Research",
      image: "/speakers/speaker2.jpg",
      topic: "Big Data và ứng dụng trong thực tiễn",
    },
    {
      name: "PGS.TS Lê Văn C",
      role: "Giảng viên cao cấp",
      company: "Đại học Giao thông Vận tải",
      image: "/speakers/speaker3.jpg",
      topic: "Machine Learning trong giao thông thông minh",
    },
  ];

  return (
    <section
      id="speakers"
      className="py-20 bg-slate-900/90 backdrop-blur-sm relative overflow-hidden"
    >
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
            backgroundImage: "url('/data-ai.webp')",
          }}
        ></div>
        <div
          className="absolute bottom-40 left-10 w-24 h-24 bg-cover bg-center rounded-full opacity-12 animate-float"
          style={{
            backgroundImage: "url('/sfit.webp')",
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

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Diễn giả
          </h2>
          <p className="text-xl text-gray-400">
            Các chuyên gia hàng đầu trong lĩnh vực AI và Data Science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg bg-gray-800 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              {/* Khóa overlay */}
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10">
                <div className="text-center p-4">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 text-gray-500"
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
                  <p className="text-2xl font-bold text-gray-400 mb-2">
                    Chưa mở khóa
                  </p>
                  <p className="text-gray-500">
                    Thông tin diễn giả sẽ được công bố sau
                  </p>
                </div>
              </div>

              {/* Speaker content */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-700">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {speaker.name}
                </h3>
                <p className="text-cyan-400 mb-1">{speaker.role}</p>
                <p className="text-gray-400 mb-4">{speaker.company}</p>
                <p className="text-gray-300 italic">{speaker.topic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
