import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingDino = () => {
  const [position, setPosition] = useState({
    top: window.innerHeight - 50,
    left: 36,
  });
  const [isMoving, setIsMoving] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Posições dos pontos de parada (garantir que os elementos existem)
      const points = {
        point2: document.querySelector(".point-2")?.offsetTop || 0,
        point3: document.querySelector(".point-3")?.offsetTop || 0,
        point4: document.querySelector(".point-4")?.offsetTop || 0,
        point5: document.querySelector(".point-5")?.offsetTop || 0,
        point6: document.querySelector(".point-6")?.offsetTop || 0,
        point7: document.querySelector(".point-7")?.offsetTop || 0,
        point8: document.querySelector(".point-8")?.offsetTop || 0,
        point9: document.querySelector(".point-9")?.offsetTop || 0,
        point10: document.querySelector(".point-10")?.offsetTop || 0,
      };

      // Verifique o scrollY e mova o dinossauro conforme necessário
      if (scrollY >= points.point2 && scrollY < points.point3) {
        setPosition({ top: 10, left: 10 }); // Move para o topo (near logo)
      } else if (scrollY >= points.point3 && scrollY < points.point4) {
        setPosition({ top: window.innerHeight / 2, left: 150 }); // Move para o lado de um item na lista
      } else if (scrollY >= points.point4 && scrollY < points.point5) {
        setPosition({
          top: window.innerHeight / 2,
          left: window.innerWidth - 150,
        }); // Outro item da lista
      } else if (scrollY >= points.point5 && scrollY < points.point6) {
        setPosition({ top: window.innerHeight / 2, left: 100 }); // Outro item da lista
      } else if (scrollY >= points.point6 && scrollY < points.point7) {
        setPosition({
          top: window.innerHeight - 150,
          left: window.innerWidth / 2,
        }); // Perto da bio
      } else if (scrollY >= points.point7) {
        setPosition({
          top: window.innerHeight - 100,
          left: window.innerWidth / 2,
        }); // Centro do footer
      }

      // Verifique se a posição foi alterada e anime o movimento
      setAnimationKey((prev) => prev + 1);
      setIsMoving(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [position]);

  return (
    <motion.div
      key={animationKey}
      className={`fixed z-50 ${!isMoving ? "floating" : ""}`}
      initial={{ top: position.top, left: position.left }}
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
            50% { transform: translateY(-30px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </motion.div>
  );
};

export default FloatingDino;
