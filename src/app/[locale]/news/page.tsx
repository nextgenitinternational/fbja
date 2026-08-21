import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/lib/sampleData";
import { newsItems } from "@/lib/sampleData";
import { dotPattern } from "@/components/icons";

export default function NewsPage() {
  const t = useTranslations("nav");
  const th = useTranslations("home");
  const locale = useLocale() as Locale;

  const [featured, ...rest] = newsItems;

  return (
    <div>
      {/* Hero band */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute right-6 top-6 h-20 w-20 text-white/10" style={dotPattern} />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-red/20" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-cream/80">FBJA</p>
          <h1 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            {t("news")}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Featured story */}
        {featured && (
          <Link
            href="/news"
            className="group grid gap-6 sm:grid-cols-2 rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-[0_8px_24px_rgba(11,37,69,0.08)] hover:shadow-[0_16px_32px_rgba(11,37,69,0.14)] transition-shadow"
          >
            <div className="relative h-56 sm:h-full bg-linear-to-br from-navy via-navy to-green">
              <div className="pointer-events-none absolute right-4 bottom-4 h-16 w-16 text-white/15" style={dotPattern} />
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <span className="self-start rounded-full bg-red/10 text-red text-xs font-semibold uppercase tracking-wide px-3 py-1">
                {new Date(featured.date).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" })}
              </span>
              <h2 className="mt-4 font-heading text-xl sm:text-2xl font-bold text-navy leading-snug group-hover:text-navy-dark">
                {featured.title[locale]}
              </h2>
              <p className="mt-3 text-sm text-black/60 leading-relaxed">{featured.excerpt[locale]}</p>
              <span className="mt-4 text-sm font-semibold text-red">{th("readMore")} →</span>
            </div>
          </Link>
        )}

        {/* Remaining stories */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((item) => (
            <article
              key={item.slug}
              className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_1px_3px_rgba(11,37,69,0.06)] hover:shadow-[0_10px_24px_rgba(11,37,69,0.12)] hover:-translate-y-0.5 transition-all"
            >
              <div className="pointer-events-none absolute right-3 top-3 h-12 w-12 text-navy/10" style={dotPattern} />
              <div className="h-32 bg-linear-to-br from-navy to-navy-dark" />
              <div className="p-5">
                <span className="inline-block rounded-full bg-navy/8 text-navy text-xs font-semibold uppercase tracking-wide px-2.5 py-1">
                  {new Date(item.date).toLocaleDateString(locale)}
                </span>
                <h3 className="mt-3 font-heading font-bold text-navy leading-snug">
                  {item.title[locale]}
                </h3>
                <p className="mt-2 text-sm text-black/60">{item.excerpt[locale]}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-red">
                  {th("readMore")} →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
