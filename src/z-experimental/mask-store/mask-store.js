import { create } from "zustand";

export const useMaskStore = create((set) => ({
  x: 0,
  y: 0,
  size: 20, // Tamanho fixo de 50px
  setMask: (x, y) => {
    console.log("Atualizando MaskStore:", { x, y }); // Verifica mudanças
    set({ x, y });
  },
  setMaskSize: (size) => {
    console.log("Atualizando MaskSize:", size);
    set({ size });
  },
}));
