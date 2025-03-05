/* eslint-disable react/prop-types */
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ButtonCosmic } from "./button-cosmic";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    name: "Sprawl",
    image: "/img-project.jpg",
    technologies: [
      "devicon-javascript-plain",
      "devicon-express-original",
      "devicon-css3-plain-wordmark",
      "devicon-html5-plain-wordmark",
    ],
    description: `Description of Project 1 Description of Project 1 Description of
              Project 1 Description of Project 1 Description of Project 1
              Description of Project 1 Description of Project 1 Description of
              Project 1 Description of Project 1 Description of Project 1
              Description of Project 1 Description of Project 1 Description of
              Project 1`,
    viewLink: "#",
    codeLink: "#",
  },
  {
    id: 2,
    name: "Refood",
    image: "/img-project.jpg",
    technologies: [
      "devicon-react-original",
      "devicon-nodejs-plain",
      "devicon-tailwindcss-plain",
    ],
    description: `Description of Project 1 Description of Project 1 Description of
              Project 1 Description of Project 1 Description of Project 1
              Description of Project 1 Description of Project 1 Description of
              Project 1 Description of Project 1 Description of Project 1
              Description of Project 1 Description of Project 1 Description of
              Project 1`,
    viewLink: "#",
    codeLink: "#",
  },
  {
    id: 3,
    name: "API Vendas",
    image: "/img-project.jpg",
    technologies: [
      "devicon-react-original",
      "devicon-nodejs-plain",
      "devicon-tailwindcss-plain",
    ],
    description: `Description of Project 1 Description of Project 1 Description of
              Project 1 Description of Project 1 Description of Project 1
              Description of Project 1 Description of Project 1 Description of
              Project 1 Description of Project 1 Description of Project 1
              Description of Project 1 Description of Project 1 Description of
              Project 1`,
    viewLink: "#",
    codeLink: "#",
  },
];

const ProjectSection = ({ project }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.step${project.id}`,
        start: "top 3%",
        end: "90% top",
        scrub: 2,
        pin: true,
      },
    });

    tl
    .to(`.img${project.id}`, { duration: 2 })
    .to(`.img${project.id}`, {
      duration: 2,
      scale: 0.8,
      x: 250,
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: `.step${project.id}`,
        start: "3% 3%",
        end: "110% top",
        scrub: 2,
        pin: true,
      },
    });

    tl2
      .to(`.item${project.id}`, {
        opacity: 1,
        x: 50,
        duration: 1,
        stagger: 0.8,
      })
      .to(`.item${project.id}`, { duration: 2 });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: `.step${project.id}`,
        start: "30% 3%",
        end: "90% top",
        scrub: 2,
      },
    });

    tl3
      .to(`.img${project.id}`, { duration: 2, x: 900, opacity: 0 })
      .to(`.text-box${project.id}`, { duration: 2, x: -500, opacity: 0 }, "<");

    return () => {
      tl.kill();
      tl2.kill();
      tl3.kill();
    };
  }, [project.id]);

  return (
    <div
      className={`step${project.id} relative h-screen w-full px-[6%] pt-[5%] mb-[10%]`}
    >
      <img
        src={project.image}
        alt={project.name}
        className={`img${project.id} w-[70%] border-4 border-sky-400 mx-auto`}
      />
      <div
        className={`text-box${project.id} absolute top-1/2 transform -translate-y-1/2`}
      >
        <h2
          className={`item${project.id} open-mini-ball-mask text-3xl font-bold mb-4 opacity-0`}
        >
          {project.name}
        </h2>
        <div
          className={`item${project.id} flex gap-4 w-full mx-auto mb-4 opacity-0`}
        >
          {project.technologies.map((tech, index) => (
            <i key={index} className={`${tech} colored text-3xl`} />
          ))}
        </div>
        <p className={`item${project.id} text-gray-600 md:w-1/3 opacity-0`}>
          {project.description}
        </p>
        <div className={`item${project.id} opacity-0`}>
          <button className="bg-amber-400 hover:bg-amber-500 text-black px-4 py-2 mt-4">
            View Project
          </button>
          <span className="open-mask-ball">
            <ButtonCosmic>View Code</ButtonCosmic>
          </span>
        </div>
      </div>
    </div>
  );
};

export const ProjectsScrollTrigger = () => {
  return (
    <main className="relative hidden md:block overflow-hidden">
      {projects.map((project) => (
        <>
          <ProjectSection key={project.id} project={project} />
          <div className="h-[90vh]" />
        </>
      ))}
    </main>
  );
};
