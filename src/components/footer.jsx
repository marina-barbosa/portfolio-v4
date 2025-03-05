import { ButtonCosmic } from "./button-cosmic";
import { handleDownload } from "../utils/download-cv";
export const Footer = () => {
  return (
    <footer className="tracking-widest relative w-full py-8 border-t border-gray-100">
      <div className="mx-auto px-4 max-w-5xl">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
          {/* Coluna da esquerda - Connect */}
          <div className="flex-1 flex flex-col items-center xl:items-start justify-between h-full pb-2">
            <div className="no-mask-section">
              <h3 className="py-3 font-bold text-sm tracking-wider no-mask-section">
                CONNECT
              </h3>
              <a
                href="mailto:marinabarbosa.exp@gmail.com"
                className="py-3 no-mask-section block text-sm hover:opacity-70 transition-opacity"
              >
                Email: marinabarbosa.exp@gmail.com
              </a>
              <a
                href="tel:+5513996697841"
                className="py-3 no-mask-section block text-sm hover:opacity-70 transition-opacity"
              >
                Phone: +55 (13) 99669-7841
              </a>
            </div>
          </div>
          {/* Logo */}
          <div className="open-mini-ball-mask flex-1 flex justify-center items-center">
            <img
              src="/twitch-dinodance.gif"
              className="h-10 open-mask-medium"
            />
          </div>
          {/* Coluna da direita - Créditos */}
          <div className="font-ibm flex-1 flex flex-col items-center xl:items-end justify-between h-full">
            <div>
              <p className="open-mask-ball mouse-color-changer text-xs text-gray-600 mb-1 text-right pe-2">
                Made in Brazil
              </p>
              <p className="open-mask-ball mouse-color-changer text-xs text-gray-600 mb-6 text-right pe-2">
                Created & Coded by Marina
              </p>
              <div className="open-mask-ball flex space-x-3 mt-2">
                <ButtonCosmic>say hi</ButtonCosmic>
                <ButtonCosmic onClick={handleDownload}>get cv</ButtonCosmic>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
