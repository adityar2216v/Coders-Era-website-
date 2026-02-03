'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ThreeDTiltCard } from '@/components/common/ThreeDTiltCard';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden scanlines">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="text-gradient-purple">Community</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Join a thriving network of developers, designers, and tech enthusiasts who share knowledge, collaborate on projects, and grow together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Community Features</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Everything you need to connect, learn, and grow as a developer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Discussion Forums',
                description: 'Engage in meaningful conversations about programming languages, frameworks, career advice, and more.',
                icon: (
                  <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                )
              },
              {
                title: 'Project Collaboration',
                description: 'Find teammates for your projects or join existing ones to build your portfolio and gain real-world experience.',
                icon: (
                  <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                )
              },
              {
                title: 'Mentorship Program',
                description: 'Connect with experienced developers who can guide you through technical challenges and career decisions.',
                icon: (
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                )
              },
              {
                title: 'Resource Library',
                description: 'Access a curated collection of tutorials, articles, videos, and tools to enhance your skills.',
                icon: (
                  <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                )
              },
              {
                title: 'Job Board',
                description: 'Discover job opportunities shared by community members and partner companies.',
                icon: (
                  <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                )
              },
              {
                title: 'Virtual Meetups',
                description: 'Join regular online gatherings to network, share knowledge, and stay connected with the community.',
                icon: (
                  <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                )
              }
            ].map((feature, index) => (
              <ThreeDTiltCard key={index} className="h-full">
                <motion.div
                  className="h-full bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="mb-6 p-4 bg-black/30 rounded-full inline-block backdrop-blur-sm border border-white/5" style={{ transform: "translateZ(30px)" }}>{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors" style={{ transform: "translateZ(20px)" }}>{feature.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300" style={{ transform: "translateZ(10px)" }}>{feature.description}</p>
                </motion.div>
              </ThreeDTiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center glass-card p-12 rounded-3xl border border-white/10 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Join Our Community?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">Become a part of CodersEra today and connect with like-minded developers who are passionate about technology and growth.</p>
            <Link
              href="/contact"
              className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] inline-block transform hover:-translate-y-1 duration-300"
            >
              Join Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}