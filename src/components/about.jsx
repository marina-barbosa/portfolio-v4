import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("rh");

const tabs = [
  {
    id: "rh",
    label: "RH",
    content: `
      Oi, eu sou a Marina, dev fullstack com experiência em projetos acadêmicos e freelance voluntário. 
      Minha base técnica inclui Java, Spring Boot, Javascript, React, Angular, Node.js 
      e bancos de dados relacionais como PostgreSQL e MySQL. 
      Tenho um perfil colaborativo e sou movida por desafios que me permitam aprender e evoluir. 
      Atualmente, curso Engenharia de Software e atuo em um projeto voluntário de e-commerce de kimonos, 
      o que me proporciona experiência real em desenvolvimento e trabalho em equipe. 
      Estou sempre buscando oportunidades para aprimorar minhas habilidades 
      e contribuir com novas soluções e agregar ao time!`,
  },
  {
    id: "dev",
    label: "Dev",
    content: `
       Sou dev desde 2023 em constante aprendizado. 
       Minha stack principal inclui Java com Spring Boot, React, Node.js e PostgreSQL, 
       mas também tenho experiência com .NET, C# e Ruby on Rails. 
       Já desenvolvi em TDD usando JUnit, Jest e RSpec, 
       além de metodologias ágeis e boas práticas de desenvolvimento. 
       Atualmente, estou envolvida em um projeto de e-commerce voluntário, onde participo como fullstack. 
       Tenho perfil prestativo, colaborativo, curioso, 
       aprendo rápido, sou organizada, autogerenciada, esforçada e trabalho bem em equipe.
    `,
  },
  {
    id: "fun",
    label: "Fun",
    content: `
      🎮 Mono Kassadin no Wildrift e jungle quebra galho, 
      🍣 apreciadora de sushi, 
      📺 maratonista de séries e filmes, 
      🎨 desbravadora de efeitos js e css. 
      Sempre aprendendo algo novo, 
      seja uma tecnologia, um jogo ou um prato diferente. 
      Bora trocar uma ideia? 😃
      Melhor... bora de duo em algum joguinho?
    `,
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
    <section 
      className="font-raleway relative flex items-center justify-center"
    >
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
