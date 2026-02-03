'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
    { name: 'Google', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png' },
    { name: 'Microsoft', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png' },
    { name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' },
    { name: 'Meta', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png' },
    { name: 'Vercel', src: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png' },
    { name: 'OpenAI', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/2560px-OpenAI_Logo.svg.png' },
];

export const LogoTicker = () => {
    // Duplicate logos for seamless looping
    const repeatedLogos = [...logos, ...logos, ...logos];

    return (
        <div className="py-12 bg-black/20 border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 mb-6 text-center">
                <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">Trusted by developers from</p>
            </div>
            <div className="flex overflow-hidden relative w-full">
                <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

                <motion.div
                    className="flex gap-16 md:gap-24 items-center pr-16 md:pr-24"
                    animate={{
                        x: [0, -100 * logos.length],
                    }}
                    transition={{
                        x: {
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }
                    }}
                >
                    {repeatedLogos.map((logo, index) => (
                        <div key={index} className="relative w-32 h-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0">
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
