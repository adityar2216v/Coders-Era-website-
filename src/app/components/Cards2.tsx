import React from 'react'

const communityCards = [
  {
    title: 'Networking',
    icon: (
      <svg className="w-10 h-10 text-blue-200 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m13-6.13a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM9 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm2 14v-2a4 4 0 0 1 3-3.87" /></svg>
    ),
    color: 'from-blue-900/20 via-black/20 to-blue-700/20',
    desc: 'Connect with like-minded developers, share ideas, and build lasting professional relationships in our inclusive community.',
    bullets: [
      'Regular community meetups',
      'Industry networking events',
      'Mentorship opportunities',
      'Collaborative project teams',
    ],
  },
  {
    title: 'Skill Development',
    icon: (
      <svg className="w-16 h-10 text-purple-200 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17v-2m0 0V9m0 6l-2-2m2 2l2-2m-6 6a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z" /></svg>
    ),
    color: 'from-purple-800/20 via-black/20 to-fuchsia-700/20',
    desc: 'Accelerate your growth with structured learning paths, hands-on workshops, and expert-led training sessions.',
    bullets: [
      'Technical workshops',
      'Code review sessions',
      'Career development',
      'Certification prep',
    ],
  },
  {
    title: 'Innovation Hub',
    icon: (
      <svg className="w-10 h-10 text-blue-200 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.5 10.5l-5 5m0 0l-2-2m2 2V21h6v-7.5m-6 0a7.5 7.5 0 1 1 15 0c0 2.485-1.5 4.5-3 4.5s-3-2.015-3-4.5a7.5 7.5 0 0 0-9-7.5" /></svg>
    ),
    color: 'from-blue-900/20 via-black/20 to-purple-800/20',
    desc: 'Be part of cutting-edge projects and initiatives that push the boundaries of technology and creativity.',
    bullets: [
      'Hackathon events',
      'Innovation challenges',
      'Research projects',
      'Tech showcases',
    ],
  },
];

const Cards2 = () => {
  return (
    <section  id="Community" className="w-full min-h-[60vh] py-16 px-2 md:px-8 flex flex-col items-center justify-center bg-white/10">
      <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-12 bg-black/80 hover:shadow-fuchsia-300/30 shadow-lg transition-all ease-in-out p-5 px-20 rounded-xl">Join Our Community</h2>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {communityCards.map((card) => (
          <div
            key={card.title}
            className={`relative rounded-2xl p-8 bg-gradient-to-br ${card.color} bg-opacity-80 backdrop-blur-xl shadow-xl border border-white/10 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden`}
          >
            {/* Glass overlay for modern effect */}
            <div className="absolute inset-0 bg-black/10 backdrop-blur-md rounded-2xl z-0 group-hover:bg-black/20 transition" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex flex-col items-start mb-4">
                {card.icon}
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{card.title}</h3>
              </div>
              <p className="text-[#c7d0e6] mb-4 text-base md:text-lg font-medium">{card.desc}</p>
              <ul className="list-disc pl-5 space-y-1 text-[#e0e6f7] text-sm md:text-base">
                {card.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Cards2