import React from 'react'
import { BookOpen, Share2, Code2, Target, Lightbulb } from 'lucide-react';

const features = [
  {
    title: 'Learn Together',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'text-quantum-cyan',
    text: 'Join our vibrant community of passionate developers where knowledge flows freely. We believe in the power of collaborative learning and hands-on experience.',
    bullets: [
      'Weekly coding challenges',
      'Structured peer mentorship programs for skill development',
      'Interactive workshops led by industry experts',
      'Study groups for latest technologies and frameworks',
      'Regular code reviews and feedback sessions',
    ],
  },
  {
    title: 'Share Knowledge',
    icon: <Share2 className="w-6 h-6" />,
    color: 'text-signal-coral',
    text: 'Contribute to our collective growth by sharing your expertise. Every member has unique insights that can benefit the community.',
    bullets: [
      'Technical blog writing with professional guidance',
      'Lightning talks and tech presentations',
      'Comprehensive code review sessions',
      'Documentation workshops and best practices',
      'Community-driven learning resources',
    ],
  },
  {
    title: 'Build Projects',
    icon: <Code2 className="w-6 h-6" />,
    color: 'text-quantum-cyan',
    text: 'Turn ideas into reality through collaborative projects. Develop practical skills while building impressive portfolio pieces.',
    bullets: [
      'Open source project contributions and maintenance',
      'Team-based hackathon projects with mentoring',
      'Portfolio development workshops',
      'Industry-standard development practices',
      'Project management and collaboration skills',
    ],
  },
];

const missionVision = [
  {
    title: 'Our Mission',
    icon: <Target className="w-8 h-8 mb-4 text-signal-coral" />,
    text: 'To foster a collaborative environment where developers can learn, grow, and innovate together while building meaningful projects that make a difference.',
  },
  {
    title: 'Our Vision',
    icon: <Lightbulb className="w-8 h-8 mb-4 text-quantum-cyan" />,
    text: 'To become a leading tech community that empowers developers to reach their full potential and create innovative solutions for real-world challenges.',
  },
];

const About = () => {
  return (
    <section className="w-full min-h-screen py-10 px-2 sm:px-4 md:px-8 flex flex-col items-center justify-center ethnic-pattern relative overflow-hidden" id='About'>
      <div className="absolute inset-0 bg-coders-midnight/80 z-0"></div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <h1 className='text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-quantum-cyan to-signal-coral text-center mb-8 sm:mb-10 md:mb-12 font-bold font-heading px-6 sm:px-16 md:px-20 py-4'>About Us</h1>

        {/* Features */}
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`relative rounded-2xl p-6 bg-era-blue/40 backdrop-blur-md border border-white/5 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-quantum-cyan/10 group overflow-hidden`}
              style={{ minHeight: '320px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-full bg-coders-midnight border border-white/10 ${feature.color} group-hover:animate-bounce`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-pure-intent font-heading">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 text-base md:text-lg leading-relaxed">{feature.text}</p>
                <ul className="space-y-2 text-pure-intent/80 text-sm md:text-base">
                  {feature.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-quantum-cyan mt-1">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {missionVision.map((mv) => (
            <div
              key={mv.title}
              className={`relative rounded-2xl p-8 bg-coders-midnight/60 backdrop-blur-xl border border-white/10 transition-transform duration-300 hover:scale-105 hover:border-quantum-cyan/30 group overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-era-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                {mv.icon}
                <h3 className="text-2xl md:text-3xl font-bold text-pure-intent mb-4 font-heading">{mv.title}</h3>
                <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">{mv.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About