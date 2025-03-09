import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingDino = () => {
  const [position, setPosition] = useState({
    top: window.innerHeight - 50,
    left: 36,
  });
  const [prevPosition, setPrevPosition] = useState(position);
  const [isMoving, setIsMoving] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [floatHeight, setFloatHeight] = useState(-30);

  useEffect(() => {
    const handleScroll = () => {
      const point1 = document.querySelector(".point-1");
      const point2 = document.querySelector(".point-2");
      const point3 = document.querySelector(".point-3");
      const point4 = document.querySelector(".point-4");
      const point5 = document.querySelector(".point-5");

      const middleScreen = window.innerHeight / 2; // 472,5
      const bottomScreen = window.innerHeight; // 945
      const topScreen = 0; // 0

      const rect1 = point1.getBoundingClientRect();
      // console.log(rect1);
      // console.log(rect1.y);
      // const rect2 = point2.getBoundingClientRect();
      const rect3 = point3.getBoundingClientRect();
      console.log(rect3.y);
      const rect4 = point4.getBoundingClientRect();
      // const rect5 = point5.getBoundingClientRect();

      let newPosition = { ...position };
      // hero - bottom
      if (rect1.y === 32) {
        newPosition = { top: window.innerHeight - 50, left: 36 };
      }
      // project - logo
      if (rect1.y < 32) {
        newPosition = { top: 40, left: 36 };
      }
      if (rect3.y < bottomScreen) {
        newPosition = {
          left: (window.innerWidth / 3) * 2,
          top: window.innerHeight / 2,
        };
      }
      if (rect4.y < middleScreen) {
        newPosition = {
          left: window.innerWidth / 4,
          top: window.innerHeight / 2,
        };
      }
      if (rect4.y < topScreen) {
        newPosition = { top: 40, left: 36 };
      }

      if (
        newPosition.top !== position.top ||
        newPosition.left !== position.left
      ) {
        setPrevPosition(position);
        setPosition(newPosition);
        setAnimationKey((prev) => prev + 1);
        setIsMoving(true);
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
      className={`fixed z-50 ${!isMoving ? "floating" : ""}`}
      initial={{ top: prevPosition.top, left: prevPosition.left }}
      animate={{
        top: position.top,
        left: position.left,
        rotate: isMoving ? [0, 25, -20, 15, -10, 5, 0] : 0,
        scale: isMoving ? [1, 1.1, 1, 1.2, 1] : 1,
        x: isMoving ? [0, 40, -30, 20, -10, 0] : 0,
        y: isMoving ? [0, -20, 25, -15, 10, -5, 0] : 0,
      }}
      transition={{ duration: 2, ease: "easeInOut" }}
      onAnimationComplete={() => setIsMoving(false)}
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

export default FloatingDino;
