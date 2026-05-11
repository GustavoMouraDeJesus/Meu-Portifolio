import { useEffect, useState } from "react";
import ScrollDown from "./ScrollDown";
import Social from "./Social";

export default function Hero() {
  const [abrirCarta, setAbrirCarta] = useState(false);
  const name = "Gustavo Moura".split("");
  const descricao =
    "Desenvolvedor Web focado em criar soluções funcionais, acessíveis e bem estruturadas. Tenho experiência com projetos reais, trabalho em equipe e foco em aprendizado contínuo. ";

  const [opacity, setOpacity] = useState(1);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeEnd = 250;

      setOpacity(Math.max(1 - scrollY / fadeEnd, 0));
      setTranslateY(Math.min(scrollY / 10, 40));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center">
      <div
        className="relative z-20 flex flex-col items-center transition-all duration-300"
        style={{
          opacity,
          transform: `translateY(-${translateY}px)`
        }}
      >
        <h2 className="font-extrabold tracking-widest text-2xl md:text-3xl mb-1 mt-56 text-white">
          Opa, meu nome é
        </h2>

        {/* NOME */}
        <h1 className="font-extrabold tracking-widest text-7xl md:text-9xl flex gap-0 mt-16">
          {name.map((letter, index) => (
            <span key={index} className="text-cut stroke-letter">
              {letter}
            </span>
          ))}
        </h1>


        {/* DESCRIÇÃO */}
        <p className="font-extrabold text-xl md:text-2xl max-w-4xl mt-16 text-center text-white leading-relaxed">
          {descricao}
        </p>

        <Social
          github="https://github.com/GustavoMouraDeJesus"
          linkedin="https://www.linkedin.com/in/gustavo-moura-861938222/"
          instagram="https://www.instagram.com/gmoura_djesus"
          size={26}
        />

        <a
          href="/MeuCurriculo.pdf"
          target="_blank"
          className="
    mt-20 px-8 py-4
    text-lg font-semibold
    border border-white text-white
    rounded-md
    animate-pulse hover:animate-none
    hover:scale-105 transition
  "
        >
          📄 Baixar currículo
        </a>

        <button
          onClick={() => setAbrirCarta(true)}
          className="
            mt-6 px-8 py-4
            text-lg font-semibold
    border border-white text-white
    rounded-md
    animate-pulse hover:animate-none
    hover:scale-105 transition
            "
        >
          ✉ Carta de apresentação
        </button>

        {abrirCarta && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6">
            <div className="bg-zinc-900 max-w-5xl w-full p-8 rounded-xl text-white relative animate-fadeIn">

              <button
                onClick={() => setAbrirCarta(false)}
                className="absolute top-4 right-4 text-2xl"
              >
                ×
              </button>

              <h2 className="text-4xl font-bold mb-6">
                Carta de Apresentação
              </h2>

              <p className="text-zinc-300 leading-relaxed text-2xl">
                Olá, meu nome é Gustavo Moura, tenho 22 anos sou formado em Desenvolvimento Web Java pelo Instituto Proa com conclusão no 2 semestre de 2025 e estudante de Engenharia De Software pela Anhanguera.

                Atuei como Scrum Master em um projeto acadêmico denominado Librali realizado durante o curso do Instituto Proa, aplicando metodologias ágeis na organização, acompanhamento e entrega de atividades da equipe.

                Possuo conhecimento em Excel Avançado, Administração Básica e Desenvolvimento Front-End, com habilidade em JavaScript, React, Node.js, Figma, Canva e aprendendo TypeScript e Tailwind CSS.

                Perfil dedicado, proativo e comprometido com resultados, com forte capacidade de liderança, organização de equipes, distribuição eficiente de tarefas e boa comunicação oral e escrita.
              </p>
            </div>
          </div>
        )}

        <ScrollDown />
      </div>
    </section>
  );
}
