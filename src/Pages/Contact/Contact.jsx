/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { motion } from "framer-motion";
import * as emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
    const [form, setForm] = useState({
        fullname: "",
        email: "",
        subject: "",
        msg: "",
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { fullname, email, subject, msg } = form;

    const handleChange = (e) => {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    let templateParams = {
        from_name: email,
        to_name: "deepshah1358@gmail.com",
        subject,
        message: msg,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            emailjs
                .send(
                    process.env.REACT_APP_SERVICE_ID,
                    process.env.REACT_APP_TEMPLATE_ID,
                    templateParams,
                    process.env.REACT_APP_USER_ID
                )
                .then(() => {
                    setLoading(false);
                    setSuccess(true);
                    setForm({ fullname: "", email: "", subject: "", msg: "" });
                    return;
                })
                .catch((err) => {
                    setLoading(false);
                    setError("Some error has occured. Please try again.");
                });
        } catch (err) {
            setLoading(false);
            setError("Some error has occured. Please try again.");
            return;
        }
    };

    return (
        <div className="contact">
            <div className="contact-container">
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
                    className="contact-form"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -150 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.5,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 70,
                        }}
                        className="contact-form-header"
                    >
                        <h3>I'd love to hear from you</h3>
                        <img src="./image/email.svg" alt="email" />
                    </motion.div>
                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.5,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 70,
                        }}
                        onSubmit={handleSubmit}
                    >
                        <input
                            value={fullname}
                            name="fullname"
                            onChange={handleChange}
                            required
                            type="text"
                            placeholder="Full name"
                        />
                        <input
                            value={email}
                            name="email"
                            onChange={handleChange}
                            required
                            type="email"
                            placeholder="Your Email"
                        />
                        <input
                            value={subject}
                            name="subject"
                            onChange={handleChange}
                            required
                            type="text"
                            placeholder="Subject"
                        />
                        <textarea
                            value={msg}
                            name="msg"
                            onChange={handleChange}
                            required
                            rows="6"
                            cols="60"
                            type="text"
                            placeholder="Message"
                        />
                        <motion.button
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            disabled={loading}
                            style={loading && { cursor: "not-allowed" }}
                            transition={{
                                delay: 0.4,
                                ease: "linear",
                                type: "just",
                            }}
                            className="btn-primary"
                        >
                            {loading ? "Sending" : "Submit"}
                        </motion.button>
                    </motion.form>
                    {success && (
                        <p className="mail-success">
                            Thanks for your Email. I will contact you soon.
                        </p>
                    )}
                    {error.length > 1 && <p className="mail-error">{error}</p>}
                </motion.div>
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
                    className="contact-right"
                >
                    <div className="circle contact-circle"></div>
                    <div className="contact-info">
                        <motion.div
                            style={{ maxHeight: "15vh", overflow: "hidden" }}
                        >
                            <motion.h4
                                initial={{ opacity: 0, y: 150 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.5,
                                    ease: "easeOut",
                                    type: "spring",
                                    stiffness: 50,
                                }}
                            >
                                Contact info
                            </motion.h4>
                        </motion.div>

                        <div>
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    ease: "linear",
                                    type: "just",
                                }}
                                className="contact-icon"
                            >
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    href="mailto:deepshah1358@gmail.com"
                                    target="_blank"
                                >
                                    <img src="./image/email.svg" alt="email" />
                                </motion.a>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    ease: "linear",
                                    type: "just",
                                }}
                                className="contact-icon"
                            >
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    href="https://www.instagram.com/_.deep7._/"
                                    target="_blank"
                                >
                                    <img
                                        src="./image/insta.svg"
                                        alt="instagram"
                                    />
                                </motion.a>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    ease: "linear",
                                    type: "just",
                                }}
                                className="contact-icon"
                            >
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    target="_blank"
                                    href="https://www.linkedin.com/in/deep-shah-b0b0171b8/"
                                >
                                    <img
                                        src="./image/linkedin.svg"
                                        alt="linkedin"
                                    />
                                </motion.a>
                            </motion.div>
                        </div>
                    </div>
                    <div className="contact-checkout">
                        <div style={{ maxHeight: "15vh", overflow: "hidden" }}>
                            <motion.h4
                                initial={{ opacity: 0, y: 150 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.5,
                                    ease: "easeOut",
                                    type: "spring",
                                    stiffness: 50,
                                }}
                            >
                                Checkout
                            </motion.h4>
                        </div>
                        <div>
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    ease: "linear",
                                    type: "just",
                                }}
                                className="contact-icon"
                            >
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    target="_blank"
                                    href="https://github.com/deep1358"
                                >
                                    <img
                                        src="./image/github.svg"
                                        alt="github"
                                    />
                                </motion.a>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    ease: "linear",
                                    type: "just",
                                }}
                                className="contact-icon"
                            >
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    target="_blank"
                                    href="https://medium.com/@deepshah1358"
                                >
                                    <img
                                        src="./image/medium.svg"
                                        alt="medium"
                                    />
                                </motion.a>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    ease: "linear",
                                    type: "just",
                                }}
                                className="contact-icon"
                            >
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    target="_blank"
                                    href="https://leetcode.com/u/deepshah1358/"
                                >
                                    <img
                                        style={{ width: "30px" }}
                                        src="./image/leetcode.svg"
                                        alt="leetcode"
                                    />
                                </motion.a>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    ease: "linear",
                                    type: "just",
                                }}
                                className="contact-icon"
                            >
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    target="_blank"
                                    href="https://www.naukri.com/code360/profile/ef653cc7-08ce-4588-8a6c-71f45bb3129c"
                                >
                                    <img
                                        style={{ width: "30px" }}
                                        src="./image/coding_ninja.png"
                                        alt="coding ninja"
                                    />
                                </motion.a>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    ease: "linear",
                                    type: "just",
                                }}
                                className="contact-icon"
                            >
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    target="_blank"
                                    href="https://www.hackerrank.com/IamDeep7"
                                >
                                    <img
                                        src="./image/hackerrank.svg"
                                        alt="hackerrank"
                                    />
                                </motion.a>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
