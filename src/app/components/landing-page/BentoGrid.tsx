'use client';

import { cn } from "@/lib/utils";

export default function BentoGrid({ className }: { className?: string }) {
  return (
    <section className={cn("py-20 px-4 max-w-7xl mx-auto", className)}>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl title-gradient-hero mb-6">
          Soluções <span className="no-gradient">Completas</span> para Seu Negócio
        </h2>
        <p className="text-lg text-gradient-custom max-w-3xl mx-auto">
          Explore nosso ecossistema integrado de soluções financeiras projetadas para acelerar o crescimento do seu negócio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[200px]">
        {/* Card Principal - Gateway de Pagamento */}
        <div className="md:col-span-2 lg:col-span-3 row-span-2 bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-3xl p-6 relative overflow-hidden group hover:bg-gradient-to-br hover:from-primary/25 hover:to-primary/10 hover:border-primary/50 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary/40 to-primary/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm border border-primary/30">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Gateway de Pagamento</h3>
              <p className="text-white/70 text-sm leading-relaxed">Processe pagamentos com segurança e eficiência máxima. Aceite todas as formas de pagamento.</p>
            </div>
            <div className="mt-4">
              <div className="w-full h-24 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg flex items-center justify-center backdrop-blur-sm border border-primary/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Processadora */}
        <div className="md:col-span-2 lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-3 backdrop-blur-sm">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Processadora</h3>
              <p className="text-white/70 text-xs leading-relaxed">Processamento avançado de transações com alta performance.</p>
            </div>
            <div className="mt-3">
              <div className="w-full h-16 bg-gradient-to-r from-primary/20 to-primary/5 rounded-md flex items-center justify-center backdrop-blur-sm border border-primary/10">
                <span className="text-xs text-white/60 font-medium">Alta Performance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card APIs */}
        <div className="md:col-span-1 lg:col-span-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 relative overflow-hidden group hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mb-2 backdrop-blur-sm">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">APIs</h3>
              <p className="text-white/70 text-xs">Integração simples</p>
            </div>
            <div className="mt-2">
              <div className="w-full h-12 bg-gradient-to-r from-primary/20 to-primary/5 rounded flex items-center justify-center backdrop-blur-sm border border-primary/10">
                <span className="text-xs text-white/60">REST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card BIN Sponsor */}
        <div className="md:col-span-2 lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-3 backdrop-blur-sm">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">BIN Sponsor</h3>
              <p className="text-white/70 text-xs leading-relaxed">Emissão de cartões corporativos com controle total.</p>
            </div>
            <div className="mt-3">
              <div className="w-full h-16 bg-gradient-to-r from-primary/20 to-primary/5 rounded-md flex items-center justify-center backdrop-blur-sm border border-primary/10">
                <span className="text-xs text-white/60 font-medium">Cartões Corporativos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card Cartão Corporativo */}
        <div className="md:col-span-2 lg:col-span-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-3 backdrop-blur-sm">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cartão Corporativo</h3>
              <p className="text-white/70 text-xs leading-relaxed">Controle total dos gastos empresariais com praticidade e segurança.</p>
            </div>
            <div className="mt-3 flex gap-2">
              <div className="flex-1 h-16 bg-gradient-to-r from-primary/20 to-primary/5 rounded-md flex items-center justify-center backdrop-blur-sm border border-primary/10">
                <span className="text-xs text-white/60 font-medium">Virtual</span>
              </div>
              <div className="flex-1 h-16 bg-gradient-to-r from-primary/15 to-primary/3 rounded-md flex items-center justify-center backdrop-blur-sm border border-primary/10">
                <span className="text-xs text-white/60 font-medium">Físico</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card Analytics */}
        <div className="md:col-span-1 lg:col-span-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 relative overflow-hidden group hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mb-2 backdrop-blur-sm">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Analytics</h3>
              <p className="text-white/70 text-xs">Insights em tempo real</p>
            </div>
            <div className="mt-2">
              <div className="w-full h-12 bg-gradient-to-r from-primary/20 to-primary/5 rounded flex items-center justify-center backdrop-blur-sm border border-primary/10">
                <div className="flex gap-1">
                  <div className="w-1 h-6 bg-primary/60 rounded-full"></div>
                  <div className="w-1 h-4 bg-primary/40 rounded-full"></div>
                  <div className="w-1 h-8 bg-primary/80 rounded-full"></div>
                  <div className="w-1 h-3 bg-primary/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <button className="button px-8 py-4 text-lg font-medium">
          Explore Todas as Soluções
        </button>
      </div>
    </section>
  );
}
