'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import BackgroundSquares from '../ui/BackgroundSquares';
import Link from 'next/link';
import { ArrowRight, Shield, TrendingUp } from 'lucide-react';

const BusinessCreditCardHero = () => {
  const t = useTranslations('businessCreditCard');
  
  return (
    <section className="relative flex items-center justify-center w-full overflow-hidden" style={{ height: 'calc(100vh - 88px)', maxHeight: '900px' }}>
      <BackgroundSquares className='absolute inset-0 opacity-80' />
      <motion.div 
        className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center relative z-10 gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.span 
            className="bg-white/20 px-3 text-white p-2 rounded-full text-sm border border-[var(--color-primary)] border-opacity-40 mb-6 inline-flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-[var(--color-primary)] text-[var(--color-dark-green)] font-medium px-[9px] py-[1px] rounded-full text-sm">
              {t('hero.newFeature')}
            </span>
            <span>{t('hero.announcement')}</span>
          </motion.span>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 title-gradient-hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('hero.title.part1')}<br />
            <span className="no-gradient">{t('hero.title.part2')}</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href="/contato"
              className="bg-[var(--color-primary)] text-[var(--color-dark-green)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-primary-faded)] transition-colors inline-flex items-center gap-2 justify-center"
            >
              {t('hero.cta.primary')}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#features"
              className="border border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-primary)]/10 transition-colors inline-flex items-center gap-2 justify-center"
            >
              {t('hero.cta.secondary')}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-[var(--color-primary)]">{t('hero.stats.limit')}</div>
              <div className="text-sm text-gray-400">{t('hero.stats.limitLabel')}</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-[var(--color-primary)]">{t('hero.stats.cashback')}</div>
              <div className="text-sm text-gray-400">{t('hero.stats.cashbackLabel')}</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-[var(--color-primary)]">{t('hero.stats.approval')}</div>
              <div className="text-sm text-gray-400">{t('hero.stats.approvalLabel')}</div>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Credit Card Visual */}
        <motion.div 
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative">
            {/* Main Credit Card */}
            <motion.div 
              className="relative w-80 h-48 rounded-2xl shadow-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary) 0%, #4CAF50 100%)',
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
              
              {/* Card Content */}
              <div className="relative h-full p-6 flex flex-col justify-between text-[var(--color-dark-green)]">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm font-medium opacity-80">BUSINESS</div>
                    <div className="text-lg font-bold">TAMBORINE</div>
                  </div>
                  <div className="w-12 h-8 bg-yellow-400 rounded-md flex items-center justify-center">
                    <div className="w-6 h-4 bg-yellow-600 rounded-sm"></div>
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
                      <div className="text-xs opacity-70">BUSINESS OWNER</div>
                      <div className="font-medium">YOUR COMPANY</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Icons */}
            <motion.div 
              className="absolute -top-4 -left-4 w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Shield className="w-6 h-6 text-[var(--color-dark-green)]" />
            </motion.div>

            <motion.div 
              className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <TrendingUp className="w-6 h-6 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BusinessCreditCardHero;
