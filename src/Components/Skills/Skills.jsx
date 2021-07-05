import React from "react";
import { motion } from "framer-motion";
import Item from "./Item/Item";
import "./Skills.css";

const Skills = () => {
  const items = [
    {
      image: "html",
      title: "Html5",
    },
    {
      image: "css",
      title: "Css3",
    },
    {
      image: "javascript",
      title: "Javascript",
    },
    {
      image: "react",
      title: "React Js",
    },
    {
      image: "next",
      title: "Next Js",
    },
    {
      image: "figma",
      title: "Figma",
    },
    {
      image: "node",
      title: "Node Js",
    },
    {
      image: "expressjs",
      title: "Express Js",
      height: "120",
    },
    {
      image: "git",
      title: "Git",
    },
    {
      image: "mongo",
      title: "Mongo DB",
    },
    {
      image: "sql",
      title: "Mysql",
    },
    {
      image: "firebase",
      title: "Firebase",
    },
    // {
    //   image: "python",
    //   title: "Python3",
    // },
    {
      image: "cpp",
      title: "C++",
    },
  ];

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
            A good team player and believe in work together.
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
            Mobile-first, responsive design layout for all devices is a top
            priority.
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
            Constantly continues to learn new technologies and keeping
            up-to-date with the fresh trends.
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
        {items.map((item, index) => (
          <Item
            key={index}
            image={item.image}
            title={item.title}
            height={item.height}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
