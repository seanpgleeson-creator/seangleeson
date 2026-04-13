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
              <details className="mt-5 group">
                <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 font-sans text-[0.8125rem] font-medium tracking-wide uppercase text-accent hover:text-accent-hover transition-colors duration-150 select-none">
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-open:rotate-90"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="group-open:hidden">View screenshots</span>
                  <span className="hidden group-open:inline">Hide screenshots</span>
                </summary>

                <div className="mt-4 space-y-3">
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
              </details>
            )}

            {!app.screenshots && app.screenshot && (
              <details className="mt-5 group">
                <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 font-sans text-[0.8125rem] font-medium tracking-wide uppercase text-accent hover:text-accent-hover transition-colors duration-150 select-none">
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-open:rotate-90"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="group-open:hidden">View screenshots</span>
                  <span className="hidden group-open:inline">Hide screenshots</span>
                </summary>
                <div className="mt-4">
                  <Image
                    src={app.screenshot}
                    alt={`${app.name} screenshot`}
                    width={760}
                    height={480}
                    className="w-full rounded-lg border border-border"
                  />
                </div>
              </details>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
