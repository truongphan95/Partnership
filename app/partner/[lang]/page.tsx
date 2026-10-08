import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PartnerPage } from "@/components/partner/PartnerPage";
import { alternates, getDict, isLocale } from "@/components/partner/i18n";

// /partner/tl, /partner/my, /partner/zh. English stays at /partner.
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "tl" }, { lang: "my" }, { lang: "zh" }];
}

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDict(lang);
  return { title: t.meta.title, description: t.meta.description, alternates };
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang) || lang === "en") notFound();
  return <PartnerPage locale={lang} />;
}
