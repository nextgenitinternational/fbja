"use client";

import { useState } from "react";
import { committee } from "@/lib/committee";
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

export default function AboutTeamPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const preview = committee.slice(0, 4);

  return (
    <>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {preview.map((m, i) => (
          <button
            key={m.name}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="rounded-2xl border border-black/10 p-5 text-center hover:border-navy hover:shadow-md transition-all"
          >
            <span
              className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-white font-heading font-bold ${
                i % 2 === 0 ? "bg-navy" : "bg-red"
              }`}
            >
              {initials(m.name)}
            </span>
            <p className="mt-3 font-heading font-semibold text-navy text-sm leading-snug">{m.name}</p>
            <p className="mt-1 text-xs text-black/50">{m.role}</p>
          </button>
        ))}
      </div>

      <MemberModal members={preview} openIndex={openIndex} setOpenIndex={setOpenIndex} />
    </>
  );
}
