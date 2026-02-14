'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const AnnouncementBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-[60] bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20 bg-center" />

                <div className="container mx-auto px-4 py-3 flex items-center justify-center relative z-10 text-sm md:text-base font-medium">
                    <span className="bg-white/10 px-2 py-0.5 rounded text-xs uppercase tracking-wider mr-3 border border-white/20 hidden sm:inline-block">New</span>
                    <span className="mr-2">🚀 CodersEra Hackathon 2026 Registrations are open!</span>
                    <Link href="/events" className="underline underline-offset-4 hover:text-blue-300 transition-colors flex items-center group">
                        Register Now <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute right-4 p-1 hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Dismiss announcement"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
