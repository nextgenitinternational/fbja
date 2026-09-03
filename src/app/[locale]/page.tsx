import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/lib/sampleData";
import { newsItems, statements, events, galleryImages, partners, pressItems } from "@/lib/sampleData";
import Reveal from "@/components/Reveal";
import HeroSlider from "@/components/HeroSlider";
import { MicIcon } from "@/components/icons";

const galleryTones = ["from-navy to-navy-dark", "from-red to-navy", "from-green to-navy", "from-navy to-green"];

export default function Home() {
  const t = useTranslations("home");
  const tNav = useTranslations("nav");
  const tOrg = useTranslations("org");
  const locale = useLocale() as Locale;

  return (
    <div>
      {/* Hero — auto-advancing image slider, no overlay text */}
      <section className="relative overflow-hidden bg-navy">
        <HeroSlider />

        {/* Accent strip — CTA row */}
        <div className="relative z-10 bg-green">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm sm:text-base font-semibold text-white text-center sm:text-left">
              {tOrg("taglineLine1")}
            </p>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/membership"
                className="rounded-md bg-red px-6 py-2.5 text-sm font-semibold text-white text-center hover:bg-red/90 transition-colors"
              >
                {t("cta")}
              </Link>
              <Link
                href="/about"
                className="rounded-md border border-white/40 px-6 py-2.5 text-sm font-semibold text-white text-center hover:bg-white/10 transition-colors"
              >
                {t("ctaSecondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Forthcoming events — date-tile row */}
      <section className="bg-cream border-b border-black/8">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <Reveal>
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-heading text-lg font-bold text-navy">{t("forthcomingEvents")}</h2>
              <Link href="/events" className="hidden sm:inline text-sm font-semibold text-navy/70 hover:text-navy">
                {t("viewAllEvents")} →
              </Link>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {events.slice(0, 3).map((ev) => {
                const d = new Date(ev.startDate);
                const day = d.toLocaleDateString(locale, { day: "2-digit" });
                const month = d.toLocaleDateString(locale, { month: "short" }).toUpperCase();
                const year = d.getFullYear();
                return (
                  <Link
                    href="/events"
                    key={ev.slug}
                    className="flex items-start gap-4 group"
                  >
                    <div className="shrink-0 flex flex-col items-center justify-center h-20 w-20 bg-navy text-white text-center leading-none">
                      <span className="text-2xl font-bold">{day}</span>
                      <span className="mt-1 text-xs">{month}</span>
                      <span className="text-xs">{year}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-navy group-hover:underline leading-snug">
                        {ev.title[locale]}
                      </p>
                      <p className="mt-1 text-sm text-black/50">{ev.location}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <Link href="/events" className="sm:hidden mt-6 inline-block text-sm font-semibold text-navy/70 hover:text-navy">
              {t("viewAllEvents")} →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Launch banner + News / Live / Join the Club + Partners, continuing into News Desk below */}
      <section className="bg-cream border-b border-black/8">
        <div className="mx-auto max-w-6xl px-4 py-16 grid gap-10 lg:grid-cols-3">
          {/* Column 1 — featured statement + news list */}
          <Reveal className="lg:col-span-1">
            <div>
              <h3 className="font-heading text-lg font-bold text-navy leading-snug">
                {statements[0].title[locale]}
              </h3>
              <Link
                href={`/news/statements/${statements[0].slug}`}
                className="mt-4 block relative h-40 rounded-xl overflow-hidden bg-linear-to-br from-navy via-navy to-green"
              >
                {statements[0].image && (
                  <Image src={statements[0].image} alt="" fill className="object-cover object-top" />
                )}
              </Link>

              <h3 className="mt-10 font-heading text-lg font-bold text-navy">{tNav("news")}</h3>
              <div className="mt-4 divide-y divide-black/10 border-t border-black/10">
                {newsItems.map((item) => (
                  <Link
                    href="/news"
                    key={item.slug}
                    className="flex items-start gap-3 py-4 group"
                  >
                    <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-navy/10 text-navy">
                      <MicIcon />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy group-hover:underline leading-snug">
                        {item.title[locale]}
                      </p>
                      <p className="mt-1 text-xs text-black/40">
                        {new Date(item.date).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" })}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <h3 className="mt-10 font-heading text-lg font-bold text-navy">{t("newsDeskTitle")}</h3>
              <div className="mt-4 divide-y divide-black/10 border-t border-black/10">
                {newsItems.map((item, i) => (
                  <div key={item.slug} className="py-4 flex gap-4">
                    <div className={`shrink-0 h-20 w-20 rounded-lg bg-linear-to-br ${galleryTones[i % galleryTones.length]}`} />
                    <div>
                      <Link href="/news" className="font-heading font-semibold text-navy hover:underline leading-snug">
                        {item.title[locale]}
                      </Link>
                      <p className="mt-1 text-xs text-black/40">
                        {new Date(item.date).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" })}
                      </p>
                      <p className="mt-2 text-sm text-black/60 leading-relaxed line-clamp-3">
                        {item.excerpt[locale]}{" "}
                        <Link href="/news" className="font-semibold text-red">
                          [{t("more")}]
                        </Link>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Column 2 — Live + Key Events */}
          <Reveal className="lg:col-span-1" delay={100}>
            <div>
              <h3 className="font-heading text-lg font-bold text-navy">{t("live")}</h3>
              <div className="mt-4 relative h-48 rounded-xl overflow-hidden bg-navy-dark flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red">
                  <svg className="h-6 w-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
              <p className="mt-2 text-sm text-black/50">{t("liveCaption")}</p>

              <h3 className="mt-10 font-heading text-lg font-bold text-navy">{t("keyEvents")}</h3>
              <div className="mt-4 space-y-4">
                {galleryImages.slice(0, 3).map((img, i) => (
                  <div key={img.caption[locale]} className="rounded-xl overflow-hidden">
                    <div className={`h-28 bg-linear-to-br ${galleryTones[i % galleryTones.length]}`} />
                    <p className="mt-2 text-sm font-semibold text-navy">{img.caption[locale]}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Column 3 — Join the Club + Partners */}
          <Reveal className="lg:col-span-1" delay={200}>
            <div>
              <h3 className="font-heading text-lg font-bold text-navy">{t("joinClub")}</h3>
              <div className="mt-4 rounded-xl bg-linear-to-br from-navy to-navy-dark p-6 text-white">
                <p className="text-xs uppercase tracking-wide text-white/60">{tOrg("nameShort")}</p>
                <p className="mt-3 font-heading text-lg font-bold">{t("joinClub")}</p>
                <p className="mt-2 text-sm text-white/70">{t("joinClubBody")}</p>
              </div>
              <Link href="/membership" className="mt-4 inline-block text-sm font-semibold text-red hover:underline">
                {t("joinClubCta")} →
              </Link>

              <h3 className="mt-10 font-heading text-lg font-bold text-navy">{tNav("partners")}</h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {partners.slice(0, 4).map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-center rounded-xl border border-black/10 h-20 px-3 text-center text-sm font-heading font-semibold text-navy/70"
                  >
                    {p.name}
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-4">
                <Link href="/events" className="block rounded-xl bg-green p-6 text-white">
                  <p className="font-heading font-bold">{t("eventsBanner")}</p>
                </Link>
                <Link href="/membership" className="block rounded-xl bg-navy p-6 text-white">
                  <p className="font-heading font-bold">{t("membershipBanner")}</p>
                </Link>
                <Link href="/about" className="block rounded-xl bg-red p-6 text-white">
                  <p className="font-heading font-bold">{t("welcomeBanner")}</p>
                  <p className="mt-1 text-sm text-white/80">{t("welcomeBannerCta")}</p>
                </Link>
              </div>

              <h3 className="mt-10 font-heading text-lg font-bold text-navy">{t("latestPress")}</h3>
              <div className="mt-4 space-y-4">
                {pressItems.map((p) => (
                  <Link
                    href="/press"
                    key={p.title[locale]}
                    className="flex items-center gap-3 rounded-lg ring-1 ring-black/5 p-3 hover:bg-navy/5"
                  >
                    <span className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-navy">
                      <MicIcon />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy leading-snug">{p.title[locale]}</p>
                      <p className="text-xs text-black/40">{new Date(p.date).toLocaleDateString(locale)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
