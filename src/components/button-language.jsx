import { HiLanguage } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

export const ButtonLanguage = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pt" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="cursor-pointer flex items-center gap-2 z-50 text-[#555555] hover:text-[lightseagreen]"
    >
      <HiLanguage size={20} />
      <span className="font-raleway sm:tracking-widest text-[14px] 2xl:text-[18px] uppercase">
        {i18n.language.toUpperCase()}
      </span>
    </button>
  );
};
