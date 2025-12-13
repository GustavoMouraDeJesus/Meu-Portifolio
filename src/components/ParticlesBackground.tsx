// src/components/ParticlesBackground.tsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#000000" },
        fullScreen: { enable: true, zIndex: 0 },
        particles: {
          number: { value: 180, density: { enable: true, area: 800 } },
          color: { value: "#ff0000ff" },
          shape: { type: "circle" },
          opacity: { value: 0.8 },
          size: { value: { min: 1, max: 3 } },
          links: { enable: true, distance: 110, color: "#ff0000ff", opacity: 0.45, width: 1 },
          move: { enable: true, speed: 1.1, random: false, straight: false }
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" } },
          modes: { grab: { distance: 180, links: { opacity: 0.6 } } }
        }
      }}
    />
  );
}
