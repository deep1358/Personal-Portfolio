import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const glitchVariants = {
    animate: {
        x: [0, -3, 3, -2, 2, 0],
        transition: { duration: 0.4, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" },
    },
};

const PageNotFound = () => {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6">

            {/* Animated background lines */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-full h-px pointer-events-none"
                    style={{ top: `${18 + i * 16}%`, background: "rgba(255,255,255,0.015)" }}
                    initial={{ scaleX: 0, transformOrigin: i % 2 === 0 ? "left" : "right" }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: [0.76, 0, 0.24, 1] }}
                />
            ))}

            {/* Glitch line overlay */}
            <motion.div
                className="absolute pointer-events-none"
                style={{ width: "clamp(10rem, 32vw, 26rem)", height: "4px", background: "rgba(255,255,255,0.06)" }}
                animate={{ y: ["30vh", "50vh", "35vh", "45vh", "30vh"], opacity: [0, 1, 1, 0.5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
            />

            {/* Foreground content */}
            <motion.div
                className="relative z-10 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            >
                {/* Animated number */}
                <motion.div
                    className="flex items-center gap-3 mb-6 overflow-hidden"
                    variants={glitchVariants}
                    animate="animate"
                >
                    {"404".split("").map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ y: 80, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-white font-black"
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontSize: "clamp(3rem, 8vw, 6rem)",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Animated divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 1.0 }}
                    className="h-px bg-white/10 mb-6"
                    style={{ width: "48px", transformOrigin: "left" }}
                />

                {/* Text */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="text-white font-semibold mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1rem, 3vw, 1.4rem)" }}
                >
                    Page Not Found
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="text-[#999] text-sm max-w-xs leading-relaxed mb-8"
                >
                    The page you're looking for doesn't exist or has been moved.
                </motion.p>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.35 }}
                >
                    <Link to="/">
                        <button className="btn-secondary">Go Home</button>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default PageNotFound;
