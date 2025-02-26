
import { useState, useEffect } from "react";
import {
  motion,
  useSpring
} from "framer-motion";

export const MouseMaskEffect = () => {
  return (
    <main className="h-screen w-screen relative">
      <BackgroundEstrelado />
      <MouseWindow />
      <Home />
    </main>
  );
};

const BackgroundEstrelado = () => {
  const [stars, setStars] = useState([]);

  // Cria as estrelas aleatórias
  useEffect(() => {
    const createStars = () => {
      const starCount = 200; // Número de estrelas
      const newStars = [];
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * 100; // Posição X aleatória
        const y = Math.random() * 100; // Posição Y aleatória
        const size = Math.random() * 2 + 1; // Tamanho aleatório
        const duration = Math.random() * 2 + 1; // Duração da animação
        newStars.push({ x, y, size, duration });
      }
      setStars(newStars);
    };

    createStars();
  }, []);

  return (
    <>
      <div className="bg-black h-screen w-screen absolute">
        <p className="text-red-500">aqui tem estrelas</p>
        <p className="text-red-500">aqui tem estrelas</p>
        <p className="text-red-500">aqui tem estrelas</p>
        {stars.map((star, index) => (
          <div
            key={index}
            className="star absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
            }}
          ></div>
        ))}
      </div>
      <style>
        {`
          .star {
            animation: twinkle 1.5s infinite ease-in-out;
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
        `}
      </style>
    </>
  );
};

// const MouseWindow = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const circleSize = useMotionValue(20);
//   const animatedSize = useSpring(circleSize, { stiffness: 100, damping: 20 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//       circleSize.set(200); // Expande suavemente para 200px
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [circleSize]);

//   useMotionValueEvent(circleSize, "change", () => {
//     // Sempre que o tamanho mudar, reiniciamos o timer para voltar a 20px após inatividade
//     const timeout = setTimeout(() => {
//       circleSize.set(20);
//     }, 500); // Tempo de inatividade

//     return () => clearTimeout(timeout);
//   });

//   return (
//     <motion.div
//       className="absolute inset-0 bg-white"
//       style={{
//         maskImage: `radial-gradient(circle ${animatedSize.get()}px at ${
//           mousePosition.x
//         }px ${mousePosition.y}px, transparent 90%, black 100%)`,
//         WebkitMaskImage: `radial-gradient(circle ${animatedSize.get()}px at ${
//           mousePosition.x
//         }px ${mousePosition.y}px, transparent 90%, black 100%)`,
//       }}
//     />
//   );
// }



const MouseWindow = () => {
  const BORDER_THRESHOLD = 100; // Distância da borda para ativar o efeito
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isCentered, setIsCentered] = useState(false);

  // Animação suave do tamanho do círculo
  const circleSize = useSpring(20, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Verifica se o mouse está a pelo menos 100px de qualquer borda
      const insideSafeZone =
        clientX > BORDER_THRESHOLD &&
        clientX < windowWidth - BORDER_THRESHOLD &&
        clientY > BORDER_THRESHOLD &&
        clientY < windowHeight - BORDER_THRESHOLD;

      setIsCentered(insideSafeZone);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    circleSize.set(isCentered ? 200 : 20);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCentered]);

  return (
    <motion.div
      className="absolute inset-0 bg-white"
      style={{
        maskImage: `radial-gradient(circle ${circleSize.get()}px at ${
          mousePosition.x
        }px ${mousePosition.y}px, transparent 90%, black 100%)`,
        WebkitMaskImage: `radial-gradient(circle ${circleSize.get()}px at ${
          mousePosition.x
        }px ${mousePosition.y}px, transparent 90%, black 100%)`,
      }}
    />
  );
};




const Home = () => {
  return (
    <div className="h-screen w-screen z-10 absolute">
      <h1 className="text-3xl font-bold text-sky-600">Home</h1>
    </div>
  );
};
