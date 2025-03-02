import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Trajetoria = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const trajetoria = sectionRef.current;
    const content = contentRef.current;

    if (!trajetoria || !content) return;

    const contentWidth = content.scrollWidth;
    const horizontalScrollLength = contentWidth - window.innerWidth;

    gsap.to(content, {
      x: -horizontalScrollLength,
      ease: "none",
      scrollTrigger: {
        trigger: trajetoria,
        start: "top top",
        end: `+=${horizontalScrollLength}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="trajetoria"
      className="relative w-full h-screen border-2 border-amber-400 font-raleway text-gray-800"
    >
      <div
        ref={contentRef}
        className="flex space-x-52 w-max h-full items-center px-14"
      >
        {Array.from({ length: 7 }).map((_, index) => (
          <h1 key={index} className="text-7xl uppercase font-bold text-center">
            Trajetória
          </h1>
        ))}
      </div>
    </section>
  );
};

export default Trajetoria;
