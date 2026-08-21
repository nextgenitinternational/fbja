"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { mainNavItems } from "@/lib/nav";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default function Nav() {
  const t = useTranslations("nav");
  const tOrg = useTranslations("org");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/8">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-20">
        <Link href="/" className="font-heading font-bold tracking-tight text-xl text-navy">
          {tOrg("nameShort")}
        </Link>

        <button
          type="button"
          className="lg:hidden rounded-full border border-navy/20 px-4 py-1.5 text-sm text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          Menu
        </button>

        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {mainNavItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={
                  active
                    ? "font-semibold text-navy"
                    : "text-black/60 hover:text-navy transition-colors"
                }
              >
                {t(item.key)}
              </Link>
            );
          })}
          <LocaleSwitcher />
          <Link
            href="/membership"
            className="rounded-full border border-navy px-5 py-2 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
          >
            {t("membership")}
          </Link>
        </nav>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-black/8 px-4 py-4 flex flex-col gap-4 text-sm bg-white">
          {mainNavItems.map((item) => (
            <Link key={item.key} href={item.href} onClick={() => setOpen(false)} className="text-black/70">
              {t(item.key)}
            </Link>
          ))}
          <LocaleSwitcher />
        </nav>
      )}
    </header>
  );
}
