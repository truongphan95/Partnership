// Every visible string on the partner page, per language.
// Numbers, yen amounts and company details live in the components / content.ts.
// In strings, **text** renders bold and "+¥500" never breaks across lines (see rich.tsx).
export type Dict = {
  htmlLang: string;
  meta: { title: string; description: string };
  nav: { partners: string; commission: string; how: string; faq: string; language: string };
  cta: { join: string; site: string };
  hero: { title: string; sub: string; alt: string };
  bonus: { title: string; body: string; ends: string };
  problem: { title: string; signs: string[]; p1: string; p2: string; alt: string };
  why: {
    title: string;
    moneyTitle: string;
    amounts: { label: string; value: string }[];
    disclaimer: string;
    feesTitle: string;
    feesBody: string;
    depositTitle: string;
    depositBody: string;
    anywhereTitle: string;
    anywhereBody: string;
    alt: string;
  };
  commission: {
    eyebrow: string;
    title: string;
    groups: { name: string; rows: string[] }[];
    // "{rate}" is replaced with the percentage, e.g. "30%".
    rate: string;
    note: string;
    payTiming: string;
    bonusTitle: string;
    bonusList: string[];
    examplesTitle: string;
    examplesNote: string;
    examplesWho: string[];
  };
  how: { title: string; steps: { title: string; body: string }[]; yourPart: string };
  straight: { title: string; terms: { title: string; body: string }[]; closing: string };
  grow: {
    eyebrow: string;
    title: string;
    leaderTitle: string;
    leaderSub: string;
    leaderBody: string;
    employersTitle: string;
    offers: string[];
    details: string;
    alt: string;
  };
  faq: { title: string; items: { q: string; a: string }[] };
  final: { title: string; body: string; call: string; alt: string };
  footer: { about: string; hours: string };
};
