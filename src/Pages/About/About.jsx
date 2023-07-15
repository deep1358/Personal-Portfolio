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
                  I am currently working as a Software Engineer in Crest Data Systems.
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
                  I am skilled in front-end and back-end web development.
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
                  I have some experience in competitive coding as well, as I
                  take part in certain competitions, as well.
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
                  I have a positive attitude, I am a great team player and I am
                  very excited about learning new things.
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
                  I'm a foodie, I like to play and watch soccer and cricket.
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
                  I love creating websites, and I look forward to taking web
                  development projects.
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
