/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiSchoolLine } from "react-icons/ri";
import { cardsData } from "../utils/trajetoria";

gsap.registerPlugin(ScrollTrigger);

const CardNormal = ({
  titulo,
  subtitulo,
  descricao,
  ano,
  img,
  corHexagono,
}) => {
  return (
    <div className="w-60 sm:w-md flex-shrink-0 grid grid-rows-[1fr_50px_1fr] gap-5 relative z-10">
      <div className="flex flex-col justify-end text-center">
        <h3 className="font-raleway text-lg text-neutral-900 mb-1">{titulo}</h3>
        <h4 className="font-ibm text-neutral-600 mb-2">{subtitulo}</h4>
        <p className="font-spacegrotesk text-sm text-neutral-500">
          {descricao}
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="relative w-20 h-20 flex justify-center items-center text-2xl text-neutral-800 shadow-60">
          <div
            className="absolute inset-0"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              backgroundColor: corHexagono,
              zIndex: -1,
            }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              backgroundColor: "white",
              border: "2px solid transparent",
              transform: "scale(0.94)",
            }}
          ></div>
          <img src={img} alt="" className="z-10 h-16" />
        </div>
      </div>

      <div className="flex justify-center items-start text-neutral-800 font-bold">
        {ano}
      </div>
    </div>
  );
};

const CardInvertido = ({
  titulo,
  subtitulo,
  descricao,
  ano,
  img,
  corHexagono,
}) => {
  return (
    <div className="w-60 sm:w-md flex-shrink-0 grid grid-rows-[1fr_50px_1fr] gap-5 relative z-10">
      <div className="flex justify-center items-end text-neutral-800 font-bold">
        {ano}
      </div>

      <div className="flex justify-center items-center">
        <div className="relative w-20 h-20 flex justify-center items-center text-2xl text-neutral-800 shadow-60">
          <div
            className="absolute inset-0"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              backgroundColor: corHexagono,
              zIndex: -1,
            }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              backgroundColor: "white",
              border: "2px solid transparent",
              transform: "scale(0.94)",
            }}
          ></div>
          <img src={img} alt="" className="z-10 w-12 h-12" />
        </div>
      </div>

      <div className="flex flex-col justify-start text-center">
        <h3 className="font-raleway text-lg text-neutral-900 mb-1">{titulo}</h3>
        <h4 className="font-ibm text-neutral-600 mb-2">{subtitulo}</h4>
        <p className="font-spacegrotesk text-sm text-neutral-500">
          {descricao}
        </p>
      </div>
    </div>
  );
};

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
        className="fade-mask-nv2 relative w-full h-[100vh] md:h-[100vh] font-raleway text-neutral-800 overflow-hidden"
      >
        <div ref={contentRef} className="flex h-full items-center px-14">
          {/* Timeline line */}
          <div className="absolute h-0.5 bg-[#4af7e07e] w-[405vw] sm:w-[655vw] xl:w-[345vw] 2xl:w-[309vw] left-0 top-1/2 -translate-y-1/2"></div>

          <h1 className="hidden sm:block border xl:text-5xl 2xl:text-6xl text-transparent uppercase font-bold text-center">
            eeeeeeeeeeee
          </h1>
          <h1 className="block sm:hidden text-sm text-transparent uppercase font-bold text-center">
            ee
          </h1>

          {cardsData.map((card, index) =>
            card.tipo === "normal" ? (
              <>
                <CardNormal
                  key={index}
                  titulo={card.titulo}
                  subtitulo={card.subtitulo}
                  descricao={card.descricao}
                  ano={card.ano}
                  img={card.img}
                  corHexagono={card.corHexagono}
                />
                <h1 className="hidden sm:block text-5xl text-transparent uppercase font-bold text-center">
                  eeeeeee
                </h1>
              </>
            ) : (
              <>
                <CardInvertido
                  key={index}
                  titulo={card.titulo}
                  subtitulo={card.subtitulo}
                  descricao={card.descricao}
                  ano={card.ano}
                  img={card.img}
                  corHexagono={card.corHexagono}
                />
                <h1 className="hidden sm:block text-5xl text-transparent uppercase font-bold text-center">
                  eeeeeee
                </h1>
              </>
            )
          )}

          <h1 className="hidden sm:block 2xl:hidden text-5xl text-transparent uppercase font-bold text-center">
            eeeeeee
          </h1>
          <h1 className="block sm:hidden text-sm text-transparent uppercase font-bold text-center">
            eeee
          </h1>
        </div>
      </section>

      <div className="h-[121vh] md:h-[248vh] xl:h-[513vh] 2xl:h-[140vw]" />
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
