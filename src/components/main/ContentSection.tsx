import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export const ContentSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Load TikTok embed script
    const tiktokScript = document.createElement("script");
    tiktokScript.src = "https://www.tiktok.com/embed.js";
    tiktokScript.async = true;
    document.body.appendChild(tiktokScript);

    // Load Elfsight script
    const elfsightScript = document.createElement("script");
    elfsightScript.src = "https://elfsightcdn.com/platform.js";
    elfsightScript.async = true;
    document.body.appendChild(elfsightScript);

    return () => {
      document.body.removeChild(tiktokScript);
      document.body.removeChild(elfsightScript);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = sectionRef.current?.querySelector(".content-header");
      if (header) {
        gsap.fromTo(
          header,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: header,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      const cards = sectionRef.current?.querySelectorAll(".content-card");
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contenido"
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Bg */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="content-header mb-16 text-center">
          <p className="text-accent-400 text-sm uppercase tracking-[0.3em] font-medium mb-4">
            Redes
          </p>
          <h2 className="font-[var(--font-syne)] text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Explorá mi contenido
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-base">
            Compartiendo conocimiento, tutoriales y experiencias en desarrollo
            de software.
          </p>
        </div>

        {/* Grid: TikTok + YouTube side by side, Instagram full width below */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* TikTok */}
          <div className="content-card glass-card rounded-2xl p-6 md:p-8 overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center text-white shrink-0">
                <FaTiktok className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-[var(--font-syne)] text-lg font-bold text-text-primary">
                  TikTok
                </h3>
                <p className="text-text-muted text-xs">@soyemidev</p>
              </div>
            </div>
            <div className="flex justify-center">
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@soyemidev"
                data-unique-id="soyemidev"
                data-embed-type="creator"
                style={{ maxWidth: "100%", minWidth: "288px" }}
              >
                <section>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.tiktok.com/@soyemidev?refer=creator_embed"
                  >
                    @soyemidev
                  </a>
                </section>
              </blockquote>
            </div>
          </div>

          {/* YouTube */}
          <div className="content-card glass-card rounded-2xl p-6 md:p-8 overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white shrink-0">
                <FaYoutube className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-[var(--font-syne)] text-lg font-bold text-text-primary">
                  YouTube
                </h3>
                <p className="text-text-muted text-xs">@soyemidev</p>
              </div>
            </div>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/@soyemidev"
                title="Canal de YouTube - soyemidev"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <a
              href="https://youtube.com/@soyemidev?si=g6RNChqiatSHWd1z"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-text-secondary hover:text-red-400 transition-colors font-medium"
            >
              <FaYoutube className="w-4 h-4" />
              Visitá mi canal →
            </a>
          </div>
        </div>

        {/* Instagram — full width */}
        <div className="content-card glass-card rounded-2xl p-6 md:p-8 overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white shrink-0">
              <FaInstagram className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-[var(--font-syne)] text-lg font-bold text-text-primary">
                Instagram
              </h3>
              <p className="text-text-muted text-xs">@soyemidev</p>
            </div>
          </div>
          <div
            className="elfsight-app-e4a2ba4d-29e1-4ad8-9348-142dde559124"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
};
