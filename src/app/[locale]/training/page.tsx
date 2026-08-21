import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/lib/sampleData";
import { trainings } from "@/lib/sampleData";
import { BookIcon, dotPattern } from "@/components/icons";

const accents = ["bg-navy", "bg-red", "bg-green"];

export default function TrainingPage() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;

  return (
    <div>
      {/* Hero band */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute right-6 top-6 h-20 w-20 text-white/10" style={dotPattern} />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-red/20" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-cream/80">FBJA</p>
          <h1 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            {t("training")}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainings.map((tr, i) => (
            <div
              key={tr.slug}
              className="relative flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_1px_3px_rgba(11,37,69,0.06)] hover:shadow-[0_14px_28px_rgba(11,37,69,0.12)] hover:-translate-y-0.5 transition-all"
            >
              <span className={`absolute left-0 top-0 h-1.5 w-full ${accents[i % accents.length]}`} />
              <div className="pointer-events-none absolute right-3 top-6 h-12 w-12 text-navy/8" style={dotPattern} />

              <div className="p-6 flex-1">
                <span className={`flex h-11 w-11 items-center justify-center rounded-full ${accents[i % accents.length]}`}>
                  <BookIcon />
                </span>
                <span className="mt-4 inline-block rounded-full bg-navy/8 text-navy px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                  {tr.level[locale]}
                </span>
                <h2 className="mt-3 font-heading font-bold text-navy leading-snug">{tr.title[locale]}</h2>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">{tr.description[locale]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
