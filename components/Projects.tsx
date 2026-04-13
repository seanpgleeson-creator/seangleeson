import Image from "next/image";
import { apps } from "@/lib/data";
import StatusBadge from "@/components/StatusBadge";

export default function Projects() {
  return (
    <section
      id="apps"
      aria-labelledby="apps-heading"
      className="py-14 md:py-20"
    >
      <h2
        id="apps-heading"
        className="font-fraunces font-medium text-ink text-[1.375rem] leading-[1.3] mb-10 md:mb-12"
        style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 0" }}
      >
        Apps &amp; Projects
      </h2>

      <div className="space-y-12">
        {apps.map((app) => (
          <article key={app.name}>
            <div className="flex flex-row items-baseline gap-3 mb-1">
              <h3
                className="font-fraunces font-medium text-ink text-[1.125rem] leading-[1.4]"
                style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 0" }}
              >
                {app.name}
              </h3>
              <StatusBadge status={app.status} />
            </div>

            <p className="font-sans text-[0.9375rem] leading-[1.6] text-ink-secondary mb-3">
              {app.tagline}
            </p>

            <p className="font-sans text-[0.9375rem] leading-[1.6] text-ink">
              {app.description}
            </p>

            {app.screenshots && app.screenshots.length > 0 && (
              <div className="mt-6 space-y-3">
                {/* Desktop screenshots — full width */}
                {[app.screenshots[0], app.screenshots[1]].filter(Boolean).map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`${app.name} screenshot ${i + 1}`}
                    width={760}
                    height={480}
                    className="w-full rounded-lg border border-border"
                  />
                ))}
                {/* Mobile screenshots — two up */}
                {app.screenshots.length > 2 && (
                  <div className="grid grid-cols-2 gap-3">
                    {app.screenshots.slice(2).map((src, i) => (
                      <Image
                        key={src}
                        src={src}
                        alt={`${app.name} mobile screenshot ${i + 1}`}
                        width={370}
                        height={600}
                        className="w-full rounded-lg border border-border"
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {!app.screenshots && app.screenshot && (
              <div className="mt-6">
                <Image
                  src={app.screenshot}
                  alt={`${app.name} screenshot`}
                  width={760}
                  height={480}
                  className="w-full rounded-lg border border-border"
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
