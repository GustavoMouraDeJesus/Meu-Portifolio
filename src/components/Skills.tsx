import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [opacity, setOpacity] = useState(1);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // progresso baseado na posição da section
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
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-32 text-white" 
    >
      <div
        className="max-w-6xl mx-auto px-6 transition-all duration-300"
        style={{
          opacity,
          transform: `translateY(${translateY}px)`
        }}
      >
        <h2 className="text-7xl font-extrabold text-center mb-6">
          Minhas Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-16 mb-72">
          {/* HARD SKILLS */}
          <div>
            <h3 className="text-6xl font-bold mb-6 mt-11">Hard Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Front-End Developer",
                "Scrum-Master",
                "HTML5 Avançado",
                "CSS3 Avançado",
                "ReactJS",
                "javaScript",
                "Java",
                "Node.Js",
                "TypeScript",
                "TaildWind CSS",
                "Canva",
                "Figma",
                "Tecnólogo em Logística",
                "Excel Avançado",
                "Administração",
                "Ex-Proano",

              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border border-white/30 rounded-md text-sm hover:bg-white hover:text-black transition text-[1.7rem]
"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* SOFT SKILLS */}
          <div>
            <h3 className="text-6xl font-bold mb-6 mt-10">Soft Skills</h3>
            <ul className="space-y-4 text-gray-300 text-[1.7rem]">
              <li>✔ Trabalho em equipe</li>
              <li>✔ Comunicação clara</li>
              <li>✔ Aprendizado contínuo</li>
              <li>✔ Organização e responsabilidade</li>
              <li>✔ Resolução de problemas</li>
              <li>✔ Adaptabilidade</li>
              <li>✔ Pensamento crítico</li>
              <li>✔ Ética profissional</li>
              <li>✔ Tomada de decisão</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
