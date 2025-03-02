import { LuLinkedin, LuGithub } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
export const SocialIcons = () => {
  return (
    <ul className="open-mini-ball-mask flex gap-4 flex-col fixed md:top-50 top-8 left-8 z-50">
      <li>
        <span className="glitch-tremble glitch-colors flex items-center justify-center w-11 h-11 border-2 border-transparent rounded-full">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <LuGithub className="glitch-tremble w-6 h-6 mouse-color-changer-stroke" />
          </a>
        </span>
      </li>
      <li>
        <span className="glitch-tremble glitch-colors flex items-center justify-center w-11 h-11 border-2 border-transparent rounded-full">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <LuLinkedin className="glitch-tremble w-6 h-6 mouse-color-changer-stroke" />
          </a>
        </span>
      </li>
      <li>
        <span className="glitch-tremble glitch-colors flex items-center justify-center w-11 h-11 border-2 border-transparent rounded-full">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="glitch-tremble w-6 h-6 mouse-color-changer-fill" />
          </a>
        </span>
      </li>
    </ul>
  );
};
