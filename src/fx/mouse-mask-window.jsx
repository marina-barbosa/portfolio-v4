import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export const MouseMaskWindow = () => {
  const DISTANCE_LARGE = 300;
  const DISTANCE_SMALL = 70;
  const SIZE_LARGE = 200;
  const SIZE_SMALL = 90;
  const DEFAULT_SIZE = 20;

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [circleExpandSize, setCircleExpandSize] = useState(DEFAULT_SIZE);
  const circleSize = useSpring(DEFAULT_SIZE, { stiffness: 100, damping: 20 });
  const [isHoveringNoMask, setIsHoveringNoMask] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });

      if (isHoveringNoMask) {
        setCircleExpandSize(0);
        return;
      }

      let newSize = DEFAULT_SIZE;

      document.querySelectorAll(".open-mask-ball").forEach((el) => {
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

      document.querySelectorAll(".open-mini-ball-mask").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elX = rect.left + rect.width / 2;
        const elY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(clientX - elX, 2) + Math.pow(clientY - elY, 2)
        );

        if (distance <= DISTANCE_SMALL && newSize < SIZE_SMALL) {
          newSize = SIZE_SMALL;
        }
      });

      setCircleExpandSize(newSize);
    };

    const handleMouseEnterNoMask = () => setIsHoveringNoMask(true);
    const handleMouseLeaveNoMask = () => setIsHoveringNoMask(false);

    window.addEventListener("mousemove", handleMouseMove);

    document.querySelectorAll(".no-mask-section").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterNoMask);
      el.addEventListener("mouseleave", handleMouseLeaveNoMask);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll(".no-mask-section").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterNoMask);
        el.removeEventListener("mouseleave", handleMouseLeaveNoMask);
      });
    };
  }, [isHoveringNoMask]);

  useEffect(() => {
    circleSize.set(circleExpandSize);
  }, [circleExpandSize, circleSize]);

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-white z-0 pointer-events-none"
        style={{
          maskImage: `radial-gradient(circle ${circleSize.get()}px at ${
            mousePosition.x
          }px ${mousePosition.y}px, transparent 90%, black 100%)`,
          WebkitMaskImage: `radial-gradient(circle ${circleSize.get()}px at ${
            mousePosition.x
          }px ${mousePosition.y}px, transparent 90%, black 100%)`,
        }}
      />
    </>
  );
};
