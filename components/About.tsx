import { about } from "@/lib/data";

export default function About() {
  const [openingLine, ...rest] = about.paragraphs;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-14 md:py-20"
    >
      <h2
        id="about-heading"
        className="font-fraunces font-medium text-ink text-[1.375rem] leading-[1.3] mb-6"
        style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 0" }}
      >
        About
      </h2>

      <div className="max-w-[65ch] font-sans text-[1.0625rem] leading-[1.7] text-ink">
        <p className="font-medium mb-6">{openingLine}</p>
        {rest.map((paragraph, i) => (
          <p key={i} className="mb-6 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
