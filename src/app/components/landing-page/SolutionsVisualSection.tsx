'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function SolutionsVisualSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-[var(--color-primary)]/5 via-transparent to-[var(--color-primary)]/10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl mb-6 title-gradient-hero">
              Tecnologia que se adapta ao seu negócio
            </h2>
            <p className="text-lg text-[var(--color-neutral)]/80 mb-8 leading-relaxed">
              Nossas soluções são projetadas para crescer com sua empresa. 
              Desde startups até grandes corporações, oferecemos a infraestrutura 
              de pagamento que você precisa.
            </p>
            
            <div className="space-y-4">
              {[
                "Integração em minutos, não em meses",
                "Suporte para mais de 50 moedas",
                "99.9% de uptime garantido",
                "Compliance total com regulamentações"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[var(--color-primary)]" />
                  <span className="text-[var(--color-neutral)]/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/payment-illustration.svg"
                alt="Ilustração das soluções de pagamento da Tamborine"
                fill
                className="object-contain w-full h-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/logo.svg'; // Fallback para o logo
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/50 to-transparent rounded-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
