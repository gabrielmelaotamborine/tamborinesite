'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Star, Users, Shield } from 'lucide-react';
import Link from 'next/link';

const BusinessCreditCardCTA = () => {
  const t = useTranslations('businessCreditCard.cta');

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-dark-green)] via-gray-900 to-[var(--color-dark-green)] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 title-gradient-hero">
                {t('title')}
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {t('description')}
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div className="text-sm text-gray-400">{t('trustIndicators.customers')}</div>
                  <div className="text-lg font-bold text-white">10k+</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Star className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div className="text-sm text-gray-400">{t('trustIndicators.rating')}</div>
                  <div className="text-lg font-bold text-white">4.9/5</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div className="text-sm text-gray-400">{t('trustIndicators.security')}</div>
                  <div className="text-lg font-bold text-white">100%</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contato"
                    className="bg-[var(--color-primary)] text-[var(--color-dark-green)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-primary-faded)] transition-colors inline-flex items-center gap-2 justify-center"
                  >
                    {t('buttons.primary')}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/help"
                    className="border border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-primary)]/10 transition-colors inline-flex items-center gap-2 justify-center"
                  >
                    {t('buttons.secondary')}
                  </Link>
                </motion.div>
              </div>

              {/* Additional Info */}
              <p className="text-sm text-gray-400 mt-6">
                {t('additionalInfo')}
              </p>
            </motion.div>

            {/* Right Content - Card Showcase */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Main Card */}
                <motion.div 
                  className="relative w-80 h-48 mx-auto rounded-2xl shadow-2xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-primary) 0%, #2E7D32 100%)',
                  }}
                  animate={{
                    rotateY: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  
                  {/* Card Content */}
                  <div className="relative h-full p-6 flex flex-col justify-between text-[var(--color-dark-green)]">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-sm font-medium opacity-80">TAMBORINE</div>
                        <div className="text-lg font-bold">BUSINESS</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs opacity-70">PREMIUM</div>
                        <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-lg font-mono tracking-wider mb-2">
                        •••• •••• •••• 1234
                      </div>
                      <div className="flex justify-between text-sm">
                        <div>
                          <div className="text-xs opacity-70">VALID THRU</div>
                          <div className="font-medium">12/28</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs opacity-70">CVV</div>
                          <div className="font-medium">•••</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Background Cards */}
                <div className="absolute top-4 left-4 w-80 h-48 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 opacity-30 -z-10 transform rotate-3"></div>
                <div className="absolute top-8 left-8 w-80 h-48 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-700 opacity-20 -z-20 transform rotate-6"></div>

                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Star className="w-8 h-8 text-yellow-900" />
                </motion.div>

                <motion.div 
                  className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  <Shield className="w-7 h-7 text-green-900" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-6 h-6 bg-[var(--color-primary)] rounded-full"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </div>
    </section>
  );
};

export default BusinessCreditCardCTA;
