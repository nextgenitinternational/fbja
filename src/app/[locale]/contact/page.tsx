import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("nav");
  const tc = useTranslations("contact");

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 grid gap-10 sm:grid-cols-2">
      <div>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-navy">
          {t("contact")}
        </h1>
        <div className="mt-6 space-y-4 text-sm text-black/70">
          <div>
            <p className="font-semibold text-navy">{tc("addressLabel")}</p>
            <p>43 Rue des Panoyaux, 75020 Paris</p>
          </div>
          <div>
            <p className="font-semibold text-navy">{tc("emailLabel")}</p>
            <p>contact.fbja@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold text-navy">{tc("legalLabel")}</p>
            <p>SIRET : 988 278 289 00018</p>
            <p>RNA : W751279634</p>
          </div>
        </div>
      </div>

      <form className="grid gap-4">
        <input
          type="text"
          placeholder={tc("formName")}
          className="rounded-lg border border-black/15 px-4 py-2.5 text-sm"
        />
        <input
          type="email"
          placeholder={tc("formEmail")}
          className="rounded-lg border border-black/15 px-4 py-2.5 text-sm"
        />
        <textarea
          placeholder={tc("formMessage")}
          rows={5}
          className="rounded-lg border border-black/15 px-4 py-2.5 text-sm"
        />
        <button
          type="submit"
          className="justify-self-start rounded-md bg-navy px-7 py-3 text-sm font-semibold text-white hover:bg-navy-dark transition-colors"
        >
          {tc("formSubmit")}
        </button>
      </form>
    </div>
  );
}
