import { useEffect } from "react";
import gsap from "gsap";
import { ButtonCosmic } from "../components/button-cosmic";

export const ProjectsScrollTrigger = () => {

  useEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".step1",
        start: "top 3%",
        end: "90% top",
        scrub: 2,
        // markers: true,
        pin: true,
      },
    });
    tl1
      .to(".img1", { duration: 2 })
      .to(".img1", { duration: 2, scale: 0.8, x: 250 });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".step1",
        start: "3% 3%",
        end: "110% top",
        scrub: 2,
        // markers: true,
        pin: true,
      },
    });

    tl2
      .to(".item1", {
        opacity: 1,
        x: 50,
        duration: 1,
        stagger: 0.8, // Cada item aparece com um pequeno atraso
      })
      .to(".item1", { duration: 2 });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".step1",
        start: "30% 3%",
        end: "90% top",
        scrub: 2,
        // markers: true,
      },
    });

    tl3
      .to(".img1", { duration: 2, x: 900, opacity: 0 })
      .to(".text-box1", { duration: 2, x: -500, opacity: 0 }, "<");

    return () => {
      tl1.kill();
      tl2.kill();
      tl3.kill();
    };
  }, []);

  return (
    <>
      <main className="relative overflow-hidden">
        {/* project 1 */}
        <div className="step1 relative h-screen w-full px-[6%] pt-[5%]">
          <img
            src="/img-project.jpg"
            alt="Project 1"
            className="img1 w-[70%] border-4 border-sky-400 mx-auto"
          />
          <div className="text-box1 absolute top-1/2 transform -translate-y-1/2">
            <h2 className="item1 open-mini-ball-mask mouse-color-changer text-3xl font-bold mb-4 opacity-0">
              Sprawl
            </h2>
            <div className="item1 flex gap-4 w-full mx-auto mb-4 opacity-0">
              <i className="devicon-javascript-plain colored text-3xl"></i>
              <i className="devicon-express-original colored text-3xl"></i>
              <i className="devicon-css3-plain-wordmark colored text-3xl"></i>
              <i className="devicon-html5-plain-wordmark colored text-3xl"></i>
            </div>
            <p className="item1 mouse-color-changer text-gray-600 md:w-1/3 opacity-0">
              Description of Project 1 Description of Project 1 Description of
              Project 1 Description of Project 1 Description of Project 1
              Description of Project 1 Description of Project 1 Description of
              Project 1 Description of Project 1 Description of Project 1
              Description of Project 1 Description of Project 1 Description of
              Project 1
            </p>
            <div className="item1 opacity-0">
              <button className="bg-amber-400 hover:bg-amber-500 text-black px-4 py-2 mt-4">
                View Project
              </button>
              <span className="open-mask-ball ">
                <ButtonCosmic>View Code</ButtonCosmic>
              </span>
            </div>
          </div>
        </div>
        <div className="h-[90vh]" />
        {/* project 2 */}
      </main>
    </>
  );
};
