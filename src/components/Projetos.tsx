import { useEffect, useRef, useState } from "react";

export default function Projetos() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(40);
  const [modalAberto, setModalAberto] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Quanto da section está visível (0 a 1)
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
      <div
        className="transition-all duration-300"
        style={{
          opacity,
          transform: `translateY(${translateY}px)`
        }}
      >
        <h1 className="mb-32 text-7xl font-bold tracking-widest text-center w-full">
          Meus Projetos
        </h1>

        {/* GRID DOS PROJETOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
          {/* VÍDEO 1 */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-full aspect-video bg-black rounded-sm overflow-hidden mb-14">
              <video
                src="/videos/Aprovai.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            <button
              onClick={() => setModalAberto(true)}
              className="px-6 py-3 border border-white hover:bg-white hover:text-black transition"
            >
              Ver descrição
            </button>
          </div>

          {/* VÍDEO 2 */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-full aspect-video bg-black rounded-sm overflow-hidden mb-14">
              <video
                src="/videos/AprovaIA.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            <button
              onClick={() => setModalAberto(true)}
              className="px-6 py-3 border border-white hover:bg-white hover:text-black transition"
            >
              Ver descrição
            </button>
          </div>

          {/* VÍDEO 3 — DESTAQUE */}
          <div className="flex flex-col items-center gap-6 lg:col-span-2">
            <div className="relative w-full aspect-[16/7] bg-black rounded-sm overflow-hidden mt-64 mb-6">
              <video
                src="/videos/Aprovai.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            <button
              onClick={() => setModalAberto(true)}
              className="px-8 py-4 border border-white text-lg hover:bg-white hover:text-black transition"
            >
              Ver descrição
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {modalAberto && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-zinc-900 p-8 rounded-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">AprovAI</h2>

            <p className="text-zinc-300 mb-6">
              O AprovAI é uma plataforma desenvolvida para auxiliar estudantes
              na preparação para provas e avaliações, utilizando inteligência
              artificial para gerar conteúdos personalizados.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => setModalAberto(false)}
                className="px-6 py-3 border border-white hover:bg-white hover:text-black transition"
              >
                Fechar
              </button>

              <button className="px-6 py-3 bg-white text-black hover:opacity-80 transition">
                Ver projeto
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
