import { motion } from "framer-motion";
import React from "react";
import "./Item.css";

const Item = ({ image, title, height = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.3,
        duration: 0.9,
        ease: "easeOut",
      }}
      className="skills-item"
    >
      <motion.img
        style={{ height: `${height}px` }}
        initial={{ opacity: 0, y: 150 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.5,
          ease: "easeOut",
          type: "spring",
          stiffness: 70,
        }}
        src={`./image/${image}.svg`}
        alt={image}
      />
      <motion.p
        initial={{ opacity: 0, y: 150 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeOut",
          type: "spring",
          stiffness: 70,
        }}
      >
        {title}
      </motion.p>
    </motion.div>
  );
};

export default Item;
