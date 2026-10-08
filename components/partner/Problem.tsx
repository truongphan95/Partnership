import Image from "next/image";
import { IMAGES } from "./content";
import type { Dict } from "./i18n";

// Layout family: photo + checklist split (photo first). Stacks on < md.
export function Problem({ t }: { t: Dict }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-24">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <Image
            src={IMAGES.leaving.src}
            alt={t.problem.alt}
            width={IMAGES.leaving.width}
            height={IMAGES.leaving.height}
            sizes="(min-width: 768px) 40vw, 100vw"
            className="aspect-[4/3] w-full rounded-2xl object-cover md:aspect-[4/5]"
          />
        </div>
        <div className="md:col-span-7">
          <h2 className="text-[32px] font-bold leading-[1.12] tracking-tight text-pk-ink md:text-[40px]">
            {t.problem.title}
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {t.problem.signs.map((s) => (
              <li
                key={s}
                className="rounded-2xl bg-pk-surface px-5 py-4 text-[18px] font-medium leading-snug text-pk-ink"
              >
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-[60ch] text-[18px] leading-relaxed text-pk-soft">{t.problem.p1}</p>
          <p className="mt-4 max-w-[60ch] text-[19px] font-semibold leading-relaxed text-pk-ink">
            {t.problem.p2}
          </p>
        </div>
      </div>
    </section>
  );
}
