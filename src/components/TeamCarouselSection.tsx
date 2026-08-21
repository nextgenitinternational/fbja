"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { committee } from "@/lib/committee";
import Carousel from "@/components/Carousel";
import MemberModal from "@/components/MemberModal";

function initials(name: string) {
  return name
    .replace("MD:", "")
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TeamCarouselSection() {
  const t = useTranslations("home");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Carousel>
        {committee.map((m, i) => (
          <button
            key={m.name}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group block w-full rounded-2xl overflow-hidden bg-white ring-1 ring-black/5 shadow-[0_1px_3px_rgba(11,37,69,0.06)] hover:shadow-[0_14px_28px_rgba(11,37,69,0.14)] transition-all h-full text-left"
          >
            <div
              className={`flex aspect-square items-center justify-center text-white font-heading font-bold text-3xl ${
                i % 2 === 0 ? "bg-navy" : "bg-red"
              }`}
            >
              {initials(m.name)}
            </div>
            <div className="p-5">
              <p className="font-heading font-semibold text-navy leading-snug">{m.name}</p>
              <p className="mt-1 text-sm text-black/50">{m.role}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-green">
                {t("readBio")} →
              </span>
            </div>
          </button>
        ))}
      </Carousel>

      <MemberModal members={committee} openIndex={openIndex} setOpenIndex={setOpenIndex} />
    </>
  );
}
