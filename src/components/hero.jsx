
import { TitleHero } from "../fx/title-hero";
import TypingFx from "../fx/typing-fx";
import { ButtonCosmic } from "./button-cosmic";
import { handleDownload } from "../utils/download-cv";
import { useState } from "react";
import { ContactModal } from "./contact-modal";
import { useTranslation } from "react-i18next";
export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const { t } = useTranslation();
    return (
      <section
        id="hero"
        className="mx-auto h-screen flex flex-col items-center justify-center font-raleway"
      >
        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="cosmic-orb orb-1"></div>
          <div className="cosmic-orb orb-2"></div>
          <div className="cosmic-orb orb-3"></div>
        </div>
        <h1 className="open-mask-ball mouse-color-changer mb-4 z-10 mx-auto max-w-[78vw] m-10 text-5xl sm:text-7xl uppercase font-bold text-center">
          <span className="start-hacker-scrambles">{t("you-dream")}</span>{" "}
          <br className="sm:hidden" />{" "}
          <span className="start-hacker-scrambles">{t("i-create")}</span> <br />
          <span className="start-hacker-scrambles">{t("just-like-that")}</span>
        </h1>
        {/* <span className="relative mb-4 z-10 mx-auto max-w-[78vw] m-10">
          <TitleHero />
        </span> */}
        <div className="relative h-[28px] min-w-[200px]">
          <TypingFx />
        </div>
        <div className="open-mini-ball-mask mt-10 z-50 flex gap-4">
          <ButtonCosmic onClick={() => setIsModalOpen(true)}>
            {t("sayHi")}
          </ButtonCosmic>
          <ButtonCosmic onClick={handleDownload}>{t("getCV")}</ButtonCosmic>
        </div>

        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        {/* CSS for the gradient orbs */}
        <style>{`
        .cosmic-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
        }

        .orb-1 {
          width: 600px;
          height: 500px;
          background: linear-gradient(135deg, #a78bfa, #818cf8);
          top: -300px;
          left: 150px;
          opacity: 0.3;
          animation: float 5s ease-in-out infinite;
        }

        .orb-2 {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #60a5fa, #34d399);
          top: 30%;
          right: 20%;
          opacity: 0.6;
          animation: float 5s ease-in-out infinite 1s;
        }

        .orb-3 {
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, #ec4899, #818cf8);
          bottom: 20%;
          right: 30%;
          opacity: 0.6;
          animation: float 5s ease-in-out infinite 3s;
        }

        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(40px, 70px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
      </section>
    );
};

//  from-indigo-500 via-pink-500 to-sky-400