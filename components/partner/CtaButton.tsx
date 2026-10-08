import { MessengerLogo } from "@phosphor-icons/react/dist/ssr";
import { MESSENGER_LINK } from "./content";

// 19px bold keeps white-on-vermillion inside WCAG AA large-text contrast.
export function CtaButton({ label, size = "lg" }: { label: string; size?: "lg" | "sm" }) {
  const sizing =
    size === "lg"
      ? "min-h-[56px] px-7 text-[19px]"
      : "min-h-[44px] px-5 text-[19px]";
  return (
    <a
      href={MESSENGER_LINK}
      className={`inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-pk-btn font-bold text-pk-btn-ink transition-colors duration-200 hover:bg-pk-btn-hover active:translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pk-accent ${sizing}`}
    >
      <MessengerLogo size={size === "lg" ? 24 : 20} weight="regular" aria-hidden />
      {label}
    </a>
  );
}
