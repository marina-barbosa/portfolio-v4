import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("rh");

const tabs = [
  {
    id: "rh",
    label: "RH",
    content: `
      Oi! Sou a Marina, dev fullstack e estudante de Engenharia de Software. Já trabalhei com Java, Spring Boot, Node.js, C#, .NET, PostgreSQL e React. Sou organizada, proativa e adoro resolver problemas. Atualmente, desenvolvo um e-commerce de kimonos, atuando no backend e frontend com Express e React.
    `,
  },
  {
    id: "dev",
    label: "Dev",
    content: `
      Sou dev fullstack desde 2023, focada em APIs robustas e interfaces intuitivas. Trabalho com Java, Spring Boot, C#, .NET, Node.js, Express, PostgreSQL, React, Angular e Tailwind. Uso TDD, Jest, JUnit, Docker e CI/CD. Atualmente, contribuo em um e-commerce de kimonos, sempre priorizando código limpo, segurança e escalabilidade.
    `,
  },
  {
    id: "fun",
    label: "Fun",
    content: `
      Fora do código, adoro desafios! 🎮 Mono Kassadin no LoL, 🍣 fã de sushi, 📺 viciada em séries e 🎨 exploradora de UI/UX. Sempre aprendendo algo novo, seja uma tecnologia, um jogo ou um prato diferente. Bora trocar uma ideia? 😃
    `,
  },
];

  return (
    <section className="font-raleway relative flex items-center justify-center">
      <div className="max-w-6xl min-h-[550px] mx-auto flex flex-col xl:flex-row items-center xl:items-start">
        <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center mx-auto">
          <img
            src="/img-placeholder.png"
            // src="/me.jpg"
            alt="About me"
            className="w-80 h-80 rounded-full object-cover self-start border mt-10 md:mb-20 xl:mb-0"
          />
        </div>

        <div className="md:w-2/3 xl:w-1/2 text-center md:text-left md:pl-8 xl:pl-0 xl:pr-16 flex flex-col md:-ms-11">
          <h2 className="text-lg font-medium tracking-widest uppercase text-[#555555] mb-6">
            <span className="reveal-text reveal-text-title">quem sou</span>
          </h2>

          <div className="flex text-[#555555] mb-6 font-medium text-lg tracking-widest mx-auto sm:mx-0">
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

          <div className="text-2xl text-gray-600 leading-tight sm:leading-relaxed font-ibm min-h-[250px] flex items-start">
            <span className="reveal-text reveal-text-body">
              {tabs.find((tab) => tab.id === activeTab)?.content}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
