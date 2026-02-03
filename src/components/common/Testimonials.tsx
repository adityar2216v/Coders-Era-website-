'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import Image from 'next/image';

const testimonials = [
    {
        content: "CodersEra has completely transformed how I approach software development. The community is incredibly supportive and the resources are top-notch.",
        author: "Sarah Chen",
        role: "Full Stack Developer",
        img: "/photos/logo.jpg" // Placeholder or use a generic avatar
    },
    {
        content: "The best place to network with like-minded developers. I found my co-founder here!",
        author: "Alex Rivera",
        role: "Startup Founder",
        img: "/photos/logo.jpg"
    },
    {
        content: "Visuals and performance of this platform are just next level. It really sets the standard for what a modern dev community should be.",
        author: "Jordan Smith",
        role: "UI/UX Designer",
        img: "/photos/logo.jpg"
    }
];

export const Testimonials = () => {
    return (
        <Section className="bg-black/20 border-y border-white/5 py-24">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">What people are <span className="text-gradient-primary">saying</span></h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Don't just take our word for it. Hear from the community.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <Card key={i} hoverEffect className="p-8 h-full flex flex-col justify-between">
                            <div className="mb-6">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <span key={star} className="text-yellow-500 text-lg">★</span>
                                ))}
                            </div>
                            <p className="text-gray-300 text-lg mb-8 italic">"{item.content}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 relative">
                                    <Image src={item.img} alt={item.author} fill className="object-cover" />
                                </div>
                                <div>
                                    <div className="font-bold text-white">{item.author}</div>
                                    <div className="text-sm text-primary">{item.role}</div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
