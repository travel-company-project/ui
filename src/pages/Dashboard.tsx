import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-4xl mx-auto mt-16 bg-white dark:bg-gray-800 rounded shadow p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">{t('nav.dashboard')}</h2>
      {/* TODO: Recent bookings, subscription status, quick links */}
      <div className="flex gap-4 justify-center">
        <Button variant="primary" as="a" href="/book">{t('nav.book')}</Button>
        <Button variant="outline" as="a" href="/subscribe">{t('nav.subscribe')}</Button>
      </div>
    </div>
  );
};

export default Dashboard;

