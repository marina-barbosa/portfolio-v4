import { useState, useEffect } from "react";

export default function ServicesList() {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [stars, setStars] = useState([]);

  // Criar estrelas aleatórias
  useEffect(() => {
    const createStars = () => {
      const starCount = 50; // Número de estrelas
      const newStars = [];
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * 100; // Posição X em %
        const y = Math.random() * 100; // Posição Y em %
        const size = Math.random() * 2 + 1; // Tamanho
        const duration = Math.random() * 2 + 1; // Tempo de brilho
        newStars.push({ x, y, size, duration });
      }
      setStars(newStars);
    };

    createStars();
  }, []);

  const services = [
    {
      title: "Site Institucional",
      description: "Sua empresa com uma presença profissional na internet",
    },
    {
      title: "Landing Page",
      description: "Páginas de captura com foco na conversão de leads e vendas",
    },
    {
      title: "Blog",
      description: "Conteúdo organizado para atrair e engajar sua audiência",
    },
    {
      title: "Lojas Virtuais",
      description:
        "Lojas virtuais com design moderno e funcionalidades avançadas",
    },
  ];

   return (
     <section className="no-mask-section relative sm:min-h-screen py-8 font-raleway">
       <div className="w-full mx-auto">
         <h2 className="text-[#555555] max-w-4xl mx-auto text-lg tracking-widest text-center sm:text-left mb-12 font-medium">
           WHAT I DO
         </h2>
         {services.map((service, index) => (
           <div
             key={index}
             className="relative border-t border-gray-200 py-6 overflow-hidden w-full"
             onMouseEnter={() => setHoveredIndex(index)}
             onMouseLeave={() => setHoveredIndex(null)}
           >
             {/* Fundo expansivo com estrelas */}
             <div
               className={`w-full absolute inset-0 bg-black border border-white transition-transform duration-500 ease-in-out 
                ${
                  hoveredIndex === index ? "scale-100" : "scale-0"
                } origin-center`}
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
             <div className="sm:h-24 md:h-32 flex items-center justify-center relative z-10">
               <h3
                 className={`text-4xl sm:text-6xl uppercase font-bold text-center  text-gray-900 transition-opacity duration-500 ${
                   hoveredIndex === index ? "opacity-0" : "opacity-100"
                 }`}
               >
                 {service.title}
               </h3>
               <p
                 className={`absolute text-lg text-center font-ibm text-[lightseagreen] transition-opacity duration-500 ${
                   hoveredIndex === index ? "opacity-100" : "opacity-0"
                 }`}
               >
                 {service.description}
               </p>
             </div>
           </div>
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
     </section>
   );
}
