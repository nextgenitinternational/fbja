"use client";

import { useState } from "react";
import Image from "next/image";
import { committee } from "@/lib/committee";
import { FacebookIcon, LinkedinIcon, XIcon } from "@/components/icons";
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

const tones = [
  "from-navy via-navy to-navy-dark",
  "from-red via-red to-navy",
  "from-green via-green to-navy",
  "from-navy via-green to-navy-dark",
  "from-navy-dark via-navy to-red",
  "from-green via-navy to-navy-dark",
];

export default function MembersDirectory() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [originRect, setOriginRect] = useState<DOMRect | null>(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {committee.map((m, i) => (
          <button
            key={m.slug}
            type="button"
            onClick={(e) => {
              setOriginRect(e.currentTarget.getBoundingClientRect());
              setOpenIndex(i);
            }}
            className="group flex flex-col bg-white p-2.5 text-center ring-1 ring-black/8 transition-shadow duration-200 hover:shadow-[0_14px_28px_rgba(11,37,69,0.12)]"
          >
            <div
              className="relative aspect-3/4 w-full overflow-hidden bg-navy/8"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 88%)" }}
            >
              {m.photo ? (
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div
                  className={`flex h-full w-full items-center justify-center bg-linear-to-br ${tones[i % tones.length]}`}
                >
                  <span className="font-heading text-4xl font-bold text-white/90">
                    {initials(m.name)}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col items-center px-4 pb-5 pt-4">
              <p className="font-heading text-lg font-bold leading-snug text-navy">
                {m.name}
              </p>
              <span className="mt-4 h-0.5 w-12 bg-red" />
              <p className="mt-4 text-sm leading-relaxed text-black/55">{m.role}</p>
              {m.outlet && (
                <p className="mt-1 text-sm leading-relaxed text-black/45">{m.outlet}</p>
              )}
              <div className="mt-5 flex items-center justify-center gap-4 text-navy/35">
                <FacebookIcon className="h-3.5 w-3.5" />
                <XIcon className="h-3.5 w-3.5" />
                <LinkedinIcon className="h-3.5 w-3.5" />
              </div>
            </div>
          </button>
        ))}
      </div>

      <MemberModal
        members={committee}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        originRect={originRect}
      />
    </>
  );
}
