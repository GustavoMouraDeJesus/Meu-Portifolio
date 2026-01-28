import ParticlesBackground from "./components/ParticlesBackground";
import Hero from "./components/header";
import Projetos from "./components/Projetos";
import Skills from "./components/Skills";
import Footer from "./components/footer"

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      
      {/* BACKGROUND — sempre atrás */}
      <div className="fixed inset-0 -z-20">
        <ParticlesBackground />
      </div>

      {/* OVERLAY ESCURO — fixo no site inteiro */}
      <div className="fixed inset-0 bg-black/50 -z-10 pointer-events-none" />

      {/* CONTEÚDO — sempre na frente */}
      <div className="relative z-10">
        <Hero />
        <Projetos />
        <Skills />
        <Footer />
      </div>

    </div>
  );
}

export default App;
