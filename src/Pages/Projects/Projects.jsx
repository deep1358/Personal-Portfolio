import React from "react";
import { motion } from "framer-motion";
import ProjectList from "../../Components/Projects/ProjectList.json";

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const Projects = () => {
    return (
        <div className="min-h-screen flex flex-col items-center pt-24 pb-20 px-4 sm:px-6 md:px-12">
            <div className="w-full max-w-6xl">

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
                        Projects
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

                {/* Project grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {ProjectList.map(({ image, title, demo, code, content }, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -4 }}
                            className="group rounded-xl overflow-hidden flex flex-col"
                            style={{ background: "#111", border: "1px solid #222", transition: "border-color 0.2s" }}
                            onMouseEnter={e => e.currentTarget.style.borderColor = "#333"}
                            onMouseLeave={e => e.currentTarget.style.borderColor = "#222"}
                        >
                            {/* Screenshot */}
                            <div className="overflow-hidden" style={{ background: "#0d0d0d", aspectRatio: "16/9" }}>
                                <img
                                    src={`./image/${image}.jpg`}
                                    alt={title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                                    onError={e => { e.target.style.display = "none"; }}
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 p-5">
                                <h3
                                    className="text-white font-bold mb-2"
                                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.05rem" }}
                                >
                                    {title}
                                </h3>
                                <p className="text-[#666] text-sm leading-relaxed flex-1 mb-5">
                                    {content}
                                </p>
                                <div className="flex gap-3">
                                    <a href={demo} target="_blank" rel="noopener noreferrer">
                                        <button className="btn-primary" style={{ fontSize: "0.8rem", padding: "0.5rem 1.2rem" }}>
                                            Visit
                                        </button>
                                    </a>
                                    <a href={code} target="_blank" rel="noopener noreferrer">
                                        <button className="btn-secondary" style={{ fontSize: "0.8rem", padding: "0.5rem 1.2rem" }}>
                                            Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
