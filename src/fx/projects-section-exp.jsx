import { useEffect } from "react";
import gsap from "gsap";

// https://www.youtube.com/watch?v=KBDaFVY355U

export const ProjectsSectionExp = () => {

    useEffect(() => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".step1",
              start: "center center", // animação começa quando: o center do trigger atinge o center da janela de visualização
              end: "bottom top", // animação termina quando: o bottom do trigger atinge o top da janela de visualização
              scrub: true,
              pin: true,
              markers: true,
              pinSpacing: false,
            },
          })
          .to(".img1", { rotate: 360 });
    }, []);

  return (
    <>
      <main className="relative overflow-hidden">
;
        <div className="step1 relative w-full border-4 border-amber-400 p-[80px]">
          <img
            src="/img-project.jpg"
            alt="Project 1"
            className="img1 w-[70%] border-4 border-sky-400 mx-auto"
          />
        </div>
        <section className="h-screen flex items-center justify-center bg-black w-full">
          <h1 className="text-9xl font-bold uppercase text-amber-400">
            fim
          </h1>
        </section>
      </main>
    </>
  );
};
