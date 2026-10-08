import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { rich } from "./rich";
import type { Dict } from "./i18n";

// Layout family: accordion (native details/summary, no client JS).
// Questions are split across two columns on lg so seven items stay short.
export function Faq({ t }: { t: Dict }) {
  const items = t.faq.items;
  const half = Math.ceil(items.length / 2);
  const cols = [items.slice(0, half), items.slice(half)];
  return (
    <section id="faq" className="scroll-mt-20 bg-pk-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <h2 className="text-[32px] font-bold leading-[1.12] tracking-tight text-pk-ink md:text-[40px]">
          {t.faq.title}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-x-10 lg:grid-cols-2">
          {cols.map((col, ci) => (
            <div key={ci} className="divide-y divide-pk-line">
              {col.map((f) => (
                <details key={f.q} className="group py-2">
                  <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 rounded-full text-[19px] font-semibold text-pk-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-pk-accent [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <CaretDown
                      size={22}
                      weight="regular"
                      aria-hidden
                      className="shrink-0 text-pk-soft transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <p className="pb-4 pr-10 text-[18px] leading-relaxed text-pk-soft">{rich(f.a)}</p>
                </details>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
