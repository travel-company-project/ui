import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const Pricing: React.FC = () => {
  const { t } = useTranslation();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const singleRidePrices = [
    {
      type: t('pricing.vehicles.economy'),
      basePrice: 5,
      perKm: 1.5,
      features: [t('pricing.features.standardVehicle'), t('pricing.features.sharedRides'), t('pricing.features.basicSupport')],
      popular: false
    },
    {
      type: t('pricing.vehicles.comfort'),
      basePrice: 8,
      perKm: 2.0,
      features: [t('pricing.features.premiumVehicle'), t('pricing.features.privateRides'), t('pricing.features.prioritySupport'), t('pricing.features.climateControl')],
      popular: true
    },
    {
      type: t('pricing.vehicles.luxury'),
      basePrice: 15,
      perKm: 3.5,
      features: [t('pricing.features.luxuryVehicle'), t('pricing.features.professionalDriver'), t('pricing.features.vipSupport'), t('pricing.features.refreshments'), t('pricing.features.wifi')],
      popular: false
    }
  ];

  const subscriptionPlans = [
    {
      name: t('pricing.subscriptionPlans.basic.name'),
      monthlyPrice: 29,
      yearlyPrice: 290,
      rides: t('pricing.subscriptionPlans.basic.rides'),
      features: t('pricing.subscriptionPlans.basic.features', { returnObjects: true }),
      popular: false
    },
    {
      name: t('pricing.subscriptionPlans.premium.name'),
      monthlyPrice: 59,
      yearlyPrice: 590,
      rides: t('pricing.subscriptionPlans.premium.rides'),
      features: t('pricing.subscriptionPlans.premium.features', { returnObjects: true }),
      popular: true
    },
    {
      name: t('pricing.subscriptionPlans.unlimited.name'),
      monthlyPrice: 99,
      yearlyPrice: 990,
      rides: t('pricing.subscriptionPlans.unlimited.rides'),
      features: t('pricing.subscriptionPlans.unlimited.features', { returnObjects: true }),
      popular: false
    }
  ];

  const getCurrentPrice = (plan: any) => {
    return billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan: any) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice;
    return Math.round(((monthlyCost - yearlyCost) / monthlyCost) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('pricing.title')}</h1>
          <p className="text-xl md:text-2xl opacity-90">
            {t('pricing.subtitle')}
          </p>
        </div>
      </section>

      {/* Single Ride Pricing */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
            {t('pricing.payPerRide')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
            {t('pricing.payPerRideDesc')}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {singleRidePrices.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${
                  plan.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {t('pricing.mostPopular')}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.type}
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    ${plan.basePrice}
                    <span className="text-lg font-normal text-gray-600 dark:text-gray-400">
                      + ${plan.perKm}/km
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">{t('pricing.baseFare')}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="text-green-600 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {t('buttons.bookNow')} {plan.type}
                </Button>
              </div>
            ))}
          </div>

          {/* Pricing Calculator */}
          <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-4">
              {t('pricing.estimateRideCost')}
            </h3>
            <div className="max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('forms.distance')}
                  </label>
                  <input
                    type="number"
                    placeholder="10"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('forms.vehicleType')}
                  </label>
                  <select className="w-full px-3 py-2 border rounded focus:outline-none focus:ring">
                    <option>{t('pricing.vehicles.economy')}</option>
                    <option>{t('pricing.vehicles.comfort')}</option>
                    <option>{t('pricing.vehicles.luxury')}</option>
                  </select>
                </div>
              </div>
              <Button variant="primary" className="w-full">
                {t('buttons.calculate')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
              {t('pricing.monthlySubscriptions')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8">
              {t('pricing.monthlySubscriptionsDesc')}
            </p>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-1 flex">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    billingPeriod === 'monthly'
                      ? 'bg-white dark:bg-gray-800 text-blue-600 shadow'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {t('pricing.monthly')}
                </button>
                <button
                  onClick={() => setBillingPeriod('yearly')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    billingPeriod === 'yearly'
                      ? 'bg-white dark:bg-gray-800 text-blue-600 shadow'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {t('pricing.yearly')}
                  <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {t('pricing.saveUpTo')}
                  </span>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {subscriptionPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg p-6 ${
                    plan.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {t('pricing.bestValue')}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                      ${getCurrentPrice(plan)}
                      <span className="text-lg font-normal text-gray-600 dark:text-gray-400">
                        /{billingPeriod === 'monthly' ? t('pricing.monthly').toLowerCase() : t('pricing.yearly').toLowerCase()}
                      </span>
                    </div>
                    {billingPeriod === 'yearly' && (
                      <p className="text-green-600 dark:text-green-400 text-sm mt-1">
                        Save {getSavings(plan)}% annually
                      </p>
                    )}
                    <p className="text-gray-600 dark:text-gray-400 mt-2 font-medium">
                      {plan.rides}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="text-green-600 mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    {t('buttons.subscribe')} {plan.name}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            {t('pricing.planComparison')}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left p-4 font-bold text-gray-900 dark:text-white">{t('pricing.comparison.features')}</th>
                  <th className="text-center p-4 font-bold text-gray-900 dark:text-white">{t('pricing.comparison.payPerRide')}</th>
                  <th className="text-center p-4 font-bold text-gray-900 dark:text-white">{t('pricing.subscriptionPlans.basic.name')}</th>
                  <th className="text-center p-4 font-bold text-gray-900 dark:text-white">{t('pricing.subscriptionPlans.premium.name')}</th>
                  <th className="text-center p-4 font-bold text-gray-900 dark:text-white">{t('pricing.subscriptionPlans.unlimited.name')}</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="p-4 font-medium">{t('pricing.comparison.monthlyRides')}</td>
                  <td className="text-center p-4">{t('pricing.comparison.payAsYouGo')}</td>
                  <td className="text-center p-4">20 rides</td>
                  <td className="text-center p-4">50 rides</td>
                  <td className="text-center p-4">{t('pricing.subscriptionPlans.unlimited.rides')}</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="p-4 font-medium">{t('pricing.comparison.vehicleTypes')}</td>
                  <td className="text-center p-4">{t('pricing.comparison.allTypes')}</td>
                  <td className="text-center p-4">{t('pricing.comparison.economyComfort')}</td>
                  <td className="text-center p-4">{t('pricing.comparison.allTypes')}</td>
                  <td className="text-center p-4">{t('pricing.comparison.allIncludingLuxury')}</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="p-4 font-medium">{t('pricing.comparison.advancedBooking')}</td>
                  <td className="text-center p-4">{t('pricing.comparison.sameDay')}</td>
                  <td className="text-center p-4">{t('pricing.comparison.sameDay')}</td>
                  <td className="text-center p-4">7 days</td>
                  <td className="text-center p-4">30 days</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="p-4 font-medium">{t('pricing.comparison.familySharing')}</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">3 members</td>
                  <td className="text-center p-4">5 members</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">{t('pricing.comparison.supportLevel')}</td>
                  <td className="text-center p-4">{t('pricing.comparison.standard')}</td>
                  <td className="text-center p-4">{t('pricing.comparison.standard')}</td>
                  <td className="text-center p-4">{t('pricing.comparison.priority')}</td>
                  <td className="text-center p-4">{t('pricing.comparison.vip24')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              {t('pricing.faq.title')}
            </h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {t('pricing.faq.q1.question')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('pricing.faq.q1.answer')}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {t('pricing.faq.q2.question')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('pricing.faq.q2.answer')}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {t('pricing.faq.q3.question')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('pricing.faq.q3.answer')}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {t('pricing.faq.q4.question')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('pricing.faq.q4.answer')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('pricing.cta.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {t('pricing.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="px-8 py-3">
              {t('buttons.startTrial')}
            </Button>
            <Button variant="outline" className="px-8 py-3">
              {t('pricing.cta.bookSingleRide')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
