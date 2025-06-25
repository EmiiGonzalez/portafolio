import { motion } from "motion/react";
import { FiSend } from "react-icons/fi";
import { WindowsBar } from "../shared/WindowsBar";
import { FaArrowRight } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { social } from "../../config/about_me/info";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast from "react-hot-toast";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export const WindowsForm = () => {
  const { github, linkedin, email: emailSocial } = social;

  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const sendEmail = (e: Inputs) => {
    const { name: user_name, email: user_email, message } = e;

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { user_name, user_email, message },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("¡Mensaje enviado con éxito!", {
            icon: "🚀",
            style: {
              borderRadius: "10px",
              background: "#1E1E1E",
              color: "#22C55E",
              border: "1px solid #22C55E",
            },
          });
          reset();
        },
        () => {
          toast.error("Error al enviar el mensaje. Intenta de nuevo.", {
            icon: "😓",
            style: {
              borderRadius: "10px",
              background: "#1E1E1E",
              color: "#EF4444",
              border: "1px solid #EF4444",
            },
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsSending(true);
    sendEmail(data);
  };

  return (
    <motion.section
      id="contacto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full h-full bg-[#1E1E1E] p-3 my-5 rounded-md font-mono md:w-4/5 md:min-h-full md:p-6 mb-10 md:mx-auto shadow-2xl border border-gray-700/50"
    >
      <div className="relative rounded-md bg-[#2D2D2D] flex items-center justify-between w-full">
        <WindowsBar>
          <p className="text-[#9CA3AF] text-sm mx-2 md:text-lg">contacto.sh</p>
        </WindowsBar>
      </div>

      <div className="my-4">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-green-400 flex items-center mb-6"
        >
          <FaArrowRight className="mr-2" />$ contact --form
        </motion.p>
        
        <motion.form
          initial={{ opacity: 0, y: +50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-green-400 my-2 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-green-400 font-medium">
              Nombre:
            </label>
            <input
              className={`bg-[#2D2D2D] p-3 rounded-md focus:bg-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all text-white placeholder-gray-500 ${
                errors.name ? "border border-red-500 animate-shake" : "border border-gray-600/50"
              }`}
              type="text"
              id="name"
              placeholder="Tu nombre completo"
              {...register("name", {
                required: true,
                onBlur: () => trigger("name"),
              })}
            />
            {errors.name && (
              <p className="text-red-400 text-sm">El nombre es requerido</p>
            )}
          </div>
          
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-green-400 font-medium">
              Correo electrónico:
            </label>
            <input
              className={`bg-[#2D2D2D] p-3 rounded-md focus:bg-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all text-white placeholder-gray-500 ${
                errors.email ? "border border-red-500 animate-shake" : "border border-gray-600/50"
              }`}
              type="email"
              id="email"
              placeholder="tu@email.com"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                onBlur: () => trigger("email"),
              })}
            />
            {errors.email && (
              <p className="text-red-400 text-sm">
                El correo electrónico es requerido y debe tener un formato válido
              </p>
            )}
          </div>
          
          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-green-400 font-medium">
              Mensaje:
            </label>
            <textarea
              className={`bg-[#2D2D2D] p-3 rounded-md focus:bg-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all resize-none text-white placeholder-gray-500 ${
                errors.message ? "border border-red-500 animate-shake" : "border border-gray-600/50"
              }`}
              id="message"
              placeholder="Cuéntame sobre tu proyecto o idea..."
              {...register("message", {
                required: true,
                minLength: 10,
                maxLength: 500,
                onBlur: () => trigger("message"),
              })}
              rows={5}
            />
            {errors.message && (
              <p className="text-red-400 text-sm">
                {errors.message.type === "required"
                  ? "El mensaje es requerido"
                  : errors.message.type === "minLength"
                  ? "El mensaje debe tener al menos 10 caracteres"
                  : errors.message.type === "maxLength"
                  ? "El mensaje debe tener menos de 500 caracteres"
                  : "El mensaje es requerido"}
              </p>
            )}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSending}
            className={`text-white flex items-center justify-center w-full md:w-auto py-3 px-6 rounded-lg border transition-all duration-300 font-medium ${
              errors.name || errors.email || errors.message
                ? "bg-red-500 border-red-500 animate-pulse cursor-not-allowed"
                : isSending
                ? "bg-green-600 border-green-600 cursor-wait"
                : "bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 hover:shadow-lg"
            }`}
          >
            <FiSend className={`mr-2 ${isSending ? 'animate-pulse' : ''}`} />
            {isSending ? "Enviando..." : "Enviar mensaje"}
          </motion.button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-green-400 flex items-center mt-10 mb-4"
        >
          <FaArrowRight className="mr-2" />$ ls social/
        </motion.p>
        
        <div className="flex flex-wrap gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors group"
          >
            <FiGithub className="size-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">GitHub</span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors group"
          >
            <FiLinkedin className="size-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">LinkedIn</span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={`mailto:${emailSocial}`}
            className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors group"
          >
            <MdOutlineEmail className="size-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Email</span>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};