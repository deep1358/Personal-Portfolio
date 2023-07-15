import React from "react";
import { motion } from "framer-motion";
import Item from "../../Components/Skills/Item/Item";
import SkillsList from "../../Components/Skills/SkillList.json";
import "./Skills.css";

const Skills = () => {
    return (
        <div className="skills">
            <div style={{ marginTop: "10vh" }} className="skills-title">
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
                    Skills
                </motion.h2>
            </div>
            <div className="real-skills">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.9,
                        ease: "easeOut",
                    }}
                >
                    <motion.img
                        initial={{ opacity: 0, y: 150 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.5,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 70,
                        }}
                        src="./image/group.png"
                        alt="group"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 150 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.5,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 70,
                        }}
                    >
                        A strong team player who believes in collaboration.
                    </motion.p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.9,
                        ease: "easeOut",
                    }}
                >
                    <motion.img
                        initial={{ opacity: 0, y: 150 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.5,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 70,
                        }}
                        src="./image/mobile.png"
                        alt="mobile"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 150 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.5,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 70,
                        }}
                    >
                        Mobile first, adaptive design layouts for all devices is
                        an absolute priority.
                    </motion.p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.9,
                        ease: "easeOut",
                    }}
                >
                    <motion.img
                        initial={{ opacity: 0, y: 150 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.5,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 70,
                        }}
                        src="./image/programming.png"
                        alt="programming"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 150 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.5,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 70,
                        }}
                    >
                        Continues to learn new technologies and stay on top of
                        new trends.
                    </motion.p>
                </motion.div>
            </div>

            <div className="skills-title">
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
                    Tech Stack
                </motion.h2>
            </div>
            <div className="skills-container">
                {SkillsList.map(({ image, title, height }, index) => (
                    <Item
                        key={index}
                        image={image}
                        title={title}
                        height={height}
                    />
                ))}
            </div>
        </div>
    );
};

export default Skills;
