import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        end: `+=${scrollLength}`, // Garante que o scroll dura o suficiente para percorrer todo o conteúdo
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
        className="fade-mask-nv2 relative w-full h-screen border-2 border-amber-400 font-raleway text-gray-800 overflow-hidden"
      >
        <div
          ref={contentRef}
          className="flex space-x-52 w-max h-full items-center px-14"
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <h1
              key={index}
              className="text-7xl uppercase font-bold text-center"
            >
              Trajetória
            </h1>
          ))}
        </div>
      </section>
      <div className="h-[291vh]" />
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
