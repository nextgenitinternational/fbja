import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import MembersDirectory from "@/components/MembersDirectory";
import { ArrowRightIcon } from "@/components/icons";

export default function CommitteePage() {
  const t = useTranslations("nav");
  const ta = useTranslations("about");

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-navy">
          {t("committee")}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-black/55">{ta("intro")}</p>
        <span className="mx-auto mt-6 block h-0.5 w-16 bg-red" />
      </div>

      <div className="mt-14">
        <MembersDirectory />
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
        >
          {ta("ctaContactTitle")}
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
