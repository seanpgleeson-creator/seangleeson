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

            {app.screenshot && (
              <div className="mt-6">
                <Image
                  src={app.screenshot}
                  alt={`${app.name} screenshot`}
                  width={760}
                  height={480}
                  className="w-full rounded-lg border border-border"
                  style={{ borderRadius: "8px" }}
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
