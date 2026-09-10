import { useTranslations } from "next-intl";

export default function MembersPage() {
  const tNav = useTranslations("nav");
  const tp = useTranslations("placeholder");

  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            {tNav("members")}
          </h1>
          <span className="mx-auto mt-4 block h-0.5 w-16 bg-red" />
          <p className="mt-8 text-base text-black/50">{tp("comingSoon")}</p>
        </div>
      </div>
    </div>
  );
}
