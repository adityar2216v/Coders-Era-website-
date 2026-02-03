'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const LogoTicker = () => {
    return (
        <div className="py-12 bg-black/20 border-y border-white/5 overflow-hidden">
            <div className="flex overflow-hidden relative w-full select-none">
                <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{
                        x: [0, -1000],
                    }}
                    transition={{
                        x: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }
                    }}
                >
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24">
                            <span className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-white to-gray-400">
                                Trusted by thousands of tech enthusiasts, multiple colleges and communities
                            </span>
                            <span className="text-purple-500 text-2xl">✦</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
