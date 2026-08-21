import { useTranslations } from "next-intl";

export default function MembershipPage() {
  const t = useTranslations("nav");
  const tm = useTranslations("membership");

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-navy">
        {t("membership")}
      </h1>
      <p className="mt-4 text-black/60">{tm("intro")}</p>

      <form className="mt-10 rounded-2xl bg-cream p-6 sm:p-8 grid gap-4 sm:grid-cols-2">
        <h2 className="sm:col-span-2 font-heading font-bold text-navy text-lg">
          {tm("formTitle")}
        </h2>
        <input
          type="text"
          placeholder={tm("formName")}
          className="rounded-lg border border-black/15 px-4 py-2.5 text-sm bg-white"
        />
        <input
          type="email"
          placeholder={tm("formEmail")}
          className="rounded-lg border border-black/15 px-4 py-2.5 text-sm bg-white"
        />
        <input
          type="text"
          placeholder={tm("formOutlet")}
          className="rounded-lg border border-black/15 px-4 py-2.5 text-sm bg-white sm:col-span-2"
        />
        <textarea
          placeholder={tm("formMessage")}
          rows={4}
          className="rounded-lg border border-black/15 px-4 py-2.5 text-sm bg-white sm:col-span-2"
        />
        <button
          type="submit"
          className="sm:col-span-2 justify-self-start rounded-md bg-navy px-7 py-3 text-sm font-semibold text-white hover:bg-navy-dark transition-colors"
        >
          {tm("formSubmit")}
        </button>
      </form>
    </div>
  );
}
