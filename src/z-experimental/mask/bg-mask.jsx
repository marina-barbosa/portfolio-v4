import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useMaskStore } from "./mask-store";

export const BgMask = () => {
  const { x, y, size } = useMaskStore();

  console.log("BgMask recebeu valores:", { x, y, size });

  // Criando animações suaves para os valores de X, Y e tamanho
  const animatedX = useSpring(x, { stiffness: 300, damping: 20 });
  const animatedY = useSpring(y, { stiffness: 300, damping: 20 });
  const animatedSize = useSpring(size, { stiffness: 300, damping: 25 });

  // Atualiza os valores da animação quando o Zustand muda
  useEffect(() => {
    animatedX.set(x);
    animatedY.set(y);
    animatedSize.set(size);
  }, [x, y, size, animatedX, animatedY, animatedSize]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none"
      style={{
        background: "white",
        WebkitMaskImage: `radial-gradient(circle ${animatedSize.get()}px at ${animatedX.get()}px ${animatedY.get()}px, transparent 50%, black 100%)`,
        maskImage: `radial-gradient(circle ${animatedSize.get()}px at ${animatedX.get()}px ${animatedY.get()}px, transparent 50%, black 100%)`,
      }}
    />
  );
};
