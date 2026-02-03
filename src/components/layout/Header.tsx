'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X, Github, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Team', path: '/team' },
  { name: 'Community', path: '/community' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-4 left-0 right-0 z-50 mx-auto w-[95%] max-w-7xl rounded-full transition-all duration-300",
          isScrolled
            ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg shadow-purple-500/5 py-3 px-6"
            : "bg-transparent py-5 px-6"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/codersera-logo-original.jpg"
              alt="CodersEra Logo"
              width={60}
              height={60}
              className="h-10 w-auto object-contain rounded-full"
            />
            <span className="font-bold text-xl tracking-tight hidden sm:block">CodersEra</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/5 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    isActive ? "text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary/20 rounded-full border border-primary/30"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="https://github.com/codersera-adi" target="_blank">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10 text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="primary" size="sm" className="hidden lg:flex" onClick={() => window.open('https://chat.whatsapp.com/IZFWh2YhwNh1Hzl5GDci2F', '_blank')}>
              Join Community
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-3xl md:hidden overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                  <Image
                    src="/logo.png"
                    alt="CodersEra Logo"
                    width={120}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6 ">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between text-2xl font-medium border-b border-white/5 pb-4",
                        pathname === item.path ? "text-primary border-primary/50" : "text-gray-400"
                      )}
                    >
                      {item.name}
                      <ChevronRight className={cn("h-5 w-5", pathname === item.path ? "text-primary" : "text-gray-600")} />
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 flex flex-col gap-4"
                >
                  <Button
                    className="w-full justify-center py-6 text-lg"
                    variant="primary"
                    onClick={() => {
                      window.open('https://chat.whatsapp.com/IZFWh2YhwNh1Hzl5GDci2F', '_blank');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Join WhatsApp Community
                  </Button>

                  <div className="flex gap-4 justify-center mt-4">
                    {/* Socials placeholder */}
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400">
                      <Github className="h-5 w-5" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}