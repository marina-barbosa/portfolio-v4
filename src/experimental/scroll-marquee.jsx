import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollMarquee = () => {
  const marqueeLeftRef = useRef(null);
  const marqueeRightRef = useRef(null);

  useEffect(() => {
    gsap.to(marqueeLeftRef.current, {
      x: "-50%", // Move para a esquerda
      ease: "none",
      scrollTrigger: {
        trigger: marqueeLeftRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });

    gsap.to(marqueeRightRef.current, {
      x: "50%", // Move para a direita
      ease: "none",
      scrollTrigger: {
        trigger: marqueeRightRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
        // return () => {
        //   // Limpar o ScrollTrigger quando o componente for desmontado
        //   ScrollTrigger.kill();
        // };
  }, []);

  return (
    <div className="marquee-wrapper">
      {/* Primeira faixa - rola para a esquerda */}
      <div className="marquee-container">
        <div className="marquee-content" ref={marqueeLeftRef}>
          <i className="devicon-docker-plain-wordmark colored text-9xl"></i>
          <i className="devicon-java-plain-wordmark colored text-9xl"></i>
          <i className="devicon-javascript-plain colored text-9xl"></i>
          <i className="devicon-express-original colored text-9xl"></i>
          <i className="devicon-css3-plain-wordmark colored text-9xl"></i>
          <i className="devicon-html5-plain-wordmark colored text-9xl"></i>
          <i className="devicon-tailwindcss-original colored text-9xl"></i>
          <i className="devicon-csharp-plain colored text-9xl"></i>

          <i className="devicon-jest-plain colored text-9xl"></i>
          <i className="devicon-postgresql-plain-wordmark colored text-9xl"></i>
          <i className="devicon-git-plain colored text-9xl"></i>
          <i className="devicon-angularjs-plain colored text-9xl"></i>
          <i className="devicon-react-original-wordmark colored text-9xl"></i>
          <i className="devicon-nodejs-plain-wordmark colored text-9xl"></i>
          <i className="devicon-spring-original-wordmark colored text-9xl"></i>
          <i className="devicon-typescript-plain colored text-9xl"></i>
        </div>
      </div>

      {/* Segunda faixa - rola para a direita */}
      <div className="marquee-container">
        <div className="marquee-content reverse" ref={marqueeRightRef}>
          <i className="devicon-jest-plain colored text-9xl"></i>
          <i className="devicon-postgresql-plain-wordmark colored text-9xl"></i>
          <i className="devicon-git-plain colored text-9xl"></i>
          <i className="devicon-angularjs-plain colored text-9xl"></i>
          <i className="devicon-react-original-wordmark colored text-9xl"></i>
          <i className="devicon-nodejs-plain-wordmark colored text-9xl"></i>
          <i className="devicon-spring-original-wordmark colored text-9xl"></i>
          <i className="devicon-typescript-plain colored text-9xl"></i>

          <i className="devicon-docker-plain-wordmark colored text-9xl"></i>
          <i className="devicon-java-plain-wordmark colored text-9xl"></i>
          <i className="devicon-javascript-plain colored text-9xl"></i>
          <i className="devicon-express-original colored text-9xl"></i>
          <i className="devicon-css3-plain-wordmark colored text-9xl"></i>
          <i className="devicon-html5-plain-wordmark colored text-9xl"></i>
          <i className="devicon-tailwindcss-original colored text-9xl"></i>
          <i className="devicon-csharp-plain colored text-9xl"></i>
        </div>
      </div>

      <style>
        {`
          .marquee-wrapper {
              display: flex;
              flex-direction: column;
              gap: 20px;
              background: #f5f5f5;
              padding: 40px 0;
          }

          .marquee-container {
              width: 100%;
              overflow: hidden;
              position: relative;
          }

          .marquee-content {
              display: flex;
              gap: 80px;
              white-space: nowrap;
          }

          .reverse {
              flex-direction: row-reverse;
          }
        `}
      </style>
    </div>
  );
};

export default ScrollMarquee;
