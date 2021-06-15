import { motion } from "framer-motion";
import React from "react";
import Mobile from "../Mobile/Mobile";
import Pc from "../Pc/Pc";
import "./Project.css";

const Project = ({ image, title, content, code, demo, open }) => {
  return (
    <div className="project">
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: "easeOut",
          type: "spring",
          stiffness: 70,
        }}
        className="project-left"
      >
        <Pc image={image} />
        <Mobile image={`${image}-m`} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: "easeOut",
          type: "spring",
          stiffness: 70,
        }}
        className="project-right"
      >
        <div style={{ maxHeight: "15vh", overflow: "hidden" }}>
          <motion.h3
            initial={{ opacity: 0, y: 150 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 70,
            }}
          >
            {title}
          </motion.h3>
        </div>
        <div style={{ maxHeight: "50vh", overflow: "hidden" }}>
          <motion.p
            initial={{ opacity: 0, y: 150 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 70,
            }}
          >
            {content}
          </motion.p>
        </div>
        <div className="project-buttons">
          <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.7,
              ease: "linear",
              type: "just",
            }}
            target="_blank"
            href={demo}
          >
            <button className="btn-primary">Visit</button>
          </motion.a>
          <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.7,
              ease: "linear",
              type: "just",
            }}
            target="_blank"
            href={code}
          >
            <button className="btn-secondary">Code </button>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
