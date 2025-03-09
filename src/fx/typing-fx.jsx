import { useEffect, useRef } from "react";
import Typed from "typed.js";
// npm install typed.js
import { useTranslation } from "react-i18next";

const TypingFx = () => {
  const typedRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [`${t("fullstack-developer")}`, `${t("fullstack-developer")}`],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, [t]);

  return (
    <h2
      ref={typedRef}
      className="inline-block sm:text-xl z-20 open-mini-ball-mask mouse-color-changer font-ibm align-middle leading-tight"
    ></h2>
  );
};

export default TypingFx;
