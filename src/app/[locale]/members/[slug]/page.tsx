import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { committee } from "@/lib/committee";
import { RoleIcon, MicIcon, dotPattern } from "@/components/icons";

function initials(name: string) {
  return name
    .replace("MD:", "")
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default async function MemberDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const member = committee.find((m) => m.slug === slug);
  if (!member) notFound();

  const tNav = await getTranslations({ locale, namespace: "nav" });

  return (
    <div>
      {/* Hero band */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute right-6 top-6 h-20 w-20 text-white/10" style={dotPattern} />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-red/20" />
        <div className="relative mx-auto max-w-3xl px-4 py-16">
          <Link href="/members" className="text-sm font-semibold text-white/70 hover:text-white">
            ← {tNav("members")}
          </Link>

          <div className="mt-8 flex items-center gap-5">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-red text-white font-heading font-bold text-2xl ring-4 ring-white/10">
              {initials(member.name)}
            </span>
            <div>
              <h1 className="font-heading text-2xl sm:text-3xl font-bold leading-snug">{member.name}</h1>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/50">Role</p>
              <p className="text-white/80">{member.role}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-16 space-y-6">
        {member.outlet && (
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red">
              <MicIcon />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-black/40">Journalist</p>
              <p className="text-black/70 leading-relaxed">{member.outlet}</p>
            </div>
          </div>
        )}

        {member.extra?.map((e) => (
          <div key={e} className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy/70">
              <RoleIcon />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-black/40">Member</p>
              <p className="text-black/60 leading-relaxed">{e}</p>
            </div>
          </div>
        ))}

        <div className="pt-8">
          <Link
            href="/members"
            className="inline-flex items-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-dark transition-colors"
          >
            ← {tNav("members")}
          </Link>
        </div>
      </div>
    </div>
  );
}
