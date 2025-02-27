import { useState, useEffect } from "react";

export default function HoverEffectText() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".hover-effect");

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();

      // Define o gradiente dinâmico com base na posição do mouse
      const gradient = `radial-gradient(circle 200px at ${
        mousePos.x - rect.left
      }px ${mousePos.y - rect.top}px, red 40%, black 100%)`;

      element.style.backgroundImage = gradient;
      element.style.webkitBackgroundClip = "text";
      element.style.webkitTextFillColor = "transparent";
    });
  }, [mousePos]);

  return null;
}
