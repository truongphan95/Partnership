import { Clock, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { SiteButton } from "./SiteButton";
import { COMPANY } from "./content";
import type { Dict } from "./i18n";

export function Footer({ t }: { t: Dict }) {
  return (
    <footer className="border-t border-pk-line">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-12 md:px-8">
        <div className="md:col-span-6">
          <p className="text-[19px] font-bold text-pk-ink">
            {COMPANY.name} <span className="font-medium text-pk-soft">({COMPANY.nameJa})</span>
          </p>
          <p className="mt-2 max-w-[44ch] text-[16px] leading-relaxed text-pk-soft">{t.footer.about}</p>
          <div className="mt-6">
            <SiteButton label={t.cta.site} />
          </div>
        </div>
        {/* Address stays in English: it is how the post office and maps read it. */}
        <address className="grid content-start gap-3 not-italic md:col-span-6">
          <p className="flex items-start gap-3 text-[17px] text-pk-ink" lang="en">
            <MapPin size={22} weight="regular" className="mt-0.5 shrink-0 text-pk-soft" aria-hidden />
            {COMPANY.address}
          </p>
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className="tabular flex items-center gap-3 text-[17px] font-semibold text-pk-ink hover:text-pk-accent-ink"
          >
            <Phone size={22} weight="regular" className="shrink-0 text-pk-soft" aria-hidden />
            {COMPANY.phoneDisplay}
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="flex items-center gap-3 text-[17px] text-pk-ink hover:text-pk-accent-ink"
          >
            <EnvelopeSimple size={22} weight="regular" className="shrink-0 text-pk-soft" aria-hidden />
            {COMPANY.email}
          </a>
          <p className="flex items-start gap-3 text-[17px] text-pk-ink">
            <Clock size={22} weight="regular" className="mt-0.5 shrink-0 text-pk-soft" aria-hidden />
            {t.footer.hours}
          </p>
        </address>
      </div>
      <div className="mx-auto w-full max-w-6xl px-4 pb-10 text-[15px] text-pk-soft md:px-8">© 2026 {COMPANY.name}</div>
    </footer>
  );
}
