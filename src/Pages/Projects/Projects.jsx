import React from "react";
import { motion } from "framer-motion";
import Project from "../../Components/Projects/Project/Project";
import ProjectList from "../../Components/Projects/ProjectList.json";
import "./Projects.css";

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-title">
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
                    Projects
                </motion.h2>
            </div>
            <div className="projects-container">
                {ProjectList.map(
                    ({ image, title, demo, code, content }, index) => (
                        <Project
                            key={index}
                            image={image}
                            title={title}
                            demo={demo}
                            code={code}
                            content={content}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default Projects;
