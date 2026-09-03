"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = ["/images/hero-v2.jpg", "/images/hero-v3.jpg", "/images/hero-v5.jpg"];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[220px] sm:h-[300px] lg:h-[360px] overflow-hidden">
      {slides.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${i === active ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
