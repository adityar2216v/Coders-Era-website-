'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ThreeDCarouselProps {
    images: string[];
    height?: string;
}

export const ThreeDCarousel = ({ images, height = "400px" }: ThreeDCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const rotateLeft = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const rotateRight = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.5,
            zIndex: 0,
            rotateY: direction > 0 ? 45 : -45,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.5,
            },
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.5,
            rotateY: direction < 0 ? 45 : -45,
            transition: {
                duration: 0.5,
            },
        }),
    };

    return (
        <div className="relative w-full perspective-1000 flex items-center justify-center overflow-hidden py-12" style={{ height }}>
            <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute w-[80%] md:w-[60%] lg:w-[40%] aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black"
                    >
                        <img
                            src={images[currentIndex]}
                            alt={`Slide ${currentIndex}`}
                            className="w-full h-full object-cover"
                        />
                        {/* Glossy Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={rotateLeft}
                className="absolute left-4 md:left-10 z-20 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-black/80 transition-all hover:scale-110 backdrop-blur-md"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={rotateRight}
                className="absolute right-4 md:right-10 z-20 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-black/80 transition-all hover:scale-110 backdrop-blur-md"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? "bg-primary w-6" : "bg-white/30"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};
