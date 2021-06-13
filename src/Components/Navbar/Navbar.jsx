import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  const active = (path) => {
    if (path === location.pathname) {
      return "active";
    }
    return "";
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <motion.img
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        src="./image/hamburger.svg"
        alt="hamburger"
        onClick={() => setIsOpen(true)}
      />
      <nav className={isOpen ? "open" : "close"}>
        <motion.img
          onClick={() => setIsOpen(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          src="./image/close.png"
          alt=""
        />
        <Link to="/">
          <motion.h1
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "backInOut" }}
          >
            Portfolio
          </motion.h1>
        </Link>
        <motion.ul
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "backInOut" }}
        >
          <motion.li
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(false)}
            className={active("/")}
          >
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(false)}
            className={active("/about")}
          >
            <Link to="/about">About</Link>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(false)}
            className={active("/skills")}
          >
            <Link to="/skills">Skills</Link>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(false)}
            className={active("/projects")}
          >
            <Link to="/projects">Projects</Link>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(false)}
            className={active("/contact")}
          >
            <Link to="/contact">Contact</Link>
          </motion.li>
        </motion.ul>
      </nav>
    </div>
  );
};

export default Navbar;
