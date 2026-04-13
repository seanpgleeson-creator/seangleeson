import { hero } from "@/lib/data";

export default function Hero() {
  return (
    <section aria-label="Introduction" className="pt-16 md:pt-24">
      <h1
        className="font-fraunces font-semibold text-ink leading-[1.1]"
        style={{
          fontSize: "clamp(2.25rem, 5vw, 2.75rem)",
          fontVariationSettings: "'SOFT' 0, 'WONK' 1",
        }}
      >
        {hero.name}
      </h1>

      <p className="font-sans text-[1.0625rem] leading-[1.7] text-ink-secondary mt-4 max-w-[55ch]">
        {hero.positioningStatement}
      </p>

      <div className="mt-8 flex items-center gap-3">
        <a
          href={hero.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-[0.8125rem] font-medium uppercase tracking-[0.05em] text-accent transition-colors duration-150 hover:text-accent-hover hover:underline decoration-1 underline-offset-4"
        >
          LinkedIn
        </a>
        <span className="text-ink-tertiary select-none">·</span>
        <a
          href={`mailto:${hero.email}`}
          className="font-sans text-[0.8125rem] font-medium uppercase tracking-[0.05em] text-accent transition-colors duration-150 hover:text-accent-hover hover:underline decoration-1 underline-offset-4"
        >
          Email
        </a>
      </div>
    </section>
  );
}
