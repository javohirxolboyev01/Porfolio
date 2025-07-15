import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTelegramPlane, FaEnvelope, FaGithub } from "react-icons/fa";

const socials = [
  {
    icon: <FaTelegramPlane size={22} />, link: "https://t.me/xolboyev00", label: "Telegram"
  },
  {
    icon: <FaEnvelope size={22} />, link: "mailto:javohirxolboyev0232@gmail.com", label: "Email"
  },
  {
    icon: <FaGithub size={22} />, link: "https://github.com/javohirxolboyev01", label: "GitHub"
  },
];

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="max-w-2xl mx-auto py-24 px-4 flex flex-col gap-10">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-[#232946] mb-4 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>
      <motion.p
        className="text-lg text-[#232946]/80 text-center max-w-xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Have a project in mind or want to connect? Send me a message or reach out via social links below.
      </motion.p>
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border border-[#e6f0fa] rounded-md px-4 py-2 focus:outline-none focus:border-[#0057ff] text-[#232946]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border border-[#e6f0fa] rounded-md px-4 py-2 focus:outline-none focus:border-[#0057ff] text-[#232946]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="border border-[#e6f0fa] rounded-md px-4 py-2 focus:outline-none focus:border-[#0057ff] text-[#232946] resize-none"
        />
        <motion.button
          type="submit"
          className="bg-[#0057ff] text-white font-bold py-3 rounded-md shadow-md hover:bg-[#232946] transition-colors duration-200 text-lg"
          whileTap={{ scale: 0.97 }}
        >
          {sent ? "Message Sent!" : "Send Message"}
        </motion.button>
      </form>
      <div className="flex justify-center gap-6 mt-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e6f0fa] hover:bg-[#0057ff] hover:text-white text-[#232946] p-3 rounded-full shadow-md transition-all"
            title={s.label}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact; 