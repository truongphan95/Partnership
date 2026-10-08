import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { COMPANY } from "./content";

// Secondary button: outlined pill with ink text, so it never competes with the
// vermillion Messenger CTA. Opens the main site in a new tab.
export function SiteButton({ label }: { label: string }) {
  return (
    <a
      href={COMPANY.website}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-[56px] items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-pk-ink px-7 text-[19px] font-bold text-pk-ink transition-colors duration-200 hover:bg-pk-sunken active:translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pk-accent"
    >
      {label}
      <ArrowUpRight size={22} weight="regular" aria-hidden />
    </a>
  );
}
