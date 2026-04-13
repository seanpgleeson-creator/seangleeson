import { careerHighlights } from "@/lib/data";

export default function CareerHighlights() {
  return (
    <section
      id="career"
      aria-labelledby="career-heading"
      className="py-14 md:py-20"
    >
      <h2
        id="career-heading"
        className="font-fraunces font-medium text-ink text-[1.375rem] leading-[1.3] mb-10 md:mb-12"
        style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 0" }}
      >
        Career Highlights
      </h2>

      <div className="space-y-10 md:space-y-12">
        {careerHighlights.map((moment, i) => (
          <article key={i}>
            <p className="font-sans text-[0.8125rem] font-medium uppercase tracking-[0.05em] text-ink-secondary mb-2">
              {moment.company}
            </p>
            <h3
              className="font-fraunces font-medium text-ink text-[1.125rem] leading-[1.4] mb-3"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 0" }}
            >
              {moment.title}
            </h3>
            <p className="font-sans text-[0.9375rem] leading-[1.6] text-ink mb-4">
              {moment.description}
            </p>
            {moment.metric && moment.metric !== "TODO" && (
              <p className="border-l-[3px] border-accent pl-4 font-sans text-[1.0625rem] font-semibold leading-[1.7] text-ink">
                {moment.metric}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
