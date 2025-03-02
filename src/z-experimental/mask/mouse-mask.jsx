import { useEffect } from "react";
import { useMaskStore } from "./mask-store";

export const MouseMask = () => {
  const DISTANCE_LARGE = 200; // Distância mínima para expansão grande
  const SIZE_LARGE = 200; // Tamanho de expansão grande
  const DEFAULT_SIZE = 20;


  const setMask = useMaskStore((state) => state.setMask);
  const setMaskSize = useMaskStore((state) => state.setMaskSize);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      console.log("Mouse move:", { x: clientX, y: clientY });
      setMask(clientX, clientY);
    //   setMaskSize(DEFAULT_SIZE);

      //
      let newSize = DEFAULT_SIZE;
      document.querySelectorAll(".open-mask-medium").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elX = rect.left + rect.width / 2;
        const elY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(clientX - elX, 2) + Math.pow(clientY - elY, 2)
        );

        if (distance <= DISTANCE_LARGE) {
          newSize = SIZE_LARGE;
        }
      });
      setMaskSize(newSize);
      //
    };



    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [setMask, setMaskSize]);

  return null;
};
