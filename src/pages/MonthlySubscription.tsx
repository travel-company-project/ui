import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const MonthlySubscription: React.FC = () => {
  const { t } = useTranslation();
  // TODO: Plan selection, payment method, billing details, benefits, pricing
  return (
    <div className="max-w-2xl mx-auto mt-16 bg-white dark:bg-gray-800 rounded shadow p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">{t('nav.subscribe')}</h2>
      <form>
        {/* TODO: Plan selection, payment method, billing details */}
        <Button variant="primary" type="submit" className="w-full">{t('buttons.subscribe')}</Button>
      </form>
    </div>
  );
};

export default MonthlySubscription;

