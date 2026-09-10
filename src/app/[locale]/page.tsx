import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/lib/sampleData";
import { newsItems, statements, events, partners, galleryImages, pressItems } from "@/lib/sampleData";
import Reveal from "@/components/Reveal";
import HomeHero from "@/components/HomeHero";
import { ArrowRightIcon, PressReleaseIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const partnerLogos: Record<string, string> = {
  RFI: "/images/partner-rfi.svg",
  "France 24": "/images/partner-france24.svg",
  "France Médias Monde": "/images/partner-fmm.svg",
};
const eventPhotos = [
  "/images/hero-press-1.jpg",
  "/images/hero-press-2.jpg",
  "/images/news-workshop.jpg",
  "/images/news-members.jpg",
  "/images/hero-press-3.jpg",
  "/images/news-assembly.jpg",
];
const eventTags = ["Workshop", "Conference", "Networking", "Workshop", "Networking", "Assembly"];
const keyEventPhotos = [
  "/images/news-assembly.jpg",
  "/images/news-workshop.jpg",
  "/images/news-solidarity.jpg",
  "/images/news-partnership.jpg",
  "/images/news-members.jpg",
  "/images/news-pressconf.jpg",
];

export default function Home() {
  const t = useTranslations("home");
  const tNav = useTranslations("nav");
  const locale = useLocale() as Locale;

  const newsFeed = [
    ...newsItems.map((n) => ({ ...n, href: `/news/${n.slug}` as const })),
    ...statements.slice(0, 2).map((s) => ({ ...s, href: `/news/statements/${s.slug}` as const })),
  ];

  return (
    <div>
      {/* Hero */}
      <HomeHero />

      {/* Forthcoming events */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-red">{tNav("events")}</p>
                <h2 className="font-heading mt-1.5 text-2xl font-extrabold uppercase text-navy sm:text-3xl">
                  {t("forthcomingEvents")}
                </h2>
              </div>
              <Link href="/events" className="group hidden items-center gap-1.5 border-b border-transparent text-sm font-semibold text-navy hover:border-navy sm:inline-flex">
                {t("viewAllEvents")}
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {/* Featured event — large card */}
              {events[0] && (
                <Link href="/events" className="group relative block h-72 overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(11,37,69,0.12)] ring-1 ring-black/5 sm:col-span-2 sm:row-span-2 sm:h-full">
                  <Image src={eventPhotos[0]} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-dark/90 via-navy-dark/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-red px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                    {eventTags[0]}
                  </span>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-sm font-semibold text-white/70">
                      {new Date(events[0].startDate).toLocaleDateString(locale, { day: "2-digit", month: "long", year: "numeric" })}
                    </p>
                    <p className="font-heading mt-1 text-xl font-bold leading-snug text-white group-hover:underline">
                      {events[0].title[locale]}
                    </p>
                  </div>
                </Link>
              )}

              {events.slice(1, 6).map((ev, i) => (
                <Link href="/events" key={ev.slug} className="group relative block h-44 overflow-hidden rounded-2xl shadow-[0_4px_16px_rgba(11,37,69,0.1)] ring-1 ring-black/5">
                  <Image src={eventPhotos[i + 1]} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-dark/90 via-navy-dark/25 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    {eventTags[i + 1]}
                  </span>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-xs font-semibold text-white/70">
                      {new Date(ev.startDate).toLocaleDateString(locale, { day: "2-digit", month: "short", year: "numeric" })}
                    </p>
                    <p className="mt-0.5 text-sm font-bold leading-snug text-white group-hover:underline">
                      {ev.title[locale]}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/events" className="group mt-6 inline-flex items-center gap-1.5 border-b border-transparent text-sm font-semibold text-navy hover:border-navy sm:hidden">
              {t("viewAllEvents")}
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Newsroom — three-column desk: news feed / live + key events / join + partners */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Column 1 — featured statement + news list */}
            <Reveal className="lg:col-span-1">
              <div>
                <Link href={`/news/statements/${statements[0].slug}`} className="group relative block h-64 overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(11,37,69,0.12)] ring-1 ring-black/5 p-7">
                  <Image src="/images/news-pressconf.jpg" alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-dark via-navy-dark/85 to-navy-dark/30" />
                  <div className="relative flex h-full flex-col justify-end">
                    <Badge className="absolute top-0 bg-red text-white">{t("statementEyebrow")}</Badge>
                    <h3 className="font-heading text-xl font-bold leading-snug text-white group-hover:underline">
                      {statements[0].title[locale]}
                    </h3>
                    <p className="mt-3 text-sm text-white/60">
                      {new Date(statements[0].date).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" })}
                    </p>
                  </div>
                </Link>

                <h3 className="font-heading mt-12 text-xl font-extrabold uppercase text-navy">{tNav("news")}</h3>
                <Separator className="mt-5" />
                <div className="divide-y divide-border">
                  {newsFeed.map((item) => (
                    <Link href={item.href} key={item.slug} className="group flex items-start gap-5 py-6">
                      <span className="relative h-24 w-24 shrink-0 overflow-hidden bg-navy/8">
                        <Image src="/images/news-generic-v2.jpg" alt="" fill sizes="96px" className="object-cover" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-lg font-semibold leading-snug text-navy group-hover:underline">
                          {item.title[locale]}
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {new Date(item.date).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" })}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/news" className="group mt-5 inline-flex items-center gap-1.5 border-b border-transparent text-sm font-semibold text-navy hover:border-navy">
                  {t("viewAll")}
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>

                <h3 className="font-heading mt-12 text-xl font-extrabold uppercase text-navy">{t("newsDeskTitle")}</h3>
                <Separator className="mt-5" />
                <div className="divide-y divide-border">
                  {newsItems.map((item) => (
                    <div key={item.slug} className="flex gap-5 py-6">
                      <span className="relative h-24 w-24 shrink-0 overflow-hidden bg-navy/8">
                        <Image src={item.image} alt="" fill sizes="96px" className="object-cover" />
                      </span>
                      <div className="min-w-0">
                        <Link href={`/news/${item.slug}`} className="font-heading text-lg font-bold leading-snug text-navy hover:underline">
                          {item.title[locale]}
                        </Link>
                        <p className="mt-1.5 text-sm text-muted-foreground">
                          {new Date(item.date).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" })}
                        </p>
                        <p className="mt-2.5 text-sm leading-relaxed text-black/65">
                          {item.excerpt[locale]}{" "}
                          <Link href={`/news/${item.slug}`} className="font-semibold text-red">
                            [{t("more")}]
                          </Link>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Column 2 — live + key events */}
            <Reveal className="lg:col-span-1" delay={100}>
              <div>
                <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(11,37,69,0.12)] ring-1 ring-black/5 p-7">
                  <Image src="/images/news-workshop.jpg" alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-navy-dark/55" />
                  <span className="absolute left-7 top-7 rounded-full bg-red px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                    {t("live")}
                  </span>
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-red">
                    <svg className="ml-0.5 h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
                <p className="mt-4 text-base text-muted-foreground">{t("liveCaption")}</p>

                <h3 className="font-heading mt-12 text-xl font-extrabold uppercase text-navy">{t("keyEvents")}</h3>
                <div className="mt-5 space-y-5">
                  {galleryImages.map((img, i) => (
                    <div key={img.caption[locale]} className="group relative h-56 overflow-hidden rounded-2xl shadow-[0_4px_16px_rgba(11,37,69,0.1)] ring-1 ring-black/5">
                      <Image src={keyEventPhotos[i]} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-linear-to-t from-navy-dark/85 via-navy-dark/10 to-transparent" />
                      <p className="absolute bottom-4 left-4 right-4 text-base font-semibold text-white">{img.caption[locale]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Column 3 — join the club + partners */}
            <Reveal className="lg:col-span-1" delay={200}>
              <div>
                <div className="relative h-64 overflow-hidden p-7">
                  <Image src="/images/news-members.jpg" alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-navy/90" />
                  <div className="relative flex h-full flex-col justify-center">
                    <h3 className="font-heading text-xl font-extrabold uppercase text-white">{t("joinClub")}</h3>
                    <p className="mt-3 text-base text-white/70">{t("joinClubBody")}</p>
                    <Button size="lg" className="mt-6 h-12 w-fit bg-red px-6 text-base text-white hover:bg-red/90" render={<Link href="/membership" />}>
                      {t("joinClubCta")}
                    </Button>
                  </div>
                </div>

                <h3 className="font-heading mt-12 text-xl font-extrabold uppercase text-navy">{tNav("partners")}</h3>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  {partners.map((p, i) => {
                    const logo = partnerLogos[p.name];
                    return (
                      <div
                        key={p.name}
                        className="flex h-32 flex-col items-center justify-center gap-2 border border-border bg-white px-4 text-center"
                      >
                        {logo ? (
                          <span className="relative h-10 w-full">
                            <Image src={logo} alt={p.name} fill sizes="80px" className="object-contain" />
                          </span>
                        ) : (
                          <span
                            className="flex h-11 w-11 items-center justify-center rounded-full text-base font-heading font-extrabold text-white"
                            style={{ backgroundColor: i % 2 === 0 ? "var(--color-navy)" : "var(--color-red)" }}
                          >
                            {p.name.charAt(0)}
                          </span>
                        )}
                        <span className="text-xs font-heading font-semibold text-navy/70">{p.name}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-12 space-y-4">
                  <Link href="/events" className="flex items-center justify-between border border-border bg-white p-5 hover:border-navy/30">
                    <p className="font-heading text-lg font-semibold text-navy">{t("eventsBanner")}</p>
                    <span className="text-xl text-navy/40">→</span>
                  </Link>
                  <Link href="/membership" className="flex items-center justify-between border border-border bg-white p-5 hover:border-navy/30">
                    <p className="font-heading text-lg font-semibold text-navy">{t("membershipBanner")}</p>
                    <span className="text-xl text-navy/40">→</span>
                  </Link>
                  <Link href="/about" className="flex items-center justify-between bg-navy p-5">
                    <div>
                      <p className="font-heading text-lg font-semibold text-white">{t("welcomeBanner")}</p>
                      <p className="mt-1 text-sm text-white/70">{t("welcomeBannerCta")}</p>
                    </div>
                    <span className="text-xl text-white/50">→</span>
                  </Link>
                </div>

                <h3 className="font-heading mt-12 text-xl font-extrabold uppercase text-navy">{t("latestPress")}</h3>
                <Separator className="mt-5" />
                <div className="divide-y divide-border">
                  {pressItems.map((p) => (
                    <Link
                      href="/press"
                      key={p.title[locale]}
                      className="group flex items-center gap-4 py-5 hover:bg-white"
                    >
                      <span className="relative h-24 w-24 shrink-0 overflow-hidden bg-navy/8">
                        <Image src="/images/press-release.jpg" alt="" fill sizes="96px" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                        <span className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-sm bg-red">
                          <PressReleaseIcon className="h-3 w-3 text-white" />
                        </span>
                      </span>
                      <div>
                        <p className="text-lg font-semibold leading-snug text-navy group-hover:underline">{p.title[locale]}</p>
                        <p className="mt-2 text-sm text-muted-foreground">{new Date(p.date).toLocaleDateString(locale)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
