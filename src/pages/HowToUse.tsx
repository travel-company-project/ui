import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const HowToUse: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('howToUse.title')}</h1>
          <p className="text-xl md:text-2xl opacity-90">
            {t('howToUse.subtitle')}
          </p>
        </div>
      </section>

      {/* Getting Started */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            {t('howToUse.gettingStarted')}
          </h2>

          {/* Step-by-Step Process */}
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {t('howToUse.steps.step1.title')}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  {t('howToUse.steps.step1.description')}
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  {t('howToUse.steps.step1.details', { returnObjects: true }).map((detail: string, index: number) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-64 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Account Creation UI</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {t('howToUse.steps.step2.title')}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  {t('howToUse.steps.step2.description')}
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  {t('howToUse.steps.step2.details', { returnObjects: true }).map((detail: string, index: number) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-64 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Profile Setup UI</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {t('howToUse.steps.step3.title')}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  {t('howToUse.steps.step3.description')}
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  {t('howToUse.steps.step3.details', { returnObjects: true }).map((detail: string, index: number) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-64 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Booking Map UI</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    4
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {t('howToUse.steps.step4.title')}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  {t('howToUse.steps.step4.description')}
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  {t('howToUse.steps.step4.details', { returnObjects: true }).map((detail: string, index: number) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-64 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Payment Confirmation UI</span>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    5
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {t('howToUse.steps.step5.title')}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  {t('howToUse.steps.step5.description')}
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  {t('howToUse.steps.step5.details', { returnObjects: true }).map((detail: string, index: number) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-64 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Live Tracking UI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Guide */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              {t('howToUse.subscriptionGuide')}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t('howToUse.whySubscribe.title')}
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {t('howToUse.whySubscribe.benefits', { returnObjects: true }).map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t('howToUse.howToSubscribe.title')}
                </h3>
                <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                  {t('howToUse.howToSubscribe.steps', { returnObjects: true }).map((step: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">{index + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips & Best Practices */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            {t('howToUse.tips.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📱</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {t('howToUse.tips.useApp.title')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {t('howToUse.tips.useApp.description')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">⏰</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {t('howToUse.tips.bookAdvance.title')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {t('howToUse.tips.bookAdvance.description')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">💳</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {t('howToUse.tips.savePayment.title')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {t('howToUse.tips.savePayment.description')}
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="primary" className="mr-4">
              {t('buttons.getStarted')}
            </Button>
            <Button variant="outline">
              {t('buttons.downloadApp')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToUse;
