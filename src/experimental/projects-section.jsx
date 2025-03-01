import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projetos = [
  {
    id: 1,
    image: "/img-placeholder.jpg",
    title: "Projeto 1",
    description: "Descrição do projeto 1.",
    stacks: ["React", "GSAP"],
    deployUrl: "https://example.com",
    codeUrl: "https://github.com/example",
  },
  {
    id: 2,
    image: "/img-placeholder.jpg",
    title: "Projeto 2",
    description: "Descrição do projeto 2.",
    stacks: ["Next.js", "Tailwind"],
    deployUrl: "https://example.com",
    codeUrl: "https://github.com/example",
  },
  {
    id: 3,
    image: "/img-placeholder.jpg",
    title: "Projeto 3",
    description: "Descrição do projeto 3.",
    stacks: ["Vue", "Firebase"],
    deployUrl: "https://example.com",
    codeUrl: "https://github.com/example",
  },
];

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const projectsContainerRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    if (!sectionRef.current || !projectsContainerRef.current) return;

    const section = sectionRef.current;
    const projectsContainer = projectsContainerRef.current;
    const totalScrollHeight = projetos.length * 100;

    gsap.set(section, { height: `${totalScrollHeight}vh` });

    const mainScrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${totalScrollHeight}vh`,
      pin: projectsContainer,
      anticipatePin: 1,
      scrub: true,
    });

    projectRefs.current.forEach((projectRef, index) => {
      if (!projectRef) return;
      const imageContainer = projectRef.querySelector(
        ".project-image-container"
      );
      const imageElement = projectRef.querySelector(".project-image");
      const contentElement = projectRef.querySelector(".project-content");

      if (!imageContainer || !imageElement || !contentElement) return;

      gsap.set(projectRef, {
        opacity: index === 0 ? 1 : 0,
        visibility: index === 0 ? "visible" : "hidden",
      });

      if (index === 0) {
        gsap.set(imageContainer, { width: "70%" });
        gsap.set(imageElement, { scale: 1 });
        gsap.set(contentElement, { x: "-100%", opacity: 0 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: `top+=${index * 100}vh top`,
          end: `top+=${(index + 1) * 100}vh`,
          scrub: true,
          onEnter: () => {
            gsap.set(projectRef, { opacity: 1, visibility: "visible" });
          },
          onLeave: () => {
            if (index < projetos.length - 1) {
              gsap.set(projectRef, { opacity: 0, visibility: "hidden" });
            }
          },
          onEnterBack: () => {
            gsap.set(projectRef, { opacity: 1, visibility: "visible" });
          },
          onLeaveBack: () => {
            if (index > 0) {
              gsap.set(projectRef, { opacity: 0, visibility: "hidden" });
            }
          },
        },
      });

      tl.to(
        imageContainer,
        { width: "50%", duration: 0.3, ease: "power2.inOut" },
        0
      );
      tl.to(
        imageElement,
        { scale: 0.8, duration: 0.3, ease: "power2.inOut" },
        0
      );
      tl.to(
        contentElement,
        { x: "0%", opacity: 1, duration: 0.3, ease: "power2.out" },
        0.15
      );
      tl.to(
        imageContainer,
        { x: "100%", opacity: 0, duration: 0.3, ease: "power2.in" },
        0.7
      );
      tl.to(
        contentElement,
        { x: "-100%", opacity: 0, duration: 0.3, ease: "power2.in" },
        0.7
      );
    });

    return () => {
      mainScrollTrigger.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full" id="projects">
      <div
        ref={projectsContainerRef}
        className="w-full h-screen overflow-hidden bg-gray-900 relative"
      >
        <div className="absolute top-0 left-0 w-full py-8 px-4 md:px-12 z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            My Projects
          </h2>
        </div>
        {projetos &&
          projetos.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="absolute top-0 left-0 w-full h-screen flex items-center justify-between px-4 md:px-12"
            >
              <div className="project-image-container h-[80vh] overflow-hidden rounded-xl transition-all duration-500 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="project-content w-[45%] p-8 bg-gray-800 bg-opacity-90 rounded-xl text-white transform transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stacks.map((stack, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    EXTERNAL LINK
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    GITHUB
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
