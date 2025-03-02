import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export const MouseMaskWindow = () => {
  const DISTANCE_THRESHOLD = 200; // Distância mínima do elemento
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isNearElement, setIsNearElement] = useState(false);

  // Animação suave do tamanho do círculo
  const circleSize = useSpring(20, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });

      const elements = document.querySelectorAll(".open-mask-ball");
      let isClose = false;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elX = rect.left + rect.width / 2;
        const elY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(clientX - elX, 2) + Math.pow(clientY - elY, 2)
        );

        if (distance <= DISTANCE_THRESHOLD) {
          isClose = true;
        }
      });

      setIsNearElement(isClose);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    circleSize.set(isNearElement ? 200 : 20);
  }, [isNearElement, circleSize]);

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-white z-0 pointer-events-none"
        style={{
          maskImage: `radial-gradient(circle ${circleSize.get()}px at ${
            mousePosition.x
          }px ${mousePosition.y}px, transparent 90%, black 100%)`,
          WebkitMaskImage: `radial-gradient(circle ${circleSize.get()}px at ${
            mousePosition.x
          }px ${mousePosition.y}px, transparent 90%, black 100%)`,
        }}
      />
      {isNearElement && (
        <motion.div
          className="fixed rounded-full border-2 border-gray-500"
          style={{
            width: "20px",
            height: "20px",
            left: `${mousePosition.x - 10}px`,
            top: `${mousePosition.y - 10}px`,
          }}
        />
      )}
    </>
  );
};
