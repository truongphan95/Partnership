import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { BonusBand } from "./BonusBand";
import { Problem } from "./Problem";
import { WhyEasy } from "./WhyEasy";
import { Commission } from "./Commission";
import { HowItWorks } from "./HowItWorks";
import { StraightTalk } from "./StraightTalk";
import { Grow } from "./Grow";
import { Faq } from "./Faq";
import { FinalCta } from "./FinalCta";
import { Footer } from "./Footer";
import { getDict, type Locale } from "./i18n";

export function PartnerPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  return (
    <div lang={t.htmlLang}>
      <Nav t={t} locale={locale} />
      <main>
        <Hero t={t} />
        <BonusBand t={t} />
        <Problem t={t} />
        <WhyEasy t={t} />
        <Commission t={t} />
        <HowItWorks t={t} />
        <StraightTalk t={t} />
        <Grow t={t} />
        <Faq t={t} />
        <FinalCta t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
