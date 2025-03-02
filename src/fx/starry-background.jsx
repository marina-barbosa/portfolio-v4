import { useState, useEffect } from "react";

export const StarryBackground = () => {
  const [stars, setStars] = useState([]);

  // Cria as estrelas aleatórias
  useEffect(() => {
    const createStars = () => {
      const starCount = 200;
      const newStars = [];
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 1 + 2;
        const duration = Math.random() * 2 + 1; // Duração da animação
        newStars.push({ x, y, size, duration });
      }
      setStars(newStars);
    };

    createStars();
  }, []);

  return (
    <>
      <div className="bg-black h-full w-full fixed z-0">

        {stars.map((star, index) => (
          <div
            key={index}
            className="star absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}

      </div>
      <style>
        {`
            .star {
                animation: twinkle 1.5s infinite ease-in-out;
            }
            @keyframes twinkle {
                0%, 100% { opacity: 0; }
                50% { opacity: 1; }
            }
        `}
      </style>
    </>
  );
};
