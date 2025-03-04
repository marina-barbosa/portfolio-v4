export const DivExp = () => {
    return (
      <>
        <div className="tab" id="exp">
          <div className="container">
            <div className="container-exp">
              <div className="linha-exp">
                <div className="card-exp">
                  <div className="ano">2023</div>
                  <i id="inicio" className="fa-solid fa-school-flag"></i>
                  <div className="conteudo">
                    <div className="titulo">
                      Desenvolvimento de Software - Backend
                    </div>
                    <div className="subtitulo">Cubos Academy</div>
                    <div className="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Et, sunt fugit. Magni consectetur eos qui veniam esse.
                      Exercitationem amet rerum placeat sit ut saepe tenetur
                      eaque reprehenderit, laborum ab dolor!
                    </div>
                  </div>
                </div>
                <div className="card-exp">
                  <div className="ano">2023</div>
                  <i className="fa-solid fa-school-flag"></i>
                  <div className="conteudo">
                    <div className="titulo">
                      Treinamento Sharp Coders - Fullstack
                    </div>
                    <div className="subtitulo">Ima Tech</div>
                    <div className="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Et, sunt fugit. Magni consectetur eos qui veniam esse.
                      Exercitationem amet rerum placeat sit ut saepe tenetur
                      eaque reprehenderit, laborum ab dolor!
                    </div>
                  </div>
                </div>
                <div className="card-exp">
                  <div className="ano">2024</div>
                  <i className="fa-solid fa-school-flag"></i>
                  <div className="conteudo">
                    <div className="titulo">Engenharia de Software</div>
                    <div className="subtitulo">Faculdade UNOPAR</div>
                    <div className="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Et, sunt fugit. Magni consectetur eos qui veniam esse.
                      Exercitationem amet rerum placeat sit ut saepe tenetur
                      eaque reprehenderit, laborum ab dolor!
                    </div>
                  </div>
                </div>
                <div className="card-exp">
                  <div className="ano">2024</div>
                  <i className="fa-solid fa-question"></i>
                  <div className="conteudo">
                    <div className="titulo"></div>
                    <div className="subtitulo"></div>
                    <div className="desc"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>
          {`
    

#exp {    
    background-image: linear-gradient(
        45deg, #212632, #242A34, #3C4C5A
    );
    background-size: cover;
}

#exp .container {
    display: flex;
}

.container-exp {
    overflow: auto;    
}

.linha-exp {
    height: 100%;
    display: flex;
    justify-content: left;
    padding-left: 50px;
    gap: 20px;    
    
}

.card-exp {
    width: 250px;
    flex-shrink: 0;
    display: grid;
    grid-template-rows: 1fr 50px 1fr;
    gap: 20px;    
    position: relative;
}

#exp i {
    background-color: var(--andromeda-light);
    width: 50px;
    height: 50px;
    font-size: 2em;
    color: var(--andromeda-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    z-index: 2;
}

.ano {
    display: flex;
    align-items: end;
    margin-left: 10px;
}



.card-exp:nth-child(odd) .conteudo {
    grid-row-start: 1;
    grid-row-end: 2;
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.card-exp:nth-child(odd) .ano {
    grid-row-start: 3;
    grid-row-end: 4;
    align-items: start;
}


/* LINHA */

#inicio::after {
    position: absolute;
    content: '';
    background: var(--andromeda-light);
    height: 2px;
    width: 800px;
    left: 20%;
}





    `}
        </style>
      </>
    );
};