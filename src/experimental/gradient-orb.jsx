

export default function CosmicHero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cosmic-orb orb-1"></div>
        <div className="cosmic-orb orb-2"></div>
        <div className="cosmic-orb orb-3"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mt-6 max-w-4xl bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-3xl md:text-4xl lg:text-5xl">
            Explore the Universe in a Whole New Light
          </h1>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row"></div>
        </div>
      </div>

      {/* CSS for the gradient orbs */}
      <style>{`
        .cosmic-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.6;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #a78bfa, #818cf8);
          top: -100px;
          right: -100px;
          animation: float 20s ease-in-out infinite;
        }

        .orb-2 {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #60a5fa, #34d399);
          top: 30%;
          right: 20%;
          animation: float 12s ease-in-out infinite 1s;
        }

        .orb-3 {
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, #38bdf8, #818cf8);
          bottom: 20%;
          right: 30%;
          animation: float 10s ease-in-out infinite 3s;
        }

        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, 20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </div>
  );
}
