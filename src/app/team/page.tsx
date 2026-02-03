'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

type TeamMember = {
  img: string;
  name: string;
  position: string;
  linkedin?: string;
  instagram?: string;
};
// ... (TeamMember array definitions remain unchanged, skipping for brevity in this instruction block but they are in the file)

// Scroll down to variants definition
const textVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const letterVariant: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", damping: 12, stiffness: 100 }
  }
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
  {
    img: '/photos/arush.jpg',
    name: 'ARUSH MISHRA',
    position: 'AI-LEAD',
    linkedin: '#',
    instagram: 'https://www.instagram.com/not.arush/'
  },
  {
    img: '/photos/madhur.jpg',
    name: 'MADHUR RASTOGI',
    position: 'AIML-LEAD',
    linkedin: '#',
    instagram: 'https://www.instagram.com/its.madhur_.19/'
  },
  {
    img: '/photos/ashish.jpg',
    name: 'ASHISH',
    position: 'AIML-LEAD',
    linkedin: '#',
    instagram: 'https://www.instagram.com/the_atulniyeashish/'
  },
  {
    img: '/photos/ansh.jpg',
    name: 'ANSH SINGH',
    position: 'DS-LEAD',
    linkedin: '#',
    instagram: 'https://www.instagram.com/rqwler/'
  },
  {
    img: '/photos/KARTIKEY.webp',
    name: 'KARTIKEY',
    position: 'DS LEAD',
    linkedin: '#',
    instagram: 'https://www.instagram.com/_kartiike_/'
  },
  {
    img: '/photos/KISHAN.jpg',
    name: 'KISHAN',
    position: 'IT LEAD',
    linkedin: '#',
    instagram: '#'
  },
  {
    img: '/photos/hardy.png',
    name: 'HRIDYANSH',
    position: 'TECH-LEAD',
    linkedin: '#',
    instagram: 'https://www.instagram.com/__hridayansh/'
  },
  {
    img: '/photos/AYUSH.jpg',
    name: 'AYUSHI',
    position: 'CYS LEAD',
    linkedin: '#',
    instagram: 'https://www.instagram.com/aayush_p.s/'
  },
  {
    img: '/photos/VEER.jpg',
    name: 'VIJENDRA',
    position: 'CSE LEAD',
    linkedin: '#',
    instagram: 'https://www.instagram.com/mrveer_official/'
  },
  {
    img: '/photos/van.jpg',
    name: 'VANSHIKA TYAGI',
    position: 'IOT LEAD',
    linkedin: '#',
    instagram: 'https://www.instagram.com/vanshika_736/'
  },
  {
    img: '/photos/simmi.jpg',
    name: 'SIMMI SINGH',
    position: 'IOT LEAD',
    linkedin: 'https://www.linkedin.com/in/simmisingh1?trk=contact-info',
    instagram: 'https://www.instagram.com/simmiiii_singh?igsh=MndlaG85Zno2Nngy'
  },
  {
    img: '/photos/SRISHTI.jpg',
    name: 'SRISHTI',
    position: 'REACH TEAM',
    linkedin: '#',
    instagram: 'https://www.instagram.com/srishtiii_kumari/'
  },
  {
    img: '/photos/anshika.jpg',
    name: 'ANSHIKA MISHRA',
    position: 'MEDIA TEAM',
    linkedin: '#',
    instagram: '#'
  },
  {
    img: '/photos/kavya.jpg',
    name: 'KAVYA PANT',
    position: 'MEDIA TEAM',
    linkedin: '#',
    instagram: '#'
  }
].map(member => {
  if (member.img && !member.img.startsWith('/photos/')) {
    member.img = `/photos/${member.img}`;
  }
  return member;
});


const TeamMemberCard = ({ member, index }: { member: TeamMember, index: number }) => (
  <motion.div
    className="group relative flex flex-col items-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    {/* Frame/Image Container - Resized and clean */}
    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl mb-4 border border-white/10 shadow-lg bg-white/5 transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
      {/* Background Gradient for depth (subtle) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <Image
        src={member.img}
        alt={member.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        onError={(e) => { e.currentTarget.src = '/photos/logo.jpg'; }}
      />

      {/* Social Icons - Floating Glass Pill on Hover */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
        {member.linkedin && member.linkedin !== '#' && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
          </a>
        )}
        {member.instagram && member.instagram !== '#' && (
          <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        )}
      </div>
    </div>

    {/* Info - Clean and detached */}
    <div className="text-center">
      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{member.name}</h3>
      <div className="h-0.5 w-12 bg-blue-500/50 mx-auto my-2 rounded-full group-hover:w-20 transition-all duration-300" />
      <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">{member.position}</p>
    </div>
  </motion.div>
);



export default function TeamPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--background)] overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/5 rounded-full blur-[120px] animate-blob animation-delay-2000" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <motion.h1
              className="text-5xl md:text-8xl font-black mb-6 tracking-tighter flex justify-center gap-4 md:gap-8 flex-wrap"
              variants={textVariant}
              initial="hidden"
              animate="visible"
            >
              <span className="flex">
                {Array.from("OUR").map((char, i) => (
                  <motion.span key={i} variants={letterVariant}>{char}</motion.span>
                ))}
              </span>
              <span className="flex text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {Array.from("CREW").map((char, i) => (
                  <motion.span key={i} variants={letterVariant}>{char}</motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              The creative minds and technical wizards powering the CodersEra revolution.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Leaders Section */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col items-center justify-center text-center"
          >
            <motion.h2
              className="text-3xl font-bold text-white mb-2 flex justify-center gap-2"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {Array.from("LEADERSHIP").map((char, i) => (
                <motion.span key={i} variants={letterVariant}>{char}</motion.span>
              ))}
            </motion.h2>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
            {leaders.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Members Section */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col items-center justify-center text-center"
          >
            <motion.h2
              className="text-3xl font-bold text-white mb-2 flex justify-center gap-2"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="flex">
                {Array.from("CORE").map((char, i) => (
                  <motion.span key={i} variants={letterVariant}>{char}</motion.span>
                ))}
              </span>
              <span className="flex">
                {Array.from("TEAM").map((char, i) => (
                  <motion.span key={i} variants={letterVariant}>{char}</motion.span>
                ))}
              </span>
            </motion.h2>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
            {coreMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 p-12 rounded-3xl backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Want to be part of the era?</h2>
            <p className="text-gray-400 mb-8">
              We are always open to new talent. If you have the passion, we have the platform.
            </p>
            <a href="/contact" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
              Join Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
