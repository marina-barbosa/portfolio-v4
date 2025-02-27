import { useState } from "react";

export default function ServicesList() {
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

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-white text-gray-900 min-h-screen p-8 px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg tracking-widest mb-12 font-medium">WHAT I DO</h2>
        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-t border-gray-200 py-6"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-24 md:h-32 flex items-center">
                <h3
                  className={`font-bold transition-all duration-1300 ease-in-out ${
                    hoveredIndex === index
                      ? "text-gray-700 text-xl md:text-4xl"
                      : "text-black text-4xl md:text-7xl"
                  }`}
                >
                  {hoveredIndex === index ? service.description : service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
