"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const rows = [
  { letter: "F", rest: "rance" },
  { letter: "B", rest: "angladesh" },
  { letter: "J", rest: "ournalists" },
  { letter: "A", rest: "ssociation" },
];

const DURATION = 3750;

export default function IntroOverlay() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setHidden(true);
      return;
    }

    document.body.style.overflow = "hidden";
    const id = setTimeout(() => {
      document.body.style.overflow = "";
      setHidden(true);
    }, DURATION);

    return () => {
      clearTimeout(id);
      document.body.style.overflow = "";
    };
  }, []);

  if (hidden) return null;

  return (
    <div className="intro-root" aria-hidden="true">
      <div className="flex flex-col items-center text-center">
        <span className="intro-logo">
          <Image src="/images/fbja-logo.png" alt="" width={220} height={76} className="h-16 w-auto sm:h-20" priority />
        </span>
        {rows.map((r, i) => (
          <p key={r.letter} className="intro-row font-heading">
            <span className="intro-letter" style={{ animationDelay: `${0.25 + i * 0.18}s` }}>
              {r.letter}
            </span>
            <span className="intro-rest" style={{ animationDelay: `${1.25 + i * 0.18}s` }}>
              {r.rest}
            </span>
          </p>
        ))}
        <span className="intro-rule" />
      </div>
    </div>
  );
}
