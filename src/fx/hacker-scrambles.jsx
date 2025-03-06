import { useEffect, useLayoutEffect } from "react";

export const HackerScrambles = () => {
  useLayoutEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let intervalMap = new Map();

    const scrambleEffect = (target) => {
      let iteration = 0;
      clearInterval(intervalMap.get(target));

      const originalText = target.dataset.value || target.innerText;
      target.dataset.value = originalText;

      const interval = setInterval(() => {
        target.innerText = originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        if (iteration >= originalText.length) {
          clearInterval(interval);
          intervalMap.delete(target);
        }

        iteration += 1 / 3;
      }, 30);

      intervalMap.set(target, interval);
    };

    setTimeout(() => {
      const elements = document.querySelectorAll(".hacker-scrambles");
      elements.forEach((item) =>
        item.addEventListener("mouseover", (event) =>
          scrambleEffect(event.target)
        )
      );

      const autoElements = document.querySelectorAll(".start-hacker-scrambles");
      autoElements.forEach(scrambleEffect);
    }, 100)

    return () => {
      intervalMap.forEach((interval) => clearInterval(interval));
    };
  }, []);

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
