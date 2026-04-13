import { podcasts } from "@/lib/data";

export default function Listening() {
  return (
    <section
      id="listening"
      aria-labelledby="listening-heading"
      className="py-14 md:py-20"
    >
      <h2
        id="listening-heading"
        className="font-fraunces font-medium text-ink text-[1.375rem] leading-[1.3] mb-10 md:mb-12"
        style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 0" }}
      >
        What I&apos;m Listening To
      </h2>

      <div className="space-y-6">
        {podcasts.map((podcast) => (
          <div key={podcast.name}>
            <h3
              className="font-fraunces font-medium text-ink text-[1.0625rem] leading-[1.4]"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 0" }}
            >
              {podcast.name}
            </h3>
            {podcast.note && podcast.note !== "TODO" && (
              <p className="font-sans text-[0.9375rem] leading-[1.6] text-ink-secondary italic mt-1">
                {podcast.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
