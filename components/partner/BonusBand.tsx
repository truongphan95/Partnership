import type { Dict } from "./i18n";

// Layout family: full-width announcement band. The deadline is real, so it is
// stated plainly with no timer.
export function BonusBand({ t }: { t: Dict }) {
  return (
    <section aria-labelledby="bonus-title" className="bg-pk-accent-tint">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-4 px-4 py-7 md:grid-cols-12 md:gap-8 md:px-8">
        <p
          id="bonus-title"
          className="tabular text-[40px] font-bold leading-none tracking-tight text-pk-accent-ink md:col-span-3 md:text-5xl"
        >
          +¥500
        </p>
        <p className="text-[18px] leading-relaxed text-pk-ink md:col-span-6">
          <strong className="font-semibold">{t.bonus.title}</strong> {t.bonus.body}
        </p>
        <p className="text-[18px] font-semibold text-pk-ink md:col-span-3 md:text-right">{t.bonus.ends}</p>
      </div>
    </section>
  );
}
