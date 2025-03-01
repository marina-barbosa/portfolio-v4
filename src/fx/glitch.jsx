export const Glitch = () => {
    return (
      <>
        <style>
          {`
            @keyframes glitch-tremble {
              0% {
                transform: translate(0, 0);
              }
              20% {
                transform: translate(-2px, 0);
              }
              40% {
                transform: translate(2px, 0);
              }
              60% {
                transform: translate(-2px, -1px);
              }
              80% {
                transform: translate(2px, 1px);
              }
              100% {
                transform: translate(0, 0);
              }
            }

            .glitch-tremble:hover {
              animation: glitch-tremble 0.2s infinite;
            }

            @keyframes glitch-colors {
              0% {
                box-shadow: -3px -2px lightseagreen, 2px 3px #f0f;
              }
              20% {
                box-shadow: -3px 2px #f0f, -2px -3px lightseagreen;
              }
              40% {
                box-shadow: 2px 3px lightseagreen, 3px -2px #f0f;
              }
              60% {
                box-shadow: 3px -1px #f0f, -1px 3px lightseagreen;
              }
              80% {
                box-shadow: -3px 1px lightseagreen, 1px -3px #f0f;
              }
              100% {
                box-shadow: 2px -3px #f0f, -3px 2px lightseagreen;
              }
            }

            .glitch-colors:hover {
              animation: glitch-colors 0.2s infinite;
            }

          `}
        </style>
      </>
    );
}