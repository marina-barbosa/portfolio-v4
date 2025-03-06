import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollMarquee = () => {
  const marqueeLeftRef = useRef(null);
  const marqueeRightRef = useRef(null);

  useEffect(() => {
    if (marqueeLeftRef.current) {
      gsap.to(marqueeLeftRef.current, {
        xPercent: -200,
        ease: "none",
        scrollTrigger: {
          trigger: marqueeLeftRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    }

    if (marqueeRightRef.current) {
      gsap.to(marqueeRightRef.current, {
        xPercent: 200,
        ease: "none",
        scrollTrigger: {
          trigger: marqueeRightRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <div className="md:-mb-32 xl:mb-0 flex flex-col gap-5 bg-transparent py-10 overflow-hidden fade-mask-nv2">
      {/* Primeira faixa - rola para a esquerda */}
      <div className="w-full overflow-hidden relative">
        <div
          className="flex gap-5 sm:gap-20 whitespace-nowrap will-change-transform"
          ref={marqueeLeftRef}
        >
          <i className="open-mini-ball-mask devicon-docker-plain-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-java-plain-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-javascript-plain colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-express-original colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-css3-plain-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-html5-plain-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-tailwindcss-original colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-csharp-plain colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-jest-plain colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-postgresql-plain-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-git-plain colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-angularjs-plain colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-react-original-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-nodejs-plain-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-spring-original-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-typescript-plain colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-docker-plain-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-java-plain-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-javascript-plain colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-express-original colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-css3-plain-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-html5-plain-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-tailwindcss-original colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-csharp-plain colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-jest-plain colored text-6xl sm:text-8xl"></i>
        </div>
      </div>

      {/* Segunda faixa - rola para a direita */}
      <div className="w-full overflow-hidden relative">
        <div
          className="flex gap-5 sm:gap-20 whitespace-nowrap will-change-transform flex-row-reverse"
          ref={marqueeRightRef}
        >
          <i className="open-mini-ball-mask devicon-jest-plain colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-postgresql-plain-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-git-plain colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-angularjs-plain colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-react-original-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-nodejs-plain-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-spring-original-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-typescript-plain colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-docker-plain-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-java-plain-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-javascript-plain colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-express-original colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-css3-plain-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-html5-plain-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-tailwindcss-original colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-csharp-plain colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-jest-plain colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-postgresql-plain-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-git-plain colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-angularjs-plain colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-react-original-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-nodejs-plain-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-spring-original-wordmark colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-typescript-plain colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-jest-plain colored text-6xl sm:text-8xl"></i>
          <i className="open-mini-ball-mask devicon-postgresql-plain-wordmark colored text-6xl sm:text-8xl"></i>
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
