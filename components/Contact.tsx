import { hero } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-14 md:py-20 pb-20"
    >
      <h2
        id="contact-heading"
        className="font-fraunces font-medium text-ink text-[1.375rem] leading-[1.3] mb-6"
        style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 0" }}
      >
        Let&rsquo;s talk.
      </h2>

      <p className="font-sans text-[1.0625rem] leading-[1.7] text-ink mb-6 max-w-[55ch]">
        I&rsquo;m always happy to connect — whether it&rsquo;s about a role, a
        project, or just a good conversation.
      </p>

      <div className="flex items-center gap-3">
        <a
          href={`mailto:${hero.email}`}
          className="font-sans text-[0.8125rem] font-medium uppercase tracking-[0.05em] text-accent transition-colors duration-150 hover:text-accent-hover hover:underline decoration-1 underline-offset-4 py-2"
        >
          Email
        </a>
        <span className="text-ink-tertiary select-none">·</span>
        <a
          href={hero.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-[0.8125rem] font-medium uppercase tracking-[0.05em] text-accent transition-colors duration-150 hover:text-accent-hover hover:underline decoration-1 underline-offset-4 py-2"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
