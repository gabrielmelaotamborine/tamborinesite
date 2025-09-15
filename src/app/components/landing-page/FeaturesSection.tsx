'use client';

import { motion } from 'framer-motion';
import { CreditCard as CreditCardIcon, Shield, Globe, Zap, DollarSign, Users } from 'lucide-react';
import { BackgroundGradient } from '@/app/components/ui/shadcn-io/background-gradient';

const features = [
  {
    icon: <CreditCardIcon className="w-6 h-6" />,
    title: "Processamento de Cartões",
    description: "Processe pagamentos com cartão de crédito e débito com a máxima segurança e velocidade."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Segurança Avançada",
    description: "Proteção completa com criptografia de ponta e conformidade PCI DSS."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Gateway Global",
    description: "Aceite pagamentos internacionais com suporte a múltiplas moedas."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "APIs Rápidas",
    description: "Integração simples com documentação completa e SDKs para todas as linguagens."
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Emissão de Cartões",
    description: "Crie e gerencie cartões personalizados para sua empresa ou clientes."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Suporte 24/7",
    description: "Equipe especializada disponível para ajudar sempre que precisar."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-6 title-gradient-hero">
            Soluções completas para seu negócio
          </h2>
          <p className="text-lg text-[var(--color-neutral)]/80 max-w-3xl mx-auto">
            Descubra como nossas tecnologias podem transformar a experiência de pagamento 
            da sua empresa e acelerar seu crescimento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <BackgroundGradient containerClassName="h-full">
                <div className="bg-[var(--color-background)] p-8 rounded-3xl h-full border border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center mb-6 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[var(--color-foreground)]">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--color-neutral)]/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
