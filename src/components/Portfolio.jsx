import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import movieImg from "../assets/movies.png";
import ecommerceImg from "../assets/e-commercee.png";

const projects = [
  {
    title: "Movie App",
    description: "A simple React application that allows users to search for movies using a public API. Built with responsive design and clean UI components.",
    tech: ["React", "TypeScript", "Tailwind CSS", "REST API", "Tanstack Query", "Redux Toolkit"],
    github: "https://github.com/javohirxolboyev01/movies-app",
    live: "https://movies-ten-phi.vercel.app/",
    color: "#0057ff",
    image: movieImg,
  },
  {
    title: "E-commerce App",
    description: "Developed a small e-commerce frontend with product listing, product details, and cart functionality using React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "REST API", "Tanstack Query", "Redux Toolkit"],
    github: "https://github.com/javohirxolboyev01/emart24-clone",
    live: "https://emart24-ui5z.vercel.app/",
    color: "#3b82f6",
    image: ecommerceImg,
  },
];

const Portfolio = () => {
  return (
    <section className="max-w-5xl mx-auto py-24 px-4 flex flex-col gap-12">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-[#232946] mb-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Portfolio
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            className="bg-white rounded-2xl shadow-md border-t-4 flex flex-col h-full transition-transform hover:-translate-y-2 hover:shadow-xl border-[#e6f0fa] overflow-hidden"
            style={{ borderColor: proj.color }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 * idx }}
            viewport={{ once: true }}
          >
            <a href={proj.live} target="_blank" rel="noopener noreferrer" className="block group">
              <motion.img
                src={proj.image}
                alt={proj.title + " screenshot"}
                className="w-full h-48 object-cover rounded-t-2xl border-b-2 border-[#e6f0fa]"
                style={{ borderColor: proj.color }}
                draggable={false}
                whileHover={{ opacity: 0.85, scale: 1.04, y: -6 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
              />
            </a>
            <div className="p-6 flex flex-col flex-1 z-10">
              <h3 className="text-2xl font-bold text-[#232946] mb-2">{proj.title}</h3>
              <p className="text-[#232946]/80 mb-4 flex-1">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-[#e6f0fa] text-[#0057ff] rounded-full text-xs font-semibold">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-[#232946] hover:text-[#0057ff] text-xl" title="GitHub">
                  <FaGithub />
                </a>
                <a href={proj.live} target="_blank" rel="noopener noreferrer" className="text-[#232946] hover:text-[#0057ff] text-xl" title="Live Demo">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
