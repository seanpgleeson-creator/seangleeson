"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#career" },
  { label: "Projects", href: "#apps" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = ["about", "career", "apps", "contact"];

export default function Nav() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="sticky top-0 z-40 bg-bg py-4 px-6 md:py-6 md:px-12">
      <div className="max-w-content mx-auto flex items-center justify-between">
        <a
          href="#"
          className="font-fraunces text-[1.125rem] font-medium text-ink"
        >
          Sean Gleeson
        </a>
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => {
            const sectionId = href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`font-sans text-[0.875rem] font-medium tracking-[0.01em] transition-colors duration-150 ${
                    isActive
                      ? "text-accent"
                      : "text-ink-secondary hover:text-ink"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
