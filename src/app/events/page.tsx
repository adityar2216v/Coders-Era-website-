'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Rocket } from 'lucide-react';
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
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#FB7185]">Events</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-[#94A3B8] max-w-3xl mx-auto"
          >
            Join us for exciting hackathons, webinars, workshops, and networking events to enhance your skills and expand your network.
          </motion.p>
        </Container>
      </Section>


      <Section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#FB7185]">Event</span></h2>
            </div>

            <Card hoverEffect className="w-full bg-[#0B1220]/40 border-white/10 relative overflow-hidden group rounded-3xl p-0">
              <div className="flex flex-col md:flex-row h-full">
                {/* Image/Visual Section */}
                <div className="md:w-1/2 relative min-h-[300px] md:min-h-full bg-black/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/40 to-transparent z-10" />
                  <Image
                    src="/codesphere2.0/codesphere2.0.png"
                    alt="CodeSphere 2.0"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/5 to-transparent opacity-20 pointer-events-none" />

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FB7185]/30 bg-[#FB7185]/10 text-[#FB7185] text-xs font-bold uppercase tracking-wider w-fit mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#FB7185] animate-pulse" />
                    Announcement
                  </div>

                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
                    CodeSphere <span className="text-[#22D3EE]">2.0</span>
                  </h2>

                  <div className="mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#FB7185] font-bold text-lg tracking-wide">
                      GET READY FOR THE BIGGEST EVENT OF CODERS ERA COMMUNITY
                    </span>
                  </div>

                  <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl leading-relaxed">
                    The next evolution is here. Prepare for an unprecedented experience of innovation, code, and community.
                    Stay tuned as we unveil more details soon.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-3 text-sm text-[#94A3B8] bg-white/5 px-4 py-3 rounded-xl border border-white/5">
                      <span className="text-2xl">📅</span>
                      <div>
                        <span className="block text-xs uppercase tracking-wider opacity-70">Date</span>
                        <span className="font-semibold text-white">To be Announced</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#94A3B8] bg-white/5 px-4 py-3 rounded-xl border border-white/5">
                      <span className="text-2xl">📍</span>
                      <div>
                        <span className="block text-xs uppercase tracking-wider opacity-70">Venue</span>
                        <span className="font-semibold text-white">To be Announced</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-[#22D3EE] text-[#0B1220] hover:bg-[#FB7185] hover:text-white font-bold py-6 text-lg rounded-xl">
                      Stay Tuned <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* Past Events Section */}
      <Section className="py-24 bg-[#0B1220]/20 border-t border-white/5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Past <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#FB7185]">Events</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Explore our previous gatherings and the impact we've created.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Synapse & Syntax",
                date: "Feb 7, 2026",
                type: "Workshop",
                description: "A specialized workshop exploring the intersection of IoT and Biotech.",
                image: "/photos/Synapse & Syntax.jpg"
              },
              {
                title: "Codesphere",
                date: "1st Event",
                type: "Hackathon",
                description: "Our inaugural coding sprint that started it all.",
                image: "/photos/codesphere.jpeg"
              },
              {
                title: "The Code Cascade",
                date: "2nd Event",
                type: "Hackathon",
                description: "A deep dive into modern development frameworks.",
                image: "/photos/hackathon.jpeg"
              },
              {
                title: "Autonomous Minds Launchpad",
                date: "3rd Event",
                type: "Summit",
                description: "Launching the next generation of AI innovators.",
                image: "/photos/autonomous Minds Launchpad.jpg"
              }
            ].map((event, i) => (
              <Card key={i} hoverEffect className="p-0 overflow-hidden group flex flex-col h-full rounded-2xl border-white/10">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs border border-white/10 text-white font-medium">
                    {event.type}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow bg-white/[0.02]">
                  <div className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow">{event.description}</p>
                  <Link href="/gallery" className="inline-flex items-center text-sm font-medium text-white hover:text-primary transition-colors mt-auto group/link">
                    View Recap <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      < Section className="py-24 border-t border-white/5 bg-white/[0.01]" >
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
      </Section >
    </div >
  );
}
