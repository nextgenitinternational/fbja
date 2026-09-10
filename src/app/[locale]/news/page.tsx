import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/lib/sampleData";
import { newsItems } from "@/lib/sampleData";

export default function NewsPage() {
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
            {t("news")}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.slug} className="flex flex-col">
              <div className="relative h-72 w-full overflow-hidden bg-navy/8">
                <Image src={item.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <Link href={`/news/${item.slug}`}>
                <h2 className="mt-5 font-heading text-xl font-bold uppercase tracking-wide text-navy leading-snug hover:underline">
                  {item.title[locale]}
                </h2>
              </Link>
              <p className="mt-3 text-sm text-black/65 leading-relaxed">{item.excerpt[locale]}</p>
              <Link
                href={`/news/${item.slug}`}
                className="mt-4 inline-block self-center rounded-sm bg-red px-5 py-2 text-xs font-bold uppercase tracking-wide text-white hover:bg-red/90"
              >
                {th("readMore")}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
