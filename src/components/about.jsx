export default function About() {
  return (
    <section className="flex items-center justify-center py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Imagem circular */}
        <div className="mb-8 md:mb-0 md:w-1/2">
          <img
            src="/me.jpg"
            alt="About me"
            className="w-40 h-40 rounded-full object-cover mx-auto"
          />
        </div>

        {/* Texto */}
        <div className="md:w-1/2 text-center md:text-left md:pl-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Sobre Mim
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Olá, sou um desenvolvedor apaixonado por tecnologia e inovação.
            Trabalho com diversas tecnologias de desenvolvimento e tenho
            experiência com aplicações web e mobile. Estou sempre em busca de
            novos desafios e oportunidades para crescer e aprimorar minhas
            habilidades.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Olá, sou um desenvolvedor apaixonado por tecnologia e inovação.
            Trabalho com diversas tecnologias de desenvolvimento e tenho
            experiência com aplicações web e mobile. Estou sempre em busca de
            novos desafios e oportunidades para crescer e aprimorar minhas
            habilidades.
          </p>
        </div>
      </div>
    </section>
  );
}
