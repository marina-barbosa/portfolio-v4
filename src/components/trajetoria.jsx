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
        className="fade-mask-nv2 relative w-full h-screen border-2 border-amber-400 font-raleway text-gray-800 overflow-hidden"
      >
        <div ref={contentRef} className="flex h-full items-center px-14">
          {/* Timeline line */}
          <div className="absolute h-0.5 bg-blue-200 w-[391vw] left-0 top-1/2 -translate-y-1/2"></div>

          <h1 className="border text-5xl text-transparent uppercase font-bold text-center">
            Trajetória
          </h1>
          {/* Card 1 */}
          <div className="w-md flex-shrink-0 grid grid-rows-[1fr_50px_1fr] gap-5 relative z-10">
            <div className="flex flex-col justify-end text-center">
              <h3 className="font-bold text-gray-800 mb-1">
                Desenvolvimento de Software - Backend
              </h3>
              <h4 className="text-gray-600 mb-2">Cubos Academy</h4>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                sunt fugit. Magni consectetur eos qui veniam esse.
                Exercitationem amet rerum placeat sit ut saepe tenetur eaque
                reprehenderit, laborum ab dolor!
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center text-2xl text-gray-800 shadow-md">
                <RiSchoolLine />
              </div>
            </div>
            <div className="flex justify-center items-start text-gray-800 font-bold">
              2023
            </div>
          </div>
          <h1 className="text-5xl text-transparent uppercase font-bold text-center">
            Trajetória
          </h1>
          {/* Card 2 */}
          <div className="w-md flex-shrink-0 grid grid-rows-[1fr_50px_1fr] gap-5 relative z-10">
            <div className="flex justify-center items-end text-gray-800 font-bold">
              2023
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center text-2xl text-gray-800 shadow-md">
                <RiSchoolLine />
              </div>
            </div>
            <div className="flex flex-col justify-start text-center">
              <h3 className="font-bold text-gray-800 mb-1">
                Treinamento Sharp Coders - Fullstack
              </h3>
              <h4 className="text-gray-600 mb-2">Ima Tech + MXM Sistemas</h4>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                sunt fugit. Magni consectetur eos qui veniam esse.
                Exercitationem amet rerum placeat sit ut saepe tenetur eaque
                reprehenderit, laborum ab dolor!
              </p>
            </div>
          </div>
          <h1 className="text-5xl text-transparent uppercase font-bold text-center">
            Trajetória
          </h1>
          {/* Card 3 */}
          <div className="w-md flex-shrink-0 grid grid-rows-[1fr_50px_1fr] gap-5 relative z-10">
            <div className="flex flex-col justify-end text-center">
              <h3 className="font-bold text-gray-800 mb-1">Treina Dev 12</h3>
              <h4 className="text-gray-600 mb-2">Campus Code</h4>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                sunt fugit. Magni consectetur eos qui veniam esse.
                Exercitationem amet rerum placeat sit ut saepe tenetur eaque
                reprehenderit, laborum ab dolor!
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center text-2xl text-gray-800 shadow-md">
                <RiSchoolLine />
              </div>
            </div>
            <div className="flex justify-center items-start text-gray-800 font-bold">
              2024
            </div>
          </div>
          <h1 className="text-5xl text-transparent uppercase font-bold text-center">
            Trajetória
          </h1>
          {/* Card 4 */}
          <div className="w-md flex-shrink-0 grid grid-rows-[1fr_50px_1fr] gap-5 relative z-10">
            <div className="flex justify-center items-end text-gray-800 font-bold">
              2023
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center text-2xl text-gray-800 shadow-md">
                <RiSchoolLine />
              </div>
            </div>
            <div className="flex flex-col justify-start text-center">
              <h3 className="font-bold text-gray-800 mb-1">
                Desenvolvimento Fullstack Junior
              </h3>
              <h4 className="text-gray-600 mb-2">Mais Pra TI + Codifica Edu</h4>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                sunt fugit. Magni consectetur eos qui veniam esse.
                Exercitationem amet rerum placeat sit ut saepe tenetur eaque
                reprehenderit, laborum ab dolor!
              </p>
            </div>
          </div>
          <h1 className="text-5xl text-transparent uppercase font-bold text-center">
            Trajetória
          </h1>
          {/* Card 5 */}
          <div className="w-md flex-shrink-0 grid grid-rows-[1fr_50px_1fr] gap-5 relative z-10">
            <div className="flex flex-col justify-end text-center">
              <h3 className="font-bold text-gray-800 mb-1">Engenharia de Software</h3>
              <h4 className="text-gray-600 mb-2">Faculdade Unopar</h4>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                sunt fugit. Magni consectetur eos qui veniam esse.
                Exercitationem amet rerum placeat sit ut saepe tenetur eaque
                reprehenderit, laborum ab dolor!
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center text-2xl text-gray-800 shadow-md">
                <RiSchoolLine />
              </div>
            </div>
            <div className="flex justify-center items-start text-gray-800 font-bold">
              2024
            </div>
          </div>
          <h1 className="text-5xl text-transparent uppercase font-bold text-center">
            Trajetória
          </h1>
          {/* Card 6 */}
          <div className="w-md flex-shrink-0 grid grid-rows-[1fr_50px_1fr] gap-5 relative z-10">
            <div className="flex justify-center items-end text-gray-800 font-bold">
              2023
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center text-2xl text-gray-800 shadow-md">
                <RiSchoolLine />
              </div>
            </div>
            <div className="flex flex-col justify-start text-center">
              <h3 className="font-bold text-gray-800 mb-1">
                Formação Desnevolvedor Fullstack
              </h3>
              <h4 className="text-gray-600 mb-2">CWI - Crescer lvl 1</h4>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                sunt fugit. Magni consectetur eos qui veniam esse.
                Exercitationem amet rerum placeat sit ut saepe tenetur eaque
                reprehenderit, laborum ab dolor!
              </p>
            </div>
          </div>
          <h1 className="text-5xl text-transparent uppercase font-bold text-center">
            Trajetória
          </h1>
        </div>
      </section>
      <div className="h-[701vh]" />
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
