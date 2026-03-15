"use client";

import { useEffect } from "react";

/**
 * Attaches IntersectionObserver to all scroll-reveal elements on the page.
 * Handles three CSS patterns:
 *  - .reveal        → adds class "active"
 *  - .reveal-item   → adds class "visible"
 *  - .reveal-on-scroll → adds class "active"
 *
 * Render this component once inside any page that needs CSS-based reveal animations.
 */
export default function ScrollRevealController() {
  useEffect(() => {
    const configs: { selector: string; activeClass: string }[] = [
      { selector: ".reveal", activeClass: "active" },
      { selector: ".reveal-item", activeClass: "visible" },
      { selector: ".reveal-on-scroll", activeClass: "active" },
    ];

    const observers: IntersectionObserver[] = [];

    configs.forEach(({ selector, activeClass }) => {
      const elements = document.querySelectorAll(selector);
      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(activeClass);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
      );

      elements.forEach((el) => observer.observe(el));
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return null;
}
