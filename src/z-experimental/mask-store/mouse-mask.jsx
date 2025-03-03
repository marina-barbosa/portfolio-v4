import { useEffect } from "react";
import { useMaskStore } from "./mask-store";

export const MouseMask = () => {
  const DISTANCE_LARGE = 200;
  const DISTANCE_MEDIUM = 100;
  const DISTANCE_SMALL = 50;

  const SIZE_LARGE = 200;
  const SIZE_MEDIUM = 100;
  const SIZE_SMALL = 50;
  const SIZE_NONE = 0;
  const DEFAULT_SIZE = 20;

  const setMask = useMaskStore((state) => state.setMask);
  const setMaskSize = useMaskStore((state) => state.setMaskSize);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      console.log("Mouse move:", { x: clientX, y: clientY });
      setMask(clientX, clientY);

      let newSize = DEFAULT_SIZE;

      document
        .querySelectorAll(
          ".open-mask-large, .open-mask-medium, .open-mask-small, .open-mask-none"
        )
        .forEach((el) => {
          const rect = el.getBoundingClientRect();
          const elX = rect.left + rect.width / 2;
          const elY = rect.top + rect.height / 2;
          const distance = Math.sqrt(
            Math.pow(clientX - elX, 2) + Math.pow(clientY - elY, 2)
          );

          if (
            el.classList.contains("open-mask-none") &&
            distance <= DISTANCE_SMALL
          ) {
            newSize = SIZE_NONE;
          } else if (
            el.classList.contains("open-mask-small") &&
            distance <= DISTANCE_SMALL
          ) {
            newSize = SIZE_SMALL;
          } else if (
            el.classList.contains("open-mask-medium") &&
            distance <= DISTANCE_MEDIUM
          ) {
            newSize = SIZE_MEDIUM;
          } else if (
            el.classList.contains("open-mask-large") &&
            distance <= DISTANCE_LARGE
          ) {
            newSize = SIZE_LARGE;
          }
        });

      setMaskSize(newSize);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [setMask, setMaskSize]);

  return null;
};
