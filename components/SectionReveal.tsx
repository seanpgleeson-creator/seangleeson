"use client";

import { useEffect, useRef, useState } from "react";

interface SectionRevealProps {
  children: React.ReactNode;
  /** Stagger delay in ms — use for list items. Capped at 5 items × 80ms. */
  staggerIndex?: number;
}

export default function SectionReveal({
  children,
  staggerIndex,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const delay =
    staggerIndex !== undefined
      ? Math.min(staggerIndex, 4) * 80
      : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
