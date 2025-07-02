"use client";
import { useEffect, useState } from 'react';

export default function SpaceBackground() {
  const [stars, setStars] = useState<Array<{id: number, top: number, left: number, size: number, delay: number}>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          top: Math.random() * 100,
          left: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 3
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Main space background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-blue-900/40 to-black/60"></div>
      </div>
      
      {/* Animated stars overlay */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}

      {/* Floating planets with real images */}
      <div 
        className="absolute top-20 left-10 w-16 h-16 bg-cover bg-center rounded-full opacity-60 animate-float shadow-lg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80')",
          animationDelay: '0s'
        }}
      ></div>
      <div 
        className="absolute top-40 right-20 w-12 h-12 bg-cover bg-center rounded-full opacity-50 animate-float shadow-lg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80')",
          animationDelay: '2s'
        }}
      ></div>
      <div 
        className="absolute bottom-32 left-1/4 w-8 h-8 bg-cover bg-center rounded-full opacity-40 animate-float shadow-lg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1583824550854-c3b9afa9bb0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80')",
          animationDelay: '4s'
        }}
      ></div>
      <div 
        className="absolute top-60 right-1/3 w-6 h-6 bg-cover bg-center rounded-full opacity-70 animate-float shadow-lg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80')",
          animationDelay: '1s'
        }}
      ></div>

      {/* Orbiting elements - small space objects */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2">
        <div 
          className="w-2 h-2 bg-cover bg-center rounded-full animate-orbit opacity-80"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80')",
            animationDuration: '15s'
          }}
        ></div>
      </div>
      <div className="absolute top-1/3 left-1/4 w-1 h-1">
        <div 
          className="w-1 h-1 bg-cover bg-center rounded-full animate-orbit opacity-60"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80')",
            animationDuration: '20s'
          }}
        ></div>
      </div>

      {/* Shooting star effects */}
      <div className="absolute top-10 left-0 w-2 h-px bg-gradient-to-r from-transparent via-white to-transparent animate-shooting-star opacity-80" style={{animationDelay: '3s', animationDuration: '4s'}}></div>
      <div className="absolute top-32 left-0 w-2 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-shooting-star opacity-60" style={{animationDelay: '8s', animationDuration: '3s'}}></div>

      {/* Galaxy/nebula effect with space images */}
      <div 
        className="absolute top-20 right-10 w-32 h-32 bg-cover bg-center rounded-full opacity-20 animate-galaxy-rotate"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80')"
        }}
      ></div>
      <div 
        className="absolute bottom-20 left-10 w-24 h-24 bg-cover bg-center rounded-full opacity-15 animate-galaxy-rotate"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80')",
          animationDirection: 'reverse'
        }}
      ></div>
    </div>
  );
}
