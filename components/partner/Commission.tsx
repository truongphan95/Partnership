import { Clock } from "@phosphor-icons/react/dist/ssr";
import { CtaButton } from "./CtaButton";
import { rich } from "./rich";
import type { Dict } from "./i18n";

// Amounts per row, in the same order as t.commission.groups[].rows.
const rates = [
  [
    { earn: "¥3,000", rate: "30%" },
    { earn: "¥5,000", rate: "33%" },
  ],
  [
    { earn: "¥3,000", rate: "30%" },
    { earn: "¥15,000", rate: "30%" },
  ],
  [{ earn: "¥6,000", rate: "30%" }],
];

// Same order as t.commission.examplesWho.
const examples = [
  { math: "5 × ¥5,000 + 5 × ¥500", total: "¥27,500" },
  { math: "10 × ¥5,000 + 10 × ¥500", total: "¥55,000" },
  { math: "¥15,000 + ¥500", total: "¥15,500" },
];

// Layout family: grouped ledger (left) + bonus and examples column (right).
export function Commission({ t }: { t: Dict }) {
  const c = t.commission;
  return (
    <section id="commission" className="scroll-mt-20 bg-pk-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-pk-accent-ink">{c.eyebrow}</p>
        <h2 className="mt-3 text-[32px] font-bold leading-[1.12] tracking-tight text-pk-ink md:text-[40px]">
          {c.title}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            {c.groups.map((g, gi) => (
              <div key={g.name} className={gi > 0 ? "mt-8 border-t border-pk-line pt-8" : ""}>
                <h3 className="text-[18px] font-semibold text-pk-soft">{g.name}</h3>
                <div className="mt-4 grid gap-5">
                  {g.rows.map((service, ri) => {
                    const r = rates[gi][ri];
                    return (
                      <div key={service} className="flex items-baseline justify-between gap-4">
                        <span className="text-[19px] font-medium leading-snug text-pk-ink">{service}</span>
                        <span className="flex shrink-0 flex-col items-end gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                          <span className="tabular text-[30px] font-bold leading-none text-pk-accent md:text-[34px]">
                            {r.earn}
                          </span>
                          <span className="tabular whitespace-nowrap text-right text-[15px] text-pk-soft sm:min-w-[92px]">
                            {c.rate.replace("{rate}", r.rate)}
                          </span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            <p className="mt-8 max-w-[62ch] text-[17px] leading-relaxed text-pk-soft">{c.note}</p>

            <div className="mt-6 flex gap-4 rounded-2xl bg-pk-sunken p-5 md:p-6">
              <Clock size={28} weight="regular" className="mt-0.5 shrink-0 text-pk-accent-ink" aria-hidden />
              <p className="text-[18px] leading-relaxed text-pk-ink">{rich(c.payTiming, "font-semibold")}</p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-pk-accent-tint p-6 md:p-8">
              <h3 className="text-[24px] font-bold leading-tight text-pk-ink">{rich(c.bonusTitle)}</h3>
              <ul className="mt-5 grid gap-2 text-[18px] leading-relaxed text-pk-ink">
                {c.bonusList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-5 text-[18px] font-semibold text-pk-ink">{t.bonus.ends}</p>
              <div className="mt-6">
                <CtaButton label={t.cta.join} />
              </div>
            </div>

            <h3 className="mt-10 text-[22px] font-bold text-pk-ink">{c.examplesTitle}</h3>
            <p className="mt-2 text-[16px] text-pk-soft">{c.examplesNote}</p>
            <dl className="mt-5 grid gap-5">
              {examples.map((e, i) => (
                <div key={e.math} className="flex items-end justify-between gap-4">
                  <div>
                    <dt className="text-[17px] font-medium text-pk-ink">{c.examplesWho[i]}</dt>
                    <dd className="tabular mt-0.5 text-[15px] text-pk-soft">{e.math}</dd>
                  </div>
                  <dd className="tabular shrink-0 text-[26px] font-bold leading-none text-pk-ink">{e.total}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
