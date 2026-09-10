"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";
import { mainNavItems } from "@/lib/nav";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const dropdowns: Record<string, { href: string; labelKey: string }[]> = {
  members: [
    { href: "/about/committee", labelKey: "committee" },
    { href: "/members", labelKey: "members" },
  ],
  news: [
    { href: "/news", labelKey: "news" },
    { href: "/news/statements", labelKey: "statements" },
  ],
  press: [
    { href: "/gallery", labelKey: "gallery" },
    { href: "/resources", labelKey: "resources" },
  ],
  membership: [
    { href: "/membership", labelKey: "membership" },
    { href: "/partners", labelKey: "partners" },
  ],
};

function NavLinks({
  pathname,
  t,
  openKey,
  setOpenKey,
}: {
  pathname: string;
  t: (k: string) => string;
  openKey: string | null;
  setOpenKey: (v: string | null) => void;
}) {
  return (
    <>
      {mainNavItems.map((item) => {
        const active = pathname === item.href;
        const base = `rounded-full px-3 py-2 text-sm transition-colors ${
          active ? "font-semibold text-navy" : "text-navy/60 hover:text-navy"
        }`;
        const sub = dropdowns[item.key];

        if (sub) {
          return (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={() => setOpenKey(item.key)}
              onMouseLeave={() => setOpenKey(null)}
            >
              <Link href={item.href} className={`${base} flex items-center gap-1`}>
                {t(item.key)}
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {openKey === item.key && (
                <div className="absolute left-0 top-full min-w-48 rounded-xl bg-white py-2 shadow-lg ring-1 ring-black/10">
                  {sub.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-4 py-2 text-sm text-navy hover:bg-navy/5">
                      {t(s.labelKey)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        }

        return (
          <Link key={item.key} href={item.href} className={base}>
            {t(item.key)}
          </Link>
        );
      })}
    </>
  );
}

export default function Nav() {
  const t = useTranslations("nav");
  const th = useTranslations("home");
  const tOrg = useTranslations("org");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onScroll = () => {
      if (!mq.matches) {
        setIsScrolled(false);
        return;
      }
      setIsScrolled((prev) => (prev ? window.scrollY > 40 : window.scrollY > 80));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", onScroll);
    };
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const measure = () => setHeaderHeight(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isScrolled, open]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 z-50 w-full transition-shadow ${
          isScrolled
            ? "bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
            : "bg-cream"
        }`}
      >
        {!isScrolled && (
          <>
            {/* Full masthead — logo, tagline, utilities */}
            <div className="border-b border-black/8">
              <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-5">
                <Link href="/" className="shrink-0">
                  <Image
                    src="/images/fbja-logo.png"
                    alt={tOrg("nameShort")}
                    width={280}
                    height={96}
                    className="h-16 w-auto sm:h-20"
                    priority
                  />
                </Link>

                <div className="hidden md:block flex-1 text-navy/70 text-sm leading-snug">
                  <p>{tOrg("taglineLine1")}</p>
                  <p>{tOrg("taglineLine2")}</p>
                </div>

                <div className="hidden sm:flex items-center gap-3 shrink-0">
                  <LocaleSwitcher />
                  <Link
                    href="/membership"
                    className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
                  >
                    {th("cta")}
                  </Link>
                </div>

                <button
                  type="button"
                  className="rounded-full border border-navy/20 px-4 py-1.5 text-sm text-navy md:hidden"
                  onClick={() => setOpen((v) => !v)}
                  aria-expanded={open}
                >
                  Menu
                </button>
              </div>
            </div>

            {/* Nav row */}
            <div className="border-b border-black/8">
              <nav className="mx-auto hidden max-w-6xl items-center justify-center gap-1 px-4 py-2.5 lg:flex">
                <NavLinks pathname={pathname} t={t} openKey={openKey} setOpenKey={setOpenKey} />
              </nav>
            </div>
          </>
        )}

        {isScrolled && (
          <div className="border-b border-black/8">
            <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-2.5">
              <Link href="/" className="shrink-0">
                <Image
                  src="/images/fbja-logo.png"
                  alt={tOrg("nameShort")}
                  width={140}
                  height={48}
                  className="h-9 w-auto"
                />
              </Link>

              <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
                <NavLinks pathname={pathname} t={t} openKey={openKey} setOpenKey={setOpenKey} />
              </nav>

              <div className="ml-auto flex shrink-0 items-center gap-3">
                <div className="hidden sm:block">
                  <LocaleSwitcher />
                </div>
                <Link
                  href="/membership"
                  className="hidden rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-dark lg:inline-block"
                >
                  {th("cta")}
                </Link>
              </div>
            </div>
          </div>
        )}

        {open && (
          <nav className="flex flex-col gap-4 border-t border-black/8 bg-white px-4 py-4 text-sm md:hidden">
            {mainNavItems.map((item) => {
              const sub = dropdowns[item.key];
              return (
                <div key={item.key} className="flex flex-col gap-2">
                  <Link href={item.href} onClick={() => setOpen(false)} className="text-navy/70">
                    {t(item.key)}
                  </Link>
                  {sub && (
                    <div className="ml-3 flex flex-col gap-2 border-l border-black/10 pl-3">
                      {sub.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setOpen(false)}
                          className="text-navy/50"
                        >
                          {t(s.labelKey)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              href="/membership"
              onClick={() => setOpen(false)}
              className="self-start rounded-full bg-navy px-5 py-2.5 font-semibold text-white"
            >
              {th("cta")}
            </Link>
            <a href="mailto:contact.fbja@gmail.com" className="text-navy">
              contact.fbja@gmail.com
            </a>
            <LocaleSwitcher />
          </nav>
        )}
      </header>

      {/* Spacer — header is fixed, page content must not sit under it */}
      <div aria-hidden="true" style={{ height: headerHeight }} />
    </>
  );
}
