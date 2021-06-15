import { motion } from "framer-motion";
import React from "react";
import "./Pc.css";

const Pc = ({ image }) => {
  return (
    <div className="pc">
      <div className="pc-image">
        <motion.img
          initial={{ opacity: 0, y: 150 }}
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
      <div className="pc-keyboard">
        <div className="pc-square"></div>
      </div>
    </div>
  );
};

export default Pc;
