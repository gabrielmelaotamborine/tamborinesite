"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, Receipt, TrendingUp, Gift } from "lucide-react";

const benefitsData = [
  {
    id: 1,
    icon: <Clock className="w-6 h-6" />,
    title: "Controle antes do gasto acontecer",
    description: "Define limites por categoria, equipe ou fornecedor e evite despesas fora da política automaticamente.",
    image: "https://placehold.co/849x645"
  },
  {
    id: 2,
    icon: <Receipt className="w-6 h-6" />,
    title: "Esqueça os relatórios de despesa",
    description: "Tire uma foto do recibo e pronto: a Clara preenche, valida e categoriza sua despesa automaticamente.",
    image: "https://placehold.co/849x645"
  },
  {
    id: 3,
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Economia em tempo real",
    description: "Acompanhe os gastos em tempo real e identifique oportunidades de economia imediatamente.",
    image: "https://placehold.co/849x645"
  }
];

const horizontalBenefit = {
  id: 4,
  icon: <Gift className="w-6 h-6" />,
  title: "Mastercard Surpreenda - Benefícios Exclusivos",
  description: "Acumule pontos a cada compra com seu cartão corporativo e troque por descontos exclusivos em mais de 100 parceiros. Economize em viagens, tecnologia, restaurantes, serviços corporativos e muito mais. Cada compra vale 1 ponto, independente do valor, e você pode usar esses pontos para conseguir descontos de até 50% em produtos e serviços essenciais para sua empresa.",
  image: "https://placehold.co/640x435"
};

export default function BenefitsSection() {
  return (
    <section className="py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-6 title-gradient-hero">
            Transforme a gestão financeira da sua empresa
          </h2>
          <p className="text-lg text-[var(--color-neutral)]/80 max-w-3xl mx-auto">
            Descubra como a Tamborine pode simplificar e otimizar todos os
            processos de pagamento da sua empresa com tecnologia de ponta.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-3xl overflow-hidden hover:bg-gradient-to-br hover:from-primary/25 hover:to-primary/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/logo.svg'; // Fallback
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/40 to-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-primary/30">
                      {benefit.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-white/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Horizontal Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 group"
        >
          <div className="bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-3xl overflow-hidden hover:bg-gradient-to-br hover:from-primary/25 hover:to-primary/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Content Section */}
              <div className="p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/40 to-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-primary/30">
                    {horizontalBenefit.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                  {horizontalBenefit.title}
                </h3>
                
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  {horizontalBenefit.description}
                </p>
              </div>

              {/* Image Section */}
              <div className="relative aspect-[3/2] lg:aspect-auto bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden order-1 lg:order-2">
                <Image
                  src={horizontalBenefit.image}
                  alt={horizontalBenefit.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/logo.svg'; // Fallback
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            className="button gap-2 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
            whileHover={{
              y: -2,
              backgroundColor: "var(--color-primary-faded)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Conhecer todas as funcionalidades
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
