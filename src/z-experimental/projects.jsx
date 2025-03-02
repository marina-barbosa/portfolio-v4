
/* eslint-disable react/prop-types */
import { ButtonCosmic } from "./button-cosmic";
const projects = [
  {
    id: 1,
    image: "/img-placeholder.jpg",
    name: "Projeto 1",
    description: "Descrição do projeto 1.",
    stack: "React, Node.js, Tailwind",
    code: "#",
    live: "#"
  },
  {
    id: 2,
    image: "/img-placeholder.jpg",
    name: "Projeto 2",
    description: "Descrição do projeto 2.",
    stack: "Vue, Express, PostgreSQL",
    code: "#",
    live: "#"
  },
  // Adicione mais projetos conforme necessário
];

export default function Projects() {
  return (
    <div className="mx-auto w-full py-20 px-40 flex flex-col gap-16">
      {projects.map((project, index) => (
        <ProjectItem key={project.id} project={project} isReversed={index % 2 !== 0} />
      ))}
    </div>
  );
}

function ProjectItem({ project, isReversed }) {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
      <img src={project.image} alt={project.name} className="w-full md:w-1/2 rounded-lg shadow-lg" />
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h2 className="text-3xl font-bold">{project.name}</h2>
        <p className="text-gray-600">{project.description}</p>
        <span className="text-sm text-gray-700">{project.stack}</span>
        <div className="flex gap-4">
          <ButtonCosmic href={project.code}>Code</ButtonCosmic>
          <ButtonCosmic href={project.live}>Live</ButtonCosmic>
        </div>
      </div>
    </div>
  );
}
