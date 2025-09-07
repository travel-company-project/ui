import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-4 mt-8 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-2 md:mb-0">
          <a href="#" className="font-bold text-blue-600 dark:text-blue-400">{t('appTitle')}</a>
        </div>
        <div className="flex gap-4 mb-2 md:mb-0">
          <a href="#how" className="hover:text-blue-600 dark:hover:text-blue-400">{t('nav.how')}</a>
          <a href="#pricing" className="hover:text-blue-600 dark:hover:text-blue-400">{t('nav.pricing')}</a>
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">{t('nav.about')}</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">{t('nav.contact')}</a>
        </div>
        <div className="text-sm">{t('footer.copyright')}</div>
      </div>
    </footer>
  );
};

export default Footer;

