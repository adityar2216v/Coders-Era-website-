'use client';

import { memo, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const images = [
    '/codesphere/c1.jpg',
    '/codesphere/c2.jpg',
    '/codesphere/c3.jpg',
    '/codesphere/c4.jpg',
    '/codesphere/c5.jpg',
    '/codesphere/c6.jpg',
    '/codesphere/c7.jpg',
    '/codesphere/c8.JPG',
    '/codesphere/c9.JPG',
    '/codesphere/c10.JPG',
];

export const ThreeDCarousel = () => {
    const [activeImg, setActiveImg] = useState(0);
    const x = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 30 });

    // Calculate specific positions for a 3D carousel effect
    const calculateProps = (index: number) => {
        const offset = index - activeImg;
        const absOffset = Math.abs(offset);

        // Limits for visibility
        if (absOffset > 2) return { opacity: 0, zIndex: 0, scale: 0, x: 0 };

        return {
            opacity: absOffset === 0 ? 1 : absOffset === 1 ? 0.6 : 0.3,
            zIndex: 3 - absOffset,
            scale: absOffset === 0 ? 1 : absOffset === 1 ? 0.8 : 0.6,
            x: offset * 150, // pixel distance between cards
            rotateY: offset * -15 // rotate cards slightly
        };
    };

    const handleNext = () => {
        setActiveImg((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setActiveImg((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative h-[400px] w-full flex items-center justify-center perspective-1000 overflow-hidden py-20">
            <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
                {images.map((src, index) => {
                    const props = calculateProps(index);

                    // We only render active and adjacent images for strict 3D effect control manually
                    // or use AnimatePresence. Here we map all but animate strictly.

                    // Actually, a simpler way for a "smooth scroll" 3D carousel is standard absolute positioning with framer motion

                    // Let's use a simpler "Coverflow" style logic
                    return (
                        <motion.div
                            key={index}
                            className="absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-black"
                            initial={false}
                            animate={{
                                opacity: index === activeImg ? 1 : Math.abs(index - activeImg) <= 2 ? 0.7 - Math.abs(index - activeImg) * 0.2 : 0,
                                x: (index - activeImg) * 200, // horizontal spacing
                                z: Math.abs(index - activeImg) * -100, // depth
                                scale: 1 - Math.abs(index - activeImg) * 0.1, // scaling
                                rotateY: (index - activeImg) * -15,
                                pointerEvents: index === activeImg ? 'auto' : 'none'
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            style={{
                                zIndex: 100 - Math.abs(index - activeImg),
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            <img src={src} alt="Event" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        </motion.div>
                    );
                })}
            </div>

            {/* Controls */}
            <div className="absolute bottom-4 flex gap-4 z-50">
                <button onClick={handlePrev} className="p-3 rounded-full bg-black/50 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all">←</button>
                <button onClick={handleNext} className="p-3 rounded-full bg-black/50 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all">→</button>
            </div>

            {/* Overlay Left/Right for smooth scroll trigger potentially, but buttons are safer for exact navigation */}
        </div>
    );
};
