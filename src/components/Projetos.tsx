import { useEffect, useRef, useState } from "react";

/* =======================
   TIPAGEM DO PROJETO
======================= */
type Projeto = {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  link: string;
};

/* =======================
   LISTA DE PROJETOS
======================= */
const projetos: Projeto[] = [
  {
    id: 1,
    titulo: "AprovAI",
    descricao:
      "O AprovAI é uma plataforma desenvolvida para auxiliar estudantes na preparação para provas e avaliações utilizando inteligência artificial.",
    imagem: "/Fotos/AprovaIA.png",
    link: "https://gustavomouradejesus.github.io/AprovaIA/",
  },
  {
    id: 2,
    titulo: "Troquin",
    descricao:
      "O objetivo do projeto é simplificar e ensinar o básico sobre investimento, focando principalmente em atingir pessoas de baixa renda. Queríamos mostrar que, com a ferrementa certa, qualquer pessoa pode começar a investir e melhorar sua situação financeira.",
    imagem: "/Fotos/Troquin.png",
    link: "https://gustavomouradejesus.github.io/Troquin/index.html ",
  },
  {
    id: 3,
    titulo: "Librali",
    descricao:
      "A Librali foi desenvolvida com a missão de conectar interpretes de libras a pessoas que precisam desse tipo de serviço com mais facilidade, além disso, trazer mais visibilidade para esses profissionais que são tão ofuscados pela falta de plataformas como a Librali",
    imagem: "/Fotos/Librali.png",
    link: "https://librali-front-end-pi.vercel.app",
  },
];

export default function Projetos() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(40);
  const [projetoAtivo, setProjetoAtivo] = useState<Projeto | null>(null);

  /* =======================
     EFEITO DE SCROLL
  ======================= */
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const visible =
        Math.min(windowHeight, rect.bottom) -
        Math.max(0, rect.top);

      const progress = Math.min(
        Math.max(visible / windowHeight, 0),
        1
      );

      setOpacity(progress);
      setTranslateY((1 - progress) * 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projetos"
      className="relative w-full min-h-screen pt-20 pb-32 px-10 text-white"
    >
      {/* CONTEÚDO COM ANIMAÇÃO */}
      <div
        className="transition-all duration-300 ease-out"
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
        }}
      >
        <h1 className="mb-32 text-7xl font-bold tracking-widest text-center">
          Meus Projetos
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {projetos.map((projeto, index) => (
            <div
              key={projeto.id}
              className={`flex flex-col items-center gap-6 ${
                index === 2 ? "lg:col-span-2 mt-32" : ""
              }`}
            >
              <div className="relative w-full max-w-7xl aspect-video bg-black rounded-sm overflow-hidden">
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className="w-full h-full object-contain"
                />
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className="w-full h-full object-contain"
                />
              </div>

              <button
                onClick={() => setProjetoAtivo(projeto)}
                className="px-6 py-3 border border-white hover:bg-white hover:text-black transition"
              >
                Ver descrição
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* =======================
         MODAL
      ======================= */}
      {projetoAtivo && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-zinc-900 p-8 rounded-lg max-w-lg w-full animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4">
              {projetoAtivo.titulo}
            </h2>

            <p className="text-zinc-300 mb-6">
              {projetoAtivo.descricao}
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => setProjetoAtivo(null)}
                className="px-6 py-3 border border-white hover:bg-white hover:text-black transition"
              >
                Fechar
              </button>

              <a
                href={projetoAtivo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black hover:opacity-80 transition"
              >
                Ver projeto
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
