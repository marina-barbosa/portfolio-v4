import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiSchoolLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const Trajetoria = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const trajetoria = sectionRef.current;
    const content = contentRef.current;

    if (!trajetoria || !content) return;

    const contentWidth = content.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollLength = contentWidth - viewportWidth;

    gsap.to(content, {
      x: -scrollLength,
      ease: "none",
      scrollTrigger: {
        trigger: trajetoria,
        start: "top top",
        end: `+=${scrollLength}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="trajetoria"
        className="fade-mask-nv2 relative w-full h-[100vh] md:h-[100vh] font-raleway text-gray-800 overflow-hidden"
      >
        <div ref={contentRef} className="flex h-full items-center px-14">
          {/* Timeline line */}
          <div className="absolute h-0.5 bg-blue-200 w-[405vw] sm:w-[655vw] xl:w-[345vw] 2xl:w-[309vw] left-0 top-1/2 -translate-y-1/2"></div>

          <h1 className="hidden sm:block border xl:text-5xl 2xl:text-6xl text-transparent uppercase font-bold text-center">
            eeeeeeeeeeee
          </h1>
          <h1 className="block sm:hidden text-sm text-transparent uppercase font-bold text-center">
            ee
          </h1>

          {/* Card 1 */}
          <div className="w-60 sm:w-md flex-shrink-0 grid grid-rows-[1fr_50px_1fr] gap-5 relative z-10">
            <div className="flex flex-col justify-end text-center">
              <h3 className="font-bold text-gray-800 mb-1">
                Desenvolvimento de Software - Backend
              </h3>
              <h4 className="text-gray-600 mb-2">Cubos Academy</h4>
              <p className="text-sm text-gray-500">
                Desenvolvimento Backend com JavaScript, Node.js, Express.js e
                PostgreSQL pela Cubos Academy em parceria com iFood.
              </p>
            </div>

            <div className="flex justify-center items-center">
              <div className="relative w-20 h-20 flex justify-center items-center text-2xl text-gray-800 shadow-60">
                {/* Hexágono maior atrás (simulando a borda) */}
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    backgroundColor: "lightseagreen", // Cor de fundo do hexágono maior
                    zIndex: -1, // Hexágono maior fica atrás do ícone
                  }}
                ></div>

                {/* Hexágono menor na frente (branco), agora um pouco menor */}
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    backgroundColor: "white", // Cor de fundo do hexágono menor
                    border: "2px solid transparent", // Borda transparente para manter a forma do hexágono
                    transform: "scale(0.8)", // Reduzindo um pouco o hexágono branco
                  }}
                ></div>

                {/* Ícone no centro, agora com z-index maior para garantir visibilidade */}
                <RiSchoolLine style={{ zIndex: 1 }} />
              </div>
            </div>

            <div className="flex justify-center items-start text-gray-800 font-bold">
              2023
            </div>
          </div>
          <h1 className="hidden sm:block text-5xl text-transparent uppercase font-bold text-center">
            eeeeeee
          </h1>
          {/* Card 2 */}
          <div className="w-60 sm:w-md flex-shrink-0 grid grid-rows-[1fr_50px_1fr] gap-5 relative z-10">
            <div className="flex justify-center items-end text-gray-800 font-bold">
              2023
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center text-2xl text-gray-800 shadow-60">
                <RiSchoolLine />
              </div>
            </div>
            <div className="flex flex-col justify-start text-center">
              <h3 className="font-bold text-gray-800 mb-1">
                Treinamento Sharp Coders - Fullstack
              </h3>
              <h4 className="text-gray-600 mb-2">Ima Tech + MXM Sistemas</h4>
              <p className="text-sm text-gray-500">
                Desenvolvimento Fullstack com Angular, C# e .Net pela Ímã Tech
                em parceria com a MXM Sistemas.
              </p>
            </div>
          </div>
          <h1 className="hidden sm:block text-5xl text-transparent uppercase font-bold text-center">
            eeeeeee
          </h1>
          {/* Card 3 */}
          <div className="w-60 sm:w-md flex-shrink-0 grid grid-rows-[1fr_50px_1fr] gap-5 relative z-10">
            <div className="flex flex-col justify-end text-center">
              <h3 className="font-bold text-gray-800 mb-1">Treina Dev 12</h3>
              <h4 className="text-gray-600 mb-2">Campus Code</h4>
              <p className="text-sm text-gray-500">
                TreinaDev 12, TDD com Ruby on Rails, RSpec, Capybara pela Campus
                Code.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center text-2xl text-gray-800 shadow-60">
                <RiSchoolLine />
              </div>
            </div>
            <div className="flex justify-center items-start text-gray-800 font-bold">
              2024
            </div>
          </div>
          <h1 className="hidden sm:block text-5xl text-transparent uppercase font-bold text-center">
            eeeeeee
          </h1>
          {/* Card 4 */}
          <div className="w-60 sm:w-md flex-shrink-0 grid grid-rows-[1fr_50px_1fr] gap-5 relative z-10">
            <div className="flex justify-center items-end text-gray-800 font-bold">
              2024
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center text-2xl text-gray-800 shadow-60">
                <RiSchoolLine />
              </div>
            </div>
            <div className="flex flex-col justify-start text-center">
              <h3 className="font-bold text-gray-800 mb-1">
                Desenvolvimento Fullstack Junior
              </h3>
              <h4 className="text-gray-600 mb-2">Mais Pra TI + Codifica Edu</h4>
              <p className="text-sm text-gray-500">
                Developer Fullstack Júnior com React, Design, Testes Unitários
                com Jest, Java, MySQL, Spring Boot, JPA, JUnit pela +PraTi em
                parceria com a Codifica Edu.
              </p>
            </div>
          </div>
          <h1 className="hidden sm:block text-5xl text-transparent uppercase font-bold text-center">
            eeeeeee
          </h1>
          {/* Card 5 */}
          <div className="w-60 sm:w-md flex-shrink-0 grid grid-rows-[1fr_50px_1fr] gap-5 relative z-10">
            <div className="flex flex-col justify-end text-center">
              <h3 className="font-bold text-gray-800 mb-1">
                Engenharia de Software
              </h3>
              <h4 className="text-gray-600 mb-2">Faculdade Unopar</h4>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                sunt fugit. Magni consectetur eos qui veniam esse.
                Exercitationem amet rerum placeat sit ut saepe tenetur eaque
                reprehenderit, laborum ab dolor!
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center text-2xl text-gray-800 shadow-60">
                <RiSchoolLine />
              </div>
            </div>
            <div className="flex justify-center items-start text-gray-800 font-bold">
              2024
            </div>
          </div>
          <h1 className="hidden sm:block text-5xl text-transparent uppercase font-bold text-center">
            eeeeeee
          </h1>
          {/* Card 6 */}
          <div className="w-60 sm:w-md flex-shrink-0 grid grid-rows-[1fr_50px_1fr] gap-5 relative z-10">
            <div className="flex justify-center items-end text-gray-800 font-bold">
              2025
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center text-2xl text-gray-800 shadow-60">
                <RiSchoolLine />
              </div>
            </div>
            <div className="flex flex-col justify-start text-center">
              <h3 className="font-bold text-gray-800 mb-1">
                Formação Desnevolvedor Fullstack
              </h3>
              <h4 className="text-gray-600 mb-2">CWI - Crescer lvl 1</h4>
              <p className="text-sm text-gray-500">
                Formação Fullstack com Java, JUnit, Javascript, Jest, HTML, CSS,
                PostgrSQL pela CWI no programa Crescer Lvl. 1.
              </p>
            </div>
          </div>
          <h1 className="hidden sm:block text-5xl text-transparent uppercase font-bold text-center">
            eeeeeee
          </h1>
          <h1 className="block sm:hidden text-sm text-transparent uppercase font-bold text-center">
            eeee
          </h1>
        </div>
      </section>
      {/* 2025: Bootcamp ONP. Desenvolvimento de e-commerce com Next.js,
      metodologias ágeis (Daily, Sprint Review, Code Review), experiência
      prática com servidores de desenvolvimento, homologação e produção, além de
      colaboração com PO e QA. */}
      <div className="h-[121vh] md:h-[248vh] xl:h-[513vh] 2xl:h-[385vh]" />
      <style>{`
        .fade-mask-nv2 {
          position: relative;
          -webkit-mask-image: linear-gradient(
            to right, 
            rgba(0, 0, 0, 0) 10%, 
            rgba(0, 0, 0, 1) 20%,
            rgba(0, 0, 0, 1) 45%, 
            rgba(0, 0, 0, 1) 55%, 
            rgba(0, 0, 0, 1) 80%, 
            rgba(0, 0, 0, 0) 90%
          );
          mask-image: linear-gradient(
            to right, 
            rgba(0, 0, 0, 0) 10%, 
            rgba(0, 0, 0, 1) 20%, 
            rgba(0, 0, 0, 1) 45%, 
            rgba(0, 0, 0, 1) 55%, 
            rgba(0, 0, 0, 1) 80%, 
            rgba(0, 0, 0, 0) 90%
          );
          will-change: transform;
        }
      `}</style>
    </>
  );
};

export default Trajetoria;
