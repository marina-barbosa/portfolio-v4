
export const NavbarScrollspy = () => {
    return (
      <nav className="open-mask-ball font-raleway font-medium fixed top-8 right-8 z-50 text-[18px] uppercase text-right">
        <ul className=" space-y-4">
          <li>
            <a
              href=""
              data-value="projetos"
              className="hacker-scrambles mouse-color-changer"
            >
              projetos
            </a>
          </li>
          <li>
            <a
              href=""
              data-value="quem sou"
              className="hacker-scrambles mouse-color-changer"
            >
              quem sou
            </a>
          </li>
          <li>
            <a
              href=""
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