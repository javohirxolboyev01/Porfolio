import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTelegramPlane, FaEnvelope, FaPhone } from "react-icons/fa";
import avatarImg from "../assets/user1.jpgnpm ";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen text-center px-4">
      <div className="flex flex-col items-center flex-grow justify-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 mt-8"
        >
          <img
            src={avatarImg}
            alt="Avatar"
            className="w-40 h-40 rounded-full border-4 border-pink-500 object-cover shadow-lg mx-auto"
            draggable={false}
          />
        </motion.div>
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-black mb-4 z-10"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          Javohir Xolboyev
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-black mb-6 z-10"
          initial="hidden"
          animate="visible"
          variants={textVariant}
          transition={{ delay: 0.2 }}
        >
          Front-end Developer
        </motion.h2>

        <motion.div
          className="flex gap-4 justify-center mb-10 z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
            href="tel:+998772540945"
            className="bg-[#e6f0fa] hover:bg-[#c3e0f7] text-black p-3 rounded-full shadow-md transition-all"
            title="Phone"
          >
            <FaPhone size={22} />
          </a>
          <a
            href="mailto:javohirxolboyev0232@gmail.com"
            className="bg-[#e6f0fa] hover:bg-[#c3e0f7] text-black p-3 rounded-full shadow-md transition-all"
            title="Email"
          >
            <FaEnvelope size={22} />
          </a>
          <a
            href="https://t.me/xolboyev00"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e6f0fa] hover:bg-[#c3e0f7] text-black p-3 rounded-full shadow-md transition-all"
            title="Telegram"
          >
            <FaTelegramPlane size={22} />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="z-10"
        >
          <Link
            to="/portfolio"
            className="inline-block px-10 py-4 bg-[#232946] text-white font-bold rounded-full shadow-md hover:bg-[#3b3f58] transition-colors duration-200 text-xl tracking-wide"
          >
            Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
