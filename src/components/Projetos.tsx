export default function Projetos() {
  return (
    <section
      id="projetos"
      className="relative w-full min-h-screen flex flex-col items-start text-white py-32 px-10"
    >
      <h1 className="mb-32 text-7xl font-bold tracking-widest">
        Meus Projetos
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
        {/* Vídeo 1 */}
        <div className="relative w-full aspect-video bg-black rounded-sm overflow-hidden">
          <video
            src="/videos/Aprovai.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain"
          />
        </div>

        {/* Vídeo 2 */}
        <div className="relative w-full aspect-video bg-black rounded-sm overflow-hidden">
          <video
            src="/videos/AprovaIA.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
