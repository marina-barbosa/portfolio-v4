/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FiUser, FiMessageSquare } from "react-icons/fi";
import { RxEnvelopeClosed } from "react-icons/rx";
import { ButtonCosmic } from "../components/button-cosmic";
import { useTranslation } from "react-i18next";

export const ContactModalFormSubmit = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [status, setStatus] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/marinabarbosa.exp@gmail.com",
        { method: "POST", body: formData }
      );

      if (response.ok) {
        setStatus("✅ Mensagem enviada com sucesso!");
        e.target.reset();
      } else {
        setStatus("❌ Erro ao enviar, tente novamente.");
      }
    } catch (err) {
      setStatus("⚠️ Falha de conexão, tente mais tarde.");
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          className="relative w-[90%] max-w-lg bg-white/80 backdrop-blur-xl p-8 rounded-sm shadow-2xl border border-white/20"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-black/5"
          >
            <IoClose className="w-5 h-5 text-gray-500" />
          </button>

          {/* Header */}
          <h2 className="text-4xl font-bold">{t("contactModal.title")}</h2>
          <p className="text-gray-600 mt-2">{t("contactModal.description")}</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div className="input-wrapper">
              <FiUser className="input-icon" />
              <input
                type="text"
                name="name"
                required
                placeholder={t("contactModal.form.name.placeholder")}
                className="input-underline"
              />
            </div>

            <div className="input-wrapper">
              <RxEnvelopeClosed className="input-icon" />
              <input
                type="email"
                name="email"
                required
                placeholder={t("contactModal.form.email.placeholder")}
                className="input-underline"
              />
            </div>

            <div className="textarea-wrapper">
              <FiMessageSquare className="textarea-icon" />
              <textarea
                name="message"
                required
                placeholder={t("contactModal.form.message.placeholder")}
                rows={4}
                className="textarea-underline"
              />
            </div>

            <div className="flex justify-end gap-4">
              <ButtonCosmic type="submit">
                {t("contactModal.form.submit")}
              </ButtonCosmic>
            </div>
          </form>

          {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
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
