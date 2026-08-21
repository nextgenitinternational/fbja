import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/lib/sampleData";
import { newsItems, statements, trainings, galleryImages, resources, partners, pressItems } from "@/lib/sampleData";
import FAQAccordion from "@/components/FAQAccordion";
import Carousel from "@/components/Carousel";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import TeamCarouselSection from "@/components/TeamCarouselSection";
import Reveal from "@/components/Reveal";
import { BookIcon, MicIcon, dotPattern } from "@/components/icons";

const galleryTones = ["from-navy to-navy-dark", "from-red to-navy", "from-green to-navy", "from-navy to-green"];
const trainingAccents = ["bg-navy", "bg-red", "bg-green"];

const stats = [
  { value: "2024", labelKey: "statFounded" },
  { value: "50+", labelKey: "statMembers" },
  { value: "2", labelKey: "statCountries" },
];

export default function Home() {
  const t = useTranslations("home");
  const tNav = useTranslations("nav");
  const locale = useLocale() as Locale;

  const faqItems = t.raw("faq") as { q: string; a: string }[];

  return (
    <div>
      {/* Hero — cream split, text left, circular photo bleeding off the right */}
      <section className="hero-grid relative overflow-hidden bg-navy grid grid-cols-1 min-h-105 items-stretch">
        <div
          className="relative z-10 flex items-center py-16 lg:py-24 pr-6 lg:pr-10"
          style={{ paddingLeft: "max(1rem, calc((100vw - 72rem) / 2 + 1rem))" }}
        >
          <div className="max-w-md">
            <p
              className="hero-in text-sm font-semibold tracking-wide uppercase text-cream/80"
              style={{ animationDelay: "0ms" }}
            >
              {t("eyebrow")}
            </p>
            <h1
              className="hero-in mt-4 font-heading text-4xl sm:text-5xl font-bold tracking-tight text-cream"
              style={{ animationDelay: "100ms" }}
            >
              {t("heroTitle")}
            </h1>
            <p
              className="hero-in mt-6 text-lg text-cream/70 leading-relaxed"
              style={{ animationDelay: "220ms" }}
            >
              {t("heroSubtitle")}
            </p>

            <div className="hero-in mt-10 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "340ms" }}>
              <Link
                href="/membership"
                className="rounded-md bg-red px-7 py-3.5 text-sm font-semibold text-white text-center hover:bg-red/90 transition-colors"
              >
                {t("cta")}
              </Link>
              <Link
                href="/about"
                className="rounded-md border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream text-center hover:bg-white/10 transition-colors"
              >
                {t("ctaSecondary")}
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-photo-in relative h-64 sm:h-80 lg:h-auto overflow-hidden rounded-bl-[400px]">
          <Image
            src="/images/hero-v5.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Featured statements — single-slide carousel */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
         <Reveal>
          <FeaturedCarousel>
            {statements.map((s) => (
              <div
                key={s.slug}
                className="grid sm:grid-cols-2 rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-[0_8px_24px_rgba(11,37,69,0.08)] bg-white"
              >
                <div className="relative h-56 sm:h-auto bg-linear-to-br from-navy via-navy to-green">
                  {s.image && (
                    <Image src={s.image} alt="" fill className="object-cover object-top" />
                  )}
                </div>
                <div className="p-8 sm:p-10 flex flex-col justify-center">
                  <p className="text-xs font-semibold uppercase tracking-wide text-green">
                    {t("statementEyebrow")}
                  </p>
                  <p className="mt-2 text-sm text-black/50">
                    {new Date(s.date).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" })}
                  </p>
                  <h2 className="mt-3 font-heading text-xl sm:text-2xl font-bold text-navy leading-snug">
                    {s.title[locale]}
                  </h2>
                  <Link href={`/news/statements/${s.slug}`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-green">
                    {t("readStatement")} →
                  </Link>
                </div>
              </div>
            ))}
          </FeaturedCarousel>
         </Reveal>
        </div>
      </section>

      {/* Stat bar */}
      <section className="border-b border-black/8">
        <Reveal>
          <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-3 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.labelKey}>
                <p className="font-heading text-3xl sm:text-4xl font-bold text-navy">{s.value}</p>
                <p className="mt-1 text-sm text-black/50">{t(s.labelKey)}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Team — "Meet our team" carousel */}
      <section className="bg-[#eef0fa] border-b border-black/8">
        <div className="mx-auto max-w-6xl px-4 py-20">
         <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wide text-green text-center">{t("leadership")}</p>
          <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-navy text-center">
            {t("teamTitle")}
          </h2>
          <div className="mt-10">
            <TeamCarouselSection />
          </div>
         </Reveal>
        </div>
      </section>

      {/* News — carousel, image-header cards */}
      <section className="mx-auto max-w-6xl px-4 py-20">
       <Reveal>
        <p className="text-xs font-semibold uppercase tracking-wide text-red text-center">{tNav("news")}</p>
        <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-navy text-center">
          {t("newsTitle")}
        </h2>
        <div className="mt-10">
          <Carousel>
            {newsItems.map((item) => (
              <Link
                href="/news"
                key={item.slug}
                className="block rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_1px_3px_rgba(11,37,69,0.06)] hover:shadow-[0_10px_24px_rgba(11,37,69,0.12)] transition-all overflow-hidden h-full"
              >
                <div className="h-36 bg-linear-to-br from-navy to-navy-dark" />
                <div className="p-5">
                  <p className="text-xs text-black/40 uppercase tracking-wide">
                    {new Date(item.date).toLocaleDateString(locale)}
                  </p>
                  <h3 className="mt-1 font-heading font-semibold text-navy leading-snug">
                    {item.title[locale]}
                  </h3>
                  <span className="mt-3 inline-block text-sm font-semibold text-red">
                    {t("readMore")} →
                  </span>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
       </Reveal>
      </section>

      {/* Training — carousel */}
      <section className="bg-cream border-t border-b border-black/8">
        <div className="mx-auto max-w-6xl px-4 py-20">
         <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wide text-red text-center">FBJA</p>
          <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-navy text-center">
            {tNav("training")}
          </h2>
          <div className="mt-10">
            <Carousel>
              {trainings.map((tr, i) => (
                <Link
                  href="/training"
                  key={tr.slug}
                  className="relative block overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_1px_3px_rgba(11,37,69,0.06)] p-6 h-full"
                >
                  <span className={`absolute left-0 top-0 h-1.5 w-full ${trainingAccents[i % trainingAccents.length]}`} />
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full ${trainingAccents[i % trainingAccents.length]}`}>
                    <BookIcon />
                  </span>
                  <h3 className="mt-4 font-heading font-bold text-navy leading-snug">{tr.title[locale]}</h3>
                  <p className="mt-2 text-sm text-black/60 leading-relaxed">{tr.description[locale]}</p>
                </Link>
              ))}
            </Carousel>
          </div>
         </Reveal>
        </div>
      </section>


      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-4 py-20">
       <Reveal>
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">{tNav("gallery")}</h2>
          <Link href="/gallery" className="text-sm font-semibold text-red shrink-0">
            {t("viewAll")} →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-4">
          {galleryImages.slice(0, 4).map((img, i) => (
            <div key={img.caption[locale]} className="overflow-hidden rounded-xl">
              <div className={`h-32 sm:h-40 bg-linear-to-br ${galleryTones[i % galleryTones.length]}`} />
              <p className="mt-2 text-xs text-black/50">{img.caption[locale]}</p>
            </div>
          ))}
        </div>
       </Reveal>
      </section>

      {/* Resources */}
      <section className="bg-cream border-t border-b border-black/8">
        <div className="mx-auto max-w-4xl px-4 py-20">
         <Reveal>
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">{tNav("resources")}</h2>
            <Link href="/resources" className="text-sm font-semibold text-red shrink-0">
              {t("viewAll")} →
            </Link>
          </div>
          <div className="mt-8 divide-y divide-black/10 border-t border-b border-black/10">
            {resources.map((r) => (
              <div key={r.title[locale]} className="py-5 flex items-center justify-between gap-4">
                <p className="font-heading font-semibold text-navy">{r.title[locale]}</p>
                <span className="shrink-0 rounded-full bg-navy/10 text-navy px-3 py-1 text-xs font-semibold">
                  {r.type}
                </span>
              </div>
            ))}
          </div>
         </Reveal>
        </div>
      </section>

      {/* Partners */}
      <section className="mx-auto max-w-6xl px-4 py-20">
       <Reveal>
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">{tNav("partners")}</h2>
          <Link href="/partners" className="text-sm font-semibold text-red shrink-0">
            {t("viewAll")} →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center rounded-2xl border border-black/10 h-24 px-4 text-center font-heading font-semibold text-navy/70"
            >
              {p.name}
            </div>
          ))}
        </div>
       </Reveal>
      </section>

      {/* Press Room */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute right-6 top-6 h-20 w-20 text-white/10" style={dotPattern} />
        <div className="relative mx-auto max-w-4xl px-4 py-20">
         <Reveal>
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold">{tNav("press")}</h2>
            <Link href="/press" className="text-sm font-semibold text-red shrink-0">
              {t("viewAll")} →
            </Link>
          </div>
          <div className="mt-8 divide-y divide-white/15 border-t border-b border-white/15">
            {pressItems.map((p) => (
              <div key={p.title[locale]} className="py-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-red">
                  <MicIcon />
                </span>
                <p className="text-sm text-white/60 sm:w-32 shrink-0">
                  {new Date(p.date).toLocaleDateString(locale)}
                </p>
                <p className="font-heading font-semibold">{p.title[locale]}</p>
              </div>
            ))}
          </div>
         </Reveal>
        </div>
      </section>

      {/* Join Us — split section */}
      <section className="mx-auto max-w-6xl px-4 py-20">
       <Reveal>
        <div className="grid gap-10 sm:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-red">{t("joinEyebrow")}</p>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-navy">{t("joinTitle")}</h2>
            <p className="mt-4 text-black/60 leading-relaxed max-w-md">{t("joinBody")}</p>
            <Link
              href="/membership"
              className="mt-6 inline-flex items-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-dark transition-colors"
            >
              {t("joinCta")} →
            </Link>
          </div>
          <div className="relative h-56 sm:h-72 rounded-full bg-linear-to-br from-navy via-red to-green opacity-90" />
        </div>
       </Reveal>
      </section>

      {/* Contact + legal — split section */}
      <section className="bg-cream border-t border-black/8">
        <div className="mx-auto max-w-6xl px-4 py-20 grid gap-6 sm:grid-cols-2">
         <Reveal>
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">{tNav("contact")}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white ring-1 ring-black/5 p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy">
                  <MicIcon />
                </span>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-black/40">
                  {t("emailUs")}
                </p>
                <p className="mt-1 font-heading font-semibold text-navy">contact.fbja@gmail.com</p>
              </div>
              <div className="rounded-2xl bg-white ring-1 ring-black/5 p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red">
                  <BookIcon />
                </span>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-black/40">
                  {t("visitUs")}
                </p>
                <p className="mt-1 font-heading font-semibold text-navy">43 Rue des Panoyaux, 75020 Paris</p>
              </div>
            </div>
          </div>
         </Reveal>

         <Reveal delay={100}>
          <div className="rounded-2xl bg-navy text-white p-6 sm:p-8">
            <h3 className="font-heading text-lg font-bold">{t("legalTitle")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>SIRET : 988 278 289 00018</li>
              <li>RNA : W751279634</li>
              <li>43 Rue des Panoyaux, 75020 Paris</li>
            </ul>
          </div>
         </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream border-t border-black/8">
        <div className="mx-auto max-w-3xl px-4 py-20">
         <Reveal>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy text-center">
            {t("faqTitle")}
          </h2>
          <div className="mt-10">
            <FAQAccordion items={faqItems} />
          </div>
         </Reveal>
        </div>
      </section>
    </div>
  );
}
