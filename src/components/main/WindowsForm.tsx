import { motion } from "motion/react";
import { FiSend } from "react-icons/fi";
import { WindowsBar } from "../shared/WindowsBar";
import { FaArrowRight } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { useState } from "react";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

export const WindowsForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.table({ name, email, message });
  };

  return (
    <motion.section
      id="contacto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full h-full bg-[#1E1E1E] p-3 my-5 rounded-md font-mono md:w-4/5 md:min-h-full md:p-6 mb-10 md:mx-auto"
    >
      <div className="relative rounded-md bg-[#2D2D2D]flex items-center justify-between w-full">
        <WindowsBar>
          <p className="text-[#9CA3AF] text-sm  mx-2 md:text-lg">contacto.sh</p>
        </WindowsBar>
      </div>

      <div className="my-4">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-green-400 flex items-center"
        >
          <FaArrowRight className="mr-2" />$ contact --form
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: +50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-green-400 my-2 "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="name">Nombre:</label>
            <input
              className="bg-[#2D2D2D] p-2 rounded-md focus:bg-[#2D2D2D] focus:outline-none"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email">Correo electrónico:</label>
            <input
              className="bg-[#2D2D2D] p-2 rounded-md focus:bg-[#2D2D2D] focus:outline-none"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              className="bg-[#2D2D2D] p-2 rounded-md focus:bg-[#2D2D2D] focus:outline-none resize-none"
              id="message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <motion.button
            initial={{ opacity: 0, y: +50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white flex items-center mt-4 bg-[#22C55E] py-2 px-4 rounded-lg border border-transparent"
          >
            <FiSend className="mr-2" />
            Enviar mensaje
          </motion.button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-green-400 flex items-center mt-10"
        >
          <FaArrowRight className="mr-2" />$ ls social/
        </motion.p>
        <div className="text-green-400 flex gap-6">
            <a href="#" className="flex items-center mt-4"><FiGithub className="mr-2"/> Github </a>
            <a href="#" className="flex items-center mt-4"><FiLinkedin className="mr-2"/> Linkedin</a>
            <a href="#" className="flex items-center mt-4"><MdOutlineEmail className="mr-2"/> Email</a>
        </div>
      </div>
    </motion.section>
  );
};
