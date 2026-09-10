"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const slides = ["/images/hero-press-1.jpg", "/images/hero-press-2.jpg", "/images/hero-press-3.jpg"];

export default function HomeHero() {
  const t = useTranslations("home");
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="px-4 pt-6 pb-10 sm:pt-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-red">{t("eyebrow")}</p>
          <h1 className="font-heading mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl">
            {t("heroLine1")}
            <span className="mt-1 block">{t("heroLine2")}</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-black/60">
            {t("heroSubtitle")}
          </p>
        </div>

        {/* Photo */}
        <div className="relative min-h-75 overflow-hidden rounded-3xl lg:min-h-135">
          {slides.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ opacity: i === active ? 1 : 0 }}
            >
              <Image src={src} alt="" fill priority={i === 0} sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          ))}

          <div className="absolute bottom-5 left-5 z-10 flex gap-2">
            {slides.map((src, i) => (
              <button
                key={src}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === active ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
