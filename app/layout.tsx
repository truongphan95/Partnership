import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nenkin Kantan - Claim your Japan pension refund",
  description:
    "Nenkin Kantan files your Japan pension lump-sum refund, the tax withheld on it, and your resident tax refund, wherever you are now.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
