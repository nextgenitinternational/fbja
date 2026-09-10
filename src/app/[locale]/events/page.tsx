import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import type { Locale } from "@/lib/sampleData";
import { events } from "@/lib/sampleData";
import { PinIcon } from "@/components/icons";

const eventPhotos = [
  "/images/hero-press-1.jpg",
  "/images/hero-press-2.jpg",
  "/images/news-workshop.jpg",
  "/images/news-members.jpg",
  "/images/hero-press-3.jpg",
  "/images/news-assembly.jpg",
];
const eventTags = ["Workshop", "Conference", "Networking", "Workshop", "Networking", "Assembly"];

export default function EventsPage() {
  const t = useTranslations("nav");
  const te = useTranslations("events");
  const locale = useLocale() as Locale;

  const [next, ...rest] = events;

  return (
    <div>
      {/* Title band */}
      <section className="bg-cream border-b border-black/8">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <p className="text-sm text-black/50">FBJA</p>
          <h1 className="mt-2 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-navy">
            {t("events")}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Next event, featured */}
        {next && (
          <div className="group relative block h-80 overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(11,37,69,0.12)] ring-1 ring-black/5 sm:h-96">
            <Image
              src={eventPhotos[0]}
              alt=""
              fill
              sizes="100vw"
              priority
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-navy-dark/90 via-navy-dark/25 to-transparent" />
            <span className="absolute left-4 top-4 rounded-full bg-red px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
              {te("next")}
            </span>
            <div className="absolute bottom-6 left-6 right-6 flex items-end gap-4">
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-white text-navy">
                <span className="text-xl font-heading font-bold leading-none">
                  {new Date(next.startDate).getDate()}
                </span>
                <span className="text-[10px] uppercase mt-0.5">
                  {new Date(next.startDate).toLocaleDateString(locale, { month: "short" })}
                </span>
              </div>
              <div>
                <p className="font-heading text-xl sm:text-2xl font-bold leading-snug text-white">
                  {next.title[locale]}
                </p>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-white/70">
                  <PinIcon className="h-3.5 w-3.5" />
                  {next.location}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Rest — photo grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((e, i) => {
            const date = new Date(e.startDate);
            return (
              <div
                key={e.slug}
                className="group relative block h-56 overflow-hidden rounded-2xl shadow-[0_4px_16px_rgba(11,37,69,0.1)] ring-1 ring-black/5"
              >
                <Image
                  src={eventPhotos[i + 1]}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy-dark/90 via-navy-dark/25 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  {eventTags[i + 1]}
                </span>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-semibold text-white/70">
                    {date.toLocaleDateString(locale, { day: "2-digit", month: "long", year: "numeric" })}
                  </p>
                  <p className="mt-1 font-heading text-lg font-bold leading-snug text-white">
                    {e.title[locale]}
                  </p>
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm text-white/70">
                    <PinIcon className="h-3.5 w-3.5" />
                    {e.location}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
