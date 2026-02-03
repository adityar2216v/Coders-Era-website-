'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedNumberProps {
    value: number;
    suffix?: string;
    duration?: number;
}

export const AnimatedNumber = ({ value, suffix = '', duration = 1.5 }: AnimatedNumberProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-10px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            let startTime: number;
            const startValue = 0;
            const endValue = value;

            const step = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

                // Ease out quart
                const easeProperties = 1 - Math.pow(1 - progress, 4);

                setDisplayValue(Math.floor(startValue + (endValue - startValue) * easeProperties));

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };

            window.requestAnimationFrame(step);
        }
    }, [isInView, value, duration]);

    return (
        <span ref={ref} className="tabular-nums">
            {displayValue.toLocaleString()}{suffix}
        </span>
    );
};
