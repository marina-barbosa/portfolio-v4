import { useState } from "react";
export const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
  ]
  return (
    <section className="mx-auto h-screen flex flex-col items-center justify-center bg-gray-100  font-raleway text-gray-800 ">
      <h1 className=" mx-auto max-w-[78vw] m-10 mb-0 text-7xl uppercase font-bold text-center">
        Trajetoria
      </h1>
      <div className="space-y-4">
        {testimonials.map((item, index) => (
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
                {hoveredIndex === index ? item.description : item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
