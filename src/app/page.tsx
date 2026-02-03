'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code2, Users, Rocket, Globe, Zap, Shield } from 'lucide-react';

import { IntroVideo } from '@/components/common/IntroVideo';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

import { Testimonials } from '@/components/common/Testimonials';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary selection:text-white">
      <AnimatePresence>
        {showIntro && (
          <IntroVideo onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* HERO SECTION */}
          <Section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-visible">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
              <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-blob" />
              <div className="absolute bottom-[-20%] right-[20%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
            </div>

            <Container className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 flex justify-center"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs md:text-sm text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Join 5,000+ developers building the future</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
              >
                Where Developers <br />
                <span className="text-gradient-primary">Become Innovators</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
              >
                Step into the future of development. A premium community empowering creators through immersive collaboration, cutting-edge learning, and limitless innovation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8">
                    Join Community <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/events" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8 backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10">
                    Explore Events
                  </Button>
                </Link>
              </motion.div>

              {/* Float UI Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotateX: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.4, type: "spring" }}
                className="mt-20 relative mx-auto max-w-5xl"
                style={{ perspective: "1000px" }}
              >
                <div className="relative rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden aspect-video group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />

                  {/* Mock Interface */}
                  <div className="absolute top-0 w-full h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    <div className="ml-4 w-40 h-4 rounded-full bg-white/5" />
                  </div>

                  <div className="p-12 flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary to-purple-600 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-500">
                        <Code2 className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">System Operational</h3>
                      <p className="text-gray-400">Welcome to Generation Next</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Container>
          </Section>

          {/* PARTNERS TICKER */}




          {/* FEATURES GRID */}
          <Section>
            <Container>
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Engineered for <span className="text-gradient-purple">Growth</span></h2>
                <p className="text-lg text-muted-foreground">Everything you need to accelerate your developer journey, all in one premium ecosystem.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Users, title: "Networking Matrix", desc: "Connect with high-value developers." },
                  { icon: Globe, title: "Global Reach", desc: "Collaborate across 30+ countries." },
                  { icon: Zap, title: "High Performance", desc: "Resources that keep up with you." },
                  { icon: Shield, title: "Secure Platform", desc: "Your data is safe with us." },
                  { icon: Rocket, title: "Career Acceleration", desc: "Job boards and mentorship." },
                  { icon: Code2, title: "Open Source", desc: "Contribute to real-world projects." },
                ].map((feature, i) => (
                  <Card key={i} hoverEffect className="group">
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-primary group-hover:text-white group-hover:bg-primary transition-all duration-300">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.desc}</p>
                  </Card>
                ))}
              </div>
            </Container>
          </Section>

          {/* TESTIMONIALS */}
          <Testimonials />

          {/* CTA SECTION */}
          <Section className="pb-32">
            <Container>
              <div className="relative rounded-3xl overflow-hidden p-12 md:p-24 text-center border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-30" />
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to <span className="text-gradient-primary">Ascend?</span></h2>
                  <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Join the elite community of developers building the future. Your journey starts now.</p>
                  <Link href="/contact">
                    <Button size="lg" className="rounded-full px-12 py-6 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40">
                      Initialize Sequence
                    </Button>
                  </Link>
                </div>
              </div>
            </Container>
          </Section>
        </motion.main>
      )}
    </div>
  );
}
