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
