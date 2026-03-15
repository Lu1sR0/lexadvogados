"use client";

import { usePathname } from "next/navigation";
import { MouseEvent } from "react";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function TransitionLink({
  href,
  children,
  className,
}: TransitionLinkProps) {
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (href === pathname) return;
    window.dispatchEvent(
      new CustomEvent("lex:navigate", { detail: { href } })
    );
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
