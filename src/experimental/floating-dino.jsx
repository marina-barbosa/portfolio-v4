import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingDino = () => {
  const [position, setPosition] = useState({
    top: window.innerHeight - 150,
    left: 100,
  });
  const [prevPosition, setPrevPosition] = useState(position);
  const [isMoving, setIsMoving] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const textRevealBox = document.querySelector(".reveal_text");
      if (!textRevealBox) return;

      const rect = textRevealBox.getBoundingClientRect();
      const middleScreen = window.innerHeight / 2;
      const elementMiddle = rect.top + rect.height / 4;

      const newPosition =
        middleScreen >= elementMiddle
          ? { top: 100, left: window.innerWidth - 150 }
          : { top: window.innerHeight - 150, left: 100 };

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
      className={`fixed ${!isMoving ? "floating" : ""}`}
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
      <img
        src="/twitch-dinodance.gif"
        alt="Dancing Dino"
        className="w-32 h-auto"
      />
      <style>
        {`
          .floating {
            transform: translateY(0);
            animation: floatAnimation 2s ease-in-out infinite;
          }
          @keyframes floatAnimation {
            0% { transform: translateY(0); }
            50% { transform: translateY(-60px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </motion.div>
  );
};

export default FloatingDino;
