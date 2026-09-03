"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";
import { mainNavItems } from "@/lib/nav";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default function Nav() {
  const t = useTranslations("nav");
  const tOrg = useTranslations("org");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream">
      {/* Utility row — logo, tagline, email + search */}
      <div className="border-b border-black/8">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/fbja-logo.png"
              alt={tOrg("nameShort")}
              width={220}
              height={76}
              className="h-16 sm:h-20 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:block flex-1 text-navy/70 text-sm leading-snug">
            <p>{tOrg("taglineLine1")}</p>
            <p>{tOrg("taglineLine2")}</p>
          </div>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/10 text-navy">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <a href="mailto:contact.fbja@gmail.com" className="text-sm text-navy hover:underline">
              contact.fbja@gmail.com
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden rounded-full border border-navy/20 px-4 py-1.5 text-sm text-navy shrink-0"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            Menu
          </button>
        </div>
      </div>

      {/* Nav strip — navy bar */}
      <nav className="hidden lg:block bg-navy">
        <div className="mx-auto max-w-6xl px-4 flex items-center gap-1 text-sm">
          {mainNavItems.map((item) => {
            const active = pathname === item.href;
            if (item.key === "about") {
              return (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-3.5 font-semibold uppercase tracking-wide transition-colors ${
                      active ? "bg-navy-dark text-white" : "text-white/85 hover:bg-navy-dark hover:text-white"
                    }`}
                  >
                    {t(item.key)}
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {aboutOpen && (
                    <div className="absolute left-0 top-full min-w-48 bg-white shadow-lg ring-1 ring-black/10 py-2">
                      <Link
                        href="/about"
                        className="block px-4 py-2 text-sm text-navy hover:bg-navy/5"
                      >
                        {t("about")}
                      </Link>
                      <Link
                        href="/about/committee"
                        className="block px-4 py-2 text-sm text-navy hover:bg-navy/5"
                      >
                        {t("committee")}
                      </Link>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`px-4 py-3.5 font-semibold uppercase tracking-wide text-xs transition-colors ${
                  active ? "bg-navy-dark text-white" : "text-white/85 hover:bg-navy-dark hover:text-white"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
          <div className="ml-auto flex items-center py-2">
            <LocaleSwitcher />
          </div>
        </div>
      </nav>

      {open && (
        <nav className="lg:hidden border-t border-black/8 px-4 py-4 flex flex-col gap-4 text-sm bg-white">
          {mainNavItems.map((item) => (
            <Link key={item.key} href={item.href} onClick={() => setOpen(false)} className="text-black/70">
              {t(item.key)}
            </Link>
          ))}
          <a href="mailto:contact.fbja@gmail.com" className="text-navy">
            contact.fbja@gmail.com
          </a>
          <div className="inline-flex self-start rounded-md bg-navy px-2 py-1">
            <LocaleSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}
