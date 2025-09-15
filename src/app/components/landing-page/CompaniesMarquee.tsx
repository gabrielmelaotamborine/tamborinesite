'use client';

import Image from 'next/image';
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from '@/app/components/ui/shadcn-io/marquee';

const companies = [
  { name: "Inovabra", logo: "/Inovabra.svg" },
  { name: "TechCorp", logo: "/logo.svg" },
  { name: "PaymentPro", logo: "/logo.svg" },
  { name: "FinanceNext", logo: "/logo.svg" },
  { name: "StartupHub", logo: "/logo.svg" }
];

export default function CompaniesMarquee() {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center mb-12">
        <h3 className="text-lg text-[var(--color-neutral)]/60 mb-8">
          Empresas que confiam na Tamborine
        </h3>
      </div>
      
      <Marquee className="py-4">
        <MarqueeFade side="left" />
        <MarqueeContent speed={50}>
          {companies.map((company, index) => (
            <MarqueeItem key={`${company.name}-${index}`} className="mx-8">
              <div className="relative w-[120px] h-[60px] flex items-center justify-center">
                <Image
                  src={company.logo}
                  alt={`Logo da ${company.name}`}
                  width={120}
                  height={60}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0 object-contain max-w-full max-h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </MarqueeItem>
          ))}
        </MarqueeContent>
        <MarqueeFade side="right" />
      </Marquee>
    </section>
  );
}
