import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="home"
      ref={constraintsRef}
    >
      <motion.div
        drag
        dragConstraints={constraintsRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
        className="circle circle-1"
      />
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
      <div className="triangle triangle-1"></div>
      <div className="triangle triangle-3"></div>

      <div className="title">
        <span className="triangle triangle-2"></span>
        <h1>
          I'm
          <span className="name">Deep Shah</span>
        </h1>
      </div>
      <h3>Frontend and Backend Developer</h3>
      <p>
        Welcome to my portfolio website. Hope you will visit and love this
        portfolio.
      </p>
      <p>Here you can read about me and even see my projects and skills.</p>

      <div className="buttons">
        <Link to="/contact">
          <button className="btn-primary">Contact Me</button>
        </Link>
        <a href="/Resume.pdf" download>
          <button className="btn-secondary">Download Resume</button>
        </a>
      </div>
    </motion.div>
  );
};

export default Home;
