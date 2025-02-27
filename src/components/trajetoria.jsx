import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Trajetoria = () => {
  useEffect(() => {
    // Registrar o ScrollTrigger com GSAP
    gsap.registerPlugin(ScrollTrigger);

    const trajetoria = document.querySelector("#trajetoria");
    const content = document.querySelector(".trajetoria-content");

    // Definindo a largura total do conteúdo
    const contentWidth = content.offsetWidth;
    const horizontalScrollLength = contentWidth - window.innerWidth;

    // Configurando o ScrollTrigger
    ScrollTrigger.scrollerProxy(trajetoria, {
      scrollTop(value) {
        return arguments.length ? window.scrollTo(0, value) : window.scrollY;
      },
      getBoundingClientRect() {
        return {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: trajetoria.style.transform ? "transform" : "fixed",
    });

    // Animação horizontal com GSAP
    gsap.to(".trajetoria-content", {
      scrollTrigger: {
        scroller: trajetoria,
        scrub: true,
        trigger: "#trajetoria",
        pin: true,
        start: "top top",
        end: `+=${horizontalScrollLength}`,
      },
      x: -horizontalScrollLength,
    });

    // return () => {
    //   // Limpar o ScrollTrigger quando o componente for desmontado
    //   ScrollTrigger.kill();
    // };
  }, []);

  return (
    <section
      id="trajetoria"
      className="mx-auto h-screen flex gap-52 items-center justify-between bg-gray-100 font-raleway text-gray-800 overflow-hidden"
    >
      <div className="trajetoria-content flex">
        <h1 className="px-14 text-7xl uppercase font-bold text-center">
          Trajetoria
        </h1>
        <h1 className="px-14 text-7xl uppercase font-bold text-center">
          Trajetoria
        </h1>
        <h1 className="px-14 text-7xl uppercase font-bold text-center">
          Trajetoria
        </h1>
        <h1 className="px-14 text-7xl uppercase font-bold text-center">
          Trajetoria
        </h1>
        <h1 className="px-14 text-7xl uppercase font-bold text-center">
          Trajetoria
        </h1>
        <h1 className="px-14 text-7xl uppercase font-bold text-center">
          Trajetoria
        </h1>
        <h1 className="px-14 text-7xl uppercase font-bold text-center">
          Trajetoria
        </h1>
      </div>
    </section>
  );
};

export default Trajetoria;
