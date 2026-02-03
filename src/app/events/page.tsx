'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { ThreeDTiltCard } from '@/components/common/ThreeDTiltCard';

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
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden scanlines">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Upcoming <span className="text-gradient">Events</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Join us for exciting hackathons, webinars, workshops, and networking events to enhance your skills and expand your network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {['all', 'hackathon', 'webinar', 'workshop', 'meetup'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 capitalize ${filter === type
                    ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20 hover:text-white'
                  }`}
              >
                {type}
              </button>
            ))}
          </motion.div>

          {/* Events Grid / Coming Soon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <ThreeDTiltCard className="w-full">
              <div className="bg-black/40 border border-white/10 rounded-3xl p-16 md:p-24 text-center backdrop-blur-xl relative overflow-hidden group">
                {/* Animated background elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse delay-700" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

                <div className="relative z-10">
                  <div className="inline-block mb-8 p-4 bg-white/5 rounded-full border border-white/10 shadow-inner">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <h3 className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600 drop-shadow-sm tracking-tighter uppercase">
                    Coming Soon
                  </h3>
                  <p className="text-xl text-blue-300 font-light tracking-wide max-w-2xl mx-auto mb-10">
                    We are curating the next generation of tech events. Stay tuned for something extraordinary.
                  </p>

                  <div className="flex justify-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            </ThreeDTiltCard>
          </motion.div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Want to Host an Event?</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Have an idea for a workshop, webinar, or meetup? Partner with us to reach our community of passionate developers.
            </p>
            <Link
              href="/contact"
              className="px-10 py-4 border border-blue-500/30 bg-blue-500/10 text-blue-400 font-bold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] inline-block uppercase tracking-wider text-sm"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
