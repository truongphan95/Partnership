import Image from "next/image";
import { CtaButton } from "./CtaButton";
import { COMPANY, IMAGES } from "./content";
import { rich } from "./rich";
import type { Dict } from "./i18n";

// Layout family: wide photo with an overlapping solid panel (no text on the photo).
export function FinalCta({ t }: { t: Dict }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-24">
      <div className="relative">
        <Image
          src={IMAGES.evening.src}
          alt={t.final.alt}
          width={IMAGES.evening.width}
          height={IMAGES.evening.height}
          sizes="(min-width: 1152px) 1088px, 100vw"
          className="aspect-[16/10] w-full rounded-2xl object-cover md:aspect-[16/7]"
        />
        <div className="relative -mt-12 mx-3 rounded-2xl bg-pk-surface p-6 md:absolute md:bottom-8 md:left-8 md:m-0 md:max-w-[520px] md:p-8">
          <h2 className="text-[32px] font-bold leading-[1.12] tracking-tight text-pk-ink md:text-[40px]">
            {t.final.title}
          </h2>
          <p className="mt-4 text-[18px] leading-relaxed text-pk-soft">{rich(t.final.body)}</p>
          <div className="mt-6">
            <CtaButton label={t.cta.join} />
          </div>
          <p className="mt-5 text-[17px] text-pk-soft">
            {t.final.call}{" "}
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="tabular font-semibold text-pk-ink underline decoration-pk-line underline-offset-4 hover:decoration-pk-accent"
            >
              {COMPANY.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
