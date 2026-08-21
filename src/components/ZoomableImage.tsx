"use client";

import { useState } from "react";
import Image from "next/image";

export default function ZoomableImage({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`relative block w-full cursor-zoom-in ${className ?? ""}`}
        aria-label="Zoom image"
      >
        <Image src={src} alt="" fill className="object-contain" priority />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-10 cursor-zoom-out"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white text-xl hover:bg-white/20"
          >
            ×
          </button>
          <div className="relative h-full w-full max-w-3xl">
            <Image src={src} alt="" fill className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
