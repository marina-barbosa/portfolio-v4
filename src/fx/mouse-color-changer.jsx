import { useState, useEffect, useRef } from "react";

export default function MouseColorChanger() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isNearElement, setIsNearElement] = useState(false);
  const DISTANCE_THRESHOLD = 300;
  const circleSize = 200;
  const originalColors = useRef(new Map());

  // Função para capturar a cor original correta
  const getOriginalColor = (element) => {
    const computedStyle = getComputedStyle(element);
    return computedStyle.color || computedStyle.backgroundColor || "black";
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".mouse-color-changer");

    elements.forEach((element) => {
      if (!originalColors.current.has(element)) {
        const color = getOriginalColor(element);
        originalColors.current.set(element, color);
      }
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });

      const elements = document.querySelectorAll(".open-mask-ball");
      let isClose = false;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elX = rect.left + rect.width / 2;
        const elY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(event.clientX - elX, 2) + Math.pow(event.clientY - elY, 2)
        );

        if (distance <= DISTANCE_THRESHOLD) {
          isClose = true;
        }
      });

      setIsNearElement(isClose);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const applyEffect = (elements, property) => {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const distanceX = mousePos.x - (rect.left + rect.width / 2);
        const distanceY = mousePos.y - (rect.top + rect.height / 2);
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        const intensity = Math.max(0, 1 - distance / circleSize);
        const originalColor = originalColors.current.get(element) || "black";
        const fxColor = "lightseagreen";

        if (property === "backgroundImage") {
          const circleSize = isNearElement ? 200 : 20;
          element.style.backgroundImage = `radial-gradient(circle ${circleSize}px at ${
            mousePos.x - rect.left
          }px ${
            mousePos.y - rect.top
          }px, ${fxColor} 40%, ${originalColor} 100%)`;
          element.style.webkitBackgroundClip = "text";
          element.style.webkitTextFillColor = "transparent";
        } else {
          element.style[property] = fxColor;
        }
      });
    };

    applyEffect(
      document.querySelectorAll(".mouse-color-changer"),
      "backgroundImage"
    );
    applyEffect(document.querySelectorAll(".mouse-color-changer-fill"), "fill");
    applyEffect(
      document.querySelectorAll(".mouse-color-changer-stroke"),
      "stroke"
    );
  }, [mousePos, isNearElement]);

  return null;
}
