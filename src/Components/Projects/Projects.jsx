import { motion } from "framer-motion";
import React from "react";
import Project from "./Project/Project";
import "./Projects.css";

const Projects = () => {
	return (
		<div className="projects">
			<div className="projects-title">
				<motion.h2
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
					Projects
				</motion.h2>
			</div>
			<div className="projects-container">
				<Project
					image="expensetracker"
					title="Expense Tracker"
					demo="https://expense-tracker-frontend.vercel.app/"
					code="https://github.com/deep1358/expense-tracker-frontend"
					content="This project is a full stack application that allows users to track and visualize their espenses."
				/>
				<Project
					image="dummyportfolio"
					title="Dummy Portfolio"
					demo="https://portfolio-frontend-app.vercel.app/"
					code="https://github.com/deep1358/portfolio-frontend"
					content="This is dummy portfolio. It features the blog section, the portfolio section, the about section and Auth0 authentication. An administrator may create and publish blogs and portfolios."
				/>
				<Project
					image="sharestories"
					title="Share Stories"
					demo="https://share--stories.herokuapp.com/"
					code="https://github.com/deep1358/Share-Stories"
					content="This project involves the creation, maintenance and deletion of stories. Authentication is also provided. There are also features such as likes & comments. And all the stories are visible to every guest."
				/>
				<Project
					image="ecommerce"
					title="Ecommerce"
					demo="https://ecommerce-nextjs-henna.vercel.app/"
					code="https://github.com/deep1358/Ecommerce-Nextjs"
					content="This is simulation of real ecommerce website. In this admin can create and delete products. User can see the products and even purchase them."
				/>
				<Project
					image="socialmedia"
					title="Minimal Social Media"
					demo="https://minimal-social-media.vercel.app/"
					code="https://github.com/deep1358/Minimal-social-media"
					content="It's a miniature simulation of the Instagram application. In that user may log in. The user may create a post, delete the post of their own and can comment and like it."
				/>
				<Project
					image="blog"
					title="Blog"
					demo="https://blog-next-js-steel.vercel.app/"
					code="https://github.com/deep1358/Blog-NextJs"
					content="This is simply a blog site. Within that user can connect and create impressive blogs. While each guest can view the blogs, only the authenticated user can comment."
				/>
			</div>
		</div>
	);
};

export default Projects;
