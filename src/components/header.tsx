import React, { useEffect, useState } from "react";
import Social from "./Social";
import ScrollDown from "./ScrollDown";

export default function Hero() {
  const name = "Gustavo Moura".split("");
  const [opacity, setOpacity] = useState(1);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeEnd = 250;

      const newOpacity = 1 - scrollY / fadeEnd;
      setOpacity(Math.max(newOpacity, 0));
      setTranslateY(Math.min(scrollY / 10, 40));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center">
      
      {/* overlay */}
      

      <div
        className="relative z-20 flex flex-col items-center transition-all duration-300"
        style={{
          opacity,
          transform: `translateY(-${translateY}px)`
        }}
      >
        <h2 className="font-extrabold tracking-widest text-2xl md:text-3xl mb-4">
          Opa, meu nome é
        </h2>

        <h1 className="font-extrabold tracking-widest text-7xl md:text-9xl flex gap-0">
          {name.map((letter, index) => (
            <span key={index} className="text-cut stroke-letter">
              {letter}
            </span>
          ))}
        </h1>

        <Social
          github="https://github.com/GustavoMouraDeJesus"
          linkedin="https://www.linkedin.com/in/gustavo-moura-861938222/"
          instagram="https://www.instagram.com/gmoura_djesus"
          size={26}
        />

        <ScrollDown />
      </div>
    </section>
  );
}
