import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Shared animated background for all sections except Hero.
 * Floating orbs + geometric shapes with random movement.
 * Grid lines and corner accents stay static for aesthetics.
 */
export const AnimatedBackground = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Floating orbs: slow, drifting movement ──
      const orbs = bgRef.current?.querySelectorAll(".bg-orb");
      orbs?.forEach((orb, i) => {
        gsap.to(orb, {
          y: `random(-150, 150)`,
          x: `random(-80, 80)`,
          duration: gsap.utils.random(14, 24),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 1.5,
        });
      });

      // ── Geometric shapes: random floating + rotation ──
      const shapes = bgRef.current?.querySelectorAll(".bg-shape");
      shapes?.forEach((shape) => {
        // Random drift
        gsap.to(shape, {
          y: `random(-100, 100)`,
          x: `random(-60, 60)`,
          duration: gsap.utils.random(10, 20),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: gsap.utils.random(0, 5),
        });

        // Random slow rotation
        gsap.to(shape, {
          rotation: `random(-180, 180)`,
          duration: gsap.utils.random(18, 35),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: gsap.utils.random(0, 3),
        });

        // Random opacity pulse
        gsap.to(shape, {
          opacity: gsap.utils.random(0.3, 1),
          duration: gsap.utils.random(4, 8),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: gsap.utils.random(0, 4),
        });
      });
    }, bgRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* ── Gradient orbs ── */}
      <div className="bg-orb absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-accent-500/[0.03] blur-[100px]" />
      <div className="bg-orb absolute top-[55%] right-[8%] w-[400px] h-[400px] rounded-full bg-accent-400/[0.04] blur-[120px]" />
      <div className="bg-orb absolute top-[80%] left-[40%] w-[300px] h-[300px] rounded-full bg-purple-500/[0.03] blur-[100px]" />
      <div className="bg-orb absolute top-[35%] right-[30%] w-[250px] h-[250px] rounded-full bg-cyan-500/[0.02] blur-[80px]" />

      {/* ── Geometric shapes (random float + rotate) ── */}
      <div className="bg-shape absolute top-[15%] right-[12%] w-20 h-20 rounded-full border border-accent-500/[0.07]" />
      <div className="bg-shape absolute top-[45%] left-[6%] w-14 h-14 border border-white/[0.05] rounded-sm" />
      <div className="bg-shape absolute top-[70%] right-[18%] w-10 h-10 border border-accent-400/[0.06]" />
      <div className="bg-shape absolute top-[30%] left-[35%] w-3 h-3 rounded-full bg-accent-500/[0.15]" />
      <div className="bg-shape absolute top-[60%] left-[55%] w-2 h-2 rounded-full bg-white/[0.08]" />
      <div className="bg-shape absolute top-[85%] left-[20%] w-6 h-6 border border-purple-400/[0.06] rounded-full" />
      <div className="bg-shape absolute top-[40%] right-[40%] w-4 h-4 bg-accent-400/[0.06] rounded-sm" />
      <div className="bg-shape absolute top-[25%] left-[65%] w-2.5 h-2.5 rounded-full bg-cyan-400/[0.10]" />
      <div className="bg-shape absolute top-[75%] right-[35%] w-16 h-16 rounded-full border border-white/[0.03]" />

      {/* Large thin ring */}
      <div className="bg-shape absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.02]" />

      {/* ── Static: grid lines (subtle pulse only) ── */}
      <div className="absolute top-0 left-[25%] h-full w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
      <div className="absolute top-0 left-[75%] h-full w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />

      {/* ── Static: corner accents ── */}
      <div className="absolute top-[10%] left-[3%] w-24 h-px bg-gradient-to-r from-accent-500/10 to-transparent" />
      <div className="absolute top-[10%] left-[3%] w-px h-24 bg-gradient-to-b from-accent-500/10 to-transparent" />
      <div className="absolute bottom-[10%] right-[3%] w-24 h-px bg-gradient-to-l from-accent-500/10 to-transparent" />
      <div className="absolute bottom-[10%] right-[3%] w-px h-24 bg-gradient-to-t from-accent-500/10 to-transparent" />
    </div>
  );
};
