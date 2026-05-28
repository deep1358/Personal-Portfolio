import React from "react";
import { motion } from "framer-motion";

const awardEntries = [
    {
        title: "Axcel Silver Club",
        org: "Axis Securities",
        period: "Mar 2026",
        desc: "Recognized for outstanding contribution to the Axis Securities platform.",
        tag: "Fintech",
        link: "https://drive.google.com/file/d/1Cd-FpgZ78r-6TNWF7A8HHBW9-Cq_9qjH/view?usp=drive_link",
    },
    {
        title: "Axcel Bronze Club",
        org: "Axis Securities",
        period: "Dec 2025",
        desc: "Acknowledged for consistent performance and impact on product delivery at Axis Securities.",
        tag: "Fintech",
        link: "https://drive.google.com/file/d/1fGx-rQdMR89AOpRFjFGdhUK1VpJA5Ydn/view",
    },
    {
        title: "Crest Achievement Program (CAP)",
        org: "Crest Data",
        period: "Aug 2023",
        desc: "Awarded for outstanding performance on the Splunk ES App Updates project.",
        tag: "Security",
        link: "https://drive.google.com/file/d/1FFaCa98dUXryB91pgiLJERp-6ZHv2C2t/view?usp=drive_link",
    },
    {
        title: "Crest Achievement Program (CAP)",
        org: "Crest Data",
        period: "Jan 2023",
        desc: "Awarded for exceptional contribution to the Splunk Enterprise Security release.",
        tag: "Security",
        link: "https://drive.google.com/file/d/1sFF6vFRagxGfHaJXHMgDvz6FgT9jWn_9/view?usp=drive_link",
    },
];

const certifications = [
    { title: "AI Engineer Core Track",             issuer: "Udemy",           year: "2026", link: "https://www.udemy.com/certificate/UC-503945c3-8320-4adf-abbf-c9de67148441/" },
    { title: "Complete Next.js with React & Node", issuer: "Udemy",           year: "2021", link: "https://www.udemy.com/certificate/UC-61092bee-4753-4d83-baf4-63d40c66e79c/" },
];

const cardVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const Achievements = () => {
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
                        Awards
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

                {/* Awards — timeline */}
                <div className="mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-[#444] text-xs font-mono uppercase tracking-widest mb-8"
                    >
                        Recognition
                    </motion.p>

                    <div className="relative">
                        {/* Vertical line */}
                        <div
                            className="absolute top-2 bottom-2 left-[8px] w-px"
                            style={{ background: "linear-gradient(to bottom, #2a2a2a, #1a1a1a 80%, transparent)" }}
                        />

                        <div className="flex flex-col gap-6">
                            {awardEntries.map((entry, i) => (
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
                                            className="w-4 h-4 rounded-full"
                                            style={{ background: "#1a1a1a", border: "1.5px solid #444" }}
                                        />
                                    </div>

                                    {/* Card */}
                                    <motion.a
                                        href={entry.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/card flex-1 rounded-xl p-4 sm:p-5 relative overflow-hidden block"
                                        style={{ background: "#111", border: "1px solid #222" }}
                                        whileHover={{ borderColor: "#555" }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {/* Company watermark */}
                                        <span
                                            className="absolute bottom-0 right-3 select-none pointer-events-none leading-none"
                                            style={{
                                                fontFamily: "'Space Grotesk', sans-serif",
                                                fontSize: "clamp(3rem, 8vw, 5rem)",
                                                fontWeight: 900,
                                                color: "rgba(255,255,255,0.025)",
                                                lineHeight: 1,
                                            }}
                                        >
                                            {entry.org.split(" ")[0].toUpperCase()}
                                        </span>

                                        <div className="relative">
                                            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                                                <h3
                                                    className="text-white font-bold group-hover/card:text-white transition-colors"
                                                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)" }}
                                                >
                                                    {entry.title}
                                                </h3>
                                                <span className="text-[#444] text-xs font-mono whitespace-nowrap">{entry.period}</span>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mb-3">
                                                <p className="text-[#666] text-sm">{entry.org}</p>
                                                <span
                                                    className="text-[#333] text-[10px] font-mono px-2 py-0.5 rounded-full"
                                                    style={{ border: "1px solid #2a2a2a" }}
                                                >
                                                    {entry.tag}
                                                </span>
                                            </div>
                                            <p className="text-[#555] text-sm leading-relaxed mb-4">{entry.desc}</p>
                                            <span className="text-[#333] group-hover/card:text-[#888] text-xs font-mono tracking-widest uppercase transition-colors duration-200 flex items-center gap-1.5">
                                                View Certificate
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="inline-block">
                                                    <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </span>
                                        </div>
                                    </motion.a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="h-px mb-14"
                    style={{ background: "#1a1a1a", transformOrigin: "left" }}
                />

                {/* Certifications */}
                <div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-[#444] text-xs font-mono uppercase tracking-widest mb-6"
                    >
                        Certifications
                    </motion.p>

                    <motion.div
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="flex flex-col"
                    >
                        {certifications.map((cert, i) => (
                            <motion.a
                                key={i}
                                variants={rowVariants}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between py-4"
                                style={{ borderBottom: "1px solid #1a1a1a" }}
                            >
                                <div className="flex items-center gap-3 sm:gap-4 min-w-0 mr-4">
                                    <div className="w-0 h-4 rounded-full bg-white/60 shrink-0 transition-all duration-200 group-hover:w-0.5" />
                                    <div className="min-w-0">
                                        <p
                                            className="text-white text-sm font-medium leading-snug group-hover:text-white transition-colors"
                                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                        >
                                            {cert.title}
                                        </p>
                                        <p className="text-[#444] text-xs mt-0.5 group-hover:text-[#666] transition-colors duration-200">
                                            {cert.issuer}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <span className="text-[#2a2a2a] text-xs font-mono group-hover:text-[#444] transition-colors duration-200">
                                        {cert.year}
                                    </span>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-[#2a2a2a] group-hover:text-[#555] transition-colors duration-200">
                                        <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Achievements;
