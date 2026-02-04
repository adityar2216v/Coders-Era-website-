"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { ThreeDTiltCard } from '@/components/common/ThreeDTiltCard';
import { FloatingTechShape } from '@/components/ui/FloatingTechShape';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="flex items-center justify-center min-h-screen w-full px-2 md:px-8 bg-coders-midnight ethnic-pattern relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-era-blue/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-signal-coral/10 rounded-full blur-[100px] pointer-events-none" />

      {/* 3D decorative shape in background */}
      <div className="absolute top-20 right-[10%] opacity-20 pointer-events-none hidden lg:block z-0 scale-75">
        <FloatingTechShape />
      </div>

      <div
        className={`relative flex flex-col md:flex-row items-center justify-center w-full max-w-6xl rounded-3xl p-6 md:p-12 bg-era-blue/20 backdrop-blur-md shadow-2xl border border-white/10 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.3)' }}
      >
        {/* Decorative elements for "Ethnic/Modern" look */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-quantum-cyan/30 rounded-tl-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-signal-coral/30 rounded-br-3xl pointer-events-none" />

        {/* Left: Logo */}
        <div className="relative z-10 flex justify-center items-center w-full md:w-1/2 p-4">
          <ThreeDTiltCard className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#22D3EE] to-[#FB7185] rounded-full blur-2xl opacity-20 animate-pulse" />
            <Image
              src="/codersera-logo-original.jpg"
              alt="Coders ERA Logo"
              width={400}
              height={400}
              className="w-64 h-auto md:w-96 object-contain rounded-full shadow-2xl relative z-10 border-4 border-white/5"
              style={{ maxWidth: '100%', height: 'auto' }}
              priority
            />
          </ThreeDTiltCard>
        </div>
        {/* Right: Welcome and Description */}
        <div className="relative z-10 flex flex-col items-center md:items-start w-full md:w-1/2 p-4 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#E2E8F0] mb-6 tracking-tight font-heading drop-shadow-lg">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#FB7185]">
              Coders ERA
            </span>
          </h1>
          <p className="text-lg md:text-xl text-steel-grey max-w-xl mb-8 leading-relaxed font-light">
            A vibrant community where <span className="text-pure-intent font-semibold">innovation</span> meets <span className="text-pure-intent font-semibold">tradition</span>. We strictly believe in the power of collaborative learning and hands-on experience to shape the future.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 rounded-xl bg-quantum-cyan text-coders-midnight font-bold text-lg shadow-lg hover:bg-white hover:scale-105 transition-all duration-300">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-xl bg-transparent border border-white/20 text-pure-intent font-medium text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;