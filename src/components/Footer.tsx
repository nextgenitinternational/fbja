import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { navItems } from "@/lib/nav";

export default function Footer() {
  const t = useTranslations("nav");
  const tf = useTranslations("footer");
  const tOrg = useTranslations("org");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white mt-16">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 sm:grid-cols-3 text-sm">
        <div>
          <p className="font-heading font-bold text-lg">{tOrg("nameShort")}</p>
          <p className="text-white/60 mt-1">{tOrg("nameFull")}</p>
          <p className="mt-3 text-white/60">{tf("address")}</p>
          <p className="text-white/60">{tf("email")}</p>
        </div>

        <div className="flex flex-col gap-1.5">
          {navItems.slice(0, 7).map((item) => (
            <Link key={item.key} href={item.href} className="text-white/70 hover:text-white">
              {t(item.key)}
            </Link>
          ))}
        </div>

        <div className="text-white/60 space-y-1">
          <p>{tf("siret")}</p>
          <p>{tf("rna")}</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {year} {tOrg("nameShort")} — {tf("rights")}
      </div>
    </footer>
  );
}
