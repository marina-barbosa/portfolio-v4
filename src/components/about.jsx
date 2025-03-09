import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const [activeTab, setActiveTab] = useState("rh");
  const { t } = useTranslation();

const tabs = [
  {
    id: "rh",
    label: "RH",
    content: `${t("rh-bio")}`,
  },
  {
    id: "dev",
    label: "Dev",
    content: `${t("dev-bio")}`,
  },
  {
    id: "fun",
    label: "Fun",
    content: `${t("fun-bio")}`,
  },
  // {
  //   id: "leigo",
  //   label: "Cliente",
  //   content: `
  //     Oi, eu sou a Marina, desenvolvedora de software apaixonada por criar soluções digitais que realmente fazem a diferença.
  //     Meu trabalho é transformar ideias em sistemas eficientes,
  //     seja um site, um aplicativo ou uma plataforma personalizada para o seu negócio.
  //     Já desenvolvi desde lojas virtuais até sistemas de gestão,
  //     sempre focando em usabilidade, desempenho e segurança.
  //     O objetivo é simples: facilitar processos, automatizar tarefas e trazer resultados concretos para sua empresa.
  //     Se você tem um projeto ou quer entender como a tecnologia pode ajudar,
  //     estou aqui para te guiar da forma mais simples e direta possível!`,
  // },
];

  return (
    <section className="font-raleway relative flex items-center justify-center">
      <div className="max-w-6xl min-h-[550px] mx-auto flex flex-col xl:flex-row items-center xl:items-start">
        <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center mx-auto">
          <img
            src="/img-placeholder.png"
            // src="/me.jpg"
            alt="About me"
            className="point-4 w-80 h-80 rounded-full object-cover self-start border mt-10 md:mb-20 xl:mb-0"
          />
        </div>

        <div className="md:w-2/3 xl:w-1/2 text-center md:text-left md:pl-8 xl:pl-0 xl:pr-16 flex flex-col md:-ms-11">
          <h2 className="text-lg tracking-widest uppercase text-[#555555] mb-6">
            <span className="reveal-text reveal-text-title">
              {t("who-i-am")}
            </span>
          </h2>

          <div className="flex text-[#555555] mb-6 text-lg tracking-widest mx-auto sm:mx-0">
            {tabs.map((tab, index) => (
              <div key={tab.id} className="flex items-center">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`space-x-2 cursor-pointer hover:text-[lightseagreen] ${
                    activeTab === tab.id ? "font-bold text-[lightseagreen]" : ""
                  }`}
                >
                  {tab.label}
                </button>
                {index < tabs.length - 1 && <span className="mx-2">|</span>}
              </div>
            ))}
          </div>

          <div className="text-lg font-light font-spacegrotesk sm:leading-relaxed tracking-normal max-w-[700px] text-gray-600 leading-tight min-h-[250px] flex items-start">
            <span className="reveal-text reveal-text-body">
              {tabs.find((tab) => tab.id === activeTab)?.content}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
