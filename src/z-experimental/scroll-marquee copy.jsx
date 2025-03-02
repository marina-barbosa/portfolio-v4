import { useEffect, useRef } from "react";
import gsap from "gsap";

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
  }, []);

  return (
    <div className="flex flex-col gap-5 bg-transparent py-10 fade-mask">
      {/* Primeira faixa - rola para a esquerda */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-20 whitespace-nowrap" ref={marqueeLeftRef}>
          <i className="devicon-docker-plain-wordmark colored text-8xl"></i>
          <i className="devicon-java-plain-wordmark colored text-8xl"></i>
          <i className="devicon-javascript-plain colored text-8xl"></i>
          <i className="devicon-express-original colored text-8xl"></i>
          <i className="devicon-css3-plain-wordmark colored text-8xl"></i>
          <i className="devicon-html5-plain-wordmark colored text-8xl"></i>
          <i className="devicon-tailwindcss-original colored text-8xl"></i>
          <i className="devicon-csharp-plain colored text-8xl"></i>
          <i className="devicon-jest-plain colored text-8xl"></i>
          <i className="devicon-postgresql-plain-wordmark colored text-8xl"></i>
          <i className="devicon-git-plain colored text-8xl"></i>
          <i className="devicon-angularjs-plain colored text-8xl"></i>
          <i className="devicon-react-original-wordmark colored text-8xl"></i>
          <i className="devicon-nodejs-plain-wordmark colored text-8xl"></i>
          <i className="devicon-spring-original-wordmark colored text-8xl"></i>
          <i className="devicon-typescript-plain colored text-8xl"></i>
        </div>
      </div>

      {/* Segunda faixa - rola para a direita */}
      <div className="w-full overflow-hidden relative">
        <div
          className="flex gap-20 whitespace-nowrap flex-row-reverse"
          ref={marqueeRightRef}
        >
          <i className="devicon-jest-plain colored text-8xl"></i>
          <i className="devicon-java-plain-wordmark colored text-8xl"></i>
          <i className="devicon-git-plain colored text-8xl"></i>
          <i className="devicon-angularjs-plain colored text-8xl"></i>
          <i className="devicon-react-original-wordmark colored text-8xl"></i>
          <i className="devicon-nodejs-plain-wordmark colored text-8xl"></i>
          <i className="devicon-spring-original-wordmark colored text-8xl"></i>
          <i className="devicon-typescript-plain colored text-8xl"></i>
          <i className="devicon-docker-plain-wordmark colored text-8xl"></i>
          <i className="devicon-postgresql-plain-wordmark colored text-8xl"></i>
          <i className="devicon-javascript-plain colored text-8xl"></i>
          <i className="devicon-express-original colored text-8xl"></i>
          <i className="devicon-css3-plain-wordmark colored text-8xl"></i>
          <i className="devicon-html5-plain-wordmark colored text-8xl"></i>
          <i className="devicon-tailwindcss-original colored text-8xl"></i>
          <i className="devicon-csharp-plain colored text-8xl"></i>
        </div>
      </div>

      <style>
        {`
        .fade-mask {
          position: relative;
          -webkit-mask-image: linear-gradient(
            to right, 
            rgba(0, 0, 0, 0) 0%, 
            rgba(0, 0, 0, 1) 10%, 
            rgba(0, 0, 0, 1) 60%, 
            rgba(0, 0, 0, 0.6) 85%, 
            rgba(0, 0, 0, 0) 100%
        );
          mask-image: linear-gradient(
            to right, 
            rgba(0, 0, 0, 0) 0%, 
            rgba(0, 0, 0, 1) 10%, 
            rgba(0, 0, 0, 1) 60%, 
            rgba(0, 0, 0, 0.6) 85%, 
            rgba(0, 0, 0, 0) 100%
          );
            will-change: transform;
        }
        i {
          filter: grayscale(100%);
          transition: filter 0.1s ease-in-out;
        }
        i:hover {
          filter: grayscale(0%);
        }
  `}
      </style>
    </div>
  );
};

export default ScrollMarquee;
