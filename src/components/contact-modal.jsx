/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FiUser, FiMessageSquare, FiSend } from "react-icons/fi";
import { RxEnvelopeClosed } from "react-icons/rx";
import { ButtonCosmic } from "./button-cosmic";

export const ContactModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // return (
  //   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
  //     <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
  //       <h2 className="text-xl font-bold mb-4">Say Hi 👋</h2>
  //       <form
  //         name="contact"
  //         method="POST"
  //         data-netlify="true"
  //         data-netlify-honeypot="bot-field"
  //         className="flex flex-col"
  //       >
  //         <input type="hidden" name="form-name" value="contact" />
  //         <label className="mb-2">
  //           Your Name
  //           <input
  //             type="text"
  //             name="name"
  //             required
  //             className="w-full p-2 border rounded mt-1"
  //           />
  //         </label>
  //         <label className="mb-2">
  //           Your Email
  //           <input
  //             type="email"
  //             name="email"
  //             required
  //             className="w-full p-2 border rounded mt-1"
  //           />
  //         </label>
  //         <label className="mb-4">
  //           Your Message
  //           <textarea
  //             name="message"
  //             required
  //             className="w-full p-2 border rounded mt-1"
  //             rows={4}
  //           />
  //         </label>
  //         <button
  //           type="submit"
  //           className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
  //         >
  //           Send
  //         </button>
  //       </form>
  //       <button
  //         onClick={onClose}
  //         className="mt-4 text-gray-600 hover:text-gray-800"
  //       >
  //         Close
  //       </button>
  //     </div>
  //   </div>
  // );

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        {/* Backdrop with blur */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="relative w-[90%] max-w-lg bg-white/80 backdrop-blur-xl p-8 rounded-sm shadow-2xl border border-white/20"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-black/5 transition-colors"
            aria-label="Close modal"
          >
            <IoClose className="w-5 h-5 text-gray-500" />
          </button>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold">Let&apos;s Connect!</h2>
            <p className="text-gray-600 mt-2">
              Have a project in mind? I&apos;d love to hear about it.
            </p>
          </div>

          {/* Form */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            {/* Name field */}
            <div className="input-wrapper">
              <FiUser className="input-icon" />
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="input-underline"
              />
            </div>

            {/* Email field */}
            <div className="input-wrapper">
              <RxEnvelopeClosed className="input-icon" />
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="input-underline"
              />
            </div>

            {/* Message field */}
            <div className="textarea-wrapper">
              <FiMessageSquare className="textarea-icon" />
              <textarea
                name="message"
                required
                placeholder="Your message"
                rows={4}
                className="textarea-underline"
              />
            </div>

            {/* Submit button */}
            <div className="flex justify-end gap-4">
              <ButtonCosmic type="submit">
                say hi
                {/* <FiSend className="w-4 h-4 transition-transform group-hover:translate-x-1" /> */}
              </ButtonCosmic>
            </div>
          </form>
        </motion.div>
      </motion.div>

      <style>
        {`
.input-wrapper {
  position: relative;
  width: 100%;
}

.input-underline {
  width: 100%;
  padding: 12px;
  padding-left: 40px; /* Garante espaço para o ícone */
  background: rgba(255, 255, 255, 0.5); /* Fundo branco semi-transparente */
  border: none;
  outline: none;
  border-bottom: 2px solid transparent;
  transition: border-color 1s ease-in-out;
}

/* Efeito da borda inferior */
.input-wrapper::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: cyan;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 1s ease-in-out;
}

.input-wrapper:focus-within::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Ícone ajustado para inputs normais */
.input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: gray;
}

/* Ajuste específico para o textarea */
.textarea-wrapper {
  position: relative;
  width: 100%;
}

.textarea-underline {
  width: 100%;
  padding: 12px;
  padding-left: 40px; /* Mantém alinhado com os outros campos */
  background: rgba(255, 255, 255, 0.5);
  border: none;
  outline: none;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s ease-in-out;
  resize: none;
  height: 120px; /* Ajusta a altura */
}

/* Ajuste na borda inferior do textarea */
.textarea-wrapper::after {
  content: "";
  position: absolute;
  bottom: 8px; /* Corrige o deslocamento da borda */
  left: 0;
  width: 100%;
  height: 2px;
  background: cyan;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 1s ease-in-out;
}

.textarea-wrapper:focus-within::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Ícone do textarea ajustado */
.textarea-icon {
  position: absolute;
  left: 12px;
  top: 16px; /* Move o ícone para alinhar ao texto */
  width: 20px;
  height: 20px;
  color: gray;
}

        `}
      </style>
    </>
  );
};
