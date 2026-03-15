"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

type Phase = "hidden" | "in" | "out";

export default function TransitionOverlay() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("hidden");
  const [transform, setTransform] = useState("translateX(-100%)");
  const prevPath = useRef(pathname);
  const busy = useRef(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const href = (e as CustomEvent<{ href: string }>).detail.href;
      if (href === pathname || busy.current) return;

      busy.current = true;
      setPhase("in");
      setTransform("translateX(-100%)");

      // Next frame: slide in from left
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransform("translateX(0)");
        });
      });

      // Navigate after panel fully covers screen
      setTimeout(() => router.push(href), 520);
    };

    window.addEventListener("lex:navigate", handler);
    return () => window.removeEventListener("lex:navigate", handler);
  }, [pathname, router]);

  useEffect(() => {
    if (pathname !== prevPath.current && busy.current) {
      prevPath.current = pathname;

      // Brief pause on new page, then slide out to the right
      setTimeout(() => {
        setPhase("out");
        setTransform("translateX(100%)");
        setTimeout(() => {
          setPhase("hidden");
          busy.current = false;
        }, 550);
      }, 120);
    }
  }, [pathname]);

  if (phase === "hidden") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-surface-container-lowest flex items-center justify-center"
      style={{
        transform,
        transition: "transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)",
      }}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="preloader-line" />
        <span className="font-headline text-[10px] tracking-[0.6em] text-on-surface-variant/50">
          LEX
        </span>
      </div>
    </div>
  );
}
