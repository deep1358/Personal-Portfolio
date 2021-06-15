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
              <div style={{ maxHeight: "12vh", overflow: "hidden" }}>
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
                  I am currently pursuing B.E. Degree in Computer Engineering
                  branch in LDCE, Ahmedabad.
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
              <div style={{ maxHeight: "12vh", overflow: "hidden" }}>
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
                  I am good at frontend and backend web development.
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
              <div style={{ maxHeight: "12vh", overflow: "hidden" }}>
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
                  I have some experience in competitive coding as well, As I
                  participated in some competitions, too.
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
              <div style={{ maxHeight: "12vh", overflow: "hidden" }}>
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
                  I have Positive mindset, I am a good team player and I am very
                  enthusiastic to learn new stuffs.
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
              <div style={{ maxHeight: "12vh", overflow: "hidden" }}>
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
                  I am foodie, I love to play and watch football, and I love to
                  design web pages.
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
              <div style={{ maxHeight: "12vh", overflow: "hidden" }}>
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
                  And I am excited to take web development projects.
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
