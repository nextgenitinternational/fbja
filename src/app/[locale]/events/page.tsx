import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/lib/sampleData";
import { events } from "@/lib/sampleData";
import { PinIcon, dotPattern } from "@/components/icons";

export default function EventsPage() {
  const t = useTranslations("nav");
  const te = useTranslations("events");
  const locale = useLocale() as Locale;

  const [next, ...rest] = events;

  return (
    <div>
      {/* Hero band */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute right-6 top-6 h-20 w-20 text-white/10" style={dotPattern} />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-red/20" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-cream/80">FBJA</p>
          <h1 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            {t("events")}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16">
        {/* Next event, featured */}
        {next && (
          <div className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_8px_24px_rgba(11,37,69,0.1)] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:items-center">
            <div className="pointer-events-none absolute right-4 top-4 h-16 w-16 text-navy/8" style={dotPattern} />
            <div className="shrink-0 flex flex-col items-center justify-center rounded-2xl bg-red text-white w-20 h-20">
              <span className="text-2xl font-heading font-bold leading-none">
                {new Date(next.startDate).getDate()}
              </span>
              <span className="text-[11px] uppercase mt-1">
                {new Date(next.startDate).toLocaleDateString(locale, { month: "short" })}
              </span>
            </div>
            <div>
              <span className="inline-block rounded-full bg-red/10 text-red text-xs font-semibold uppercase tracking-wide px-3 py-1">
                {te("next")}
              </span>
              <h2 className="mt-2 font-heading text-xl font-bold text-navy leading-snug">
                {next.title[locale]}
              </h2>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-black/60">
                <PinIcon className="h-4 w-4 text-navy/60" />
                {next.location}
              </p>
            </div>
          </div>
        )}

        {/* Rest — timeline */}
        <div className="mt-12 relative pl-8">
          <div className="absolute left-3.75 top-2 bottom-2 w-px bg-black/10" />
          <div className="space-y-8">
            {rest.map((e) => {
              const date = new Date(e.startDate);
              return (
                <div key={e.slug} className="relative">
                  <span className="absolute -left-8 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white ring-4 ring-white">
                    <span className="text-[10px] font-heading font-bold leading-none">
                      {date.getDate()}
                    </span>
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy/50">
                    {date.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" })}
                  </p>
                  <h3 className="mt-1 font-heading font-bold text-navy leading-snug">{e.title[locale]}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-black/60">
                    <PinIcon className="h-3.5 w-3.5 text-navy/50" />
                    {e.location}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
