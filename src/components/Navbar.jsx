import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Experience", to: "/experience" },
  { name: "Portfolio", to: "/portfolio" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-[#e6f0fa]"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-extrabold text-[#232946] tracking-wider">
          JX
        </NavLink>
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative px-2 py-1 text-lg font-medium transition-colors duration-200 rounded-md
                  ${isActive ? "text-[#0057ff] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-[#0057ff] after:rounded-md after:content-['']" : "text-[#232946] hover:text-[#0057ff]"}`
                }
                end={link.to === "/"}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar; 