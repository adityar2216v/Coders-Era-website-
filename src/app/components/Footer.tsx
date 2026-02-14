import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ContactQr from "../../../public/CodersEraQr.jpg"
import { Instagram, Linkedin, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <div className='bg-coders-midnight/90 backdrop-blur-sm border-t border-white/5' id='Footer'>
      <section className="text-muted-foreground py-10 px-2 sm:px-4 md:px-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-quantum-cyan text-center mb-8 sm:mb-10 md:mb-12 font-heading">Contact Us</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Contact Info */}
          <div className="relative bg-gradient-to-br from-era-blue to-coders-midnight rounded-xl p-4 sm:p-8 shadow-lg border border-white/5">
            <h3 className="text-2xl font-semibold text-pure-intent mb-6 font-heading">Get in Touch</h3>
            <div className="mb-4 flex items-start gap-3">
              <span className="text-signal-coral"><MapPin className="w-6 h-6" /></span>
              <div>
                <div className="font-semibold text-pure-intent">Our Location</div>
                <div>Noida Institute of Engineering and Technology<br />Greater Noida, Uttar Pradesh 201310</div>
              </div>
            </div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-signal-coral"><Mail className="w-6 h-6" /></span>
              <div>
                <div className="font-semibold text-pure-intent">Email Us</div>
                <div>coders.eraa@gmail.com</div>
              </div>
            </div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-signal-coral"><Phone className="w-6 h-6" /></span>
              <div>
                <div className="font-semibold text-pure-intent">Call Us</div>
                <div>+91 917806003<br />(President)</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="font-semibold text-pure-intent mb-2">Follow Us</div>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/aditya-raj-srivastava-401b75328?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLSSREU5MSEWjcXLkAkYjSg%3D%3D" className="text-quantum-cyan hover:text-signal-coral transition-colors duration-300" aria-label="LinkedIn"><Linkedin className="w-6 h-6" /></a>
                <a href="https://www.instagram.com/coders_era.community?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-quantum-cyan hover:text-signal-coral transition-colors duration-300" aria-label="Instagram"><Instagram className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
          {/* Map Placeholder */}
          <div className="flex justify-center items-center p-1 bg-gradient-to-br from-quantum-cyan to-signal-coral rounded-2xl">
            <iframe className='rounded-xl w-full h-[300px] md:h-[450px] bg-era-blue' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28060.32888310369!2d77.47016222292659!3d28.463246480579468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e055d148a1%3A0x9f5207f7f0bc8f63!2sNoida%20Institute%20of%20Engineering%20and%20Technology%20(NIET%2C%20Greater%20Noida)!5e0!3m2!1sen!2sin!4v1750190449103!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      <footer className="bg-coders-midnight text-pure-intent pt-10 pb-4 px-2 sm:px-4 md:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-quantum-cyan mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/" className="hover:text-quantum-cyan transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-quantum-cyan transition">About Us</Link></li>
              <li><Link href="/about" className="hover:text-quantum-cyan transition">Events</Link></li>
              <li><Link href="/about" className="hover:text-quantum-cyan transition">Our Team</Link></li>
            </ul>
            {/* Contact Info */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-quantum-cyan mb-4 font-heading">Contact Info</h3>
              <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-signal-coral" />
                <span>coders.eraa@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-signal-coral" />
                <span>+91 91708 06003 (President)</span>
              </div>
            </div>
          </div>
          <a href='https://chat.whatsapp.com/IZFWh2YhwNh1Hzl5GDci2F' className='relative bg-gradient-to-br from-era-blue to-coders-midnight border border-white/10 items-center m-auto flex flex-col text-center p-4 rounded-xl shadow-lg hover:shadow-quantum-cyan/20 transition-all group'>
            <div className="bg-white p-2 rounded-lg mb-3">
              <Image src={ContactQr} height={100} width={100} alt='Contact QR' className='size-48 object-contain' />
            </div>
            <p className="text-xl text-pure-intent font-bold group-hover:text-quantum-cyan transition-colors">Join Whatsapp Group</p>
          </a>
          {/* Join Our Community */}
          <div>
            <h3 className="text-xl font-semibold text-quantum-cyan mb-4 font-heading">Join Our Community</h3>
            <p className="mb-4 text-muted-foreground">Be part of our growing tech community!</p>
            <div className='flex flex-col gap-4'>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSdIEVan1Obj0aM2y1sf6obF5lTYxjbHlvyC8nyDQj7w_uaxfQ/viewform?pli=1' className="bg-gradient-to-r from-quantum-cyan to-signal-coral text-coders-midnight font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center">Join Now</a>
            </div>
          </div>
          {/* Our Team Card */}
          <div>
            <h3 className="text-xl font-semibold text-quantum-cyan mb-4 font-heading">Our Team</h3>
            <div className="relative bg-era-blue/50 border border-white/5 rounded-xl p-6 flex flex-col items-center shadow-lg backdrop-blur-sm">
              <h4 className="text-lg font-bold text-pure-intent mb-2">Meet Our Team</h4>
              <p className="mb-4 text-center text-muted-foreground text-sm">Learn more about the brilliant minds behind Coders ERA.</p>
              <a href='https://coder-era-team.vercel.app/' className="bg-white/10 hover:bg-white/20 text-pure-intent font-semibold px-6 py-2 rounded-lg transition-all border border-white/10">View Team</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 mt-10 pt-6 text-center text-muted-foreground text-sm">
          © 2025 Coders ERA. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer