import { useEffect } from "react";
import gsap from "gsap";

export const ProjectsSectionExp = () => {
  useEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".step1",
        start: "top 3%",
        end: "90% top",
        scrub: 10,
        // markers: true,
        pin: true,
      },
    });

    tl1
      .to(".img1", { duration: 1 })
      .to(".img1", { duration: 2, scale: 0.7, x: 250 })
      .to(".text1 h2", { duration: 1, opacity: 1, x: 150 }, "-=1")
      .to(".text1 p", { duration: 1, opacity: 1, x: 150 })
      .to(".text1 button", { duration: 1, opacity: 1, x: 150 })
      .to(".text1 button", { duration: 2 })
      .to(".img1", { duration: 2, x: 3000 })
      .to(".text1", { duration: 2, x: -3000 }, "<");

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".step2",
        start: "top 3%",
        end: "90% top",
        scrub: 10,
        // markers: true,
        pin: true,
      },
    });

    tl2
      .to(".img2", { duration: 1 })
      .to(".img2", { duration: 2, scale: 0.7, x: 250 })
      .to(".text2 h2", { duration: 1, opacity: 1, x: 150 }, "-=1")
      .to(".text2 p", { duration: 1, opacity: 1, x: 150 })
      .to(".text2 button", { duration: 1, opacity: 1, x: 150 })
      .to(".text2 button", { duration: 2 })
      .to(".img2", { duration: 2, x: 3000 })
      .to(".text2", { duration: 2, x: -3000 }, "<");

    return () => {
      tl1.kill();
      tl2.kill();
    };
  }, []);

  return (
    <>
      <main className="relative overflow-hidden">
        <section className="h-screen flex items-center justify-center bg-black w-full">
          <h1 className="text-9xl font-bold uppercase text-amber-400">
            experimental
          </h1>
        </section>
        <div className="step1 relative h-[100vh] w-full p-[80px]">
          <img
            src="/img-project.jpg"
            alt="Project 1"
            className="img1 w-[70%] border-4 border-sky-400 mx-auto"
          />
          <div className="text1 absolute top-1/2 transform -translate-y-1/2">
            <h2 className="text-3xl font-bold mb-4 opacity-0">Project 1</h2>
            <p className="text-gray-600 opacity-0">Description of Project 1</p>
            <button className="bg-amber-400 hover:bg-amber-500 text-black px-4 py-2 mt-4 opacity-0">
              View Project
            </button>
          </div>
        </div>

        <div className="h-[80vh]" />

        <div className="step2 relative h-[100vh] w-full p-[80px]">
          <img
            src="/img-project.jpg"
            alt="Project Dois"
            className="img2 w-[70%] border-4 border-red-400 mx-auto"
          />
          <div className="text2 absolute top-1/2 transform -translate-y-1/2">
            <h2 className="text-3xl font-bold mb-4 opacity-0">Project Dois</h2>
            <p className="text-gray-600 opacity-0">
              Description of Project Dois
            </p>
            <button className="bg-green-400 hover:bg-green-500 text-black px-4 py-2 mt-4 opacity-0">
              View Project
            </button>
          </div>
        </div>

        <div className="h-[80vh]" />

        <section className="h-screen flex items-center justify-center bg-black w-full">
          <h1 className="text-9xl font-bold uppercase text-amber-400">fim</h1>
        </section>
      </main>
    </>
  );
};
