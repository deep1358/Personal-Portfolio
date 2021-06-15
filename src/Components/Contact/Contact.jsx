/* eslint-disable react/jsx-no-target-blank */
import { motion } from "framer-motion";
import React, { useState } from "react";
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

  const { fullname, email, subject, msg } = form;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  let templateParams = {
    from_name: email,
    to_name: "deepshah1358@gmail.com",
    subject,
    message: msg,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          setSuccess(true);
          setForm({ fullname: "", email: "", subject: "", msg: "" });
          return;
        },
        (error) => {
          setError(error);
          return;
        }
      );
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
              transition={{
                delay: 0.4,
                ease: "linear",
                type: "just",
              }}
              className="btn-primary"
            >
              Submit
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
            <motion.div style={{ maxHeight: "15vh", overflow: "hidden" }}>
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
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.4,
                ease: "linear",
                type: "just",
              }}
            >
              <img
                style={{ width: "30px" }}
                src="./image/email.svg"
                alt="email"
              />
              <p>deepshah1358@gmail.com</p>
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
                  href="https://www.instagram.com/_.deep7._/"
                  target="_blank"
                >
                  <img src="./image/insta.svg" alt="instagram" />
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
                  <img src="./image/linkedin.svg" alt="linkedin" />
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
                  <img src="./image/github.svg" alt="github" />
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
                  href="https://www.fiverr.com/webmadeezy"
                >
                  <img
                    style={{ width: "30px" }}
                    src="./image/fiverr.svg"
                    alt="fiverr"
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
                  <img src="./image/hackerrank.svg" alt="hackerrank" />
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