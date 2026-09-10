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
      {/* Title band */}
      <section className="bg-cream border-b border-black/8">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <p className="text-sm text-black/50">FBJA</p>
          <h1 className="mt-2 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-navy">
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
                  <Image src={s.image} alt="" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover object-top" />
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
