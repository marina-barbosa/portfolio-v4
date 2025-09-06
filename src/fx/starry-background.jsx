import { useEffect, useRef } from "react";

export const StarryBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Configura o canvas para full viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Cria as estrelas uma vez só
    const createStars = () => {
      const starCount = 200;
      const stars = [];

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1 + 1,
          opacity: Math.random(),
          opacityDelta: (Math.random() - 0.5) * 0.08, // Aumentado de 0.02 para 0.08
          twinkleSpeed: Math.random() * 0.1 + 0.05, // Aumentado para mais variação
        });
      }

      starsRef.current = stars;
    };

    // Função de animação otimizada
    const animate = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        // Efeito twinkle suave
        star.opacity += star.opacityDelta;

        if (star.opacity <= 0 || star.opacity >= 1) {
          star.opacityDelta = -star.opacityDelta;
        }

        // Desenha a estrela
        ctx.globalAlpha = Math.max(0, Math.min(1, star.opacity));
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    createStars();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full bg-black z-0"
      style={{
        width: "100vw",
        height: "100vh",
        pointerEvents: "none", // Permite cliques através do canvas
      }}
    />
  );
};
