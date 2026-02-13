import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = (
  containerRef: React.RefObject<HTMLElement | null>,
) => {
  const initialized = useRef(false);

  useEffect(() => {
    if (!containerRef.current || initialized.current) return;
    initialized.current = true;

    const ctx = gsap.context(() => {
      // Animate all elements with data-animate attribute
      const elements = containerRef.current!.querySelectorAll("[data-animate]");
      elements.forEach((el, i) => {
        const type = el.getAttribute("data-animate");
        const delay = parseFloat(el.getAttribute("data-delay") || "0");

        const base = {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          duration: 1,
          delay: delay + i * 0.05,
          ease: "power3.out",
        };

        switch (type) {
          case "fade-up":
            gsap.fromTo(
              el,
              { opacity: 0, y: 60 },
              { ...base, opacity: 1, y: 0 },
            );
            break;
          case "fade-left":
            gsap.fromTo(
              el,
              { opacity: 0, x: -80 },
              { ...base, opacity: 1, x: 0 },
            );
            break;
          case "fade-right":
            gsap.fromTo(
              el,
              { opacity: 0, x: 80 },
              { ...base, opacity: 1, x: 0 },
            );
            break;
          case "scale":
            gsap.fromTo(
              el,
              { opacity: 0, scale: 0.8 },
              { ...base, opacity: 1, scale: 1 },
            );
            break;
          case "stagger":
            gsap.fromTo(
              el.children,
              { opacity: 0, y: 40 },
              { ...base, opacity: 1, y: 0, stagger: 0.1 },
            );
            break;
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
};
