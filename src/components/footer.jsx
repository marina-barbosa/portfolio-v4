export const Footer = () => {
  return (
    <footer className="relative w-full py-8 border-t border-gray-100">
      <div className="mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Coluna da esquerda - Connect */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-between h-full">
            <div className="space-y-6">
              <h3 className="font-bold text-sm tracking-wider">CONNECT</h3>
              <a
                href="mailto:email@example.com"
                className="block text-sm hover:opacity-70 transition-opacity"
              >
                Email
              </a>
              <a
                href="tel:+1234567890"
                className="block text-sm hover:opacity-70 transition-opacity"
              >
                Phone
              </a>
            </div>
          </div>
          {/* Logo */}
          <div className="flex-1 flex justify-center items-center">
            <img src="/twitch-dinodance.gif" className="h-10 open-mask-medium" />
          </div>
          {/* Coluna da direita - Créditos */}
          <div className="flex-1 flex flex-col items-center md:items-end justify-between h-full">
            <div>
              <p className="text-xs text-gray-600 mb-1 text-right">
                Made in Brazil
              </p>
              <p className="text-xs text-gray-600 mb-6 text-right">
                Created & Coded by Marina
              </p>
              <div className="flex space-x-3 mt-2">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-opacity-90 transition-colors"
                >
                  say hi →
                </a>
                <a
                  href="/cv.pdf"
                  className="inline-flex items-center justify-center px-4 py-2 border border-black text-black text-sm font-medium rounded hover:bg-black hover:text-white transition-colors"
                >
                  get cv →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
