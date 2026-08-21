"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const labels: Record<string, string> = { fr: "FR", en: "EN", bn: "BN" };

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 border-l border-black/15 pl-4">
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => router.replace(pathname, { locale: l })}
          className={
            l === locale
              ? "font-semibold px-1.5 py-0.5 text-xs text-navy"
              : "text-black/50 hover:text-navy px-1.5 py-0.5 text-xs"
          }
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
