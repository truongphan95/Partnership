// Language-independent data. All visible copy lives in ./i18n.

// Set only for the GitHub Pages build, where the site lives under /<repo-name>.
// next/image and plain <a> links do not add basePath on their own.
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Messenger link for the Nenkin Kantan Facebook page.
export const MESSENGER_LINK = "https://m.me/1332663286596338";

// Source: https://nenkinkantan.com/about/
export const COMPANY = {
  name: "KICHI LLC",
  nameJa: "KICHI合同会社",
  address: "2 Chome-20-30 Matoba, Kawagoe, Saitama 350-1101, Japan",
  phoneDisplay: "080 9435 2242",
  phoneTel: "+818094352242",
  email: "contact@nenkinkantan.com",
  website: "https://nenkinkantan.com/",
};

// Brand logo, cropped from the master file (tagline dropped: unreadable at nav size).
// logo-dark.png turns the black ink off-white for dark mode. Rendered 3x for 44px height.
export const LOGO = {
  light: BASE + "/partner/logo.png",
  dark: BASE + "/partner/logo-dark.png",
  width: 303,
  height: 120,
};

// Photos generated in Canva, served from public/partner. Alt text is per language.
export const IMAGES = {
  hero: { src: BASE + "/partner/hero.jpg", width: 1136, height: 1408 },
  leaving: { src: BASE + "/partner/leaving.jpg", width: 799, height: 597 },
  backHome: { src: BASE + "/partner/back-home-japan.jpg", width: 1600, height: 893 },
  employer: { src: BASE + "/partner/employer.jpg", width: 800, height: 533 },
  evening: { src: BASE + "/partner/evening-train.jpg", width: 1600, height: 893 },
};
