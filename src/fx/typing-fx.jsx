import { useEffect, useRef } from "react";
import Typed from "typed.js";
// npm install typed.js

const TypingFx = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Fullstack Developer since 2023",
        "Fullstack Developer since 2023",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <h2
      ref={typedRef}
      className="inline-block text-xl z-20 open-mini-ball-mask mouse-color-changer font-ibm align-middle leading-tight"
    ></h2>
  );
};

export default TypingFx;
