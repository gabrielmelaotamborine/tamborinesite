'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { 
  CheckCircle, 
  ArrowRight,
  Building,
  Calculator,
  Smartphone,
  HeadphonesIcon
} from 'lucide-react';

const BusinessCreditCardBenefits = () => {
  const t = useTranslations('businessCreditCard.benefits');

  const benefits = [
    {
      icon: Building,
      title: t('expense.title'),
      description: t('expense.description'),
      features: [
        t('expense.features.0'),
        t('expense.features.1'),
        t('expense.features.2'),
        t('expense.features.3')
      ]
    },
    {
      icon: Calculator,
      title: t('finance.title'),
      description: t('finance.description'),
      features: [
        t('finance.features.0'),
        t('finance.features.1'),
        t('finance.features.2'),
        t('finance.features.3')
      ]
    },
    {
      icon: Smartphone,
      title: t('digital.title'),
      description: t('digital.description'),
      features: [
        t('digital.features.0'),
        t('digital.features.1'),
        t('digital.features.2'),
        t('digital.features.3')
      ]
    }
  ];

  return (
    <section className="py-20 bg-horizontal relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 title-gradient-hero">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[var(--color-primary)]/30 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-green-600 flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-[var(--color-dark-green)]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-[var(--color-primary)]/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12 text-center border border-[var(--color-primary)]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-white">
              {t('cta.title')}
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t('cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/contato"
                className="bg-[var(--color-primary)] text-[var(--color-dark-green)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-primary-faded)] transition-colors inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('cta.button')}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <div className="flex items-center gap-2 text-gray-400">
                <HeadphonesIcon className="w-5 h-5" />
                <span className="text-sm">{t('cta.support')}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-3xl transform -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl transform translate-x-1/2" />
      </div>
    </section>
  );
};

export default BusinessCreditCardBenefits;
