import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/lib/sampleData";
import { resources } from "@/lib/sampleData";

export default function ResourcesPage() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-navy">
        {t("resources")}
      </h1>

      <div className="mt-10 divide-y divide-black/10 border-t border-b border-black/10">
        {resources.map((r) => (
          <div key={r.title[locale]} className="py-5 flex items-center justify-between gap-4">
            <p className="font-heading font-semibold text-navy">{r.title[locale]}</p>
            <span className="shrink-0 rounded-full bg-navy/10 text-navy px-3 py-1 text-xs font-semibold">
              {r.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
