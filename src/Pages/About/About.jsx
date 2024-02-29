import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <motion.h2
                    initial={{ opacity: 0, y: 150 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.5,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 70,
                    }}
                >
                    Let me introduce myself
                </motion.h2>
            </div>
            <div className="about-container">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.1,
                        duration: 0.5,
                        ease: "easeOut",
                    }}
                    className="about-img-container"
                >
                    <motion.img
                        initial={{ opacity: 0, x: -150 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.5,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 50,
                        }}
                        src="./image/about.svg"
                        alt="about"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.5,
                        ease: "easeOut",
                    }}
                    className="about-text"
                >
                    <ul>
                        <motion.li
                            initial={{ opacity: 0, x: 150 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.5,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 50,
                            }}
                        >
                            <div
                                style={{
                                    maxHeight: "12vh",
                                    overflow: "hidden",
                                }}
                            >
                                <motion.p
                                    initial={{ opacity: 0, x: 150 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.3,
                                        duration: 0.5,
                                        ease: "easeOut",
                                        type: "spring",
                                        stiffness: 40,
                                    }}
                                >
                                    I work as a Software Engineer, and my
                                    strength lies in writing code that works
                                    efficiently.
                                </motion.p>
                            </div>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: 150 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.5,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 50,
                            }}
                        >
                            <div
                                style={{
                                    maxHeight: "12vh",
                                    overflow: "hidden",
                                }}
                            >
                                <motion.p
                                    initial={{ opacity: 0, x: 150 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.3,
                                        duration: 0.5,
                                        ease: "easeOut",
                                        type: "spring",
                                        stiffness: 40,
                                    }}
                                >
                                    I participate in coding competitions to keep
                                    my skills sharp and stay updated on the
                                    latest trends.
                                </motion.p>
                            </div>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: 150 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.5,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 50,
                            }}
                        >
                            <div
                                style={{
                                    maxHeight: "12vh",
                                    overflow: "hidden",
                                }}
                            >
                                <motion.p
                                    initial={{ opacity: 0, x: 150 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.3,
                                        duration: 0.5,
                                        ease: "easeOut",
                                        type: "spring",
                                        stiffness: 40,
                                    }}
                                >
                                    Known for my problem-solving abilities and
                                    teamwork, I'm always eager to learn about
                                    new technologies.
                                </motion.p>
                            </div>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: 150 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.5,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 50,
                            }}
                        >
                            <div
                                style={{
                                    maxHeight: "12vh",
                                    overflow: "hidden",
                                }}
                            >
                                <motion.p
                                    initial={{ opacity: 0, x: 150 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.3,
                                        duration: 0.5,
                                        ease: "easeOut",
                                        type: "spring",
                                        stiffness: 40,
                                    }}
                                >
                                    I specialize in using algorithms and data
                                    structures to design straightforward and
                                    effective software solutions.
                                </motion.p>
                            </div>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: 150 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.5,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 50,
                            }}
                        >
                            <div
                                style={{
                                    maxHeight: "12vh",
                                    overflow: "hidden",
                                }}
                            >
                                <motion.p
                                    initial={{ opacity: 0, x: 150 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.3,
                                        duration: 0.5,
                                        ease: "easeOut",
                                        type: "spring",
                                        stiffness: 40,
                                    }}
                                >
                                    Excited about contributing to interesting
                                    software projects, I'm dedicated to
                                    delivering solutions that meet the needs of
                                    the users.
                                </motion.p>
                            </div>
                        </motion.li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
