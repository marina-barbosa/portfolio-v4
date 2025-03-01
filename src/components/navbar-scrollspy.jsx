
export const NavbarScrollspy = () => {
    return (
      <nav className="open-mask-ball font-raleway font-medium fixed top-8 right-8 z-50 text-[18px] uppercase text-right">
        <ul>
          <li>
            <a
              href="#about"
              data-value="quem sou"
              className="hacker-scrambles mouse-color-changer"
            >
              quem sou
            </a>
          </li>
          <li>
            <a
              href="#project"
              data-value="projetos"
              className="hacker-scrambles mouse-color-changer"
            >
              projetos
            </a>
          </li>
          <li>
            <a
              href="#connect"
              data-value="contato"
              className="hacker-scrambles mouse-color-changer"
            >
              contato
            </a>
          </li>
        </ul>
      </nav>
    );
};