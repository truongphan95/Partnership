import Image from "next/image";
import { IMAGES } from "./content";
import { rich } from "./rich";
import type { Dict } from "./i18n";

// Layout family: dual panel (two audiences side by side, unequal widths).
export function Grow({ t }: { t: Dict }) {
  const g = t.grow;
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-24">
      <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-pk-accent-ink">{g.eyebrow}</p>
      <h2 className="mt-3 max-w-[24ch] text-[32px] font-bold leading-[1.12] tracking-tight text-pk-ink md:text-[40px]">
        {g.title}
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="flex flex-col rounded-2xl bg-pk-sunken p-6 md:col-span-5 md:p-8">
          <h3 className="text-[24px] font-bold text-pk-ink">{g.leaderTitle}</h3>
          <p className="tabular mt-6 text-[64px] font-bold leading-none tracking-tight text-pk-accent">+5%</p>
          <p className="mt-2 text-[17px] font-medium text-pk-soft">{g.leaderSub}</p>
          <p className="mt-6 text-[18px] leading-relaxed text-pk-ink">{g.leaderBody}</p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-pk-surface md:col-span-7">
          <Image
            src={IMAGES.employer.src}
            alt={g.alt}
            width={IMAGES.employer.width}
            height={IMAGES.employer.height}
            sizes="(min-width: 768px) 55vw, 100vw"
            className="aspect-[2/1] w-full object-cover"
          />
          <div className="p-6 md:p-8">
            <h3 className="text-[24px] font-bold leading-snug text-pk-ink">{g.employersTitle}</h3>
            <ul className="mt-5 grid gap-3 text-[18px] leading-relaxed text-pk-ink">
              {g.offers.map((o) => (
                <li key={o}>{rich(o, "font-semibold")}</li>
              ))}
            </ul>
            <p className="mt-5 text-[17px] text-pk-soft">{g.details}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
