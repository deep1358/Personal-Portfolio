import React from "react";
import { motion } from "framer-motion";

const workEntries = [
    {
        company: "Axis Securities",
        role: "Senior Frontend Engineer",
        period: "Jan 2025 – Present",
        location: "Remote",
        bullets: [
            "Led a complete dashboard UI redesign with Product & UX stakeholders — contributed to a 15% increase in customer conversions.",
            "Engineered a high-performance search solution using Web Workers, offloading complex computations to significantly improve Core Web Vitals.",
            "Implemented real-time data streaming via WebSockets for live trading data to thousands of concurrent users during peak market hours.",
            "Spearheaded client-side caching and PWA features (offline access), slashing component load times by ~40%.",
            "Developed a Basket Order feature allowing users to place multiple stock orders in a single transaction.",
            "Integrated CleverTap analytics for event tracking, enabling A/B experimentation and improved user retention.",
        ],
        tech: ["React.js", "Redux", "TypeScript", "WebSockets", "Web Workers", "PWA", "Parcel", "Material UI", "CleverTap", "Figma"],
    },
    {
        company: "Crest Data",
        role: "Software Engineer",
        period: "Jan 2022 – Jan 2025",
        location: "Ahmedabad, Gujarat",
        bullets: [
            "Migrated SimpleXML pages to a React-based Unified Dashboard framework (UDF), enhancing data visualization and user interaction.",
            "Orchestrated automated health assessments using Python, Shell scripting, and GitLab CI — reduced TechOps manual validation time by 80%+.",
            "Developed and integrated a clone feature into the dashboard system for seamless dashboard duplication.",
            "Wrote e2e test suites using WebdriverIO, achieving 75% code coverage.",
        ],
        tech: ["React.js", "Python", "Shell Script", "GitLab CICD", "WebdriverIO", "Webpack", "Docker", "Figma"],
    },
];

const educationEntries = [
    {
        company: "LD College of Engineering",
        role: "B.E. — Computer Engineering",
        period: "Jun 2018 – Jun 2022",
        location: "Ahmedabad, Gujarat",
        bullets: ["CGPA: 9.57 / 10.00"],
        tech: [],
    },
];

const cardVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const bulletVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
};

const bulletItem = {
    hidden: { opacity: 0, x: 12 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

function TimelineSection({ label, entries }) {
    return (
        <div>
            {/* Section label */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-[#444] text-xs font-mono uppercase tracking-widest mb-8"
            >
                {label}
            </motion.p>

            <div className="relative">
                {/* Vertical line */}
                <div
                    className="absolute top-2 bottom-2 left-[8px] w-px"
                    style={{ background: "linear-gradient(to bottom, #2a2a2a, #1a1a1a 80%, transparent)" }}
                />

                <div className="flex flex-col gap-8">
                    {entries.map((entry, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="flex gap-3 sm:gap-6"
                        >
                            {/* Timeline dot */}
                            <div className="shrink-0 pt-[18px]" style={{ width: "16px" }}>
                                <div
                                    className="w-4 h-4 rounded-full z-10"
                                    style={{ background: "#1a1a1a", border: "1.5px solid #444" }}
                                />
                            </div>

                            {/* Card */}
                            <div
                                className="flex-1 rounded-xl overflow-hidden relative"
                                style={{ background: "#111", border: "1px solid #222" }}
                            >
                                {/* Company watermark */}
                                <span
                                    className="absolute bottom-0 right-3 select-none pointer-events-none leading-none"
                                    style={{
                                        fontFamily: "'Space Grotesk', sans-serif",
                                        fontSize: "clamp(3.5rem, 10vw, 6.5rem)",
                                        fontWeight: 900,
                                        color: "rgba(255,255,255,0.025)",
                                        lineHeight: 1,
                                    }}
                                >
                                    {entry.company.split(" ")[0].toUpperCase()}
                                </span>

                                <div className="p-4 sm:p-6 md:p-7 relative">
                                    {/* Header */}
                                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                                        <h3
                                            className="text-white font-bold"
                                            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}
                                        >
                                            {entry.company}
                                        </h3>
                                        <span className="text-[#444] text-xs font-mono whitespace-nowrap">{entry.period}</span>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-0.5 mb-5">
                                        <p className="text-[#666] text-sm">{entry.role}</p>
                                        <p className="text-[#2a2a2a] text-xs">{entry.location}</p>
                                    </div>

                                    {/* Bullets */}
                                    <motion.ul
                                        variants={bulletVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.1 }}
                                        className="space-y-2.5 mb-5"
                                    >
                                        {entry.bullets.map((b, j) => (
                                            <motion.li key={j} variants={bulletItem} className="flex items-start gap-3">
                                                <span className="mt-[7px] w-1 h-1 rounded-full bg-white/25 shrink-0" />
                                                <span className="text-[#888] text-sm leading-relaxed">{b}</span>
                                            </motion.li>
                                        ))}
                                    </motion.ul>

                                    {/* Tech pills */}
                                    {entry.tech.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {entry.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-[#555] text-xs px-3 py-1 rounded-full"
                                                    style={{ border: "1px solid #2a2a2a" }}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const Experience = () => {
    return (
        <div className="min-h-screen flex flex-col items-center pt-24 pb-20 px-4 sm:px-6 md:px-12">
            <div className="w-full max-w-3xl">

                {/* Heading */}
                <div className="overflow-hidden mb-16 text-center">
                    <motion.h2
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                        className="text-white font-bold"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                    >
                        Experience
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

                {/* Work Experience section */}
                <TimelineSection label="Work Experience" entries={workEntries} />

                {/* Gap between sections */}
                <div className="mt-16" />

                {/* Education section */}
                <TimelineSection label="Education" entries={educationEntries} />
            </div>
        </div>
    );
};

export default Experience;
