import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import type { Locale } from "@/lib/sampleData";
import { trainings } from "@/lib/sampleData";

const trainingPhotos = [
  "/images/news-workshop.jpg",
  "/images/hero-press-2.jpg",
  "/images/news-pressconf.jpg",
];

export default function TrainingPage() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;

  return (
    <div>
      {/* Title band */}
      <section className="bg-cream border-b border-black/8">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <p className="text-sm text-black/50">FBJA</p>
          <h1 className="mt-2 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-navy">
            {t("training")}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainings.map((tr, i) => (
            <div
              key={tr.slug}
              className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-2xl shadow-[0_4px_16px_rgba(11,37,69,0.1)] ring-1 ring-black/5"
            >
              <Image
                src={trainingPhotos[i % trainingPhotos.length]}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-dark/95 via-navy-dark/40 to-transparent" />
              <span className="absolute left-4 top-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
                {tr.level[locale]}
              </span>
              <div className="relative p-5">
                <h2 className="font-heading text-lg font-bold leading-snug text-white">{tr.title[locale]}</h2>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">{tr.description[locale]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
