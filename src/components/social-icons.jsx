import { LuLinkedin, LuGithub } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
export const SocialIcons = () => {
  return (
    <ul className="open-mini-ball-mask flex 2xl:gap-4 flex-col fixed top-18 sm:top-8 md:top-50 2xl:top-95 uw:top-155 left-3 sm:left-8 z-50">
      <li>
        <span className="glitch-tremble glitch-colors flex items-center justify-center w-11 h-11 border-2 border-transparent rounded-full">
          <a
            href="https://github.com/marina-barbosa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuGithub className="social-icons-stroke glitch-tremble w-6 h-6" />
          </a>
        </span>
      </li>
      <li>
        <span className="glitch-tremble glitch-colors flex items-center justify-center w-11 h-11 border-2 border-transparent rounded-full">
          <a
            href="https://www.linkedin.com/in/marina-barbosa-exp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuLinkedin className="social-icons-stroke glitch-tremble w-6 h-6" />
          </a>
        </span>
      </li>
      <li>
        <span className="glitch-tremble glitch-colors flex items-center justify-center w-11 h-11 border-2 border-transparent rounded-full">
          <a
            href="https://wa.me/5513996697841"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="social-icons-fill glitch-tremble w-6 h-6" />
          </a>
        </span>
      </li>
    </ul>
  );
};
