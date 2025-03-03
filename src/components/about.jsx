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
    <section className="font-raleway relative flex items-center justify-center py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start">
        <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center">
          <img
            src="/me.jpg"
            alt="About me"
            className="w-80 h-80 rounded-full object-cover self-start"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left md:pl-8 flex flex-col">
          <h2 className="reveal-text title text-3xl font-semibold uppercase text-gray-800 mb-4">
            <span>quem sou</span>
          </h2>

          <div className="flex text-gray-800 mb-6 font-medium">
            {tabs.map((tab, index) => (
              <div key={tab.id} className="flex items-center">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-2 cursor-pointer ${
                    activeTab === tab.id ? "font-bold" : ""
                  }`}
                >
                  {tab.label}
                </button>
                {index < tabs.length - 1 && <span className="mx-2">|</span>}
              </div>
            ))}
          </div>

          <div className="reveal-text content text-2xl text-gray-600 leading-relaxed font-ibm min-h-[250px] flex items-start">
            <span>{tabs.find((tab) => tab.id === activeTab)?.content}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
