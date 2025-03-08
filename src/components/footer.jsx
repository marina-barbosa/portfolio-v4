import { ButtonCosmic } from "./button-cosmic";
import { handleDownload } from "../utils/download-cv";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ContactModal } from "./contact-modal";
export const Footer = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <footer className="tracking-widest relative w-full py-8 border-t border-gray-100 text-neutral-700">
      <div className="mx-auto px-4 max-w-5xl">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
          {/* Coluna da esquerda - Connect */}
          <div className="font-ibm  flex-1 flex flex-col items-center xl:items-start justify-between h-full pb-2">
            <div className="no-mask-section">
              <h3 className="py-3 font-raleway uppercase text-lg tracking-wider no-mask-section">
                {t("connect")}
              </h3>
              <a
                href="mailto:marinabarbosa.exp@gmail.com"
                className="py-3 no-mask-section block text-sm hover:opacity-70 transition-opacity"
              >
                {t("email")}
              </a>
              <a
                href="tel:+5513996697841"
                className="py-3 no-mask-section block text-sm hover:opacity-70 transition-opacity"
              >
                {t("phone")}
              </a>
            </div>
          </div>
          {/* Logo */}
          <div className="open-mini-ball-mask flex-1 flex justify-center items-center">
            <a href="#hero">
              <img
                src="/twitch-dinodance.gif"
                className="h-10 open-mask-medium"
              />
            </a>
          </div>
          {/* Coluna da direita - Créditos */}
          <div className="font-ibm flex-1 flex flex-col items-center xl:items-end justify-between h-full">
            <div>
              <p className="open-mask-ball mouse-color-changer text-xs text-gray-600 mb-1 text-right pe-2">
                {t("made-in-brazil")}
              </p>
              <p className="open-mask-ball mouse-color-changer text-xs text-gray-600 mb-6 text-right pe-2">
                {t("created-by")}
              </p>
              <div className="open-mask-ball flex space-x-3 mt-2">
                <ButtonCosmic onClick={() => setIsModalOpen(true)}>
                  {t("sayHi")}
                </ButtonCosmic>
                <ButtonCosmic onClick={handleDownload}>
                  {t("getCV")}
                </ButtonCosmic>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </footer>
  );
};
