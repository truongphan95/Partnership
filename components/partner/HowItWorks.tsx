import type { Dict } from "./i18n";

// Steps 1 and 4 are the partner's job.
const yours = [true, false, false, true];

// Layout family: horizontal timeline on lg, vertical rail on smaller screens.
// The steps that are the partner's job get the filled accent marker.
export function HowItWorks({ t }: { t: Dict }) {
  return (
    <section id="how-it-works" className="scroll-mt-20 mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-24">
      <h2 className="max-w-[24ch] text-[32px] font-bold leading-[1.12] tracking-tight text-pk-ink md:text-[40px]">
        {t.how.title}
      </h2>

      <ol className="relative mt-12 grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
        <span
          aria-hidden
          className="absolute bottom-6 left-[23px] top-6 w-px bg-pk-line lg:bottom-auto lg:left-6 lg:right-6 lg:top-[23px] lg:h-px lg:w-auto"
        />
        {t.how.steps.map((s, i) => (
          <li key={s.title} className="relative flex gap-5 lg:block">
            <span
              className={`tabular relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[20px] font-bold ${
                yours[i] ? "bg-pk-btn text-pk-btn-ink" : "border border-pk-line bg-pk-bg text-pk-ink"
              }`}
            >
              {i + 1}
            </span>
            <div className="lg:mt-6">
              <h3 className="text-[21px] font-bold leading-snug text-pk-ink">{s.title}</h3>
              <p className="mt-2 max-w-[34ch] text-[18px] leading-relaxed text-pk-soft">{s.body}</p>
              {yours[i] && <p className="mt-3 text-[16px] font-semibold text-pk-accent-ink">{t.how.yourPart}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
