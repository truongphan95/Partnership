import type { Dict } from "./i18n";

// Layout family: text-only definition rows (term left, terms of the deal right).
export function StraightTalk({ t }: { t: Dict }) {
  return (
    <section className="border-t border-pk-line">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <h2 className="max-w-[26ch] text-[32px] font-bold leading-[1.12] tracking-tight text-pk-ink md:text-[40px]">
          {t.straight.title}
        </h2>

        <dl className="mt-12 grid gap-10">
          {t.straight.terms.map((term) => (
            <div key={term.title} className="grid grid-cols-1 gap-2 md:grid-cols-12 md:gap-8">
              <dt className="text-[22px] font-bold text-pk-ink md:col-span-4">{term.title}</dt>
              <dd className="max-w-[60ch] text-[19px] leading-relaxed text-pk-ink md:col-span-8">{term.body}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-12 max-w-[60ch] text-[19px] font-semibold leading-relaxed text-pk-ink md:ml-[33.333%] md:pl-8">
          {t.straight.closing}
        </p>

        {/* PROOF SLOT: 1 to 2 real partner quotes, or a real payout screenshot.
            Left empty on purpose until real, permissioned proof exists. */}
      </div>
    </section>
  );
}
