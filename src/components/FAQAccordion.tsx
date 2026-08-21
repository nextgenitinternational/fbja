"use client";

import { useState } from "react";

export default function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-black/10 border-t border-b border-black/10">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
              aria-expanded={open}
            >
              <span className="font-heading font-semibold text-navy">{item.q}</span>
              <span className="shrink-0 text-navy/50 text-xl leading-none">{open ? "−" : "+"}</span>
            </button>
            {open && <p className="pb-5 text-sm text-black/60 max-w-2xl">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
