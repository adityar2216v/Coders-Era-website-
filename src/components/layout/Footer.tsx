'use client';
import { BsTwitterX, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <BsTwitterX />, href: "https://twitter.com", label: "Twitter" },
    { icon: <BsGithub />, href: "https://github.com", label: "GitHub" },
    { icon: <BsLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <BsInstagram />, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="relative z-10 bg-black pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 blur-[1px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/logo.png"
                alt="CodersEra Logo"
                width={150}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed text-lg font-light">
              Where developers become innovators. Join the community building the future of tech, one line of code at a time.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 border border-white/5"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-6">Platform</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/events" className="text-gray-400 hover:text-primary transition-colors">Events</Link></li>
                <li><Link href="/team" className="text-gray-400 hover:text-primary transition-colors">Team</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Resources</h4>
              <ul className="space-y-4">
                <li><Link href="/community" className="text-gray-400 hover:text-primary transition-colors">Community</Link></li>
                <li><Link href="/blog" className="text-gray-500 cursor-not-allowed hover:text-gray-500">Blog <span className="text-xs bg-white/10 px-2 py-0.5 rounded ml-2">Soon</span></Link></li>
                <li><Link href="/guides" className="text-gray-500 cursor-not-allowed hover:text-gray-500">Guides <span className="text-xs bg-white/10 px-2 py-0.5 rounded ml-2">Soon</span></Link></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
                <Button variant="secondary" className="w-full">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} CodersEra. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}