import Image from "next/image";
import { Receipt, HandCoins } from "@phosphor-icons/react/dist/ssr";
import { IMAGES } from "./content";
import type { Dict } from "./i18n";

// Layout family: bento grid. 4 items, 4 cells (wide + narrow, then half + half).
// Cell backgrounds differ: surface, accent tint, sunken, photo.
export function WhyEasy({ t }: { t: Dict }) {
  const w = t.why;
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-24">
      <h2 className="max-w-[22ch] text-[32px] font-bold leading-[1.12] tracking-tight text-pk-ink md:text-[40px]">
        {w.title}
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-6">
        <div className="rounded-2xl bg-pk-surface p-6 md:col-span-4 md:p-8">
          <h3 className="text-[22px] font-bold text-pk-ink">{w.moneyTitle}</h3>
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {w.amounts.map((a) => (
              <div key={a.label}>
                <dt className="text-[16px] text-pk-soft">{a.label}</dt>
                <dd className="tabular mt-1 text-[22px] font-bold leading-tight text-pk-ink md:text-[24px]">
                  {a.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-[16px] font-medium text-pk-soft">{w.disclaimer}</p>
        </div>

        <div className="flex flex-col rounded-2xl bg-pk-accent-tint p-6 md:col-span-2 md:p-8">
          <Receipt size={32} weight="regular" className="text-pk-accent-ink" aria-hidden />
          <h3 className="mt-5 text-[22px] font-bold text-pk-ink">{w.feesTitle}</h3>
          <p className="mt-3 text-[18px] leading-relaxed text-pk-ink">{w.feesBody}</p>
        </div>

        <div className="rounded-2xl bg-pk-sunken p-6 md:col-span-3 md:p-8">
          <HandCoins size={32} weight="regular" className="text-pk-accent-ink" aria-hidden />
          <h3 className="mt-5 text-[22px] font-bold text-pk-ink">{w.depositTitle}</h3>
          <p className="mt-3 max-w-[48ch] text-[18px] leading-relaxed text-pk-ink">{w.depositBody}</p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-pk-surface md:col-span-3">
          <Image
            src={IMAGES.backHome.src}
            alt={w.alt}
            width={IMAGES.backHome.width}
            height={IMAGES.backHome.height}
            sizes="(min-width: 768px) 45vw, 100vw"
            className="aspect-[16/9] w-full object-cover"
          />
          <div className="p-6 md:px-8 md:pb-8 md:pt-6">
            <h3 className="text-[22px] font-bold text-pk-ink">{w.anywhereTitle}</h3>
            <p className="mt-2 text-[18px] leading-relaxed text-pk-ink">{w.anywhereBody}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
