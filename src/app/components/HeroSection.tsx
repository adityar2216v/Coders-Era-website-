"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="flex items-center justify-center min-h-screen w-full px-2 md:px-8 bg-white/10">
      <div
        className={`relative flex flex-col md:flex-row items-center justify-center w-full max-w-5xl rounded-3xl p-6 md:p-12 bg-black/20 backdrop-blur-xl shadow-2xl border border-white/10 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.7)' }}
      >
        {/* Black Glow Border */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none z-0 animate-hero-glow" style={{
          background: 'linear-gradient(120deg, #000 0%, #222 100%)',
          opacity: 0.22,
          filter: 'blur(24px)'
        }} />
        {/* Left: Logo */}
        <div className="relative z-10 flex justify-center items-center w-full md:w-1/2 p-4">
          <Image
            src="/rlogo.png"
            alt="Coders ERA Logo"
            width={320}
            height={320}
            className="w-56 h-56 md:w-80 md:h-80 object-contain rounded-2xl shadow-xl animate-hero-pulse"
            style={{ maxWidth: '100%', height: 'auto' }}
            priority
          />
        </div>
        {/* Right: Welcome and Description */}
        <div className="relative z-10 flex flex-col items-center md:items-start w-full md:w-1/2 p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center md:text-left mb-6 animate-hero-slidein">
            Welcome
          </h1>
          <p className="text-base md:text-lg text-[#e0e6f7] text-center md:text-left max-w-xl bg-black/60 rounded-xl px-4 py-3 shadow-md animate-hero-fadein">
            Coders ERA is a vibrant community of passionate developers, innovators, and tech enthusiasts. We believe in the power of collaborative learning and knowledge sharing to create a better future through technology.
          </p>
        </div>
      </div>
      {/* Custom Animations */}
      <style jsx>{`
        @keyframes hero-pulse {
          0%, 100% { box-shadow: 0 0 32px 8px #0008, 0 0 0 0 #2228; }
          50% { box-shadow: 0 0 64px 16px #222c, 0 0 0 0 #0008; }
        }
        .animate-hero-pulse {
          animation: hero-pulse 2.5s infinite;
        }
        @keyframes hero-glow {
          0% { filter: blur(24px) brightness(1); }
          50% { filter: blur(32px) brightness(1.1); }
          100% { filter: blur(24px) brightness(1); }
        }
        .animate-hero-glow {
          animation: hero-glow 4s infinite linear;
        }
        @keyframes hero-slidein {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-slidein {
          animation: hero-slidein 1.2s cubic-bezier(0.4,0,0.2,1) 0.2s both;
        }
        @keyframes hero-fadein {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-hero-fadein {
          animation: hero-fadein 1.6s cubic-bezier(0.4,0,0.2,1) 0.7s both;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;