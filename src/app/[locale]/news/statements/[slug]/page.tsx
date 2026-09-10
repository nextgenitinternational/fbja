import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { statements, type Locale } from "@/lib/sampleData";
import { MicIcon } from "@/components/icons";
import ZoomableImage from "@/components/ZoomableImage";

export default async function StatementDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const statement = statements.find((s) => s.slug === slug);
  if (!statement) notFound();

  const t = await getTranslations({ locale, namespace: "home" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const loc = locale as Locale;

  return (
    <div>
      {/* Title band */}
      <section className="bg-cream border-b border-black/8">
        <div className="mx-auto max-w-3xl px-4 py-8">
          <Link href="/news/statements" className="text-sm text-black/50 hover:underline">
            ← {tNav("statements")}
          </Link>

          <div className="mt-5 flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red">
              <MicIcon />
            </span>
            <p className="text-xs font-semibold uppercase tracking-wide text-black/50">
              {t("statementEyebrow")}
            </p>
          </div>
          <p className="mt-3 text-sm text-black/50">
            {new Date(statement.date).toLocaleDateString(loc, {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <h1 className="mt-2 font-heading text-2xl sm:text-3xl font-bold leading-snug text-navy max-w-2xl">
            {statement.title[loc]}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-16">
        {statement.image && (
          <ZoomableImage
            src={statement.image}
            className="aspect-3/4 sm:aspect-4/3 rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-[0_8px_24px_rgba(11,37,69,0.1)] bg-white"
          />
        )}

        {statement.body &&
          (() => {
            const paragraphs = statement.body![loc].split("\n\n");
            const signature = paragraphs[paragraphs.length - 1];
            const isSignature = signature.split("\n").length > 1 && paragraphs.length > 1;
            const body = isSignature ? paragraphs.slice(0, -1) : paragraphs;

            return (
              <div className="mt-10 relative pl-6 sm:pl-8">
                <span className="absolute left-0 top-1 bottom-1 w-1 rounded-full bg-red" />

                <div className="space-y-6">
                  {body.map((p, i) => (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? "font-heading text-xl sm:text-2xl text-navy leading-snug tracking-tight"
                          : "text-black/70 text-[1.05rem] leading-loose"
                      }
                    >
                      {p}
                    </p>
                  ))}
                </div>

                {isSignature && (
                  <div className="mt-10 inline-block rounded-xl bg-cream px-5 py-4 text-sm text-navy/80 leading-relaxed whitespace-pre-line">
                    {signature}
                  </div>
                )}
              </div>
            );
          })()}

        <div className="mt-16 rounded-2xl bg-cream p-6 flex items-center justify-between gap-4">
          <p className="text-sm text-black/60">contact.fbja@gmail.com</p>
          <Link
            href="/news/statements"
            className="rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-dark transition-colors shrink-0"
          >
            {tNav("statements")}
          </Link>
        </div>
      </div>
    </div>
  );
}
