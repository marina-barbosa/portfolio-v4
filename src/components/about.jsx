import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("rh");

  const tabs = [
    {
      id: "rh",
      label: "RH",
      content: `
        Oi! Eu sou a Marina, desenvolvedora fullstack apaixonada por tecnologia e pelo impacto que ela pode ter no mundo. 
        Atualmente, curso Engenharia de Software e acumulo experiências tanto em projetos acadêmicos quanto em iniciativas voluntárias. 
        Já trabalhei com Java, Spring Boot, Node.js, C#, .NET, PostgreSQL e React.js, além de ter desenvolvido aplicações com Angular, TypeScript, Ruby on Rails e MySQL. 
        Tenho perfil proativo, sou organizada e adoro resolver problemas, sempre buscando evoluir e contribuir com meu time. 
        No momento, estou participando de um projeto colaborativo para criar um e-commerce de venda de kimonos, atuando no desenvolvimento do backend e frontend com Express e React.
      `,
    },
    {
      id: "dev",
      label: "Dev",
      content: `
        Comecei minha jornada em 2023 e, desde então, venho me aprofundando em desenvolvimento fullstack. Meu foco está na construção de **APIs robustas e interfaces intuitivas**, sempre priorizando boas práticas de código, escalabilidade e segurança.

        💡 **Tecnologias que domino**:
        🔹 **Back-end**: Java, Spring Boot, C#, .NET, Node.js, Express.js, PostgreSQL, SQL.
        🔹 **Front-end**: React.js, Angular, TypeScript, TailwindCSS, Bootstrap, ShadcnUI, Styled Components.
        🔹 **Ferramentas e práticas**: TDD, Jest, JUnit, RSpec, Docker, Git, CI/CD.

        Atualmente, contribuo no desenvolvimento de um e-commerce de kimonos e estou sempre estudando novas abordagens para melhorar a performance e segurança das aplicações que construo. Se você quer alguém comprometida com código limpo, boas práticas e que aprende rápido, vamos conversar! 🚀
      `,
    },
    {
      id: "fun",
      label: "Fun",
      content: `
        Além do código, sou movida por desafios e boas experiências!

        🎮 **Mono Kassadin no LoL** – Gosto de jogos estratégicos e sempre busco melhorar (sim, até no código).  
        🍣 **Amante de sushi** – Se for rodízio, eu topo sem pensar duas vezes!  
        📺 **Viciada em séries** – Tenho uma lista infinita de recomendações, mas também aceito sugestões.  
        🎨 **Exploradora do design** – Estudo UI/UX para deixar minhas interfaces mais agradáveis e intuitivas.

        Sempre estou aprendendo algo novo, seja uma tecnologia, um jogo ou um prato diferente. Bora trocar uma ideia? 😃
      `,
    },
  ];

  return (
    <section className="relative flex items-center justify-center py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start">
        {/* Imagem circular fixa */}
        <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center">
          <img
            src="/me.jpg"
            alt="About me"
            className="w-80 h-80 rounded-full object-cover self-start"
          />
        </div>

        {/* Conteúdo com abas */}
        <div className="md:w-1/2 text-center md:text-left md:pl-8 flex flex-col">
          <h2 className="text-3xl font-semibold uppercase text-gray-800 mb-4 font-raleway">
            Sobre Mim
          </h2>

          {/* Menu de abas */}
          <div className="flex text-gray-800 mb-6 font-medium">
            {tabs.map((tab, index) => (
              <div key={tab.id} className="flex items-center">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-2 ${activeTab === tab.id ? "font-bold" : ""}`}
                >
                  {tab.label}
                </button>
                {index < tabs.length - 1 && <span className="mx-2">|</span>}
              </div>
            ))}
          </div>

          {/* Área do conteúdo fixa */}
          <div className="text-gray-600 leading-relaxed font-ibm min-h-[250px] flex items-start">
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}
