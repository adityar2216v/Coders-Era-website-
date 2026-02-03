'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Team', path: '/team' },
  { name: 'Community', path: '/community' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        className="hidden md:flex sticky top-4 z-50 mx-auto justify-center items-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-black/30 backdrop-blur-md rounded-full border border-white/10 px-8 py-4 shadow-lg shadow-black/20 flex items-center space-x-1">
          <nav className="flex space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </motion.header>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-white/10 flex items-center justify-between px-6 h-16 shadow-lg">
        <span className="text-xl font-bold text-white tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">CodersEra</span>
        <button
          className='flex flex-col justify-center items-center w-10 h-10 focus:outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-40 flex flex-col items-center justify-center`}>
        <div className='flex flex-col items-center gap-8 text-2xl font-light tracking-wider'>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`${pathname === item.path ? 'text-blue-400 font-bold' : 'text-white'} hover:text-blue-400 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a href='https://chat.whatsapp.com/IZFWh2YhwNh1Hzl5GDci2F' target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-green-500/20 text-green-400 border border-green-500/50 rounded-full text-lg mt-4" >Whatsapp Community</a>
        </div>
      </div>
    </>
  );
}