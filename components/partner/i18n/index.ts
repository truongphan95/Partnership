import type { Dict } from "./types";
import { BASE } from "../content";
import { en } from "./en";
import { tl } from "./tl";
import { my } from "./my";
import { zh } from "./zh";

export type Locale = "en" | "tl" | "my" | "zh";

// English lives at /partner/, the others at /partner/<code>/. Trailing slashes
// match the static export, where each page is a folder with index.html.
export const LOCALES: { code: Locale; name: string; href: string; hreflang: string }[] = [
  { code: "en", name: "English", href: BASE + "/partner/", hreflang: "en" },
  { code: "tl", name: "Tagalog", href: BASE + "/partner/tl/", hreflang: "tl" },
  { code: "my", name: "မြန်မာ", href: BASE + "/partner/my/", hreflang: "my" },
  { code: "zh", name: "中文", href: BASE + "/partner/zh/", hreflang: "zh-Hans" },
];

const DICTS: Record<Locale, Dict> = { en, tl, my, zh };

export function getDict(locale: Locale): Dict {
  return DICTS[locale];
}

export function isLocale(value: string): value is Locale {
  return value in DICTS;
}

export const alternates = {
  languages: Object.fromEntries(LOCALES.map((l) => [l.hreflang, l.href])),
};

export type { Dict };
