"use client";

import { useRef } from "react";

// Componentes shadcn/ui
import { GridPattern } from "@/app/components/ui/shadcn-io/grid-pattern";

// Password Protection
import PasswordProtection from "@/app/components/PasswordProtection";

// Componentes da landing page
import {
  HeroSection,
  CompaniesMarquee,
  BenefitsSection,
  SolutionsVisualSection,
  TestimonialsSection,
  CTASection,
  FAQSection,
  RegistrationSection,
  CreditCardsSection,
} from "@/app/components/landing-page";
import BentoGrid from "@/app/components/landing-page/BentoGrid";

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const landingPageContent = (
    <div
      ref={containerRef}
      className="min-h-screen bg-[var(--color-dark-green)] text-white overflow-hidden"
    >
      {/* Grid Pattern Background */}
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className="opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Companies Marquee */}
      <CompaniesMarquee />

      {/* Features Section 
      <FeaturesSection />
      */}
      
      {/* Benefits Section */}
      <BenefitsSection />

      {/* Bento Grid - Solutions Overview */}
      <BentoGrid />

      {/* Credit Cards Section */}
      <CreditCardsSection />

      {/* Solutions Visual Section */}
      <SolutionsVisualSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Registration Section */}
      <RegistrationSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );

  return (
    <PasswordProtection 
      requiredPassword="123@Senha"
      title="Landing Page - Tamborine"
      subtitle="Digite a senha para acessar a página de apresentação"
    >
      {landingPageContent}
    </PasswordProtection>
  );
}
