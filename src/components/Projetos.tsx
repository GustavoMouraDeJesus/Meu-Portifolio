export default function Projetos() {
  return (
    <section
      id="projetos"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg- text-white py-32"
    >
      <h2 className="mb-20 text-4xl font-bold tracking-widest z-20">
        Meus Projetos
      </h2>

      <div className="relative flex items-center justify-center gap-16 flex-wrap z-20">

        <div className="relative w-[750px] max-w-[90vw]">

  {/* VÍDEO — tela do notebook */}
  <video
    src="/videos/site-desktop.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="
      absolute
      top-[25%]
      left-[0%]
      w-[100%]
      h-[60%]
      object-cover
      rounded-sm
      z-10
    "
  />

  {/* MOCKUP */}
  <img
    src="/mockups/NoteBook.png"
    alt="Projeto Desktop"
    className="relative z-20 w-full pointer-events-none select-none"
  />
</div>


      </div>
    </section>
  );
}
