/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function ScrollDownHint() {
    const [scrolled, setScrolled] = useState(false);
    const [appeared, setAppeared] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setAppeared(true), 1400);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <motion.div
            animate={{ opacity: appeared && !scrolled ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none z-10 md:hidden"
        >
            <span className="text-[#555] text-[9px] font-mono uppercase tracking-widest">scroll</span>
            <motion.svg
                width="12" height="7" viewBox="0 0 12 7" fill="none"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
                <path d="M1 1l5 5 5-5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
        </motion.div>
    );
}
import emailjs from "@emailjs/browser";

const IconEmail = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
);

const IconLinkedIn = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);

const IconGitHub = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
);

const IconMedium = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>
);

const IconLeetCode = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
    </svg>
);

const IconHackerRank = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .642 1.114.642 10.886 0 12s-9.107 6-10.392 6-9.75-4.886-10.392-6C.966 16.886.966 7.114 1.608 6 2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908a.264.264 0 0 0-.116-.221.261.261 0 0 0-.285 0l-2.01 1.357a.496.496 0 0 0-.225.416v6.232c0 .166.088.316.225.416l2.01 1.358a.26.26 0 0 0 .285 0 .263.263 0 0 0 .116-.221v-3.875h4.074v4.096c0 .094.048.176.116.221a.26.26 0 0 0 .285 0l2.01-1.358a.497.497 0 0 0 .225-.416V8.46a.497.497 0 0 0-.225-.416l-2.01-1.357a.26.26 0 0 0-.143-.044z"/>
    </svg>
);

const contactLinks = [
    { label: "deepshah1358@gmail.com", href: "mailto:deepshah1358@gmail.com", Icon: IconEmail },
    { label: "linkedin.com/in/deep1358", href: "https://www.linkedin.com/in/deep1358/", Icon: IconLinkedIn },
];

const checkoutLinks = [
    { label: "github.com/deep1358", href: "https://github.com/deep1358", Icon: IconGitHub },
    { label: "medium.com/@deepshah1358", href: "https://medium.com/@deepshah1358", Icon: IconMedium },
    { label: "leetcode.com/u/deepshah1358", href: "https://leetcode.com/u/deepshah1358/", Icon: IconLeetCode },
    { label: "HackerRank / IamDeep7", href: "https://www.hackerrank.com/IamDeep7", Icon: IconHackerRank },
];

const inputClass = [
    "w-full bg-transparent outline-none",
    "border-0 border-b py-3 text-sm text-white",
    "placeholder:text-[#555]",
    "transition-colors duration-200",
].join(" ");

const Contact = () => {
    const [form, setForm] = useState({ fullname: "", email: "", subject: "", msg: "" });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { fullname, email, subject, msg } = form;

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                { from_name: fullname, reply_to: email, subject, message: msg },
                { publicKey: import.meta.env.VITE_USER_ID }
            )
            .then(() => {
                setLoading(false);
                setSuccess(true);
                setForm({ fullname: "", email: "", subject: "", msg: "" });
            })
            .catch(() => {
                setLoading(false);
                setError("Something went wrong. Please try again.");
            });
    };

    return (
        <div className="min-h-screen flex flex-col items-center pt-24 pb-20 px-4 sm:px-6 md:px-12">
            <ScrollDownHint />
            <div className="w-full max-w-5xl">

                {/* Heading */}
                <div className="overflow-hidden mb-16 text-center">
                    <motion.h2
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                        className="text-white font-bold"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                    >
                        Get in touch
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="h-px bg-white/20 mx-auto mt-4"
                        style={{ width: "48px", transformOrigin: "left" }}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                        className="rounded-xl p-8"
                        style={{ background: "#111", border: "1px solid #222" }}
                    >
                        <h3
                            className="text-white font-bold mb-8"
                            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2rem" }}
                        >
                            I'd love to hear from you
                        </h3>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <input
                                className={inputClass}
                                style={{ borderColor: "#2a2a2a" }}
                                onFocus={e => e.target.style.borderColor = "#fff"}
                                onBlur={e => e.target.style.borderColor = "#2a2a2a"}
                                value={fullname}
                                name="fullname"
                                onChange={handleChange}
                                required
                                type="text"
                                placeholder="Full name"
                            />
                            <input
                                className={inputClass}
                                style={{ borderColor: "#2a2a2a" }}
                                onFocus={e => e.target.style.borderColor = "#fff"}
                                onBlur={e => e.target.style.borderColor = "#2a2a2a"}
                                value={email}
                                name="email"
                                onChange={handleChange}
                                required
                                type="email"
                                placeholder="Your email"
                            />
                            <input
                                className={inputClass}
                                style={{ borderColor: "#2a2a2a" }}
                                onFocus={e => e.target.style.borderColor = "#fff"}
                                onBlur={e => e.target.style.borderColor = "#2a2a2a"}
                                value={subject}
                                name="subject"
                                onChange={handleChange}
                                required
                                type="text"
                                placeholder="Subject"
                            />
                            <textarea
                                className={inputClass + " resize-none"}
                                style={{ borderColor: "#2a2a2a" }}
                                onFocus={e => e.target.style.borderColor = "#fff"}
                                onBlur={e => e.target.style.borderColor = "#2a2a2a"}
                                value={msg}
                                name="msg"
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Message"
                            />
                            <div className="mt-2">
                                <button
                                    type="submit"
                                    className="btn-primary"
                                    disabled={loading}
                                    style={loading ? { cursor: "not-allowed", opacity: 0.6 } : {}}
                                >
                                    {loading ? "Sending…" : "Send Message"}
                                </button>
                            </div>
                            {success && (
                                <p className="text-sm text-white/70 mt-1">Thanks! I'll get back to you soon.</p>
                            )}
                            {error && (
                                <p className="text-sm text-red-400 mt-1">{error}</p>
                            )}
                        </form>
                    </motion.div>

                    {/* Right side */}
                    <motion.div
                        initial={{ opacity: 0, x: 32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                        className="flex flex-col gap-10"
                    >
                        {/* Contact info */}
                        <div>
                            <p className="text-[#777] text-xs font-mono uppercase tracking-widest mb-5">
                                Contact info
                            </p>
                            <div className="flex flex-col gap-4">
                                {contactLinks.map(({ label, href, Icon }) => (
                                    <a
                                        key={href}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 text-[#777] hover:text-white transition-colors duration-200"
                                    >
                                        <span className="shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-200">
                                            <Icon />
                                        </span>
                                        <span className="text-sm">{label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-[#1a1a1a]" />

                        {/* Find me on */}
                        <div>
                            <p className="text-[#777] text-xs font-mono uppercase tracking-widest mb-5">
                                Find me on
                            </p>
                            <div className="flex flex-col gap-4">
                                {checkoutLinks.map(({ label, href, Icon }) => (
                                    <a
                                        key={href}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 text-[#777] hover:text-white transition-colors duration-200"
                                    >
                                        <span className="shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-200">
                                            <Icon />
                                        </span>
                                        <span className="text-sm">{label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
