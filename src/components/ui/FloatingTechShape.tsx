'use client';

import { motion } from 'framer-motion';

export const FloatingTechShape = () => {
    return (
        <div className="w-[300px] h-[300px] relative perspective-[1000px]" style={{ perspective: '1000px' }}>
            <motion.div
                className="w-full h-full relative"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                {/* Outer Cube Faces */}
                {/* Front */}
                <div className="absolute inset-0 border border-[#22D3EE]/40 bg-[#22D3EE]/5 backdrop-blur-[2px] shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    style={{ transform: 'translateZ(150px)' }} />
                {/* Back */}
                <div className="absolute inset-0 border border-[#22D3EE]/40 bg-[#22D3EE]/5 backdrop-blur-[2px] shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    style={{ transform: 'translateZ(-150px) rotateY(180deg)' }} />
                {/* Right */}
                <div className="absolute inset-0 border border-[#22D3EE]/40 bg-[#22D3EE]/5 backdrop-blur-[2px] shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    style={{ transform: 'rotateY(90deg) translateZ(150px)' }} />
                {/* Left */}
                <div className="absolute inset-0 border border-[#22D3EE]/40 bg-[#22D3EE]/5 backdrop-blur-[2px] shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    style={{ transform: 'rotateY(-90deg) translateZ(150px)' }} />
                {/* Top */}
                <div className="absolute inset-0 border border-[#22D3EE]/40 bg-[#22D3EE]/5 backdrop-blur-[2px] shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    style={{ transform: 'rotateX(90deg) translateZ(150px)' }} />
                {/* Bottom */}
                <div className="absolute inset-0 border border-[#22D3EE]/40 bg-[#22D3EE]/5 backdrop-blur-[2px] shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    style={{ transform: 'rotateX(-90deg) translateZ(150px)' }} />

                {/* Inner Core (Different Rotation) */}
                <div className="absolute top-1/2 left-1/2 w-[150px] h-[150px] -ml-[75px] -mt-[75px]" style={{ transformStyle: 'preserve-3d' }}>
                    <motion.div
                        className="w-full h-full relative"
                        style={{ transformStyle: 'preserve-3d' }}
                        animate={{ rotateX: [360, 0], rotateY: [360, 0] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                        {/* Inner Cube Faces */}
                        <div className="absolute inset-0 border border-[#FB7185]/60 bg-[#FB7185]/20 shadow-[0_0_20px_rgba(251,113,133,0.4)]"
                            style={{ transform: 'translateZ(75px)' }} >
                            <div className="absolute inset-0 flex items-center justify-center text-[#FB7185] font-mono text-xs opacity-50">CODE</div>
                        </div>
                        <div className="absolute inset-0 border border-[#FB7185]/60 bg-[#FB7185]/20 shadow-[0_0_20px_rgba(251,113,133,0.4)]"
                            style={{ transform: 'translateZ(-75px) rotateY(180deg)' }} />
                        <div className="absolute inset-0 border border-[#FB7185]/60 bg-[#FB7185]/20 shadow-[0_0_20px_rgba(251,113,133,0.4)]"
                            style={{ transform: 'rotateY(90deg) translateZ(75px)' }} />
                        <div className="absolute inset-0 border border-[#FB7185]/60 bg-[#FB7185]/20 shadow-[0_0_20px_rgba(251,113,133,0.4)]"
                            style={{ transform: 'rotateY(-90deg) translateZ(75px)' }} />
                        <div className="absolute inset-0 border border-[#FB7185]/60 bg-[#FB7185]/20 shadow-[0_0_20px_rgba(251,113,133,0.4)]"
                            style={{ transform: 'rotateX(90deg) translateZ(75px)' }} />
                        <div className="absolute inset-0 border border-[#FB7185]/60 bg-[#FB7185]/20 shadow-[0_0_20px_rgba(251,113,133,0.4)]"
                            style={{ transform: 'rotateX(-90deg) translateZ(75px)' }} />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};
