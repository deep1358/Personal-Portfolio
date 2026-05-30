import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const links = [
    { label: "Home",         path: "/" },
    { label: "About",        path: "/about" },
    { label: "Experience",   path: "/experience" },
    { label: "Projects",     path: "/projects" },
    { label: "Awards", path: "/awards" },
    { label: "Contact",      path: "/contact" },
];

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Desktop nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-12 py-5 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a1a1a]">
                <Link
                    to="/"
                    className="text-white font-bold text-2xl tracking-tight hover:text-[#ccc] transition-colors duration-200"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    Deep Shah
                </Link>
                <ul className="flex items-center gap-8">
                    {links.map(({ label, path }) => (
                        <li key={path} className="relative">
                            <Link
                                to={path}
                                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                                    isActive(path)
                                        ? "text-white"
                                        : "text-[#666] hover:text-[#ccc]"
                                }`}
                            >
                                {label}
                            </Link>
                            {isActive(path) && (
                                <motion.span
                                    layoutId="nav-indicator"
                                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-white"
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile top bar */}
            <div className="fixed top-0 left-0 right-0 z-50 md:hidden flex items-center justify-between px-5 py-4 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a1a1a]">
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(true)}
                    className="flex flex-col gap-1.5 p-1"
                    aria-label="Open menu"
                >
                    <span className="block w-6 h-px bg-white" />
                    <span className="block w-6 h-px bg-white" />
                    <span className="block w-4 h-px bg-white" />
                </motion.button>

                <Link
                    to="/"
                    className="text-white font-bold text-xl tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    Deep Shah
                </Link>

                {/* Spacer to keep logo centered */}
                <div className="w-8" />
            </div>

            {/* Mobile overlay */}
            <div
                className={`nav-overlay fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col items-center justify-center md:hidden ${
                    isOpen ? "nav-open" : "nav-close"
                }`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 text-[#666] hover:text-white text-xl transition-colors"
                    aria-label="Close menu"
                >
                    ✕
                </button>

                <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="text-white font-bold text-2xl tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    Deep Shah
                </Link>

                <div className="w-12 h-px bg-[#333] my-8" />

                <ul className="flex flex-col items-center gap-7">
                    {links.map(({ label, path }) => (
                        <li key={path}>
                            <Link
                                to={path}
                                onClick={() => setIsOpen(false)}
                                className={`text-lg font-medium tracking-wide transition-colors duration-200 ${
                                    isActive(path)
                                        ? "text-white"
                                        : "text-[#888] hover:text-white"
                                }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
