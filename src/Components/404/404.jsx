import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "./404.css";

const PageNotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.4,
        duration: 0.5,
        ease: "easeOut",
      }}
      className="pagenotfound"
    >
      <div className="pnf-1">
        <h1>4</h1>
        <img src="./image/sad.svg" alt="sad face" />
        <h1>4</h1>
      </div>
      <div className="pnf-2">
        <h4>Whoops!</h4>
      </div>
      <div className="pnf-3">
        <p>The page you're looking for is not available</p>
      </div>
      <Link to="/">
        <button className="pnf-btn btn-secondary">Go to Home</button>
      </Link>
    </motion.div>
  );
};

export default PageNotFound;
