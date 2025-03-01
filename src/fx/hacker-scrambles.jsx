import { useEffect } from "react";

export const HackerScrambles = () => {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let intervalMap = new Map(); // Guarda os intervalos para cada elemento

    const handleMouseOver = (event) => {
      let iteration = 0;
      const target = event.target;
      clearInterval(intervalMap.get(target));

      const interval = setInterval(() => {
        target.innerText = target.dataset.value
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return target.dataset.value[index]; // Retorna a letra original
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        if (iteration >= target.dataset.value.length) {
          clearInterval(interval);
          intervalMap.delete(target);
        }

        iteration += 1 / 3;
      }, 30);

      intervalMap.set(target, interval);
    };

    const elements = document.querySelectorAll(".hacker-scrambles");
    elements.forEach((item) =>
      item.addEventListener("mouseover", handleMouseOver)
    );

    return () => {
      elements.forEach((item) =>
        item.removeEventListener("mouseover", handleMouseOver)
      );
      intervalMap.forEach((interval) => clearInterval(interval));
    };
  }, []); // Rodar apenas uma vez quando o componente for montado

  return (
    <style>
      {`    
      .hacker-scrambles:hover {
        text-shadow: 1px 1px lightseagreen, 2px -1px #f0f;
      }
    `}
    </style>
  );
};
