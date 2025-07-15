import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
import { FaUserFriends, FaComments, FaClock, FaFlagUsa } from "react-icons/fa";

const skills = [
  {
    name: "JavaScript (ES6+)",
    icon: <SiJavascript className="text-yellow-400" size={32} />,
    color: "#f7df1e",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" size={32} />,
    color: "#3178c6",
  },
  {
    name: "React.js",
    icon: <SiReact className="text-cyan-400" size={32} />,
    color: "#61dafb",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black" size={32} />,
    color: "#000",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 className="text-orange-500" size={32} />,
    color: "#e34c26",
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="text-blue-400" size={32} />,
    color: "#264de4",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" size={32} />,
    color: "#38bdf8",
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux className="text-purple-500" size={32} />,
    color: "#764abc",
  },
];

const softSkills = [
  {
    name: "Problem-solving & logical thinking",
    icon: <FaComments className="text-[#0057ff]" size={28} />,
    color: "#0057ff",
  },
  {
    name: "Team collaboration & communication",
    icon: <FaUserFriends className="text-[#3b82f6]" size={28} />,
    color: "#3b82f6",
  },
  {
    name: "Time management",
    icon: <FaClock className="text-[#38bdf8]" size={28} />,
    color: "#38bdf8",
  },
];

const languages = [
  {
    name: "Uzbek – Native",
    icon: <span className="text-2xl">🇺🇿</span>,
    color: "#1faa52",
  },
  {
    name: "Korean – Upper-Intermediate",
    icon: <span className="text-2xl">🇰🇷</span>,
    color: "#3b82f6",
  },
  {
    name: "English – Intermediate (B1)",
    icon: <span className="text-2xl">en</span>,
    color: "#ef4444",
  },
];

const cardVariants = {
  initial: { y: 0, boxShadow: "0 2px 8px 0 rgba(44,62,80,0.06)" },
  hover: {
    y: -12,
    rotateX: 8,
    rotateY: -8,
    boxShadow: "0 12px 32px 0 rgba(44,62,80,0.18)",
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};

const About = () => {
  return (
    <section className="max-w-5xl mx-auto py-24 px-4 flex flex-col gap-12">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-[#232946] mb-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl text-[#232946]/80 text-center max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Motivated and detail-oriented Junior Frontend Developer with hands-on
        experience building responsive and dynamic web applications. Skilled in
        modern frontend technologies including JavaScript, TypeScript, React.js,
        and Next.js.
      </motion.p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="bg-white rounded-2xl p-6 flex flex-col items-center gap-3 border-t-4 shadow-md cursor-pointer"
            style={{ borderColor: skill.color }}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            whileTap="hover"
            transition={{ duration: 0.2 }}
          >
            <div className="mb-2">{skill.icon}</div>
            <div className="text-base md:text-lg font-semibold text-[#232946] text-center">
              {skill.name}
            </div>
          </motion.div>
        ))}
      </div>
      <h3 className="text-2xl font-bold text-[#232946] mb-4 mt-8 text-center">
        Soft Skills
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {softSkills.map((skill) => (
          <motion.div
            key={skill.name}
            className="bg-white rounded-2xl p-6 flex flex-col items-center gap-3 border-t-4 shadow-md cursor-pointer"
            style={{ borderColor: skill.color }}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            whileTap="hover"
            transition={{ duration: 0.2 }}
          >
            <div className="mb-2">{skill.icon}</div>
            <div className="text-base md:text-lg font-semibold text-[#232946] text-center">
              {skill.name}
            </div>
          </motion.div>
        ))}
      </div>
      <h3 className="text-2xl font-bold text-[#232946] mb-4 mt-8 text-center">
        Languages
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {languages.map((lang) => (
          <motion.div
            key={lang.name}
            className="bg-white rounded-2xl p-6 flex flex-col items-center gap-3 border-t-4 shadow-md cursor-pointer"
            style={{ borderColor: lang.color }}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            whileTap="hover"
            transition={{ duration: 0.2 }}
          >
            <div className="mb-2">{lang.icon}</div>
            <div className="text-base md:text-lg font-semibold text-[#232946] text-center">
              {lang.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
