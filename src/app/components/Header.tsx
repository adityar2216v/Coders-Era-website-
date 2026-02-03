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
      <div className="md:hidden fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 flex items-center justify-between px-4 h-14 shadow-sm">
        <span className="text-lg font-bold text-white tracking-wide">Coders ERA</span>
        <button 
          className='flex flex-col justify-center items-center w-10 h-10 focus:outline-none' 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center justify-center m-auto text-xl font-semibold gap-4 mb-10 bg-white/10 rounded-full p-2 px-10 fixed top-2 left-1/2 -translate-x-1/2 backdrop-blur-sm mt-5'>
        <Link href='/' className='hover:text-blue-300  transition-transform duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden'>Home</Link>
        <a href='#About' onClick={e => handleScroll(e, 'About')} className='hover:text-blue-300  transition-transform duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden'>About</a>
        <a href='#Events' onClick={e => handleScroll(e, 'Events')} className='hover:text-blue-300  transition-transform duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden'>Events</a>
        <a href='#Community' className='hover:text-blue-300  transition-transform duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden'>Community</a>
        <a href='#Footer' className='hover:text-blue-300  transition-transform duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden'>Contact Us</a>
        <a href='https://chat.whatsapp.com/IZFWh2YhwNh1Hzl5GDci2F' className='hover:text-blue-300  transition-transform duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden ml-4'><FaWhatsapp /></a>
      </div>

      {/* Mobile Navigation Backdrop */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/75 transition-all duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}>
        <div className='flex flex-col items-center justify-center h-full gap-8 text-2xl'>
          <Link href='/' onClick={() => setIsMenuOpen(false)}>Home</Link>
          <a href='#About' onClick={e => handleScroll(e, 'About')}>About</a>
          <a href='#Events' onClick={e => handleScroll(e, 'Events')}>Events</a>
          <a href='#Community' onClick={() => setIsMenuOpen(false)}>Community</a>
          <a href='#Footer' onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          <a href='https://chat.whatsapp.com/IZFWh2YhwNh1Hzl5GDci2F' >Whatsapp</a>

        </div>
      </div>
    </nav>
  )
}

export default Header