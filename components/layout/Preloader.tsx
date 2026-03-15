"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1800);
    const hideTimer = setTimeout(() => setVisible(false), 2600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div id="preloader" style={{ opacity: fading ? 0 : 1 }}>
      <div className="flex flex-col items-center">
        <div className="preloader-line" />
        <div
          className="mt-8 font-headline text-[0.6rem] tracking-[0.4em] text-primary uppercase"
          style={{ animation: "fadeIn 1s 0.5s forwards", opacity: 0 }}
        >
          LEX ADVOCACIA
        </div>
      </div>
    </div>
  );
}
