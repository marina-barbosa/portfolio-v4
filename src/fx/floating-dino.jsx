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
      const point2 = document.querySelector(".point-2");
      const point3 = document.querySelector(".point-3");
      if (!point2) return;

      const rect = point2.getBoundingClientRect();
      const rect3 = point3.getBoundingClientRect();
      const middleScreen = window.innerHeight / 2;
      const elementMiddle = rect.top + rect.height / 4;
      const elementMiddle3 = rect3.top + rect3.height / 4;

      let newPosition = { ...position };

      if (middleScreen >= elementMiddle && middleScreen <= elementMiddle3) {
        newPosition = { left: 36, top: 40 };
      }
      if (middleScreen <= elementMiddle) {
        newPosition = { left: 36, top: window.innerHeight - 50 };
      }
      if (middleScreen >= elementMiddle3) {
        newPosition = { left: 70, top: 40 };
      }

      // newPosition =
      //   middleScreen >= elementMiddle
      //     ? { left: 36, top: 40  }
      //     : { left: 36, top: window.innerHeight - 50 };

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
