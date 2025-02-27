import { LuLinkedin, LuGithub } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
export const SocialIcons = () => {
  return (
    <ul className="flex gap-4 flex-col fixed md:top-50 top-8 left-8 md:translate-y-1/2 z-50">
      <li>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <LuGithub className="w-6 h-6" />
        </a>
      </li>
      <li>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <LuLinkedin className="w-6 h-6" />
        </a>
      </li>
      <li>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="w-6 h-6" />
        </a>
      </li>
    </ul>
  );
};
