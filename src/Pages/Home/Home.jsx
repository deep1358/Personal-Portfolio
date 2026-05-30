import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${(i * 5.56 + 4) % 100}%`,
    top:  `${(i * 13.7 + 9) % 100}%`,
    size: (i % 3) + 1,
    duration: 9 + (i % 6) * 1.5,
    delay: -(i * 0.85) % 6,
    yRange: 14 + (i % 4) * 9,
}));

const Home = () => {
    const spotlightRef = useRef(null);
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const springX = useSpring(rawX, { stiffness: 25, damping: 30 });
    const springY = useSpring(rawY, { stiffness: 25, damping: 30 });

    const c1x = useTransform(springX, [-1, 1], [-18, 18]);
    const c1y = useTransform(springY, [-1, 1], [-18, 18]);
    const c2x = useTransform(springX, [-1, 1], [14, -14]);
    const c2y = useTransform(springY, [-1, 1], [14, -14]);
    const c3x = useTransform(springX, [-1, 1], [-26, 26]);
    const c3y = useTransform(springY, [-1, 1], [-8,   8]);

    useEffect(() => {
        const onMove = (e) => {
            rawX.set((e.clientX / window.innerWidth  - 0.5) * 2);
            rawY.set((e.clientY / window.innerHeight - 0.5) * 2);
            if (spotlightRef.current) {
                spotlightRef.current.style.background =
                    `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(255,255,255,0.03), transparent 70%)`;
            }
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, [rawX, rawY]);

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6">

            {/* Cursor spotlight */}
            <div ref={spotlightRef} className="pointer-events-none fixed inset-0 z-0" />

            {/* Floating particles */}
            {PARTICLES.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute pointer-events-none rounded-full"
                    style={{
                        left: p.left,
                        top: p.top,
                        width: p.size,
                        height: p.size,
                        background: "rgba(255,255,255,0.35)",
                    }}
                    animate={{ y: [0, -p.yRange, 0], opacity: [0.06, 0.32, 0.06] }}
                    transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}

            {/* Background geometry — mouse parallax */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{ border: "1px solid rgba(255,255,255,0.04)", top: "-180px", left: "-180px", x: c1x, y: c1y }}
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                className="absolute w-[420px] h-[420px] rounded-full pointer-events-none"
                style={{ border: "1px solid rgba(255,255,255,0.04)", bottom: "-120px", right: "-120px", x: c2x, y: c2y }}
            />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute w-[220px] h-[220px] pointer-events-none"
                style={{ border: "1px solid rgba(255,255,255,0.03)", top: "20%", right: "15%", x: c3x, y: c3y }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">

                {/* Heading — clip-path left-to-right reveal */}
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        animate={{ clipPath: "inset(0 0% 0 0)" }}
                        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                        className="text-white"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(2.6rem, 7vw, 6.5rem)",
                            fontWeight: 700,
                            fontStyle: "italic",
                            lineHeight: 1.05,
                            letterSpacing: "-0.01em",
                        }}
                    >
                        I'm Deep Shah
                    </motion.h1>
                </div>

                {/* Subtitle */}
                <div className="overflow-hidden mt-4">
                    <motion.p
                        initial={{ y: 60 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
                        className="text-[#888] tracking-[0.3em] uppercase text-sm md:text-base font-light"
                    >
                        Senior Frontend Engineer
                    </motion.p>
                </div>

                {/* Animated divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 1.0 }}
                    className="h-px bg-white/20 my-8"
                    style={{ width: "60px", transformOrigin: "left" }}
                />

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="text-[#999] text-base md:text-lg max-w-sm leading-relaxed"
                >
                    Passion for programming, problem solving and creative solutions.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className="flex flex-wrap items-center justify-center gap-4 mt-10"
                >
                    <Link to="/contact">
                        <button className="btn-primary">Contact Me</button>
                    </Link>
                    <a
                        href="https://drive.google.com/drive/u/0/folders/1Y5rYSLTKIJ2YMcskLGkqNQZCulog7T8a"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="btn-secondary">See Resume</button>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
