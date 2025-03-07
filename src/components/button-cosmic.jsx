/* eslint-disable react/prop-types */
export const ButtonCosmic = ({
  children,
  onClick,
  fullWidth = false,
  pink = false,
  href,
  target = "_blank",
}) => {
  return (
    <button
      className={`font-ibm relative cursor-pointer inline-flex items-center justify-center gap-4 group rounded-sm ${
        fullWidth ? "w-full" : ""
      } ${pink ? "bg-pink-400 hover:bg-pink-500" : "bg-black"}`}
      onClick={onClick}
    >
      <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-sky-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
      <a
        role="button"
        href={href}
        target={href ? target : undefined}
        className={`group relative inline-flex items-center justify-center text-base rounded-sm px-8 py-2 text-white transition-all duration-200 hover:text-black hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30 ${
          fullWidth ? "w-full" : ""
        } ${
          pink ? "bg-pink-400 hover:bg-pink-500" : "bg-black hover:bg-gray-200"
        }`}
      >
        {children}
        <svg
          aria-hidden="true"
          viewBox="0 0 10 10"
          height="10"
          width="10"
          fill="none"
          className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2 group-hover:stroke-black"
        >
          <path
            d="M0 5h7"
            className="transition opacity-0 group-hover:opacity-100"
          ></path>
          <path
            d="M1 1l4 4-4 4"
            className="transition group-hover:translate-x-[3px]"
          ></path>
        </svg>
      </a>
    </button>
  );
};
