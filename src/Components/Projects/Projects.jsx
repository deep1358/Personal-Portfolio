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
          image="sharestories"
          title="Share Stories"
          demo="https://share--stories.herokuapp.com/"
          code="https://github.com/deep1358/Share-Stories"
          content="This project is about creating stories, updating and deleting stories. Authentication is also provided and there is also like and comment features.
          And all stories are visible to every visitor."
        />
        <Project
          image="dummyportfolio"
          title="Dummy Portfolio"
          demo="https://portfolio-frontend-app.vercel.app/"
          code="https://github.com/deep1358/portfolio-frontend"
          content="This is dummy portfolio.
          It has blog section, portfolio section, about me section and Auth0 authentication. Admin can create and publish blogs and portfolios."
        />
        <Project
          image="blog"
          title="Blog"
          demo="https://blog-next-js-steel.vercel.app/"
          code="https://github.com/deep1358/Blog-NextJs"
          content="This is simple Blog website. In this user can login and create some awesome blogs. Every visitor can see the blogs but only authenticated user can comment"
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
          content="This is mini simulation of instagram app. In this user can login. User can create a post, delete post of own and can comment and like."
        />
      </div>
    </div>
  );
};

export default Projects;
