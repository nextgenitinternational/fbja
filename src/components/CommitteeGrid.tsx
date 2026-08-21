"use client";

import { useState } from "react";
import { committee } from "@/lib/committee";
import { RoleIcon, MicIcon, dotPattern } from "@/components/icons";
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

const avatarTones = [
  "from-navy to-navy-dark",
  "from-red to-navy",
  "from-green to-navy",
  "from-navy to-green",
];

export default function CommitteeGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {committee.map((m, i) => (
          <button
            key={m.name}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_1px_3px_rgba(11,37,69,0.08)] hover:shadow-[0_14px_28px_rgba(11,37,69,0.14)] hover:-translate-y-0.5 transition-all duration-200 text-left"
          >
            {/* decorative dot grids, echo the brand card corners */}
            <div className="pointer-events-none absolute right-4 top-4 h-16 w-16 text-navy/15" style={dotPattern} />
            <div className="pointer-events-none absolute right-3 bottom-16 h-12 w-12 text-red/15" style={dotPattern} />

            {/* curved red/navy accent, top-right */}
            <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full border-[3px] border-red/70" />
            <div className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full border-[3px] border-navy/60" />

            {/* red blob bleeding from top-left, photo sits on it */}
            <div className="pointer-events-none absolute -top-10 -left-10 h-36 w-36 rounded-full bg-red" />

            <div className="relative flex-1 px-6 pt-8 pb-0">
              <span
                className={`relative flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br ${avatarTones[i % avatarTones.length]} text-white font-heading font-bold text-2xl ring-4 ring-white shadow-lg`}
              >
                {initials(m.name)}
              </span>

              <div className="mt-5 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy">
                    <RoleIcon />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-navy/50">Role</p>
                    <p className="text-sm font-semibold text-navy leading-snug">{m.role}</p>
                  </div>
                </div>

                {m.outlet && (
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red">
                      <MicIcon />
                    </span>
                    <p className="text-sm text-black/70 leading-snug">{m.outlet}</p>
                  </div>
                )}

                {m.extra?.map((e) => (
                  <div key={e} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy/70">
                      <RoleIcon />
                    </span>
                    <p className="text-sm text-black/60 leading-snug">{e}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* name banner, red slash accent — matches brand card style */}
            <div className="relative mt-6 bg-navy px-6 py-4 shrink-0">
              <span className="absolute left-0 top-0 h-full w-1.5 bg-red" />
              <p className="pl-2 font-heading font-extrabold uppercase italic text-white tracking-tight leading-tight text-[15px]">
                {m.name}
              </p>
            </div>
          </button>
        ))}
      </div>

      <MemberModal members={committee} openIndex={openIndex} setOpenIndex={setOpenIndex} />
    </>
  );
}
