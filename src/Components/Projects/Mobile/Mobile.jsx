import { motion } from "framer-motion";
import React from "react";
import "./Mobile.css";

const Mobile = ({ image }) => {
  return (
    <div className="mobile">
      <div className="mobile-square"></div>
      <div className="mobile-img">
        <motion.img
          initial={{ opacity: 0, y: -150 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.5,
            ease: "easeOut",
            type: "spring",
            stiffness: 70,
          }}
          src={`./image/${image}.jpg`}
          alt={image}
        />
      </div>
      <div className="circle-m"></div>
    </div>
  );
};

export default Mobile;
