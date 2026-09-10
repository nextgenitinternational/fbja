import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { newsItems, type Locale } from "@/lib/sampleData";

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) notFound();

  const t = await getTranslations({ locale, namespace: "nav" });
  const th = await getTranslations({ locale, namespace: "home" });
  const loc = locale as Locale;

  const others = newsItems.filter((n) => n.slug !== slug);

  return (
    <div>
      {/* Breadcrumb + title band */}
      <section className="bg-cream border-b border-black/8">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/news" className="text-sm text-black/50 hover:underline">
            ← {t("news")}
          </Link>
          <p className="mt-3 text-sm text-black/50">
            {new Date(item.date).toLocaleDateString(loc, { day: "numeric", month: "long", year: "numeric" })}
          </p>
          <h1 className="mt-2 font-heading text-2xl sm:text-3xl font-bold leading-snug text-navy max-w-2xl">
            {item.title[loc]}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Article */}
          <div className="lg:col-span-2">
            <div className="relative h-80 w-full overflow-hidden bg-navy/8 sm:h-105">
              <Image src={item.image} alt="" fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover" />
            </div>

            <div className="mt-8 space-y-5">
              {(item.body ? item.body[loc] : item.excerpt[loc]).split("\n\n").map((p, i) => (
                <p key={i} className="text-[1.05rem] leading-loose text-black/70">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 h-1 w-full bg-linear-to-r from-amber-400 via-amber-300 to-transparent" />
          </div>

          {/* Sidebar — other stories */}
          <div className="lg:col-span-1">
            <h2 className="font-heading text-lg font-extrabold uppercase text-navy">{t("news")}</h2>
            <div className="mt-6 space-y-8">
              {others.map((n) => (
                <div key={n.slug}>
                  <p className="font-heading text-sm font-extrabold uppercase leading-snug text-navy">
                    {n.title[loc]}
                  </p>
                  <div className="relative mt-4 h-48 w-full overflow-hidden bg-navy/8">
                    <Image src={n.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-black/70">{n.excerpt[loc]}</p>
                  <Link
                    href={`/news/${n.slug}`}
                    className="mt-4 inline-block rounded-sm bg-red px-5 py-2 text-xs font-bold uppercase tracking-wide text-white hover:bg-red/90"
                  >
                    {th("readMore")}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
