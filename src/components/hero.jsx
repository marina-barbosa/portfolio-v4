
import { TitleHero } from "../fx/title-hero";
import TypingFx from "../fx/typing-fx";
import { ButtonCosmic } from "./button-cosmic";
export const Hero = () => {
    return (
      <section className="mx-auto h-screen flex flex-col items-center justify-center font-raleway">
        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="cosmic-orb orb-1"></div>
          <div className="cosmic-orb orb-2"></div>
          <div className="cosmic-orb orb-3"></div>
        </div>
        <h1 className="open-mask-ball mouse-color-changer mb-4 z-10 mx-auto max-w-[78vw] m-10 text-5xl sm:text-7xl uppercase font-bold text-center">
          You dream, <br className="sm:hidden" /> I create. <br />
          Just like that.
        </h1>
        {/* <span className="relative mb-4 z-10 mx-auto max-w-[78vw] m-10">
          <TitleHero />
        </span> */}
        <div className="relative h-[28px] min-w-[200px]">
          <TypingFx />
        </div>
        <div className="open-mini-ball-mask mt-10">
          <ButtonCosmic>say hi</ButtonCosmic>
          <ButtonCosmic>get cv</ButtonCosmic>
        </div>

        {/* CSS for the gradient orbs */}
        <style>{`
        .cosmic-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
        }

        .orb-1 {
          width: 600px;
          height: 500px;
          background: linear-gradient(135deg, #a78bfa, #818cf8);
          top: -300px;
          left: 150px;
          opacity: 0.3;
          animation: float 5s ease-in-out infinite;
        }

        .orb-2 {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #60a5fa, #34d399);
          top: 30%;
          right: 20%;
          opacity: 0.6;
          animation: float 5s ease-in-out infinite 1s;
        }

        .orb-3 {
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, #ec4899, #818cf8);
          bottom: 20%;
          right: 30%;
          opacity: 0.6;
          animation: float 5s ease-in-out infinite 3s;
        }

        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(40px, 70px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
      </section>
    );
};

//  from-indigo-500 via-pink-500 to-sky-400