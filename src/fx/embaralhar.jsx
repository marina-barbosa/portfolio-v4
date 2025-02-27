export const Embralhar = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval = null;

    document.querySelectorAll("h1").forEach((h1) => {
      h1.onmouseover = (event) => {
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return event.target.dataset.value[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
          }

          iteration += 1 / 3;
        }, 30);
      };
    });

    return (
      <>
        <h1 data-value="HYPERPLEXED">HYPERPLEXED</h1>
        <h1 data-value="HOME">HOME</h1>
        <h1 data-value="SOBRE">SOBRE</h1>
        <h1 data-value="PROJETOS">PROJETOS</h1>
        <h1 data-value="CONTATO">CONTATO</h1>

        <style>
          {`
            body {
                display: grid;
                place-items: center;
                height: 100vh;
                background-color: black;
                margin: 0rem;
                overflow: hidden;
            }

            h1 {
                font-family: 'Space Mono', monospace;
                font-size: clamp(1rem, 3vw, 3rem);
                color: white;
                padding: 0rem clamp(1rem, 2vw, 3rem);
                border-radius: clamp(0.4rem, 0.75vw, 1rem);
            }

            h1:hover {
                background-color: white;
                color: black;
            }
         `}
        </style>
      </>
    );
}