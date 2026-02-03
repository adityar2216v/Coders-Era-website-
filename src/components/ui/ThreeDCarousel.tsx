'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { cn } from "@/lib/utils";

interface ThreeDCarouselProps {
    images: string[];
    height?: string;
    autoScrollInterval?: number;
}

export const ThreeDCarousel = ({ images, height = "400px", autoScrollInterval = 2000 }: ThreeDCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-scroll logic
    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, autoScrollInterval);
            return () => clearInterval(interval);
        }
    }, [isHovered, images.length, autoScrollInterval]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const getCardStyle = (index: number) => {
        // Calculate standard circular distance
        const total = images.length;
        // Adjusted distance handles the "wrapping" logic correctly for minimal distance
        let dist = (index - currentIndex + total) % total;

        // Convert to signed distance (-2, -1, 0, 1, 2) roughly
        if (dist > total / 2) dist -= total;

        // Determine layout properties based on distance
        const isCenter = dist === 0;
        const isLeft = dist < 0;

        // Only show immediate neighbors and center for performance/cleanliness, or fade out others
        const absDist = Math.abs(dist);
        const isVisible = absDist <= 1 || (total >= 5 && absDist <= 2);

        if (!isVisible) return { display: 'none' };

        // 3D Transforms
        const scale = isCenter ? 1 : 0.85 - (absDist * 0.1);
        const rotateY = isCenter ? 0 : isLeft ? 25 : -25;
        const zIndex = 10 - absDist;
        const opacity = isCenter ? 1 : 0.5;

        // Special handling for absDist 2 (outer edges)
        const finalX = isCenter ? '0%' : (dist < 0 ? `${-50 - (absDist * 15)}%` : `${50 + (absDist * 15)}%`);

        return {
            x: finalX,
            scale: scale,
            rotateY: rotateY,
            zIndex: zIndex,
            opacity: opacity,
            filter: isCenter ? 'blur(0px)' : 'blur(2px)',
        };
    };

    return (
        <div
            className="relative w-full flex items-center justify-center overflow-visible perspective-1000 py-12 group/carousel"
            style={{ height, perspective: '1000px' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                <AnimatePresence mode='popLayout'>
                    {images.map((image, idx) => {
                        const style = getCardStyle(idx);
                        if (style.display === 'none') return null;

                        return (
                            <motion.div
                                key={`${idx}-${image}`} // Stable key
                                initial={false}
                                animate={{
                                    x: style.x,
                                    scale: style.scale,
                                    rotateY: style.rotateY,
                                    zIndex: style.zIndex,
                                    opacity: style.opacity,
                                    filter: style.filter,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut"
                                }}
                                className="absolute w-[70%] md:w-[60%] aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black cursor-pointer"
                                onClick={() => setCurrentIndex(idx)}
                            >
                                <Image
                                    src={image}
                                    alt={`Slide ${idx}`}
                                    fill
                                    className="object-cover"
                                />
                                {/* Glossy Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute left-4 md:left-10 z-20 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-black/80 transition-all hover:scale-110 backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 duration-300"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={handleNext}
                className="absolute right-4 md:right-10 z-20 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-black/80 transition-all hover:scale-110 backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 duration-300"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            currentIndex === idx ? "bg-primary w-6" : "bg-white/30"
                        )}
                    />
                ))}
            </div>
        </div>
    );
};
