import { useState, useEffect } from 'react';

export const Page1 = () => {
  const [theme, setTheme] = useState('light'); // 🔥 Removida a tipagem TypeScript

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-5 bg-[var(--color-primary)] text-[var(--light-background)] text-center">
        <h1 className="m-0 text-4xl">Meu Portfólio</h1>
        <p>Dinossauros, Estrelas e Universo</p>
      </header>
      <main className="flex-grow p-5 text-center">
        <h1 className="text-4xl mb-4 font-menrope">Bem-vindo ao Meu Portfólio</h1>
        <p className="mb-4 font-fira">Explore projetos incríveis sobre dinossauros e o universo!</p>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-[var(--color-primary)] text-[var(--light-background)] border-none rounded cursor-pointer font-bold transition-colors duration-300 hover:bg-[var(--color-secondary)]"
        >
          Alternar Tema
        </button>
      </main>
      <footer className="p-5 bg-[var(--color-primary)] text-[var(--light-background)] text-center">
        <p>&copy; 2023 Meu Portfólio</p>
      </footer>
    </div>
  );
};
