import { useTranslations } from "next-intl";
import CommitteeGrid from "@/components/CommitteeGrid";

export default function MembersPage() {
  const t = useTranslations("nav");

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-navy">
        {t("committee")}
      </h1>
      <div className="mt-10">
        <CommitteeGrid />
      </div>
    </div>
  );
}
