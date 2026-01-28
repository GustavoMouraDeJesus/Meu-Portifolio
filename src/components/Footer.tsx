import Social from "./Social";
import { useEffect, useRef, useState } from "react";

export default function Footer() {

    const sectionRef = useRef<HTMLElement | null>(null);
      const [opacity, setOpacity] = useState(0);
      const [translateY, setTranslateY] = useState(40);
    
      useEffect(() => {
        const handleScroll = () => {
          if (!sectionRef.current) return;
    
          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
    
          
          const progress = Math.min(
            Math.max((windowHeight - rect.top) / windowHeight, 0),
            1
          );
    
          setOpacity(progress);
          setTranslateY((1 - progress) * 40);
        };
    
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // garante estado inicial
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

  return (
    <footer className="border-t border-white/10 py-8 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* NOME + STACK */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-extrabold tracking-widest">
            Gustavo Moura
          </h3>
          <p className="text-white/60 text-sm">
            Desenvolvedor Web · React · TypeScript
          </p>
        </div>

        {/* SOCIAL */}
        <Social
          github="https://github.com/GustavoMouraDeJesus"
          linkedin="https://www.linkedin.com/in/gustavo-moura-861938222/"
          instagram="https://www.instagram.com/gmoura_djesus"
          size={20}
        />

        {/* CONTATO */}
        <div className="text-center md:text-right text-sm">
          <a
            href="mailto:gustavomouradejesus@gmail.com"
            className="block text-white/60 hover:text-white transition"
          >
            📧 gustavomouradejesus@gmail.com
          </a>

          <span className="block text-white/60 mt-1">
            📍 Brasil
          </span>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Gustavo Moura
      </div>
    </footer>
  );
}
