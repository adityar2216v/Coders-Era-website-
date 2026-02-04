'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { BsLinkedin, BsInstagram } from "react-icons/bs";

type TeamMember = {
  img: string;
  name: string;
  position: string;
  linkedin?: string;
  instagram?: string;
};

const leaders: TeamMember[] = [
  {
    img: '/photos/me.jpg',
    name: 'ADITYA RAJ SRIVASTAVA',
    position: 'PRESIDENT & FOUNDER',
    linkedin: 'https://www.linkedin.com/in/aditya-raj-srivastava-401b75328',
    instagram: 'https://www.instagram.com/its.me._.adi/'
  },
  {
    img: '/photos/aman.jpg',
    name: 'AMAN SINGH',
    position: 'VICE PRESIDENT',
    linkedin: '#',
    instagram: 'https://www.instagram.com/aman17.05singh/'
  },
  {
    img: '/photos/v.jpg',
    name: 'KHUSHI GUPTA',
    position: 'VICE PRESIDENT',
    linkedin: '#',
    instagram: 'https://www.instagram.com/khuzhi_.04/'
  },
  {
    img: '/photos/ayushi.jpg',
    name: 'AYUSHI RAI',
    position: 'SOCIAL MEDIA HEAD',
    linkedin: '#',
    instagram: '#'
  },
  {
    img: '/photos/aranjay.jpg',
    name: 'ARANJAY GUPTA',
    position: 'DISCIPLINARY HEAD',
    linkedin: '#',
    instagram: 'https://www.instagram.com/aranjay.14/'
  },
  {
    img: '/photos/yasharth.png',
    name: 'YASHARTH SHRINET',
    position: 'HEAD COORDINATOR',
    linkedin: '#',
    instagram: 'https://www.instagram.com/yasharth__shrinet/'
  },
  {
    img: '/photos/khushi.jpg',
    name: 'KHUSHI SINGH',
    position: 'HEAD COORDINATOR',
    linkedin: 'https://www.linkedin.com/in/khushi-singh-9ab111235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    instagram: 'https://www.instagram.com/khushisngh15_/r'
  },
  {
    img: '/photos/aaditya.jpg',
    name: 'AADITYA SRIVASTAVA',
    position: 'ADMIN COORDINATOR',
    linkedin: '#',
    instagram: 'https://www.instagram.com/iownxeno/'
  },
];

const coreMembers: TeamMember[] = [
  { img: '/photos/arush.jpg', name: 'ARUSH MISHRA', position: 'AI-LEAD', instagram: 'https://www.instagram.com/not.arush/' },
  { img: '/photos/madhur.jpg', name: 'MADHUR RASTOGI', position: 'AIML-LEAD', instagram: 'https://www.instagram.com/its.madhur_.19/' },
  { img: '/photos/ashish.jpg', name: 'ASHISH', position: 'AIML-LEAD', instagram: 'https://www.instagram.com/the_atulniyeashish/' },
  { img: '/photos/ansh.jpg', name: 'ANSH SINGH', position: 'DS-LEAD', instagram: 'https://www.instagram.com/rqwler/' },
  { img: '/photos/KARTIKEY.webp', name: 'KARTIKEY', position: 'DS LEAD', instagram: 'https://www.instagram.com/_kartiike_/' },
  { img: '/photos/KISHAN.jpg', name: 'KISHAN', position: 'IT LEAD', instagram: '#' },
  { img: '/photos/hardy.png', name: 'HRIDYANSH', position: 'TECH-LEAD', instagram: 'https://www.instagram.com/__hridayansh/' },
  { img: '/photos/AYUSH.jpg', name: 'AYUSH', position: 'CYS LEAD', instagram: 'https://www.instagram.com/aayush_p.s/' },
  { img: '/photos/VEER.jpg', name: 'VIJENDRA', position: 'CSE LEAD', instagram: 'https://www.instagram.com/mrveer_official/' },
  { img: '/photos/van.jpg', name: 'VANSHIKA TYAGI', position: 'IOT LEAD', instagram: 'https://www.instagram.com/vanshika_736/' },
  { img: '/photos/simmi.jpg', name: 'SIMMI SINGH', position: 'IOT LEAD', linkedin: 'https://www.linkedin.com/in/simmisingh1?trk=contact-info', instagram: 'https://www.instagram.com/simmiiii_singh?igsh=MndlaG85Zno2Nngy' },
  { img: '/photos/SRISHTI.jpg', name: 'SRISHTI', position: 'REACH TEAM', instagram: 'https://www.instagram.com/srishtiii_kumari/' },
  { img: '/photos/ANSHIKA.jpg', name: 'ANSHIKA MISHRA', position: 'MEDIA TEAM', instagram: '#' },
  { img: '/photos/KAVYA.jpg', name: 'KAVYA PANT', position: 'MEDIA TEAM', instagram: '#' }
].map(member => {
  if (member.img && !member.img.startsWith('/photos/')) {
    member.img = `/photos/${member.img}`;
  }
  return member;
});

const TeamMemberCard = ({ member, index }: { member: TeamMember, index: number }) => (
  <Card hoverEffect className="group p-0 overflow-visible bg-transparent border-0 shadow-none glass-panel">
    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl mb-4">
      <div className="absolute inset-0 bg-primary/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
      <Image
        src={member.img}
        alt={member.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        onError={(e) => { e.currentTarget.src = '/photos/logo.jpg'; }}
      />


    </div>

    <div className="text-center p-4">
      <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">{member.name}</h3>
      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1">{member.position}</p>

      {/* Social Buttons Below */}
      <div className="flex justify-center gap-4 mt-4">
        {member.linkedin && member.linkedin !== '#' && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all text-white/70 hover:scale-110">
            <BsLinkedin />
          </a>
        )}
        {member.instagram && member.instagram !== '#' && (
          <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-pink-600 hover:text-white transition-all text-white/70 hover:scale-110">
            <BsInstagram />
          </a>
        )}
      </div>
    </div>
  </Card>
);

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="pt-32 pb-20">
        <Container className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold mb-6 tracking-tight"
          >
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#FB7185]">CREW</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            The creative minds and technical wizards powering the CodersEra revolution.
          </motion.p>
        </Container>
      </Section>

      {/* Leaders Section */}
      <Section className="py-12 bg-white/[0.02]">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">LEADERSHIP</h2>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <TeamMemberCard member={member} index={index} />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Core Members Section */}
      <Section className="py-20">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">CORE TEAM</h2>
            <div className="h-1 w-12 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <TeamMemberCard member={member} index={index} />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
