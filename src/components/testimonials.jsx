import { useState, useEffect } from "react";

export const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [stars, setStars] = useState([]);

  // Criar estrelas aleatórias
  useEffect(() => {
    const createStars = () => {
      const starCount = 50;
      const newStars = [];
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 2 + 1;
        newStars.push({ x, y, size, duration });
      }
      setStars(newStars);
    };

    createStars();
  }, []);

  const testimonials = [
    {
      title: "Testimonial 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Testimonial 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Testimonial 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section className="no-mask-section relative mx-auto min-h-screen flex flex-col items-center justify-center font-raleway text-gray-800 p-8 px-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-lg tracking-widest mb-12 font-medium text-center">
          TESTIMONIALS
        </h2>
        <div className="space-y-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative border-t border-gray-200 py-6 overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Fundo expansivo com estrelas */}
              <div
                className={`absolute inset-0 bg-black border border-white transition-transform duration-500 ease-in-out rounded-full 
                ${
                  hoveredIndex === index ? "scale-100" : "scale-0"
                } origin-center shadow-[inset_0_0_10px_2px_rgba(255,255,255,1),inset_0_0_10px_5px_rgba(255,255,255,1)]`}
              >
                {/* Estrelas brilhantes */}
                {stars.map((star, i) => (
                  <div
                    key={i}
                    className="absolute star bg-white rounded-full opacity-50 animate-pulse"
                    style={{
                      top: `${star.y}%`,
                      left: `${star.x}%`,
                      width: `${star.size}px`,
                      height: `${star.size}px`,
                      animationDuration: `${star.duration}s`,
                    }}
                  />
                ))}
              </div>

              {/* Conteúdo */}
              <div className="h-24 md:h-32 flex items-center justify-center relative z-10">
                <h3
                  className={`text-6xl uppercase font-bold text-center text-black transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`absolute text-lg text-center font-ibm text-white transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
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
    </section>
  );
};
