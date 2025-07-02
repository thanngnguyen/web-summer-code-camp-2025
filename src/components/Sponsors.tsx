export default function Sponsors() {
  const sponsors = [
    { 
      name: "zunohoang", 
      category: "Platinum", 
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      fallback: "Z"
    },
    { 
      name: "Nguyễn Công Thắng", 
      category: "Platinum", 
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      fallback: "T"
    }
  ];

  const getSponsorsByCategory = (category: string) => {
    return sponsors.filter(sponsor => sponsor.category === category);
  };

  const getCategoryClasses = (category: string) => {
    const classes = {
      Platinum: "w-24 h-24 text-2xl bg-slate-800/70 backdrop-blur-sm border-4 border-gray-300/50",
      // Gold: "w-20 h-20 text-xl bg-slate-800/70 backdrop-blur-sm border-4 border-yellow-400/50",
      // Silver: "w-16 h-16 text-lg bg-slate-800/70 backdrop-blur-sm border-4 border-gray-400/50",
      // Bronze: "w-14 h-14 text-base bg-slate-800/70 backdrop-blur-sm border-4 border-orange-400/50"
    };
    return classes[category as keyof typeof classes];
  };

  return (
    <section id="sponsors" className="py-20 bg-slate-900/90 backdrop-blur-sm relative overflow-hidden">
      {/* Enhanced Space Background */}
      <div className="absolute inset-0">
        {/* Nebula Background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(ellipse at 30% 40%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 60%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)
            `
          }}
        ></div>

        {/* Floating Space Elements */}
        <div 
          className="absolute top-40 left-20 w-28 h-28 bg-cover bg-center rounded-full opacity-15 animate-float"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80')"
          }}
        ></div>
        <div 
          className="absolute bottom-32 right-16 w-36 h-36 bg-cover bg-center rounded-full opacity-12 animate-float"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80')",
            animationDelay: '2s'
          }}
        ></div>

        {/* Animated Stars */}
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-white rounded-full animate-twinkle opacity-70"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-twinkle opacity-80" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-twinkle opacity-60" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Nhà <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">tài trợ</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cảm ơn các nhà tài trợ đã đồng hành cùng Summer Code Camp 2025
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <div className="flex justify-center items-center space-x-12">
            {getSponsorsByCategory("Platinum").map((sponsor, index) => (
              <div key={index} className="text-center group">
                <div className={`${getCategoryClasses(sponsor.category)} rounded-2xl flex items-center justify-center font-bold text-gray-300 mx-auto mb-3 shadow-lg group-hover:shadow-xl group-hover:shadow-cyan-500/25 transition-all cursor-pointer overflow-hidden`}>
                  <div 
                    className="w-full h-full bg-cover bg-center flex items-center justify-center"
                    style={{backgroundImage: `url(${sponsor.logo})`}}
                  >
                    <div className="w-full h-full bg-slate-900/60 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{sponsor.fallback}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">{sponsor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
