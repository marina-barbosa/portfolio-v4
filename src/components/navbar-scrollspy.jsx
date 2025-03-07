import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ButtonLanguage } from "./button-language";

export const NavbarScrollspy = () => {
  const [activeSection, setActiveSection] = useState("");
   const { t } = useTranslation();

  useEffect(() => {
    const sections = document.querySelectorAll("span[id]");

    const handleScroll = () => {
      let scrollPosition = window.scrollY + 200; // Ajuste fino para ativação mais precisa

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        // Verifica se o scroll está dentro da seção (de cima para baixo)
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.getAttribute("id"));
        }

        // Lógica para verificar se passou do "fim" da seção, ao rolar para cima
        const sectionEndId = section.getAttribute("id") + "-fim"; // ID da seção de fim
        const sectionEnd = document.getElementById(sectionEndId);

        if (sectionEnd) {
          const sectionEndTop = sectionEnd.offsetTop;
          const sectionEndBottom = sectionEndTop + sectionEnd.offsetHeight;

          // Quando o scroll passa do "fim" de uma seção, ativa a seção anterior
          if (
            scrollPosition >= sectionEndTop &&
            scrollPosition < sectionEndBottom
          ) {
            setActiveSection(section.getAttribute("id"));
          }

          // Lógica para ativar a seção anterior ao rolar para cima da seção de fim
          if (scrollPosition < sectionEndTop && scrollPosition > sectionTop) {
            setActiveSection(section.getAttribute("id"));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="open-mini-ball-mask font-raleway sm:tracking-widest fixed top-8 right-4 sm:right-8 z-50 text-[14px] 2xl:text-[18px] uppercase text-right">
      <ul className="sm:space-y-2 2xl:space-y-3">
        <li>
          <a
            href="#projetos"
            data-value={t("projects")}
            className={`hacker-scrambles ${
              activeSection === "projetos"
                ? "text-[lightseagreen]"
                : "text-[#555555]"
            }`}
          >
            {t("projects")}
          </a>
        </li>
        <li>
          <a
            href="#sobre"
            data-value={t("about")}
            className={`hacker-scrambles ${
              activeSection === "sobre"
                ? "text-[lightseagreen] font-bold"
                : "text-[#555555]"
            }`}
          >
            {t("about")}
          </a>
        </li>
        <li>
          <a
            href="#contato"
            data-value={t("contact")}
            className={`hacker-scrambles ${
              activeSection === "contato"
                ? "text-[lightseagreen] font-bold"
                : "text-[#555555]"
            }`}
          >
            {t("contact")}
          </a>
        </li>
        <li className="float-right">
          <ButtonLanguage />
        </li>
      </ul>
    </nav>
  );
};
