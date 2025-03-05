
export const NavbarScrollspy = () => {
    return (
      <nav className="open-mini-ball-mask font-raleway sm:tracking-widest font-semibold 2xl:font-medium fixed top-8 right-4 sm:right-8 z-50 text-[14px] 2xl:text-[18px] uppercase text-right">
        <ul className="sm:space-y-2 2xl:space-y-4">
          <li>
            <a
              href=""
              data-value="projetos"
              className="hacker-scrambles text-[#555555]"
            >
              projetos
            </a>
          </li>
          <li>
            <a
              href=""
              data-value="quem sou"
              className="hacker-scrambles text-[#555555]"
            >
              sobre
            </a>
          </li>
          <li>
            <a
              href=""
              data-value="contato"
              className="hacker-scrambles text-[#555555]"
            >
              contato
            </a>
          </li>
        </ul>
      </nav>
    );
};