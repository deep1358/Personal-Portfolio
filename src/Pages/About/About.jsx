import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
const yearsExp = Math.floor((new Date() - new Date("2022-01-01")) / (1000 * 60 * 60 * 24 * 365.25));

const stats = [
    { value: yearsExp, suffix: "+", label: "years experience" },
    { value: 2,        suffix: "",  label: "companies" },
    { value: 8,        suffix: "",  label: "projects shipped" },
    { value: 4,        suffix: "",  label: "awards" },
];

const bullets = [
    "Senior Frontend Engineer at Axis Securities — building a high-traffic Indian stock market platform.",
    "3+ years at Crest Data shipping Splunk enterprise apps with React, Python & GitLab CI.",
    "Reduced TechOps validation time by 80%+ through automated health assessments.",
    "Passionate about performance — PWA caching, Web Workers, Core Web Vitals optimization.",
    "Exploring AI engineering — LLMs and Agentic AI are my current focus.",
    "Competitive coder on LeetCode. Foodie. Soccer & cricket on weekends.",
];

const featuredWork = [
    {
        company: "Axis Securities",
        tag: "Fintech · 2025–Present",
        title: "Indian Stock Market Platform",
        description:
            "Led dashboard UI redesign (+15% conversions), built real-time WebSocket data streaming, PWA offline caching cutting load times by ~40%, and a Basket Order workflow for multi-stock transactions.",
        tech: ["React.js", "Redux", "TypeScript", "WebSockets", "Web Workers", "PWA", "Material UI", "CleverTap"],
    },
    {
        company: "Crest Data",
        tag: "Security · 2022–2025",
        title: "Splunk UDF Migration & Automation",
        description:
            "Migrated SimpleXML pages to a React Unified Dashboard framework. Automated release health assessments with Python & GitLab CI, reducing TechOps validation time by over 80%. Achieved 75% e2e test coverage with WebdriverIO.",
        tech: ["React.js", "Python", "Shell Script", "GitLab CICD", "WebdriverIO", "Webpack", "Docker"],
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: 28 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


function AnimatedCounter({ value, suffix }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const motionVal = useMotionValue(0);
    const spring = useSpring(motionVal, { stiffness: 60, damping: 18 });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (isInView) motionVal.set(value);
    }, [isInView, value, motionVal]);

    useEffect(() => {
        return spring.on("change", (v) => setDisplay(Math.round(v)));
    }, [spring]);

    return (
        <span
            ref={ref}
            className="text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800 }}
        >
            {display}{suffix}
        </span>
    );
}

function ScrollDownHint() {
    const [scrolled, setScrolled] = useState(false);
    const [appeared, setAppeared] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setAppeared(true), 1400);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <motion.div
            animate={{ opacity: appeared && !scrolled ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none z-10"
        >
            <span className="text-[#555] text-[9px] font-mono uppercase tracking-widest">scroll</span>
            <motion.svg
                width="12" height="7" viewBox="0 0 12 7" fill="none"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
                <path d="M1 1l5 5 5-5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
        </motion.div>
    );
}

const About = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 md:px-12">
            <ScrollDownHint />
            <div className="w-full max-w-5xl">

                {/* Section heading */}
                <div className="overflow-hidden mb-10 text-center">
                    <motion.h2
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                        className="text-white font-bold"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                    >
                        Let me introduce myself
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="h-px bg-white/20 mx-auto mt-4"
                        style={{ width: "48px", transformOrigin: "left" }}
                    />
                </div>

                {/* Stats — 2×2 grid on mobile, single row on desktop */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-0 mb-14"
                >
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className={`flex flex-col items-center text-center px-4 md:px-8 ${
                                i < stats.length - 1 ? "md:border-r md:border-[#222]" : ""
                            }`}
                        >
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            <span className="text-[#888] text-xs md:text-sm mt-1 tracking-wide">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">

                    {/* Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex items-center justify-center"
                    >
                        <img
                            src="./image/about.svg"
                            alt="about"
                            className="w-full max-w-sm opacity-80 grayscale"
                        />
                    </motion.div>

                    {/* Text card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="rounded-xl p-6 sm:p-8"
                        style={{ background: "#111", border: "1px solid #222" }}
                    >
                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="space-y-5 list-none"
                        >
                            {bullets.map((text, i) => (
                                <motion.li key={i} variants={itemVariants} className="flex items-start gap-3">
                                    <span className="mt-2 w-1 h-1 rounded-full bg-white/40 shrink-0" />
                                    <p className="text-[#aaa] text-sm md:text-base leading-relaxed">{text}</p>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>

                {/* Selected Work */}
                <div className="overflow-hidden mb-8">
                    <motion.h3
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                        className="text-white font-bold"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}
                    >
                        Selected Work
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
                    {featuredWork.map((work, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
                            className="group relative rounded-xl p-5 sm:p-6 overflow-hidden"
                            style={{ background: "#111", border: "1px solid #222" }}
                        >
                            <span
                                className="absolute bottom-1 right-3 select-none pointer-events-none"
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontSize: "4.5rem",
                                    fontWeight: 900,
                                    color: "rgba(255,255,255,0.025)",
                                    lineHeight: 1,
                                }}
                            >
                                {work.company.split(" ")[0].toUpperCase()}
                            </span>
                            <div className="relative">
                                <span className="text-[#777] text-xs font-mono tracking-widest uppercase">{work.tag}</span>
                                <h4
                                    className="text-white font-bold mt-2 mb-3"
                                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.05rem" }}
                                >
                                    {work.title}
                                </h4>
                                <p className="text-[#999] text-sm leading-relaxed mb-4">{work.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {work.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-[#888] text-xs px-2.5 py-0.5 rounded-full"
                                            style={{ border: "1px solid #333" }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default About;
