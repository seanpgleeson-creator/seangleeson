import { about, type AboutBlock } from "@/lib/data";

function renderBlock(block: AboutBlock, index: number) {
  if (block.kind === "lede") {
    return (
      <p
        key={index}
        className="font-medium text-[1.125rem] leading-[1.65] text-ink mb-10"
      >
        {block.body}
      </p>
    );
  }

  if (block.kind === "section") {
    return (
      <div key={index} className="mb-10">
        <h3
          className="font-fraunces font-medium text-ink text-[1.0625rem] leading-[1.3] mb-4"
          style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 0" }}
        >
          {block.heading}
        </h3>
        <div className="space-y-3">
          {block.body.map((paragraph, i) => (
            <p key={i} className="font-sans text-[1.0625rem] leading-[1.7] text-ink">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    );
  }

  if (block.kind === "signoff") {
    return (
      <p
        key={index}
        className="font-sans text-[1.0625rem] leading-[1.7] text-ink-secondary mt-2"
      >
        {block.body}
      </p>
    );
  }

  return null;
}

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="pt-20 md:pt-28 pb-14 md:pb-20"
    >
      <h2
        id="about-heading"
        className="font-fraunces font-medium text-ink text-[1.375rem] leading-[1.3] mb-6"
        style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 0" }}
      >
        About
      </h2>

      <div className="max-w-[65ch]">
        {about.blocks.map((block, i) => renderBlock(block, i))}
      </div>
    </section>
  );
}
