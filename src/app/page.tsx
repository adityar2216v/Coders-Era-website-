'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import { IntroVideo } from '@/components/common/IntroVideo';
import { ThreeDTiltCard } from '@/components/common/ThreeDTiltCard';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="overflow-hidden min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <AnimatePresence>
        {showIntro && (
          <IntroVideo onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="scanlines"
        >


          {/* Hero Section */}
          <motion.section
            className="relative py-20 md:py-32 overflow-visible perspective-1000"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Ambient Background Blobs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                className="flex flex-col lg:flex-row items-center justify-between gap-16"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                {/* Text Content */}
                <motion.div
                  className="w-full lg:w-1/2 text-center lg:text-left"
                  variants={fadeIn}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md"
                  >
                    <span className="text-blue-400 font-mono text-sm tracking-wider">v2.0 INITIALIZED</span>
                  </motion.div>

                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Welcome to <br />
                    <span className="text-gradient">CodersEra</span>
                  </h1>

                  <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Step into the future of development. A next-gen community empowering creators through
                    <span className="text-blue-400"> immersive collaboration</span>,
                    <span className="text-purple-400"> cutting-edge learning</span>, and
                    <span className="text-pink-400"> limitless innovation</span>.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                    <Link
                      href="/contact"
                      className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] hover:-translate-y-1 overflow-hidden"
                    >
                      <span className="relative z-10">Join Our Community</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                    <Link
                      href="/events"
                      className="group px-8 py-4 bg-white/5 text-white font-medium rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:-translate-y-1"
                    >
                      Explore Events
                    </Link>
                  </div>
                </motion.div>

                {/* 3D Hero Element */}
                <motion.div
                  className="w-full lg:w-1/2 flex justify-center perspective-1000"
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <ThreeDTiltCard className="w-full max-w-[500px] aspect-square">
                    {/* Floating Tech Stack Representation */}
                    <div className="relative w-full h-full flex items-center justify-center">

                      {/* Back Layer - Database/Server */}
                      <div className="absolute w-[80%] h-[60%] bg-gray-900/90 border border-gray-700/50 rounded-2xl p-6 shadow-2xl backdrop-blur-xl transform transition-transform duration-500 hover:scale-105"
                        style={{ transform: "translateZ(20px) rotateZ(-5deg)" }}>
                        <div className="h-2 w-20 bg-red-500/50 rounded-full mb-4 shadow-[0_0_10px_rgba(239,68,68,0.3)]"></div>
                        <div className="space-y-3">
                          <div className="h-2 w-full bg-gray-700/50 rounded animate-pulse"></div>
                          <div className="h-2 w-3/4 bg-gray-700/50 rounded animate-pulse delay-75"></div>
                          <div className="h-2 w-5/6 bg-gray-700/50 rounded animate-pulse delay-150"></div>
                        </div>
                      </div>

                      {/* Middle Layer - Code Interface */}
                      <div className="absolute w-[90%] h-[70%] bg-[#0d1117] border border-blue-500/20 rounded-xl p-6 shadow-[0_0_40px_rgba(59,130,246,0.15)] backdrop-blur-sm transform overflow-hidden"
                        style={{ transform: "translateZ(60px) rotateZ(0deg)" }}>

                        {/* Title Bar */}
                        <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                          <span className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></span>
                          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></span>
                          <span className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></span>
                          <div className="ml-4 h-4 w-32 bg-white/5 rounded-full"></div>
                        </div>

                        {/* Code Content */}
                        <div className="font-mono text-sm antialiased font-medium tracking-wide space-y-3 leading-relaxed">
                          <div className="flex">
                            <span className="text-gray-600 w-6 select-none">1</span>
                            <p><span className="text-[#c678dd]">const</span> <span className="text-[#e5c07b]">future</span> <span className="text-[#56b6c2]">=</span> <span className="text-[#c678dd]">await</span> <span className="text-[#61afef]">CodersEra</span>.<span className="text-[#98c379]">init</span>();</p>
                          </div>
                          <div className="flex">
                            <span className="text-gray-600 w-6 select-none">2</span>
                            <p><span className="text-[#c678dd]">if</span> (<span className="text-[#e5c07b]">ready</span>) {'{'}</p>
                          </div>
                          <div className="flex">
                            <span className="text-gray-600 w-6 select-none">3</span>
                            <p className="pl-4"><span className="text-[#61afef]">unlock</span>(<span className="text-[#d19a66]">"Potential"</span>);</p>
                          </div>
                          <div className="flex">
                            <span className="text-gray-600 w-6 select-none">4</span>
                            <p className="pl-4"><span className="text-[#e06c75]">console</span>.<span className="text-[#61afef]">log</span>(<span className="text-[#98c379]">"Welcome Home"</span>);</p>
                          </div>
                          <div className="flex">
                            <span className="text-gray-600 w-6 select-none">5</span>
                            <p>{'}'}</p>
                          </div>
                        </div>

                        {/* Scanline overlay for that crisp tech feel */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 pointer-events-none opacity-20 background-size-[100%_3px,3px_100%]"></div>
                      </div>

                      {/* Front Layer - Floating Elements */}
                      <div className="absolute top-[5%] -right-[2%] w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl animate-float border border-white/10 backdrop-blur-md"
                        style={{ transform: "translateZ(100px)" }}>
                        <svg className="w-10 h-10 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                      </div>

                      <div className="absolute bottom-[15%] -left-[2%] w-16 h-16 bg-[#1a1a1a]/90 border border-purple-500/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)] backdrop-blur-md animate-float-delayed"
                        style={{ transform: "translateZ(80px)" }}>
                        <span className="text-3xl filter drop-shadow-lg transform hover:scale-110 transition-transform cursor-default">🚀</span>
                      </div>
                    </div>
                  </ThreeDTiltCard>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section
            className="py-24 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Why <span className="text-gradient">Choose Us</span></h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">Experience a platform engineered for growth, powered by community, and designed for the future.</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                  {
                    title: 'Networking Matrix',
                    description: 'Connect with like-minded developers and industry professionals to expand your network.',
                    icon: (
                      <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    ),
                    color: "group-hover:text-blue-400"
                  },
                  {
                    title: 'Quantum Learning',
                    description: 'Access workshops, webinars, and resources to enhance your skills and stay updated with the latest technologies.',
                    icon: (
                      <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                      </svg>
                    ),
                    color: "group-hover:text-purple-400"
                  },
                  {
                    title: 'Innovation Hub',
                    description: 'Participate in exciting hackathons and events to challenge yourself and showcase your skills.',
                    icon: (
                      <svg className="w-10 h-10 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    ),
                    color: "group-hover:text-pink-400"
                  }
                ].map((feature, index) => (
                  <ThreeDTiltCard key={index} className="h-full">
                    <motion.div
                      className="h-full bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:bg-white/10 transition-colors"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      style={{ transform: "translateZ(0px)" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="mb-6 relative z-10 transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2" style={{ transform: "translateZ(30px)" }}>
                        <div className={`p-4 rounded-xl bg-white/5 w-fit ${feature.color.replace('text', 'bg').replace('400', '500/10')}`}>
                          {feature.icon}
                        </div>
                      </div>

                      <h3 className={`text-2xl font-bold mb-4 text-white transition-colors duration-300 ${feature.color}`} style={{ transform: "translateZ(20px)" }}>{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed" style={{ transform: "translateZ(10px)" }}>{feature.description}</p>
                    </motion.div>
                  </ThreeDTiltCard>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            className="py-24 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7 }}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                className="max-w-4xl mx-auto text-center glass-card p-12 rounded-3xl border border-white/10 relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute top-0 right-0 p-12 opacity-20 pointer-events-none blur-xl">
                  <div className="w-32 h-32 bg-purple-500 rounded-full animate-pulse" />
                </div>
                <div className="absolute bottom-0 left-0 p-12 opacity-20 pointer-events-none blur-xl">
                  <div className="w-32 h-32 bg-blue-500 rounded-full animate-pulse delay-700" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to <span className="text-gradient">Ascend?</span></h2>
                <p className="text-lg mb-10 text-gray-300">Join the elite community of developers building the future. Your journey starts now.</p>
                <Link
                  href="/contact"
                  className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform inline-block relative overflow-hidden group"
                >
                  <span className="relative z-10">Initialize Sequence</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </Link>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </div>
  );
}

