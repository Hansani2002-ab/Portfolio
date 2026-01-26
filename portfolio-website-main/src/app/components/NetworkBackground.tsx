'use client'

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function NetworkBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={{
        background: { color: "transparent" },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" }, // Lines follow mouse
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.5 } },
          },
        },
        particles: {
          color: { value: "#3b82f6" }, // Change to your primary color
          links: {
            color: "#3b82f6",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1, // Slow, elegant movement
            direction: "none",
            outModes: { default: "out" },
          },
          number: {
            density: { enable: true },
            value: 80, // Number of dots
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}