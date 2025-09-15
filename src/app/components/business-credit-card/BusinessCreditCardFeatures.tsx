'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { 
  CreditCard, 
  Shield, 
  TrendingUp, 
  Globe, 
  Clock,
  Award
} from 'lucide-react';

const BusinessCreditCardFeatures = () => {
  const t = useTranslations('businessCreditCard.features');

  const features = [
    {
      icon: CreditCard,
      title: t('instantApproval.title'),
      description: t('instantApproval.description'),
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: t('security.title'),
      description: t('security.description'),
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      title: t('cashback.title'),
      description: t('cashback.description'),
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Globe,
      title: t('international.title'),
      description: t('international.description'),
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Clock,
      title: t('realTime.title'),
      description: t('realTime.description'),
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: Award,
      title: t('exclusive.title'),
      description: t('exclusive.description'),
      gradient: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-solutions relative overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[var(--color-primary)]/30 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[var(--color-primary)]/10 to-transparent rounded-2xl p-8 border border-[var(--color-primary)]/20">
            <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
              {t('additionalInfo.title')}
            </h3>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              {t('additionalInfo.description')}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--color-primary)]/5 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500/3 rounded-full blur-2xl" />
      </div>
    </section>
  );
};

export default BusinessCreditCardFeatures;
