'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link'; // Added this import
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'hackathon' | 'webinar' | 'workshop' | 'meetup';
  description: string;
  image: string;
};

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    date: 'June 15, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'Virtual',
    type: 'workshop',
    description: 'A comprehensive bootcamp covering modern web development technologies including React, Next.js, and more.',
    image: '/workshop.jpg'
  },
  {
    id: 2,
    title: 'CodersEra Annual Hackathon',
    date: 'July 8-10, 2024',
    time: 'All day',
    location: 'Tech Hub Center',
    type: 'hackathon',
    description: 'Join us for 48 hours of coding, collaboration, and innovation. Solve real-world problems and win amazing prizes!',
    image: '/hackathon.jpg'
  },
  {
    id: 3,
    title: 'AI in Modern Applications',
    date: 'June 25, 2024',
    time: '6:00 PM - 8:00 PM',
    location: 'Virtual',
    type: 'webinar',
    description: 'Learn how to integrate AI capabilities into your applications with practical examples and best practices.',
    image: '/webinar.jpg'
  },
  {
    id: 4,
    title: 'Networking Mixer',
    date: 'June 30, 2024',
    time: '7:00 PM - 9:00 PM',
    location: 'Downtown Cafe',
    type: 'meetup',
    description: 'Connect with fellow developers in a casual setting. Share experiences, exchange ideas, and build your network.',
    image: '/meetup.jpg'
  },
  {
    id: 5,
    title: 'Mobile App Development Workshop',
    date: 'July 20, 2024',
    time: '11:00 AM - 3:00 PM',
    location: 'Tech Innovation Center',
    type: 'workshop',
    description: 'Hands-on workshop on building cross-platform mobile applications using React Native and Flutter.',
    image: '/workshop.jpg'
  },
  {
    id: 6,
    title: 'Cloud Computing Fundamentals',
    date: 'August 5, 2024',
    time: '2:00 PM - 4:00 PM',
    location: 'Virtual',
    type: 'webinar',
    description: 'Introduction to cloud computing concepts, services, and deployment models with practical demonstrations.',
    image: '/webinar.jpg'
  }
];

export default function EventsPage() {
  const [filter, setFilter] = useState<string>('all');

  const filteredEvents = filter === 'all'
    ? upcomingEvents
    : upcomingEvents.filter(event => event.type === filter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="py-20 md:py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <Container className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Upcoming <span className="text-gradient-purple">Events</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Join us for exciting hackathons, webinars, workshops, and networking events to enhance your skills and expand your network.
          </motion.p>
        </Container>
      </Section>

      {/* Events Section */}
      <Section>
        <Container>
          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {['all', 'hackathon', 'webinar', 'workshop', 'meetup'].map((type) => (
              <Button
                key={type}
                variant={filter === type ? 'primary' : 'outline'}
                onClick={() => setFilter(type)}
                className="capitalize rounded-full px-6"
              >
                {type}
              </Button>
            ))}
          </motion.div>

          {/* Events Grid / Coming Soon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <Card hoverEffect className="w-full bg-black/40 p-16 md:p-24 text-center border-white/10 relative overflow-hidden group">
              {/* Animated background elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent animate-pulse delay-700" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-white/5 rounded-full border border-white/10 shadow-inner">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600 drop-shadow-sm tracking-tighter uppercase">
                  Coming Soon
                </h3>
                <p className="text-xl text-primary font-light tracking-wide max-w-2xl mx-auto mb-10">
                  We are curating the next generation of tech events. Stay tuned for something extraordinary.
                </p>

                <div className="flex justify-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                  <span className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </Card>
          </motion.div>

        </Container>
      </Section>

      {/* Call to Action */}
      <Section className="py-24 border-t border-white/5 bg-white/[0.01]">
        <Container className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 text-white"
          >
            Want to Host an Event?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Have an idea for a workshop, webinar, or meetup? Partner with us to reach our community of passionate developers.
          </motion.p>
          <Link href="/contact">
            <Button variant="outline" className="px-10 py-6 text-lg rounded-xl">
              Contact Us
            </Button>
          </Link>
        </Container>
      </Section>
    </div>
  );
}
