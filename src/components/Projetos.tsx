export default function Projetos() {
  return (
    <section
      id="projetos"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-white py-32"
    >
      <h1 className="mb-40 text-7xl font-bold tracking-widest z-20">
        Meus Projetos
      </h1>

      <div className="relative flex items-center justify-center gap-16 flex-wrap z-20">
        <div className="relative w-[1060px] max-w-[80vw] aspect-video">
          <video
            src="/videos/Aprovai.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-contain rounded-sm z-10 bg-black"
          />
        </div>
      </div>
    </section>
  );
}
