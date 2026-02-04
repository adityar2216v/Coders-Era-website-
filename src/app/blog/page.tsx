'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FloatingTechShape } from '@/components/ui/FloatingTechShape';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-[#0B1220] flex items-center justify-center relative overflow-hidden ethnic-pattern">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                <FloatingTechShape />
            </div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#22D3EE]/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FB7185]/20 rounded-full blur-[120px] animate-pulse animation-delay-2000" />

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="glass-panel p-12 rounded-3xl border border-white/10 max-w-2xl mx-auto backdrop-blur-xl"
                >
                    <div className="mb-6 flex justify-center">
                        <div className="p-4 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/30">
                            <span className="text-4xl">✍️</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white font-heading">
                        Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#FB7185]">Coming Soon</span>
                    </h1>
                    <p className="text-lg text-[#94A3B8] mb-8 leading-relaxed">
                        We are crafting some amazing content for you. Stay tuned for expert insights, tutorials, and community stories.
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-[#0B1220] bg-[#22D3EE] rounded-full hover:bg-[#FB7185] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#FB7185]/25 hover:-translate-y-1"
                    >
                        Return Home
                    </Link>
                </motion.div>
            </Container>
        </div>
    );
}
