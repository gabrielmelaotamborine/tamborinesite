'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { LogIn, Sparkle } from 'lucide-react';
import { useRef } from 'react';
import { TextGenerateEffect } from '@/app/components/ui/shadcn-io/text-generate-effect';
import { CreditCard, CreditCardBack, CreditCardChip, CreditCardCvv, CreditCardExpiry, CreditCardFlipper, CreditCardFront, CreditCardLogo, CreditCardMagStripe, CreditCardName, CreditCardNumber } from '@/app/components/ui/shadcn-io/credit-card';
import Logo from '@/app/components/ui/Logo';

const TamborineDarkSymbol = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 84.3 84.3"
    className='absolute top-6 left-40 h-40 text-white/10'
  >
    <title>Tamborine Dark Symbol</title>
    <g>
      <polygon className="fill-current" points="0 0 0 84.3 23.53 84.3 33.84 42.15 23.53 0 0 0"/>
      <polygon className="fill-current" points="33.84 0 33.84 42.15 33.84 84.3 46.68 84.3 57 42.15 46.68 0 33.84 0"/>
      <polygon className="fill-current" points="57 0 57 42.15 57 84.3 63.5 84.3 73.82 42.15 63.5 0 57 0"/>
      <polygon className="fill-current" points="73.98 0 73.82 0 73.82 42.15 73.82 84.3 73.98 84.3 84.3 42.15 73.98 0"/>
    </g>
  </svg>
);

const stats = [
  { number: "50M+", label: "Transações processadas" },
  { number: "99.9%", label: "Uptime garantido" },
  { number: "500+", label: "Empresas confiam" },
  { number: "24/7", label: "Suporte técnico" }
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-4 md:px-8">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 via-transparent to-[var(--color-primary)]/5"
      />
      
      <div className="container mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10">
        {/* Conteúdo à esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.span 
            className="bg-white/20 px-3 text-white p-2 rounded-full w-fit text-sm border border-[var(--color-primary)] border-opacity-40 mb-6 flex flex-wrap items-center justify-center gap-2 sm:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Visível apenas no desktop */}
            <motion.span 
              className="hidden sm:inline bg-[var(--color-primary)] text-[var(--color-dark-green)] font-medium px-[9px] py-[1px] rounded-full text-sm whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Tamborine
            </motion.span>

            <motion.p 
              className="text-center sm:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Revolucionando o futuro dos pagamentos
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <LogIn className="pr-1" size={16} />
            </motion.div>
          </motion.span>

          <TextGenerateEffect
            words="Transforme sua empresa com soluções de pagamento inteligentes"
            className="text-4xl md:text-6xl lg:text-7xl leading-tight bg-gradient-to-b from-white via-green-100 to-green-400 bg-clip-text text-transparent"
            duration={0.8}
            staggerDelay={0.1}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            Da Tamborine, oferecemos gateway de pagamento, processamento de cartões, APIs robustas e emissão de cartões. 
            Tudo que você precisa para acelerar seu negócio em um só lugar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button 
              className="button gap-2 px-6 py-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -1,
                backgroundColor: 'var(--color-primary-faded)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.03 }}
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, delay: 1.2, repeat: 0 }}
              >
                <Sparkle size={20} />
              </motion.div>
              Começar agora
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl text-[var(--color-primary)]">
                  {stat.number}
                </div>
                <div className="text-sm text-[var(--color-neutral)]/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Cartão de crédito à direita */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <CreditCard>
            <CreditCardFlipper>
              <CreditCardFront className="bg-[var(--color-dark-green)] border-[1px] border-[var(--color-primary)]/20 drop-shadow-lg">
                <TamborineDarkSymbol />
                <Logo className="absolute top-0 left-[-40px] h-1/10" />
                <CreditCardLogo className="size-1/4">
                </CreditCardLogo>
                <CreditCardChip />
                <CreditCardName className="absolute bottom-0 left-0">
                  John R. Doe
                </CreditCardName>
              </CreditCardFront>
              <CreditCardBack className="bg-[var(--color-dark-green)] border-[1px] border-[var(--color-primary)]/20 drop-shadow-lg">
                <CreditCardMagStripe className="bg-white/10" />
                <CreditCardNumber className="absolute bottom-0 left-0">
                  0123 4567 8901 2345
                </CreditCardNumber>
                <div className="-translate-y-1/2 absolute top-1/2 flex gap-4">
                  <CreditCardExpiry>01/24</CreditCardExpiry>
                  <CreditCardCvv>123</CreditCardCvv>
                </div>
              </CreditCardBack>
            </CreditCardFlipper>
          </CreditCard>
        </motion.div>
      </div>
    </section>
  );
}
