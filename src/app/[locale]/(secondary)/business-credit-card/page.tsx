import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import BusinessCreditCardHero from "@/app/components/business-credit-card/BusinessCreditCardHero";
import BusinessCreditCardFeatures from "@/app/components/business-credit-card/BusinessCreditCardFeatures";
import BusinessCreditCardBenefits from "@/app/components/business-credit-card/BusinessCreditCardBenefits";
import BusinessCreditCardCTA from "@/app/components/business-credit-card/BusinessCreditCardCTA";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("businessCreditCard.metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function BusinessCreditCardPage() {
  return (
    <main>
      <BusinessCreditCardHero />
      <BusinessCreditCardFeatures />
      <BusinessCreditCardBenefits />
      <BusinessCreditCardCTA />
    </main>
  );
}
