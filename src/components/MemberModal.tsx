"use client";

import type { CommitteeMember } from "@/lib/committee";
import { FacebookIcon, LinkedinIcon, XIcon } from "@/components/icons";

const avatarTones = [
  "from-navy to-navy-dark",
  "from-red to-navy",
  "from-green to-navy",
  "from-navy to-green",
];

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

export default function MemberModal({
  members,
  openIndex,
  setOpenIndex,
}: {
  members: CommitteeMember[];
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
}) {
  if (openIndex === null) return null;
  const member = members[openIndex];

  function go(dir: 1 | -1) {
    setOpenIndex((openIndex! + dir + members.length) % members.length);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={() => setOpenIndex(null)}
    >
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous"
        onClickCapture={(e) => e.stopPropagation()}
        className="hidden sm:flex absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 text-white hover:bg-white/20 transition-colors"
      >
        ←
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next"
        onClickCapture={(e) => e.stopPropagation()}
        className="hidden sm:flex absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 text-white hover:bg-white/20 transition-colors"
      >
        →
      </button>

      <div
        className="relative w-full max-w-3xl rounded-2xl bg-white p-6 sm:p-10 grid gap-8 sm:grid-cols-2 items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpenIndex(null)}
          aria-label="Close"
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white hover:bg-navy-dark transition-colors"
        >
          ×
        </button>

        <span
          className={`mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-linear-to-br ${avatarTones[openIndex % avatarTones.length]} text-white font-heading font-bold text-4xl`}
        >
          {initials(member.name)}
        </span>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-green">{member.role}</p>
          <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-navy leading-snug">
            {member.name}
          </h2>
          {member.outlet && <p className="mt-4 text-black/70 leading-relaxed">{member.outlet}</p>}
          {member.extra?.map((e) => (
            <p key={e} className="mt-2 text-sm text-black/50 leading-relaxed">
              {e}
            </p>
          ))}

          {(() => {
            const socialItems = [
              { key: "facebook", href: member.socials?.facebook, Icon: FacebookIcon, label: "Facebook" },
              { key: "linkedin", href: member.socials?.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
              { key: "x", href: member.socials?.x, Icon: XIcon, label: "X" },
            ];
            return (
              <div className="mt-5 flex gap-2">
                {socialItems.map(({ key, href, Icon, label }) =>
                  href ? (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/10 text-navy hover:bg-navy hover:text-white transition-colors"
                    >
                      <Icon />
                    </a>
                  ) : (
                    <span
                      key={key}
                      aria-hidden="true"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/5 text-navy/25"
                    >
                      <Icon />
                    </span>
                  )
                )}
              </div>
            );
          })()}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {members.map((_, i) => (
          <span
            key={i}
            className={`h-2.5 rounded-full transition-all ${
              i === openIndex ? "w-6 bg-white" : "w-2.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
