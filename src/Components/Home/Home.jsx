import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
	const constraintsRef = useRef(null);

	return (
		<motion.div className="home" ref={constraintsRef}>
			<motion.div
				drag
				dragConstraints={constraintsRef}
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.2 }}
				transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
				className="circle circle-1"
			/>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.2 }}
				transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
				className="circle circle-2"
			></motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.2 }}
				transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
				className="circle circle-3"
			></motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.2 }}
				transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
				className="triangle triangle-1"
			></motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.2 }}
				transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
				className="triangle triangle-3"
			></motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.2 }}
				transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
				className="triangle triangle-4"
			></motion.div>
			<motion.div
				drag
				dragConstraints={constraintsRef}
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.2 }}
				transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
				className="triangle triangle-5"
			></motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.2 }}
				transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
				drag
				dragConstraints={constraintsRef}
				className="square"
			></motion.div>
			<div className="title">
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
					className="triangle triangle-2"
				></motion.span>

				<motion.h1
					initial={{ opacity: 0, y: 150 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						delay: 0.3,
						duration: 0.5,
						ease: "easeOut",
						type: "spring",
						stiffness: 70,
					}}
				>
					I'm
					<span className="name">Deep Shah</span>
				</motion.h1>
			</div>
			<div style={{ maxHeight: "18vh", overflow: "hidden" }}>
				<motion.h3
					initial={{ y: 150 }}
					animate={{ y: 0 }}
					transition={{
						delay: 0.6,
						duration: 0.5,
						ease: "easeOut",
						type: "spring",
						stiffness: 60,
					}}
				>
					Software Engineer
				</motion.h3>
			</div>
			<div style={{ maxHeight: "10vh", overflow: "hidden" }}>
				<motion.p
					initial={{ y: 150 }}
					animate={{ y: 0 }}
					transition={{
						delay: 0.8,
						duration: 0.5,
						ease: "easeOut",
						type: "spring",
						stiffness: 50,
					}}
				>
					Somebody who has a passion for programming, problem solving
				</motion.p>
			</div>
			<div style={{ maxHeight: "10vh", overflow: "hidden" }}>
				<motion.p
					initial={{ y: 150 }}
					animate={{ y: 0 }}
					transition={{
						delay: 0.8,
						duration: 0.5,
						ease: "easeOut",
						type: "spring",
						stiffness: 50,
					}}
				>
					and creative solutions.
				</motion.p>
			</div>
			<div className="buttons">
				<Link to="/contact">
					<motion.button
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{
							delay: 0.7,
							ease: "linear",
							type: "just",
						}}
						className="btn-primary"
					>
						Contact Me
					</motion.button>
				</Link>

				<a
					href="https://drive.google.com/file/d/1VQ1NFKzt_p_MFv21yeFQONv6eLtr_7zB/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
					<motion.button
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{
							delay: 0.7,
							ease: "linear",
							type: "just",
						}}
						className="btn-secondary"
					>
						See Resume
					</motion.button>
				</a>
			</div>
		</motion.div>
	);
};

export default Home;
