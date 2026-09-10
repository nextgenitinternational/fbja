import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function AboutPage() {
  const t = useTranslations("about");
  const tNav = useTranslations("nav");

  return (
    <div>
      {/* Breadcrumb + title band */}
      <section className="bg-cream border-b border-black/8">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <p className="text-sm text-black/50">
            <Link href="/about" className="hover:underline">
              {tNav("about")}
            </Link>
            {" · "}
            {tNav("whatWeDo")}
          </p>
          <h1 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-navy">
            {tNav("whatWeDo")}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="max-w-4xl space-y-6 text-[1.05rem] leading-loose text-black/75">
          <p>{t("whatWeDoP1")}</p>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 items-start">
          <p className="text-[1.05rem] leading-loose text-black/75">{t("whatWeDoP2")}</p>
          <div className="relative h-72 w-full overflow-hidden rounded-lg ring-1 ring-black/10">
            <Image src="https://picsum.photos/seed/fbja-lounge/800/600" alt="" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 items-start">
          <div className="relative h-72 w-full overflow-hidden rounded-lg ring-1 ring-black/10">
            <Image src="https://picsum.photos/seed/fbja-desk/800/600" alt="" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
          </div>
          <p className="text-[1.05rem] leading-loose text-black/75">{t("whatWeDoP3")}</p>
        </div>
      </div>
    </div>
  );
}
