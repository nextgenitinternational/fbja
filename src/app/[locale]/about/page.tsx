import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { RoleIcon, MicIcon, ShieldIcon, GlobeIcon, BookIcon, dotPattern } from "@/components/icons";
import { newsItems, type Locale } from "@/lib/sampleData";
import AboutTeamPreview from "@/components/AboutTeamPreview";

export default function AboutPage() {
  const t = useTranslations("about");
  const tNav = useTranslations("nav");
  const th = useTranslations("home");
  const locale = useLocale() as Locale;

  const values = [
    { icon: ShieldIcon, titleKey: "valueEthicsTitle", bodyKey: "valueEthicsBody" },
    { icon: RoleIcon, titleKey: "valueSolidarityTitle", bodyKey: "valueSolidarityBody" },
    { icon: GlobeIcon, titleKey: "valueBridgeTitle", bodyKey: "valueBridgeBody" },
  ] as const;

  return (
    <div>
      {/* Hero band */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute right-6 top-6 h-20 w-20 text-white/10" style={dotPattern} />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-red/20" />
        <div className="relative mx-auto max-w-4xl px-4 py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-cream/80">FBJA</p>
          <h1 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            {tNav("about")}
          </h1>
          <p className="mt-6 max-w-2xl text-white/75 leading-relaxed">{t("intro")}</p>
        </div>
      </section>

      {/* Dual CTA cards */}
      <section className="mx-auto max-w-4xl px-4">
        <div className="-mt-10 relative grid gap-6 sm:grid-cols-2">
          <Link
            href="/membership"
            className="rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_8px_24px_rgba(11,37,69,0.1)] p-6 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(11,37,69,0.16)] transition-all"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red">
              <RoleIcon />
            </span>
            <h2 className="mt-4 font-heading font-bold text-navy">{t("ctaJoinTitle")}</h2>
            <p className="mt-2 text-sm text-black/60 leading-relaxed">{t("ctaJoinBody")}</p>
            <span className="mt-3 inline-block text-sm font-semibold text-red">{th("readMore")} →</span>
          </Link>
          <Link
            href="/contact"
            className="rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_8px_24px_rgba(11,37,69,0.1)] p-6 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(11,37,69,0.16)] transition-all"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy">
              <MicIcon />
            </span>
            <h2 className="mt-4 font-heading font-bold text-navy">{t("ctaContactTitle")}</h2>
            <p className="mt-2 text-sm text-black/60 leading-relaxed">{t("ctaContactBody")}</p>
            <span className="mt-3 inline-block text-sm font-semibold text-red">{th("readMore")} →</span>
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4">
        {/* Mission / Vision */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="font-heading font-bold text-navy text-lg">{t("missionTitle")}</h2>
            <p className="mt-2 text-sm text-black/60 leading-relaxed">{t("missionBody")}</p>
          </div>
          <div>
            <h2 className="font-heading font-bold text-navy text-lg">{t("visionTitle")}</h2>
            <p className="mt-2 text-sm text-black/60 leading-relaxed">{t("visionBody")}</p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {values.map(({ icon: Icon, titleKey, bodyKey }) => (
            <div key={titleKey}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green">
                <Icon />
              </span>
              <h3 className="mt-3 font-heading font-semibold text-navy">{t(titleKey)}</h3>
              <p className="mt-1 text-sm text-black/60 leading-relaxed">{t(bodyKey)}</p>
            </div>
          ))}
        </div>

        {/* Resource links */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <Link
            href="/training"
            className="flex items-start gap-4 rounded-2xl border border-black/10 p-6 hover:border-navy transition-colors"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy">
              <BookIcon />
            </span>
            <div>
              <p className="font-heading font-semibold text-navy">{tNav("training")}</p>
              <p className="mt-1 text-sm text-black/50">{th("readMore")} →</p>
            </div>
          </Link>
          <Link
            href="/resources"
            className="flex items-start gap-4 rounded-2xl border border-black/10 p-6 hover:border-navy transition-colors"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red">
              <MicIcon />
            </span>
            <div>
              <p className="font-heading font-semibold text-navy">{tNav("resources")}</p>
              <p className="mt-1 text-sm text-black/50">{th("readMore")} →</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Team preview */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">{t("teamTitle")}</h2>
          <Link href="/about/committee" className="text-sm font-semibold text-red shrink-0">
            {th("viewAll")} →
          </Link>
        </div>
        <AboutTeamPreview />
      </section>

      {/* Join us banner */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-red/20" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-2xl font-bold">{t("joinTitle")}</h2>
            <p className="mt-2 text-white/70 max-w-md">{t("joinBody")}</p>
          </div>
          <Link
            href="/membership"
            className="shrink-0 rounded-md bg-red px-7 py-3.5 text-sm font-semibold text-white hover:bg-red/90 transition-colors"
          >
            {th("cta")}
          </Link>
        </div>
      </section>

      {/* News preview */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">{th("newsTitle")}</h2>
          <Link href="/news" className="text-sm font-semibold text-red shrink-0">
            {th("viewAll")} →
          </Link>
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.slug}>
              <div className="h-32 rounded-lg bg-navy/10" />
              <p className="mt-3 text-xs text-black/40 uppercase tracking-wide">
                {new Date(item.date).toLocaleDateString(locale)}
              </p>
              <h3 className="mt-1 font-heading font-semibold text-navy leading-snug">
                {item.title[locale]}
              </h3>
            </article>
          ))}
        </div>
      </section>

      {/* Contact block, branded */}
      <section className="bg-cream border-t border-black/8">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 p-6 sm:p-8">
            <div className="pointer-events-none absolute right-4 bottom-4 h-16 w-16 text-navy/10" style={dotPattern} />
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy">
                <MicIcon />
              </span>
              <div>
                <h2 className="font-heading font-bold text-navy">{t("legalTitle")}</h2>
                <ul className="mt-3 text-sm text-black/60 space-y-1">
                  <li>43 Rue des Panoyaux, 75020 Paris</li>
                  <li>contact.fbja@gmail.com</li>
                  <li>SIRET : 988 278 289 00018</li>
                  <li>RNA : W751279634</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
