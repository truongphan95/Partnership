import type { Metadata } from "next";
import { PartnerPage } from "@/components/partner/PartnerPage";
import { alternates, getDict } from "@/components/partner/i18n";

const t = getDict("en");

export const metadata: Metadata = {
  title: t.meta.title,
  description: t.meta.description,
  alternates,
};

export default function Page() {
  return <PartnerPage locale="en" />;
}
