import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/lib/sampleData";
import { newsItems, statements, events, galleryImages, partners, pressItems } from "@/lib/sampleData";
import Reveal from "@/components/Reveal";
import HeroSlider from "@/components/HeroSlider";
import { MicIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const t = useTranslations("home");
  const tNav = useTranslations("nav");
  const tOrg = useTranslations("org");
  const locale = useLocale() as Locale;

  return (
    <div>
      {/* Hero — slider with a scrim + mission statement overlay */}
      <section className="relative overflow-hidden bg-navy">
        <div className="relative h-[420px] sm:h-[480px] lg:h-[560px]">
          <HeroSlider />
          <div className="absolute inset-0 bg-linear-to-t from-navy-dark via-navy-dark/55 to-navy-dark/10" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-4 pb-10 sm:pb-14">
              <Badge variant="outline" className="h-6 border-white/30 px-3 text-white/85 uppercase tracking-wider">
                {t("eyebrow")}
              </Badge>
              <h1 className="font-serif italic mt-4 max-w-2xl text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-white">
                {t("heroTitle")}
              </h1>
              <p className="mt-3 max-w-xl text-sm sm:text-base text-white/75 leading-relaxed">
                {t("heroSubtitle")}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button size="lg" className="h-11 px-6 bg-red text-white hover:bg-red/90" render={<Link href="/membership" />}>
                  {t("cta")}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-11 border-white/40 px-6 text-white hover:bg-white/10 hover:text-white"
                  render={<Link href="/about" />}
                >
                  {t("ctaSecondary")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forthcoming events — promoted directly under the hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-red">{tNav("events")}</p>
                <h2 className="font-heading mt-1 text-xl sm:text-2xl font-bold text-navy">
                  {t("forthcomingEvents")}
                </h2>
              </div>
              <Link
                href="/events"
                className="hidden sm:inline text-sm font-semibold text-navy/70 hover:text-navy"
              >
                {t("viewAllEvents")} →
              </Link>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {events.slice(0, 3).map((ev) => {
                const d = new Date(ev.startDate);
                const day = d.toLocaleDateString(locale, { day: "2-digit" });
                const month = d.toLocaleDateString(locale, { month: "short" }).toUpperCase();
                const year = d.getFullYear();
                return (
                  <Link href="/events" key={ev.slug} className="group">
                    <Card className="h-full gap-0 py-0 ring-border transition-shadow hover:shadow-md">
                      <CardContent className="flex items-start gap-4 p-5">
                        <div className="shrink-0 flex flex-col items-center justify-center h-16 w-16 rounded-lg bg-navy text-white leading-none">
                          <span className="text-xl font-bold">{day}</span>
                          <span className="mt-0.5 text-[10px] tracking-wide">{month}</span>
                          <span className="text-[10px] text-white/60">{year}</span>
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-navy leading-snug group-hover:underline">
                            {ev.title[locale]}
                          </p>
                          <p className="mt-1.5 text-sm text-muted-foreground">{ev.location}</p>
                        </div>
                      </CardContent>
                    </Card>
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

      {/* Membership CTA band */}
      <section className="bg-navy">
        <div className="mx-auto max-w-6xl px-4 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50">{tOrg("nameShort")}</p>
            <h3 className="font-heading mt-1 text-xl font-bold text-white">{t("joinClub")}</h3>
            <p className="mt-1.5 text-sm text-white/70 max-w-md">{t("joinClubBody")}</p>
          </div>
          <Button size="lg" className="h-11 shrink-0 px-6 bg-red text-white hover:bg-red/90" render={<Link href="/membership" />}>
            {t("joinClubCta")}
          </Button>
        </div>
      </section>

      {/* News, live coverage, and community — secondary content */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 grid gap-10 lg:grid-cols-3">
          {/* Column 1 — featured statement + news list */}
          <Reveal className="lg:col-span-1">
            <div>
              <Card className="gap-0 py-0 ring-border overflow-hidden">
                {statements[0].image && (
                  <Link href={`/news/statements/${statements[0].slug}`} className="block relative h-40">
                    <Image src={statements[0].image} alt="" fill className="object-cover object-top" />
                    <div className="absolute inset-0 bg-linear-to-t from-navy-dark/80 to-transparent" />
                  </Link>
                )}
                <CardContent className="p-5">
                  <Badge className="bg-red/10 text-red">{t("statementEyebrow")}</Badge>
                  <Link href={`/news/statements/${statements[0].slug}`}>
                    <h3 className="font-heading mt-2.5 text-base font-bold text-navy leading-snug hover:underline">
                      {statements[0].title[locale]}
                    </h3>
                  </Link>
                </CardContent>
              </Card>

              <h3 className="font-heading mt-10 text-lg font-bold text-navy">{tNav("news")}</h3>
              <Separator className="mt-4" />
              <div className="divide-y divide-border">
                {newsItems.map((item) => (
                  <Link href="/news" key={item.slug} className="flex items-start gap-3 py-4 group">
                    <span className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-navy/8 text-navy">
                      <MicIcon className="h-4 w-4 text-navy" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy group-hover:underline leading-snug">
                        {item.title[locale]}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {new Date(item.date).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" })}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <h3 className="font-heading mt-10 text-lg font-bold text-navy">{t("newsDeskTitle")}</h3>
              <Separator className="mt-4" />
              <div className="divide-y divide-border">
                {newsItems.map((item) => (
                  <div key={item.slug} className="py-4 flex gap-4">
                    <span className="shrink-0 flex h-14 w-14 items-center justify-center rounded-lg bg-navy/8 text-navy">
                      <MicIcon className="h-5 w-5 text-navy" />
                    </span>
                    <div>
                      <Link href="/news" className="font-heading font-semibold text-navy hover:underline leading-snug">
                        {item.title[locale]}
                      </Link>
                      <p className="mt-1 text-xs text-muted-foreground">
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
              <Card className="mt-4 gap-0 py-0 ring-border overflow-hidden">
                <div className="relative h-44 bg-navy-dark flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red">
                    <svg className="h-6 w-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{t("liveCaption")}</p>
                </CardContent>
              </Card>

              <h3 className="font-heading mt-10 text-lg font-bold text-navy">{t("keyEvents")}</h3>
              <div className="mt-4 space-y-3">
                {galleryImages.slice(0, 3).map((img) => (
                  <Card key={img.caption[locale]} className="flex-row items-center gap-3 py-3 ring-border">
                    <span className="ml-3 shrink-0 flex h-10 w-10 items-center justify-center rounded-md bg-navy/8 text-navy">
                      <MicIcon className="h-4 w-4 text-navy" />
                    </span>
                    <p className="text-sm font-semibold text-navy pr-4">{img.caption[locale]}</p>
                  </Card>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Column 3 — Partners, quick links, press */}
          <Reveal className="lg:col-span-1" delay={200}>
            <div>
              <h3 className="font-heading text-lg font-bold text-navy">{tNav("partners")}</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {partners.slice(0, 4).map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-center rounded-lg border border-border h-20 px-3 text-center text-sm font-heading font-semibold text-navy/70"
                  >
                    {p.name}
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-3">
                <Link href="/events" className="flex items-center justify-between rounded-lg border border-border bg-white p-4 hover:border-navy/30">
                  <p className="font-heading font-semibold text-navy">{t("eventsBanner")}</p>
                  <span className="text-navy/40">→</span>
                </Link>
                <Link href="/membership" className="flex items-center justify-between rounded-lg border border-border bg-white p-4 hover:border-navy/30">
                  <p className="font-heading font-semibold text-navy">{t("membershipBanner")}</p>
                  <span className="text-navy/40">→</span>
                </Link>
                <Link href="/about" className="flex items-center justify-between rounded-lg bg-navy p-4">
                  <div>
                    <p className="font-heading font-semibold text-white">{t("welcomeBanner")}</p>
                    <p className="mt-0.5 text-xs text-white/70">{t("welcomeBannerCta")}</p>
                  </div>
                  <span className="text-white/50">→</span>
                </Link>
              </div>

              <h3 className="font-heading mt-10 text-lg font-bold text-navy">{t("latestPress")}</h3>
              <div className="mt-4 space-y-3">
                {pressItems.map((p) => (
                  <Link
                    href="/press"
                    key={p.title[locale]}
                    className="flex items-center gap-3 rounded-lg border border-border p-3 hover:bg-white"
                  >
                    <span className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-navy">
                      <MicIcon />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy leading-snug">{p.title[locale]}</p>
                      <p className="text-xs text-muted-foreground">{new Date(p.date).toLocaleDateString(locale)}</p>
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
