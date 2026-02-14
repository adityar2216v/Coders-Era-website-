'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { HeartHandshake, Lightbulb, Users, TrendingUp, Sparkles, Unlock } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen ethnic-pattern">
      {/* Hero Section */}
      <Section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#22D3EE]/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FB7185]/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />

        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#13203A]/50 backdrop-blur-md"
          >
            <span className="text-[#22D3EE] font-mono text-sm tracking-wider font-bold shadow-sm">OUR ORIGIN STORY</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold mb-8 text-[#E2E8F0] font-heading"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#FB7185]">CodersEra</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed"
          >
            A community built by developers, for developers. Learn about our mission, values, and the team behind CodersEra.
          </motion.p>
        </Container>
      </Section>

      {/* Mission Section */}
      <Section className="bg-[#13203A]/10 py-20 border-y border-white/5 backdrop-blur-sm">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#E2E8F0] font-heading">Our <span className="text-[#22D3EE]">Mission</span></h2>
              <div className="space-y-6 text-[#94A3B8] text-lg leading-relaxed font-light">
                <p>
                  At CodersEra, we believe in the power of community and collaboration. Our mission is to create a vibrant ecosystem where developers can connection, learn, and grow together.
                </p>
                <p>
                  We strive to break down barriers in the tech industry by providing accessible resources, networking opportunities, and a supportive environment for developers at all stages of their journey.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card hoverEffect className="aspect-video flex items-center justify-center relative overflow-hidden bg-[#0B1220] border-white/10 shadow-2xl shadow-[#22D3EE]/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/10 to-[#FB7185]/10" />
                <div className="text-center p-8 relative z-10">
                  <h3 className="text-4xl font-bold mb-4 text-[#E2E8F0] font-heading">Empowering Developers</h3>
                  <p className="text-[#94A3B8]">
                    Through knowledge sharing, mentorship, and collaborative projects
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="py-24">
        <Container>
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#E2E8F0] font-heading">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB7185] to-[#22D3EE]">Core Values</span></h2>
            <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
              The principles that guide everything we do at CodersEra.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Inclusivity',
                description: 'We believe in creating a welcoming space for everyone, regardless of background or experience level.',
                icon: <HeartHandshake className="w-12 h-12 text-[#FB7185] mb-6" />,
              },
              {
                title: 'Innovation',
                description: 'We encourage creative thinking and embrace new technologies and approaches.',
                icon: <Lightbulb className="w-12 h-12 text-[#22D3EE] mb-6" />,
              },
              {
                title: 'Collaboration',
                description: 'We believe that the best solutions come from working together and sharing knowledge.',
                icon: <Users className="w-12 h-12 text-[#FB7185] mb-6" />,
              },
              {
                title: 'Growth',
                description: 'We are committed to continuous learning and personal development.',
                icon: <TrendingUp className="w-12 h-12 text-[#22D3EE] mb-6" />,
              },
              {
                title: 'Quality',
                description: 'We strive for excellence in everything we do, from code to community interactions.',
                icon: <Sparkles className="w-12 h-12 text-[#FB7185] mb-6" />,
              },
              {
                title: 'Accessibility',
                description: 'We make knowledge and resources available to everyone who wants to learn.',
                icon: <Unlock className="w-12 h-12 text-[#22D3EE] mb-6" />,
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hoverEffect className="h-full p-8 bg-[#0B1220]/50 border border-white/10 hover:border-[#22D3EE]/30 backdrop-blur-sm group transition-all duration-300">
                  <div className="group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-[#E2E8F0] font-heading">{value.title}</h3>
                  <p className="text-[#94A3B8] leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}