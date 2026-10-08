import { CtaButton } from "./CtaButton";
import { LangSwitch } from "./LangSwitch";
import { COMPANY } from "./content";
import type { Dict, Locale } from "./i18n";

export function Nav({ t, locale }: { t: Dict; locale: Locale }) {
  const links = [
    { href: "#commission", label: t.nav.commission },
    { href: "#how-it-works", label: t.nav.how },
    { href: "#faq", label: t.nav.faq },
  ];
  return (
    <header className="sticky top-0 z-30 border-b border-pk-line bg-pk-bg">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 md:px-8">
        <a href="#top" className="whitespace-nowrap text-[19px] font-bold tracking-tight text-pk-ink">
          Nenkin Kantan
          <span className="ml-2 hidden font-medium text-pk-soft min-[400px]:inline">{t.nav.partners}</span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-6 xl:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap text-[16px] font-medium text-pk-soft transition-colors hover:text-pk-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className="tabular whitespace-nowrap text-[16px] font-medium text-pk-soft transition-colors hover:text-pk-ink"
          >
            {COMPANY.phoneDisplay}
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitch current={locale} label={t.nav.language} />
          <div className="hidden md:block">
            <CtaButton label={t.cta.join} size="sm" />
          </div>
        </div>
      </div>
    </header>
  );
}
