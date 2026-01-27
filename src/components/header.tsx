import React, { useEffect, useState } from "react";
import Social from "./Social";
import ScrollDown from "./ScrollDown";

export default function Hero() {
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
        <h2 className="font-extrabold tracking-widest text-2xl md:text-3xl mb-4 mt-36 text-white">
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
    mt-28 px-8 py-4
    text-lg font-semibold
    border border-white text-white
    rounded-md
    animate-pulse hover:animate-none
    hover:scale-105 transition
  "
        >
          📄 Baixar currículo
        </a>


        <ScrollDown />
      </div>
    </section>
  );
}
