import Image from "next/image";
import { CtaButton } from "./CtaButton";
import { SiteButton } from "./SiteButton";
import { IMAGES } from "./content";
import { rich } from "./rich";
import type { Dict } from "./i18n";

// Layout family: asymmetric split (copy 8 cols, photo 4 cols). Stacks below lg.
export function Hero({ t }: { t: Dict }) {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-4 pb-12 pt-8 md:px-8 md:pb-16 md:pt-14 lg:pt-16">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <h1 className="text-[40px] font-bold leading-[1.08] tracking-tight text-pk-ink md:text-[52px] lg:text-[56px]">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-[40ch] text-[19px] leading-relaxed text-pk-soft md:text-xl">
            {rich(t.hero.sub, "tabular font-semibold text-pk-ink")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton label={t.cta.join} />
            <SiteButton label={t.cta.site} />
          </div>
        </div>
        <div className="lg:col-span-4">
          <Image
            src={IMAGES.hero.src}
            alt={t.hero.alt}
            width={IMAGES.hero.width}
            height={IMAGES.hero.height}
            priority
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="aspect-[4/3] w-full rounded-2xl object-cover lg:aspect-[4/5] lg:max-h-[560px]"
          />
        </div>
      </div>
    </section>
  );
}
