import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingDinoUW = () => {
  const [position, setPosition] = useState({
    top: window.innerHeight - 50,
    left: 36,
  });
  const [prevPosition, setPrevPosition] = useState(position);
  const [isFloating, setIsFloating] = useState(true);
  const [shouldFloat, setShouldFloat] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);
  const [floatHeight, setFloatHeight] = useState(-30);
  const [shouldMosca, setShouldMosca] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const point1 = document.querySelector(".point-1");
      const point2 = document.querySelector(".point-2");
      const point3 = document.querySelector(".point-3");
      const point4 = document.querySelector(".point-4");
      const point5 = document.querySelector(".point-5");
      const point6 = document.querySelector(".point-6");

      const middleScreen = window.innerHeight / 2; // 472,5
      const bottomScreen = window.innerHeight; // 945
      const topScreen = 0; // 0

      const rect1 = point1.getBoundingClientRect();
      // console.log(rect1);
      // console.log(rect1.y);
      // const rect2 = point2.getBoundingClientRect();
      const rect3 = point3.getBoundingClientRect();
      // console.log(rect3.y);
      const rect4 = point4.getBoundingClientRect();
      // console.log(rect4.y)
      // const rect5 = point5.getBoundingClientRect();
      const rect6 = point6.getBoundingClientRect();
      // console.log(rect6.y);

      let newPosition = { ...position };
      // hero - bottom
      if (rect1.y === 32) {
        setShouldFloat(true);
        newPosition = { top: window.innerHeight - 50, left: 36 };
      }
      // hero~project - logo
      if (rect1.y < 32 && rect4.y > middleScreen) {
        setShouldFloat(false);
        newPosition = { top: 40, left: 36 };
      }

      // service-list -mid~right
      // if (rect3.y < bottomScreen) {
      //   newPosition = {
      //     // left: ((window.innerWidth / 4) * 3),
      //     left: (rect3.x + rect3.width) - (window.innerWidth / 5),
      //     top: window.innerHeight / 2,
      //   };
      // }

      // about - mid~left
      // if (rect4.y < bottomScreen) {
      //   setShouldFloat(true);
      //   newPosition = {
      //     // left: (window.innerWidth / 5) - 60,
      //     left: rect4.x - 100,
      //     top: window.innerHeight / 2,
      //   };
      // }

      // marquee~traj - logo
      // if (rect4.y < (topScreen - middleScreen)) {
      //   setShouldFloat(false);
      //   setShouldMosca(true);
      //   newPosition = { top: 40, left: 36 };
      // }
      
      // footer - center
      if (rect6.y < 2620) {
        setShouldFloat(true);
        setShouldMosca(false);
        newPosition = {
          top: window.innerHeight - 100,
          left: window.innerWidth / 2 - 25,
        };
      }
      if (rect6.y <= 600) {
        setShouldFloat(false);
        const smoothTop = position.top + ((rect6.y - 25) - position.top) * 0.1; // Amortecimento
        newPosition = {
          top: smoothTop,
          left: window.innerWidth / 2 - 25,
        };
      }

      if (
        newPosition.top !== position.top ||
        newPosition.left !== position.left
      ) {
        setPrevPosition(position);
        setPosition(newPosition);
        setAnimationKey((prev) => prev + 1);
        setIsFloating(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [position]);

  return (
    <motion.div
      key={animationKey}
      className={`hidden uw:block fixed z-50 ${isFloating ? "floating" : ""}`}
      initial={{ top: prevPosition.top, left: prevPosition.left }}
      animate={
        shouldMosca
          ? {
              top: position.top,
              left: position.left,
              rotate: !isFloating ? [0, 25, -20, 15, -10, 5, 0] : 0,
              scale: !isFloating ? [1, 1.1, 1, 1.2, 1] : 1,
              x: !isFloating ? [0, 40, -30, 20, -10, 0] : 0,
              y: !isFloating ? [0, -20, 25, -15, 10, -5, 0] : 0,
            }
          : {
              top: position.top,
              left: position.left,
            }
      }
      transition={{ duration: 2, ease: "easeInOut" }}
      onAnimationComplete={shouldFloat ? () => setIsFloating(true) : null}
    >
      <a href="#hero">
        <img
          src="/twitch-dinodance.gif"
          alt="Dancing Dino"
          className="w-auto h-10"
        />
      </a>
      <style>
        {`
           .floating {
             transform: translateY(0);
             animation: floatAnimation 2s ease-in-out infinite;
           }
           @keyframes floatAnimation {
             0% { transform: translateY(0); }
             50% { transform: translateY(${floatHeight}px); }
             100% { transform: translateY(0); }
           }
         `}
      </style>
    </motion.div>
  );
};

export default FloatingDinoUW;
