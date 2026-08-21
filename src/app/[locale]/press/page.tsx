import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/lib/sampleData";
import { pressItems } from "@/lib/sampleData";

export default function PressPage() {
  const t = useTranslations("nav");
  const tp = useTranslations("press");
  const locale = useLocale() as Locale;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-navy">
        {t("press")}
      </h1>
      <p className="mt-4 text-black/60">{tp("intro")}</p>

      <div className="mt-10 divide-y divide-black/10 border-t border-b border-black/10">
        {pressItems.map((p) => (
          <div key={p.title[locale]} className="py-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <p className="shrink-0 text-sm text-black/50 sm:w-32">
              {new Date(p.date).toLocaleDateString(locale)}
            </p>
            <p className="font-heading font-semibold text-navy">{p.title[locale]}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-cream p-6">
        <p className="font-heading font-bold text-navy">{tp("contactTitle")}</p>
        <p className="mt-1 text-sm text-black/70">contact.fbja@gmail.com</p>
      </div>
    </div>
  );
}
