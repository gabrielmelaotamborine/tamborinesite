'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MagneticButton } from '@/app/components/ui/shadcn-io/magnetic-button';

export default function CTASection() {
  return (
    <section className="py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-[var(--color-background)] p-12 md:p-16 rounded-3xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl mb-6 title-gradient-hero">
                Pronto para revolucionar seus pagamentos?
              </h2>
              <p className="text-lg text-[var(--color-neutral)]/80 mb-8 max-w-2xl mx-auto">
                Junte-se a centenas de empresas que já escolheram a Tamborine. 
                Comece sua jornada hoje mesmo e veja a diferença.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton 
                  className="group"
                  aria-label="Começar gratuitamente com a Tamborine"
                >
                  Começar gratuitamente
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
              </div>
            </motion.div>
          </div>
      </div>
    </section>
  );
}
