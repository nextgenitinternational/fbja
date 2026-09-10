"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import type { CommitteeMember, CommitteeBio } from "@/lib/committee";
import type { Locale } from "@/lib/sampleData";
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

function bioFor(bio: CommitteeBio | undefined, locale: Locale) {
  if (!bio) return undefined;
  return bio[locale] ?? bio.en ?? bio.fr ?? bio.bn;
}

export default function MemberModal({
  members,
  openIndex,
  setOpenIndex,
  originRect,
}: {
  members: CommitteeMember[];
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
  originRect?: DOMRect | null;
}) {
  const locale = useLocale() as Locale;
  const [renderIndex, setRenderIndex] = useState(openIndex);
  const [closing, setClosing] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const prevOpenIndexRef = useRef<number | null>(null);

  useEffect(() => {
    if (openIndex !== null) {
      setRenderIndex(openIndex);
      setClosing(false);
    } else if (renderIndex !== null) {
      setClosing(true);
      const id = setTimeout(() => setRenderIndex(null), 260);
      return () => clearTimeout(id);
    }
  }, [openIndex, renderIndex]);

  // FLIP — grow the panel from the clicked card's on-screen rect, and shrink back into it on close.
  useLayoutEffect(() => {
    const prevOpen = prevOpenIndexRef.current;
    prevOpenIndexRef.current = openIndex;

    const panel = panelRef.current;
    if (!panel || !originRect) return;

    const originCenterX = originRect.left + originRect.width / 2;
    const originCenterY = originRect.top + originRect.height / 2;

    // Opening — panel just mounted at its natural (final) position/size.
    if (prevOpen === null && openIndex !== null) {
      const finalRect = panel.getBoundingClientRect();
      const scaleX = originRect.width / finalRect.width;
      const scaleY = originRect.height / finalRect.height;
      const dx = originCenterX - (finalRect.left + finalRect.width / 2);
      const dy = originCenterY - (finalRect.top + finalRect.height / 2);

      panel.style.transition = "none";
      panel.style.transformOrigin = "center center";
      panel.style.transform = `translate(${dx}px, ${dy}px) scale(${scaleX}, ${scaleY})`;
      panel.style.opacity = "0.5";
      // Force reflow so the transition below actually animates from this state.
      void panel.getBoundingClientRect();

      requestAnimationFrame(() => {
        panel.style.transition = "transform 0.42s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.28s ease";
        panel.style.transform = "none";
        panel.style.opacity = "1";
      });
    }

    // Closing — shrink from wherever the panel currently is back to the origin card.
    if (prevOpen !== null && openIndex === null) {
      const currentRect = panel.getBoundingClientRect();
      const scaleX = originRect.width / currentRect.width;
      const scaleY = originRect.height / currentRect.height;
      const dx = originCenterX - (currentRect.left + currentRect.width / 2);
      const dy = originCenterY - (currentRect.top + currentRect.height / 2);

      panel.style.transformOrigin = "center center";
      panel.style.transition = "transform 0.26s cubic-bezier(0.4, 0, 1, 1), opacity 0.22s ease";
      panel.style.transform = `translate(${dx}px, ${dy}px) scale(${scaleX}, ${scaleY})`;
      panel.style.opacity = "0";
    }
  }, [openIndex, originRect]);

  if (renderIndex === null) return null;
  const member = members[renderIndex];
  const bioText = bioFor(member.bio, locale);

  function close() {
    setOpenIndex(null);
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity duration-200 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
      onClick={close}
    >
      <div
        ref={panelRef}
        className="relative grid w-full max-w-4xl gap-8 rounded-2xl bg-white p-6 sm:grid-cols-[220px_1fr] sm:p-10 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white hover:bg-navy-dark transition-colors"
        >
          ×
        </button>

        <div className="mx-auto w-40 sm:mx-0 sm:w-full">
          {member.photo ? (
            <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl bg-navy/8">
              <Image src={member.photo} alt={member.name} fill sizes="(min-width: 640px) 220px, 160px" className="object-cover" />
            </div>
          ) : (
            <span
              className={`flex aspect-3/4 w-full items-center justify-center rounded-2xl bg-linear-to-br ${avatarTones[renderIndex % avatarTones.length]} text-white font-heading font-bold text-4xl`}
            >
              {initials(member.name)}
            </span>
          )}
        </div>

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

          {bioText && (
            <div className="mt-5 space-y-4 border-t border-black/8 pt-5">
              {bioText.split("\n\n").map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-black/70">
                  {p}
                </p>
              ))}
            </div>
          )}

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
    </div>
  );
}
