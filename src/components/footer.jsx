export const Footer = () => {
  return (
    <footer className="w-full py-6 border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="w-20 h-6 mb-4 md:mb-0">
            <svg viewBox="0 0 100 30" className="w-full h-full">
              <rect
                width="100"
                height="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <text
                x="50"
                y="20"
                fontSize="12"
                textAnchor="middle"
                fill="currentColor"
              >
                LOGO
              </text>
            </svg>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xs tracking-widest uppercase mb-2 font-light">
              Connect
            </h3>
            <div className="flex gap-x-20">
              <div className="flex flex-col flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600">
                <a href="#" className="hover:text-black transition-colors">
                  Linkedin
                </a>
                <a href="#" className="hover:text-black transition-colors">
                  Github
                </a>
                <a href="#" className="hover:text-black transition-colors">
                  Behance
                </a>
              </div>
              <div className="flex flex-col flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600">
                <a href="#" className="hover:text-black transition-colors">
                  Email
                </a>
                <a href="#" className="hover:text-black transition-colors">
                  Phone
                </a>
                <a href="#" className="hover:text-black transition-colors">
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Credits */}
          <div className="text-xs text-gray-400 mt-4 md:mt-0 text-center md:text-right">
            <p>Made in Brazil</p>
            <p>Created & Coded by Marina</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
