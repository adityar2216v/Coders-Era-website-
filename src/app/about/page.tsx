'use client';

import { motion } from 'framer-motion';
import { ThreeDTiltCard } from '@/components/common/ThreeDTiltCard';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden scanlines">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md"
            >
              <span className="text-purple-400 font-mono text-sm tracking-wider">OUR ORIGIN STORY</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              About <span className="text-gradient">CodersEra</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A community built by developers, for developers. Learn about our mission, values, and the team behind CodersEra.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our <span className="text-blue-500">Mission</span></h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  At CodersEra, we believe in the power of community and collaboration. Our mission is to create a vibrant ecosystem where developers can connection, learn, and grow together.
                </p>
                <p>
                  We strive to break down barriers in the tech industry by providing accessible resources, networking opportunities, and a supportive environment for developers at all stages of their journey.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 perspective-1000"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ThreeDTiltCard className="w-full aspect-video">
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden relative shadow-2xl glass">
                  <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-3xl font-bold mb-4 text-white shiny-text" style={{ transform: "translateZ(30px)" }}>Empowering Developers</h3>
                      <p className="text-blue-200/80" style={{ transform: "translateZ(20px)" }}>
                        Through knowledge sharing, mentorship, and collaborative projects
                      </p>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                  <div className="absolute bottom-4 right-4 w-20 h-1 bg-gradient-to-l from-purple-500 to-transparent rounded-full" />
                </div>
              </ThreeDTiltCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Our <span className="text-purple-500">Core Values</span></h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do at CodersEra.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Inclusivity',
                description: 'We believe in creating a welcoming space for everyone, regardless of background or experience level.',
                icon: '🤝',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Innovation',
                description: 'We encourage creative thinking and embrace new technologies and approaches.',
                icon: '💡',
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Collaboration',
                description: 'We believe that the best solutions come from working together and sharing knowledge.',
                icon: '🔄',
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Growth',
                description: 'We are committed to continuous learning and personal development.',
                icon: '📈',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                title: 'Quality',
                description: 'We strive for excellence in everything we do, from code to community interactions.',
                icon: '✨',
                color: 'from-red-500 to-rose-500'
              },
              {
                title: 'Accessibility',
                description: 'We make knowledge and resources available to everyone who wants to learn.',
                icon: '🔓',
                color: 'from-indigo-500 to-blue-500'
              }
            ].map((value, index) => (
              <ThreeDTiltCard key={index} className="h-full">
                <motion.div
                  className="h-full bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className="text-5xl mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2" style={{ transform: "translateZ(30px)" }}>{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-white to-gray-300" style={{ transform: "translateZ(20px)" }}>{value.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors" style={{ transform: "translateZ(10px)" }}>{value.description}</p>
                </motion.div>
              </ThreeDTiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA at Bottom */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Join the Movement</h2>
          <Link href="/contact" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-200">
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  );
}