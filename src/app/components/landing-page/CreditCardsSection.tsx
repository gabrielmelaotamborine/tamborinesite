'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function CreditCardsSection({ className }: { className?: string }) {
  return (
    <section className={cn("py-20 px-4 relative bg-[var(--color-dark-green)]", className)}>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl title-gradient-hero mb-6">
            Um cartão para cada <span className="no-gradient">tipo de gasto</span>
          </h2>
          <p className="text-lg text-gradient-custom max-w-3xl mx-auto">
            Escolha o cartão Tamborine ideal para suas necessidades empresariais. Flexibilidade e controle total para sua empresa.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Tamborine Blue */}
          <div className="group">
            {/* Credit Card Visual */}
            <div className="relative mb-6">
              <div className="w-full aspect-[1.6/1] relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/blue-card.png"
                  alt="Cartão Tamborine Blue"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Card Info */}
            <div className="bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-3xl p-6 hover:bg-gradient-to-br hover:from-primary/25 hover:to-primary/10 hover:border-primary/50 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">Tamborine Blue</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70 text-sm">Cartão virtual para compras online e assinaturas de software.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70 text-sm">Criação instantânea via plataforma Tamborine.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70 text-sm">Limites configuráveis por transação.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70 text-sm">Ideal para marketing digital e ferramentas SaaS.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70 text-sm">Bloqueio e desbloqueio em tempo real.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tamborine White */}
          <div className="group">
            {/* Credit Card Visual */}
            <div className="relative mb-6">
              <div className="w-full aspect-[1.6/1] relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/white-card.png"
                  alt="Cartão Tamborine White"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Card Info */}
            <div className="bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-3xl p-6 hover:bg-gradient-to-br hover:from-primary/25 hover:to-primary/10 hover:border-primary/50 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">Tamborine White</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70 text-sm">Cartão ideal para compras do dia a dia e despesas operacionais.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70 text-sm">Zero anuidade para sempre.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70 text-sm">Controle de gastos em tempo real via app.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70 text-sm">Emissão instantânea de cartões para colaboradores.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70 text-sm">Categorização automática de despesas.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tamborine Black */}
          <div className="group">
            {/* Credit Card Visual */}
            <div className="relative mb-6">
              <div className="w-full aspect-[1.6/1] relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/black-card.png"
                  alt="Cartão Tamborine Black"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Card Info */}
            <div className="bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-3xl p-6 hover:bg-gradient-to-br hover:from-primary/25 hover:to-primary/10 hover:border-primary/50 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">Tamborine Black</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70 text-sm">Cartão premium para executivos com benefícios exclusivos e limites elevados.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70 text-sm">Cashback de até 2% em todas as compras corporativas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70 text-sm">Acesso exclusivo a salas VIP em aeroportos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70 text-sm">Seguro viagem internacional incluso.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70 text-sm">Concierge 24/7 para reservas e serviços.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 flex items-center flex-col">
          <p className="text-white/70 mb-6 text-lg">
            Solicite já os cartões Tamborine ideais para sua empresa
          </p>
          <button className="button px-8 py-4 text-lg font-medium">
            Solicitar Cartões Tamborine
          </button>
        </div>
      </div>
    </section>
  );
}