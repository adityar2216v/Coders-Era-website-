'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="py-20 md:py-32">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-blob" />
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-md"
          >
            <span className="text-secondary-foreground font-mono text-sm tracking-wider">OUR ORIGIN STORY</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold mb-8"
          >
            About <span className="text-gradient-purple">CodersEra</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A community built by developers, for developers. Learn about our mission, values, and the team behind CodersEra.
          </motion.p>
        </Container>
      </Section>

      {/* Mission Section */}
      <Section className="bg-white/[0.02] py-20">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our <span className="text-primary">Mission</span></h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
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
              <Card hoverEffect className="aspect-video flex items-center justify-center relative overflow-hidden bg-black/50 border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                <div className="text-center p-8 relative z-10">
                  <h3 className="text-4xl font-bold mb-4 text-white">Empowering Developers</h3>
                  <p className="text-primary/80">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-gradient-purple">Core Values</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at CodersEra.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Inclusivity',
                description: 'We believe in creating a welcoming space for everyone, regardless of background or experience level.',
                icon: '🤝',
              },
              {
                title: 'Innovation',
                description: 'We encourage creative thinking and embrace new technologies and approaches.',
                icon: '💡',
              },
              {
                title: 'Collaboration',
                description: 'We believe that the best solutions come from working together and sharing knowledge.',
                icon: '🔄',
              },
              {
                title: 'Growth',
                description: 'We are committed to continuous learning and personal development.',
                icon: '📈',
              },
              {
                title: 'Quality',
                description: 'We strive for excellence in everything we do, from code to community interactions.',
                icon: '✨',
              },
              {
                title: 'Accessibility',
                description: 'We make knowledge and resources available to everyone who wants to learn.',
                icon: '🔓',
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hoverEffect className="h-full p-8 bg-white/[0.02]">
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}