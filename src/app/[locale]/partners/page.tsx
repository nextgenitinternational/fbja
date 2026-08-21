import { useTranslations } from "next-intl";
import { partners } from "@/lib/sampleData";

export default function PartnersPage() {
  const t = useTranslations("nav");

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-navy">
        {t("partners")}
      </h1>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {partners.map((p) => (
          <div
            key={p.name}
            className="flex items-center justify-center rounded-2xl border border-black/10 h-24 px-4 text-center font-heading font-semibold text-navy/70 hover:text-navy hover:border-navy transition-colors"
          >
            {p.name}
          </div>
        ))}
      </div>
    </div>
  );
}
