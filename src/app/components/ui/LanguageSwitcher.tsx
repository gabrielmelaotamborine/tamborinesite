'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Globe } from 'lucide-react';
import BrazilFlag from './BrazilFlag';
import UnitedStatedFlag from './UnitedStatedFlag';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('languageSwitcher');

  // Remove leading locale from a pathname (e.g., /en/abc -> /abc, /pt -> /)
  const stripLocalePrefix = (path: string) => {
    const cleaned = path.replace(/^\/(en|pt)(?=\/|$)/, '');
    return cleaned === '' ? '/' : cleaned;
  };

  const switchToLocale = (newLocale: string) => {
    // Use current URL parts from the browser when available to preserve query/hash
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : pathname;
    const localeAgnosticPath = stripLocalePrefix(currentPath);
    const search = typeof window !== 'undefined' ? window.location.search : '';
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    const target = `${localeAgnosticPath}${search}${hash}`;

    router.replace(target, { locale: newLocale });
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-1 font-medium text-neutral hover:text-[var(--color-primary)] transition-colors">
        <Globe size={18} />
        <span className='text-sm'>{locale.toUpperCase()}</span>
      </button>

      <div className="absolute right-0 top-full mt-2 min-w-max bg-dropdown border border-[var(--color-neutral)]/20 z-50 overflow-hidden rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="py-1">
          <button
            onClick={() => switchToLocale('pt')}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-[var(--color-neutral)]/10 text-neutral flex items-center gap-2 whitespace-nowrap ${
              locale === 'pt' ? '' : ''
            }`}
          >
            <BrazilFlag width={20} height={20} className="flex-shrink-0" />
            {t('portuguese')}
          </button>
          <button
            onClick={() => switchToLocale('en')}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-[var(--color-neutral)]/10 text-neutral flex items-center gap-2 whitespace-nowrap ${
              locale === 'en' ? '' : ''
            }`}
          >
            <UnitedStatedFlag width={20} height={20} className="flex-shrink-0" />
            {t('english')}
          </button>
        </div>
      </div>
    </div>
  );
}