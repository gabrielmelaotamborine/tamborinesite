'use client';

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Settings } from 'lucide-react';

interface CookieBannerProps {
  show: boolean;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onCustomize: () => void;
}

export default function CookieBanner({ 
  show, 
  onAcceptAll, 
  onRejectAll, 
  onCustomize 
}: CookieBannerProps) {
  const t = useTranslations('cookies.banner');

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ 
            type: "spring", 
            damping: 25, 
            stiffness: 500,
            duration: 0.3 
          }}
          className="fixed bottom-4 left-4 right-4 z-50 md:max-w-md md:left-4 md:right-auto"
        >
          <div className="bg-[var(--color-dark-green)]/65 backdrop-blur-md border border-gray-200 rounded-2xl shadow-2xl p-6 dark:bg-gray-900/95 dark:border-gray-700">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#a7e97f] to-[white] rounded-full flex items-center justify-center">
                <Cookie className="w-4 h-4 text-gray-900" />
              </div>
              <div>
                <h3 className="font-semibold title-gradient-hero dark:text-white text-sm mb-1">
                  {t('title')}
                </h3>
                <p className="text-xs text-gradient-hero dark:text-gray-300 leading-relaxed">
                  {t('description')}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
              <button
                onClick={onAcceptAll}
                className="flex-1 items-center justify-center button font-medium py-2 px-4 rounded-lg text-sm hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                {t('acceptAll')}
              </button>
              
              <div className="flex gap-2 sm:gap-3">
                <button
                  onClick={onCustomize}
                  className="flex-1 items-center gap-2 !bg-white/80 justify-center button font-medium py-2 px-4 rounded-lg text-sm hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  <Settings className="w-3 h-3" />
                  <span className="hidden sm:inline">{t('customize')}</span>
                </button>
                
                <button
                  onClick={onRejectAll}
                  className="flex-1 items-center justify-center button font-medium py-2 px-4 rounded-lg text-sm hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  <span className="hidden sm:inline">{t('rejectAll')}</span>
                  <span className="sm:hidden">✕</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
