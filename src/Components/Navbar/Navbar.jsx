import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

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
                        onClick={() => setIsOpen(false)}
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
                    <li className={active("/")}>
                        <Link to="/">
                            <motion.p
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </motion.p>
                        </Link>
                    </li>
                    <li className={active("/about")}>
                        <Link to="/about">
                            <motion.p
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </motion.p>
                        </Link>
                    </li>
                    <li className={active("/skills")}>
                        <Link to="/skills">
                            <motion.p
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(false)}
                            >
                                Skills
                            </motion.p>
                        </Link>
                    </li>
                    <li className={active("/experience")}>
                        <Link to="/experience">
                            <motion.p
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(false)}
                            >
                                Experience
                            </motion.p>
                        </Link>
                    </li>
                    <li className={active("/projects")}>
                        <Link to="/projects">
                            <motion.p
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(false)}
                            >
                                Projects
                            </motion.p>
                        </Link>
                    </li>
                    <li className={active("/contact")}>
                        <Link to="/contact">
                            <motion.p
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </motion.p>
                        </Link>
                    </li>
                </motion.ul>
            </nav>
        </div>
    );
};

export default Navbar;
