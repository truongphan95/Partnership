import type { Metadata } from "next";
import { Geist, Noto_Sans_Myanmar } from "next/font/google";
import "./partner.css";

// Absolute base for the hreflang links. SITE_URL is set by the GitHub Pages build.
export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3123"),
};

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist",
  display: "swap",
});

// Myanmar fallback (Geist has no Myanmar glyphs). Not preloaded: the browser only
// downloads it (by unicode-range) when Myanmar text is on the page. Chinese uses
// the system CJK font instead (see tailwind.config.js); CJK webfonts are several MB.
const notoMyanmar = Noto_Sans_Myanmar({
  subsets: ["myanmar"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-my",
  display: "swap",
  preload: false,
});

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`partner ${geist.variable} ${notoMyanmar.variable} font-geist min-h-[100dvh] antialiased`}
    >
      {children}
    </div>
  );
}
