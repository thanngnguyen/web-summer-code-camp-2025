export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/40 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 bg-cyan-500/35 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-pink-500/30 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center">
          {/* Title */}
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            We Create Amazing
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Digital Products.
            </span>
          </h1>

          {/* Central Earth/Planet */}
          <div className="relative my-16 flex justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Main planet */}
              <div 
                className="w-full h-full rounded-full bg-cover bg-center shadow-2xl shadow-blue-500/30 animate-rotate"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80')"
                }}
              >
                {/* Atmosphere glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-600/30"></div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-orbit">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
              </div>
              
              <div className="absolute inset-0 animate-orbit-reverse" style={{animationDelay: '30s'}}>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-lg"></div>
              </div>

              {/* Rings */}
              <div className="absolute inset-0 border-2 border-cyan-400/20 rounded-full animate-pulse" style={{transform: 'scale(1.2)'}}></div>
              <div className="absolute inset-0 border border-purple-400/30 rounded-full animate-pulse" style={{transform: 'scale(1.4)', animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Khám phá vũ trụ công nghệ với Summer Code Camp 2025
            <br />
            <span className="text-cyan-400 font-semibold">Data Science • Machine Learning • AI Innovation</span>
          </p>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">ĐĂNG KÝ NGAY</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Our Clients Section */}
          <div className="mt-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
              Our Clients
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
              {/* Airbnb */}
              <div className="flex items-center justify-center p-4">
                <span className="text-white text-2xl font-bold tracking-wider">airbnb</span>
              </div>
              
              {/* BookMyShow */}
              <div className="flex items-center justify-center p-4">
                <span className="text-white text-xl font-medium">BookMyShow</span>
              </div>
              
              {/* Walmart */}
              <div className="flex items-center justify-center p-4">
                <span className="text-white text-2xl font-bold">Walmart</span>
              </div>
              
              {/* Amazon */}
              <div className="flex items-center justify-center p-4">
                <span className="text-white text-2xl font-bold">amazon</span>
              </div>
              
              {/* OLA */}
              <div className="flex items-center justify-center p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                  <span className="text-white text-xl font-bold">OLA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
