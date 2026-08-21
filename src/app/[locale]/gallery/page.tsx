import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/lib/sampleData";
import { galleryImages } from "@/lib/sampleData";

const tones = ["from-navy to-navy-dark", "from-red to-navy", "from-green to-navy", "from-navy to-green"];

export default function GalleryPage() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-navy">
        {t("gallery")}
      </h1>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((img, i) => (
          <div key={img.caption[locale]} className="group overflow-hidden rounded-2xl">
            <div
              className={`h-56 bg-linear-to-br ${tones[i % tones.length]} transition-transform group-hover:scale-105`}
            />
            <p className="mt-2 text-sm text-black/60">{img.caption[locale]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
