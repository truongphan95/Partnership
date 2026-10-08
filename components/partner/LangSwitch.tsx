import { CaretDown, Globe } from "@phosphor-icons/react/dist/ssr";
import { LOCALES, type Locale } from "./i18n";

// Native <details> dropdown: works without client JS. Each language is shown in
// its own script so a reader finds it without knowing English.
export function LangSwitch({ current, label }: { current: Locale; label: string }) {
  const active = LOCALES.find((l) => l.code === current)!;
  return (
    <details className="group relative">
      <summary
        aria-label={label}
        className="flex min-h-[44px] cursor-pointer list-none items-center gap-2 rounded-full border border-pk-line px-4 text-[16px] font-medium text-pk-ink transition-colors hover:bg-pk-sunken focus-visible:outline focus-visible:outline-2 focus-visible:outline-pk-accent [&::-webkit-details-marker]:hidden"
      >
        <Globe size={20} weight="regular" aria-hidden className="text-pk-soft" />
        <span className="whitespace-nowrap">{active.name}</span>
        <CaretDown
          size={16}
          weight="regular"
          aria-hidden
          className="text-pk-soft transition-transform duration-200 group-open:rotate-180"
        />
      </summary>
      <ul className="absolute right-0 top-full mt-2 grid min-w-[180px] gap-1 rounded-2xl border border-pk-line bg-pk-surface p-2">
        {LOCALES.map((l) => (
          <li key={l.code}>
            <a
              href={l.href}
              lang={l.hreflang}
              hrefLang={l.hreflang}
              aria-current={l.code === current ? "page" : undefined}
              className={`flex min-h-[44px] items-center rounded-full px-4 text-[17px] transition-colors hover:bg-pk-sunken ${
                l.code === current ? "font-bold text-pk-accent-ink" : "font-medium text-pk-ink"
              }`}
            >
              {l.name}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
