export const RevealTextFx = () => {
    return (
      <>
        <style>{`
        .reveal-text {
          color: rgba(128, 128, 128, 0.671);
          background-color: linear-gradient(90deg, rgb(200, 200, 200), rgb(80, 80, 80));
          background-clip: text;
          background-size: 0% 100%;
          background-repeat: no-repeat;
          animation: reveal linear forwards;
          animation-timeline: view();
        }
        .reveal-text h2 {
          animation-range-start: cover 20vh;
          animation-range-end: cover 30vh;
        }
        .reveal-text span {
          animation-range-start: cover 25vh;
          animation-range-end: cover 50vh;
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