import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const Experience = () => {
    return (
        <div className="experience">
            <div className="experience-title">
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
                    Experience
                </motion.h2>
            </div>
            <div className="experience-section">
                <div className="experience-item">
                    <span className="experience-item-dot"></span>
                    <div className="experience-item-card">
                        <div className="experience-item-header">
                            <div className="experience-item-header-left">
                                <h2 className="experience-item-header-left-position">
                                    Software Engineer
                                </h2>
                                <span className="experience-item-header-left-company">
                                    Crest Data Systems
                                </span>
                            </div>
                            <p className="experience-item-header-right">
                                01/2022 - present
                            </p>
                        </div>
                        <span className="experience-item-content-divider"></span>
                        <div className="experience-item-content">
                            <h4 className="experience-item-content-title">
                                Splunk Enterprise Security
                            </h4>
                            <div className="experience-item-content-summary">
                                <ul>
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Non sequi tempora
                                        doloremque ut asperiores repellendus
                                        quibusdam soluta, repellat odio ducimus,
                                        quasi quos nam fugiat tempore! Minus
                                        iure corrupti impedit necessitatibus!
                                    </li>
                                    <li>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Repellat adipisci quod
                                        amet?
                                    </li>
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Magni voluptas
                                        provident illum placeat? Minus,
                                        quibusdam quidem! Reiciendis
                                        exercitationem iusto delectus?
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="experience-item-content">
                            <h4 className="experience-item-content-title">
                                Timesheet Automation Tool
                            </h4>
                            <div className="experience-item-content-summary">
                                <ul>
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Non sequi tempora
                                        doloremque ut asperiores repellendus
                                        quibusdam soluta, repellat odio ducimus,
                                        quasi quos nam fugiat tempore! Minus
                                        iure corrupti impedit necessitatibus!
                                    </li>
                                    <li>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Repellat adipisci quod
                                        amet?
                                    </li>
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Magni voluptas
                                        provident illum placeat? Minus,
                                        quibusdam quidem! Reiciendis
                                        exercitationem iusto delectus?
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="experience-item">
                    <span className="experience-item-dot"></span>
                    <div className="experience-item-card">
                        <div className="experience-item-header">
                            <div className="experience-item-header-left">
                                <h2 className="experience-item-header-left-position">
                                    BE in Computer Engineering
                                </h2>
                                <span className="experience-item-header-left-company">
                                    LDCE (CGPA: 9.54)
                                </span>
                            </div>
                            <p className="experience-item-header-right">
                                06/2018 - 06/2022
                            </p>
                        </div>
                        <span className="experience-item-content-divider"></span>
                        <div className="experience-item-content">
                            <div className="experience-item-content-summary">
                                <ul>
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Non sequi tempora
                                        doloremque ut asperiores repellendus
                                        quibusdam soluta, repellat odio ducimus,
                                        quasi quos nam fugiat tempore! Minus
                                        iure corrupti impedit necessitatibus!
                                    </li>
                                    <li>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Repellat adipisci quod
                                        amet?
                                    </li>
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Magni voluptas
                                        provident illum placeat? Minus,
                                        quibusdam quidem! Reiciendis
                                        exercitationem iusto delectus?
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
