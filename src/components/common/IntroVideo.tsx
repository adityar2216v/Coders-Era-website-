'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroVideoProps {
    onComplete: () => void;
}

export function IntroVideo({ onComplete }: IntroVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const startPlayback = async () => {
            try {
                // 1. Try playing unmuted (ideal)
                await video.play();
            } catch (err) {
                console.log("Autoplay blocked, falling back to muted:", err);
                // 2. Play muted (guaranteed to work)
                video.muted = true;
                try {
                    await video.play();
                } catch (mutedErr) {
                    console.error("Muted play failed:", mutedErr);
                }
            }
        };

        startPlayback();

        // 3. Listener to unmute on first interaction
        const unmuteOnInteraction = () => {
            if (video && !video.ended) {
                video.muted = false;
            }
            // Cleanup listeners immediately after first trigger
            window.removeEventListener('click', unmuteOnInteraction);
            window.removeEventListener('keydown', unmuteOnInteraction);
            window.removeEventListener('touchstart', unmuteOnInteraction);
        };

        window.addEventListener('click', unmuteOnInteraction);
        window.addEventListener('keydown', unmuteOnInteraction);
        window.addEventListener('touchstart', unmuteOnInteraction);

        return () => {
            window.removeEventListener('click', unmuteOnInteraction);
            window.removeEventListener('keydown', unmuteOnInteraction);
            window.removeEventListener('touchstart', unmuteOnInteraction);
        };
    }, []);

    // Prevent scrolling while playing
    useEffect(() => {
        if (isPlaying) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isPlaying]);

    const handleVideoEnd = () => {
        setIsPlaying(false);
        setTimeout(() => {
            onComplete();
        }, 500);
    };

    return (
        <AnimatePresence>
            {isPlaying && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <video
                        ref={videoRef}
                        src="/Cinematic_Tech_Logo_Intro_Generation.mp4"
                        className="w-full h-full object-contain lg:object-cover"
                        // Removed autoPlay to manual control
                        playsInline
                        onEnded={handleVideoEnd}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
