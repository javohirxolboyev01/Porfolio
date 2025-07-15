import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Najot Ta’lim",
    period: "2024.10 – 2025.07",
    role: "Frontend Web Development Student",
    description: "Completed an intensive, hands-on training program focused on modern frontend technologies and best practices. Covered core technologies including HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, and Next.js.",
    color: "#0057ff",
  },
  {
    company: "Personal Projects",
    period: "2023 – 2024",
    role: "Frontend Developer",
    description: "Built several real-world projects including a Movie App and E-commerce App using React, Tailwind CSS, and REST APIs. Practiced clean code and UI/UX principles.",
    color: "#3b82f6",
  },
];

const Experience = () => {
  return (
    <section className="max-w-3xl mx-auto py-24 px-4 flex flex-col gap-12">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-[#232946] mb-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      <div className="relative border-l-4 border-[#e6f0fa] pl-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            className="mb-12 last:mb-0 relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 * idx }}
            viewport={{ once: true }}
          >
            <span className="absolute -left-7 top-2 w-5 h-5 rounded-full border-4" style={{ borderColor: exp.color, background: '#fff' }}></span>
            <div className="bg-white rounded-xl shadow-md border-t-4" style={{ borderColor: exp.color }}>
              <div className="px-6 py-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-2">
                  <span className="text-lg font-bold text-[#232946]">{exp.company}</span>
                  <span className="text-sm text-[#0057ff] font-semibold">{exp.period}</span>
                </div>
                <div className="text-[#232946] font-semibold mb-1">{exp.role}</div>
                <div className="text-[#232946]/80 text-base">{exp.description}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 