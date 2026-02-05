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
import { LogoTicker } from '@/components/common/LogoTicker';
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
              <div className="absolute top-[-10%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/20 rounded-full blur-[60px] md:blur-[120px] animate-blob" />
              <div className="absolute bottom-[-10%] right-[10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-secondary/20 rounded-full blur-[60px] md:blur-[120px] animate-blob animation-delay-2000" />
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
                <div className="relative rounded-xl border border-white/10 bg-[#0B1220]/90 backdrop-blur-md md:backdrop-blur-xl shadow-2xl overflow-hidden aspect-[4/3] md:aspect-video group font-mono text-left">
                  <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px] pointer-events-none" />

                  {/* Header with macOS style controls and Tabs */}
                  <div className="absolute top-0 w-full bg-[#13203A] border-b border-white/5 flex flex-col z-20">
                    <div className="h-8 flex items-center px-4 gap-2">
                      <div className="flex gap-2 group/controls">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56] group-hover/controls:brightness-110 transition-all" />
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] group-hover/controls:brightness-110 transition-all" />
                        <div className="w-3 h-3 rounded-full bg-[#27C93F] group-hover/controls:brightness-110 transition-all" />
                      </div>
                      <div className="flex-1 text-center text-[10px] md:text-xs text-gray-500 font-medium font-sans tracking-wide">codersera-terminal — -zsh — 80x24</div>
                    </div>

                    {/* Tab Bar */}
                    <div className="flex text-xs bg-[#0B1220]">
                      <div className="px-4 py-2 bg-[#1E293B] text-white border-t-2 border-primary border-r border-white/5 flex items-center gap-2">
                        <span className="text-blue-400">#</span> terminal.sh
                      </div>
                      <div className="px-4 py-2 text-gray-500 border-r border-white/5 flex items-center gap-2 hover:bg-white/5 hover:text-gray-300 transition-colors cursor-pointer">
                        <span className="text-yellow-500">JS</span> welcome.js
                      </div>
                    </div>
                  </div>

                  {/* Main Content Area with Line Numbers */}
                  <div className="absolute top-[60px] inset-x-0 bottom-8 overflow-hidden flex">
                    {/* Line Numbers */}
                    <div className="w-10 md:w-12 bg-[#0B1220] border-r border-white/5 text-right py-4 px-2 select-none text-gray-700 text-xs md:text-sm leading-6 z-10 hidden sm:block">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>

                    {/* Terminal Content */}
                    <div className="flex-1 p-4 md:p-6 overflow-y-auto custom-scrollbar relative">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-white/30 text-xs">
                          <span>Last login: Today on ttys000</span>
                        </div>

                        {/* Command Entry */}
                        <div className="flex flex-wrap gap-2 text-base md:text-lg items-center group/cmd">
                          <span className="text-pink-500 font-bold">➜</span>
                          <span className="text-cyan-400 font-bold">~</span>
                          <span className="text-green-400 font-semibold typing-effect">./init_codersera.sh --verbose</span>
                        </div>

                        {/* Execution Logs */}
                        <div className="space-y-1 pl-4 border-l-2 border-white/5 ml-1">
                          <div className="text-gray-500 text-xs md:text-sm animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards', opacity: 0 }}>
                            <span className="text-blue-500">[INFO]</span> Loading core modules...
                          </div>
                          <div className="text-gray-500 text-xs md:text-sm animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards', opacity: 0 }}>
                            <span className="text-blue-500">[INFO]</span> Initializing DevEnvironment v2.4
                          </div>
                          <div className="text-white text-sm md:text-base py-2 flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards', opacity: 0 }}>
                            <span className="text-emerald-400 text-lg">✔</span>
                            <span>System Ready. Welcome to <span className="text-primary font-bold tracking-wide">CodersEra</span></span>
                          </div>
                        </div>

                        {/* Interactive Menu as "Output" */}
                        <div className="space-y-2 pt-2">
                          {[
                            { text: "Connect with developers", delay: '0.8s', color: "bg-blue-500" },
                            { text: "Learn new technologies", delay: '1s', color: "bg-purple-500" },
                            { text: "Build amazing projects", delay: '1.2s', color: "bg-orange-500" },
                            { text: "Join our community", delay: '1.4s', color: "bg-green-500" }
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 text-sm md:text-base text-gray-300 hover:text-white transition-all cursor-pointer group/item opacity-0 animate-fade-in-up pl-2 border-l border-transparent hover:border-white/20 hover:bg-white/5 rounded-r px-2 py-1 mx-[-0.5rem]"
                              style={{ animationDelay: item.delay, animationFillMode: 'forwards' }}
                            >
                              <span className="text-white/20 select-none font-mono">›</span>
                              <span className={`w-1.5 h-1.5 rounded-full ${item.color} group-hover/item:scale-150 group-hover/item:shadow-[0_0_8px_currentColor] transition-all`} />
                              <span className="group-hover/item:translate-x-1 transition-transform font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>

                        {/* Blinking Cursor prompt at bottom */}
                        <div className="pt-4 flex gap-2 text-base md:text-lg items-center opacity-0 animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
                          <span className="text-pink-500 font-bold">➜</span>
                          <span className="text-cyan-400 font-bold">~</span>
                          <span className="w-2.5 h-5 bg-white/50 animate-pulse block" />
                        </div>
                      </div>

                      {/* Background Decoration */}
                      <div className="absolute top-4 right-4 text-[10px] text-green-500/20 font-mono text-right pointer-events-none select-none">
                        <div>CPU: 12%</div>
                        <div>MEM: 4.2GB</div>
                      </div>
                    </div>
                  </div>

                  {/* Status Bar */}
                  <div className="absolute bottom-0 w-full h-8 bg-[#13203A] border-t border-white/5 flex items-center px-4 justify-between text-[10px] md:text-xs text-gray-500 select-none z-20">
                    <div className="flex gap-4 items-center">
                      <span className="flex items-center gap-1.5 text-blue-400"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> ONLINE</span>
                      <span className="hidden sm:inline">MAIN BRANCH</span>
                    </div>
                    <div className="flex gap-4 font-mono">
                      <span>UTF-8</span>
                      <span className="hidden sm:inline">TYPE: BASH</span>
                      <span>V 2.0.4</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Container>
          </Section>

          {/* PARTNERS TICKER */}
          <LogoTicker />



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
