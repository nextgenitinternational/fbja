import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import type { Locale } from "@/lib/sampleData";
import { statements } from "@/lib/sampleData";
import { Link } from "@/i18n/navigation";
import { MicIcon, dotPattern } from "@/components/icons";

export default function StatementsPage() {
  const t = useTranslations("nav");
  const th = useTranslations("home");
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
            {t("statements")}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {statements.map((s) => (
            <Link
              href={`/news/statements/${s.slug}`}
              key={s.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_1px_3px_rgba(11,37,69,0.06)] hover:shadow-[0_14px_28px_rgba(11,37,69,0.12)] hover:-translate-y-0.5 transition-all"
            >
              <div className="relative h-40 bg-linear-to-br from-navy to-navy-dark">
                {s.image && (
                  <Image src={s.image} alt="" fill className="object-cover object-top" />
                )}
                <div className="pointer-events-none absolute right-3 top-3 h-10 w-10 text-white/15" style={dotPattern} />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red">
                    <MicIcon className="h-3 w-3 text-white" />
                  </span>
                  <p className="text-xs font-bold uppercase tracking-wide text-navy">
                    {new Date(s.date).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" })}
                  </p>
                </div>
                <h2 className="mt-3 font-heading font-bold text-navy leading-snug">{s.title[locale]}</h2>
                <span className="mt-auto pt-4 text-sm font-semibold text-red">
                  {th("readStatement")} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
