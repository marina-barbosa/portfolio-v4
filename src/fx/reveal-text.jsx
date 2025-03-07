export const RevealTextFx = () => {
    return (
      <>
        <style>{`
        .reveal-text {
          color: rgba(128, 128, 128, 0.671);
          background-image: linear-gradient(90deg, black, #333, black);
          background-clip: text;
          background-size: 0% 100%;
          background-repeat: no-repeat;
          animation: reveal linear forwards;
          animation-timeline: view();
        }
        .reveal-text-title {
          animation-range-start: cover 20vh;
          animation-range-end: cover 50vh;
        }
        .reveal-text-body {
          animation-range-start: cover 25vh;
          animation-range-end: cover 70vh;
        }
        @keyframes reveal {
          to {
            background-size: 100% 100%;
          }
        }
      `}</style>
      </>
    );
}