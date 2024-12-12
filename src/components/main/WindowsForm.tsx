import { motion } from "motion/react";
import { FiSend } from "react-icons/fi";
import { WindowsBar } from "../shared/WindowsBar";
import { FaArrowRight } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { social } from "../../config/about_me/info";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export const WindowsForm = () => {
  const { github, linkedin, email: emailSocial } = social;

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="name">Nombre:</label>
            <input
              className={`bg-[#2D2D2D] p-2 rounded-md focus:bg-[#2D2D2D] focus:outline-none ${
                errors.name ? "border border-red-500 animate-shake" : ""
              }`}
              type="text"
              id="name"
              {...register("name", {
                required: true,
                onBlur: () => trigger("name"),
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">El nombre es requerido</p>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email">Correo electrónico:</label>
            <input
              className={`bg-[#2D2D2D] p-2 rounded-md focus:bg-[#2D2D2D] focus:outline-none ${
                errors.email ? "border border-red-500 animate-shake" : ""
              }`}
              type="email"
              id="email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                onBlur: () => trigger("email"),
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                El correo electrónico es requerido y debe tener un formato
                válido
              </p>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              className={`bg-[#2D2D2D] p-2 rounded-md focus:bg-[#2D2D2D] focus:outline-none resize-none ${
                errors.message ? "border border-red-500 animate-shake" : ""
              }`}
              id="message"
              {...register("message", {
                required: true,
                minLength: 10,
                maxLength: 200,
                onBlur: () => trigger("message"),
              })}
              rows={4}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">
                {errors.message.type === "required"
                  ? "El mensaje es requerido"
                  : errors.message.type === "minLength"
                  ? "El mensaje debe tener al menos 10 caracteres"
                  : errors.message.type === "maxLength"
                  ? "El mensaje debe tener menos de 200 caracteres"
                  : "El mensaje es requerido"}
              </p>
            )}
          </div>
          <motion.button
            initial={{ opacity: 0, y: +50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`text-white flex items-center mt-4  py-2 px-4 rounded-lg border border-transparent ${errors.name || errors.email || errors.message ? "bg-red-500 animate-pulse" : "bg-[#22C55E]"}`}
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
          <a
            href={github}
            target="_blank"
            className="flex items-center mt-4 hover:text-[#22C55E] hover:underline"
          >
            <FiGithub className="mr-2" /> Github{" "}
          </a>
          <a
            href={linkedin}
            target="_blank"
            className="flex items-center mt-4 hover:text-[#22C55E] hover:underline"
          >
            <FiLinkedin className="mr-2" /> Linkedin
          </a>
          <a
            href={`mailto:${emailSocial}`}
            target="_blank"
            className="flex items-center mt-4 hover:text-[#22C55E] hover:underline"
          >
            <MdOutlineEmail className="mr-2" /> Email
          </a>
        </div>
      </div>
    </motion.section>
  );
};
