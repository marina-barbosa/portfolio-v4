export default function TextRevealBox() {
  return (
    <>
      <div className="relative reveal_text p-6 max-w-2xl mx-auto text-center h-screen flex flex-col justify-center">
        <h2 className="text-3xl font-bold">
          <span>Texto Animado com Scroll</span>
        </h2>
        <p className="text-2xl mt-4">
          <span>
            Efeito de revelação aplicando animação gradiente conforme o usuário
            rola a página. Efeito de revelação aplicando animação gradiente
            conforme o usuário rola a página. Efeito de revelação aplicando
            animação gradiente conforme o usuário rola a página. Efeito de
            revelação aplicando animação gradiente conforme o usuário rola a
            página.
          </span>
        </p>

        <style>{`
        .reveal_text span {
            color: rgba(128, 128, 128, 0.671);
            background-image: linear-gradient(90deg, rgb(24, 149, 190), rgb(34, 145, 214));
            background-clip: text;
            background-size: 0% 100%;
            background-repeat: no-repeat;
            animation: reveal linear forwards;
            animation-timeline: view();
            }
            
            .reveal_text h2 span {
                animation-range-start: cover 20vh;
                animation-range-end: cover 30vh;
                }
                
                .reveal_text p span {
                    animation-range-start: cover 25vh;
                    animation-range-end: cover 50vh;
                    }
                    
                    @keyframes reveal {
                        to {
                            background-size: 100% 100%;
                            }
                            }
                            `}</style>
      </div>
    </>
  );
}
