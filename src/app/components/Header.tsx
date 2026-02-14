'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Smooth scroll handler with offset
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className='relative z-40'>
      {/* Mobile/Tablet Top Nav Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-coders-midnight/80 border-b border-white/5 flex items-center justify-between px-4 h-14 shadow-sm">
        <span className="text-lg font-bold text-quantum-cyan tracking-wide font-heading">Coders ERA</span>
        <button
          className='flex flex-col justify-center items-center w-10 h-10 focus:outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-pure-intent transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-pure-intent my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-pure-intent transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center justify-center m-auto text-lg font-semibold gap-6 mb-10 bg-[#13203A]/70 border border-white/10 rounded-full p-3 px-10 fixed top-4 left-1/2 -translate-x-1/2 backdrop-blur-md z-50 shadow-lg shadow-black/10 transition-all duration-300 hover:border-[#22D3EE]/30'>
        <Link href='/' className='text-[#E2E8F0] hover:text-[#22D3EE] transition-all duration-300 hover:scale-105 group relative'>
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#22D3EE] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <a href='#About' onClick={e => handleScroll(e, 'About')} className='text-[#E2E8F0] hover:text-[#22D3EE] transition-all duration-300 hover:scale-105 group relative'>
          About
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#22D3EE] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href='#Events' onClick={e => handleScroll(e, 'Events')} className='text-[#E2E8F0] hover:text-[#22D3EE] transition-all duration-300 hover:scale-105 group relative'>
          Events
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#22D3EE] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href='#Community' className='text-[#E2E8F0] hover:text-[#22D3EE] transition-all duration-300 hover:scale-105 group relative'>
          Community
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#22D3EE] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href='#Footer' className='text-[#E2E8F0] hover:text-[#22D3EE] transition-all duration-300 hover:scale-105 group relative'>
          Contact Us
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#22D3EE] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <div className="h-6 w-[1px] bg-white/20 mx-2"></div>
        <a href='https://chat.whatsapp.com/IZFWh2YhwNh1Hzl5GDci2F' className='text-green-400 hover:text-green-300 transition-transform duration-300 hover:scale-110 ml-2'><FaWhatsapp size={24} /></a>
      </div>

      {/* Mobile Navigation Backdrop */}
      <div
        className={`md:hidden fixed inset-0 bg-coders-midnight/60 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed top-0 left-0 w-[70%] h-screen bg-coders-midnight/95 border-r border-white/10 transition-all duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} z-50 shadow-2xl`}>
        <div className='flex flex-col items-center justify-center h-full gap-8 text-xl font-heading'>
          <Link href='/' onClick={() => setIsMenuOpen(false)} className="text-pure-intent hover:text-quantum-cyan transition-colors">Home</Link>
          <a href='#About' onClick={e => handleScroll(e, 'About')} className="text-pure-intent hover:text-quantum-cyan transition-colors">About</a>
          <a href='#Events' onClick={e => handleScroll(e, 'Events')} className="text-pure-intent hover:text-quantum-cyan transition-colors">Events</a>
          <a href='#Community' onClick={() => setIsMenuOpen(false)} className="text-pure-intent hover:text-quantum-cyan transition-colors">Community</a>
          <a href='#Footer' onClick={() => setIsMenuOpen(false)} className="text-pure-intent hover:text-quantum-cyan transition-colors">Contact Us</a>
          <a href='https://chat.whatsapp.com/IZFWh2YhwNh1Hzl5GDci2F' className="text-green-400 font-bold flex items-center gap-2"><FaWhatsapp /> Join Group</a>
        </div>
      </div>
    </nav>
  )
}

export default Header