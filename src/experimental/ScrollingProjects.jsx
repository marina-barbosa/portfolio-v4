/* eslint-disable react/prop-types */

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    image: "/img-placeholder.jpg",
    description: "Descrição do projeto 1.",
  },
  {
    id: 2,
    image: "/img-placeholder.jpg",
    description: "Descrição do projeto 2.",
  },
  // Adicione mais projetos conforme necessário
];

export default function ScrollingProjects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[300vh] overflow-hidden"
    >
      {projects.map((project, index) => (
        <ProjectSection
          key={project.id}
          project={project}
          index={index}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}

function ProjectSection({ project, index, scrollYProgress }) {
  const start = index / projects.length;
  const mid = start + 0.3 / projects.length; // Ponto onde a imagem fica no centro
  const end = (index + 1) / projects.length;

  const imageSize = useTransform(
    scrollYProgress,
    [start, mid, end],
    ["70vw", "70vw", "50vw"]
  );
  const imageX = useTransform(
    scrollYProgress,
    [start, mid, end],
    ["0%", "0%", "100%"]
  );
  const textOpacity = useTransform(scrollYProgress, [mid, end], [0, 1]);
  const textX = useTransform(scrollYProgress, [mid, end], ["-100%", "0%"]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <motion.img
        src={project.image}
        className="absolute rounded-2xl shadow-lg"
        style={{ width: imageSize, x: imageX }}
      />
      <motion.div
        className="absolute left-10 text-white text-2xl font-semibold w-1/3"
        style={{ opacity: textOpacity, x: textX }}
      >
        {project.description}
      </motion.div>
    </section>
  );
}
