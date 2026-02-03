'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { TypewriterEffect } from '@/components/ui/TypewriterEffect';
import { ThreeDCarousel } from '@/components/ui/ThreeDCarousel';

// Sample data - In a real app, this would likely come from shared constants or a CMS
const galleryItems = [
    // Codesphere
    {
        id: 1,
        category: 'codesphere',
        image: '/photos/codesphere.jpeg',
        title: 'Codesphere Launch',
        description: 'The beginning of our journey.'
    },
    // Code Cascade
    {
        id: 2,
        category: 'code-cascade',
        image: '/photos/hackathon.jpeg',
        title: 'The Code Cascade',
        description: 'Coding marathon and collaboration.'
    },
    // Autonomous Minds
    {
        id: 3,
        category: 'autonomous-minds',
        image: '/photos/autonomous Minds Launchpad.jpg',
        title: 'Autonomous Minds',
        description: 'Exploring the frontiers of AI.'
    },
    // Synapse (Upcoming/Teaser)
    {
        id: 4,
        category: 'synapse-syntax',
        image: '/photos/Synapse & Syntax.jpg',
        title: 'Synapse & Syntax',
        description: 'Our latest specialized event.'
    },
    // Add some community photos as general gallery items
    { id: 5, category: 'community', image: '/photos/AMIT.jpg', title: 'Community Moments', description: 'Builders at work.' },
    { id: 6, category: 'community', image: '/photos/ANSHIKA.jpg', title: 'Team Spirit', description: 'Collaborative vibes.' },
    { id: 7, category: 'community', image: '/photos/hardy.png', title: 'Hardy', description: 'Mascot energy.' },
    { id: 8, category: 'community', image: '/photos/logo.jpg', title: 'CodersEra', description: 'Our Identity.' },
    { id: 9, category: 'community', image: '/photos/aditya.jpg', title: 'Leadership', description: 'Leading the way.' },
];

const categories = [
    { id: 'all', label: 'All Moments' },
    { id: 'codesphere', label: 'Codesphere' },
    { id: 'code-cascade', label: 'Code Cascade' },
    { id: 'autonomous-minds', label: 'Autonomous Minds' },
    { id: 'community', label: 'Community' },
];

const codesphereWords = [
    { text: "Event", className: "text-white" },
    { text: "Gallery", className: "text-primary dark:text-primary" },
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

    const filteredItems = activeCategory === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <Section className="pt-32 pb-12 md:pt-48 md:pb-24">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] right-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-blob" />
                </div>
                <Container className="relative z-10 text-center">
                    {/* Typewriter Heading */}
                    <div className="mb-8 flex justify-center">
                        <TypewriterEffect words={codesphereWords} />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Relive the most memorable moments from our past hackathons, workshops, and summits.
                    </motion.p>
                </Container>
            </Section>

            {/* Codesphere Section - 1st Event */}
            <Section className="py-12 bg-white/[0.02] border-y border-white/5">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="mb-8 flex items-center gap-4"
                    >
                        <div className="h-12 w-1 bg-primary rounded-full" />
                        <div>
                            <span className="text-primary text-sm font-bold tracking-wider uppercase block mb-1">1st Event</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white">Codesphere <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Chronicles</span></h2>
                        </div>
                    </motion.div>

                    <ThreeDCarousel
                        images={[
                            '/codesphere/c1.jpg',
                            '/codesphere/c2.jpg',
                            '/codesphere/c3.jpg',
                            '/codesphere/c4.jpg',
                            '/codesphere/c5.jpg',
                            '/codesphere/c6.jpg',
                            '/codesphere/c7.jpg',
                            '/codesphere/c8.JPG',
                        ]}
                        height="500px"
                    />
                </Container>
            </Section>

            {/* Code Cascade Section - 2nd Event */}
            <Section className="py-24">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="mb-8 flex items-center justify-end gap-4 text-right"
                    >
                        <div>
                            <span className="text-secondary text-sm font-bold tracking-wider uppercase block mb-1">2nd Event</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white">The Code <span className="text-secondary">Cascade</span></h2>
                        </div>
                        <div className="h-12 w-1 bg-secondary rounded-full" />
                    </motion.div>

                    <ThreeDCarousel
                        images={[
                            '/code cascade.png',
                            '/photos/hackathon.jpeg',
                            '/photos/web.jpeg',
                            '/photos/app.jpeg',
                            '/photos/cloud.jpeg'
                        ]}
                        height="500px"
                    />
                </Container>
            </Section>

            {/* Autonomous Minds Section - 3rd Event */}
            <Section className="py-12 bg-white/[0.02] border-y border-white/5">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="mb-8 flex items-center gap-4"
                    >
                        <div className="h-12 w-1 bg-purple-500 rounded-full" />
                        <div>
                            <span className="text-purple-500 text-sm font-bold tracking-wider uppercase block mb-1">3rd Event</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white"><span className="text-purple-500">Autonomous</span> Minds</h2>
                        </div>
                    </motion.div>

                    <ThreeDCarousel
                        images={[
                            '/autonomous minds/a1.jpg',
                            '/autonomous minds/a2.jpg',
                            '/autonomous minds/a3.jpg',
                            '/autonomous minds/a4.jpg',
                            '/autonomous minds/a5.jpg',
                            '/autonomous minds/a6.jpg',
                        ]}
                        height="500px"
                    />
                </Container>
            </Section>

            {/* Gallery Filter */}
            <Section className="pb-8 pt-12 border-t border-white/5">
                <Container>
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">All <span className="text-gradient-purple">Moments</span></h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Gallery Grid */}
            <Section className="pb-32">
                <Container>
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredItems.map((item) => (
                                <motion.div
                                    layout
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                    className="cursor-pointer group"
                                    onClick={() => setSelectedImage(item)}
                                >
                                    <Card className="h-full bg-black/40 border-white/10 overflow-hidden relative aspect-[4/3] group-hover:border-primary/50 transition-colors duration-500">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                                            <h3 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                                {item.description}
                                            </p>
                                            <span className="mt-4 text-primary text-sm font-bold uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                                View Fullsize
                                            </span>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </Container>
            </Section>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden bg-black border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                            >
                                ✕
                            </button>
                            <div className="flex flex-col md:flex-row h-full">
                                <div className="w-full md:w-3/4 h-[50vh] md:h-[80vh] bg-black/50 relative">
                                    <img
                                        src={selectedImage.image}
                                        alt={selectedImage.title}
                                        className="absolute inset-0 w-full h-full object-contain"
                                    />
                                </div>
                                <div className="w-full md:w-1/4 p-6 md:p-8 border-t md:border-t-0 md:border-l border-white/10 bg-white/[0.02]">
                                    <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                                    <div className="inline-block px-2 py-1 rounded bg-primary/20 text-primary text-xs font-semibold uppercase mb-4">
                                        {categories.find(c => c.id === selectedImage.category)?.label}
                                    </div>
                                    <p className="text-gray-400">{selectedImage.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
