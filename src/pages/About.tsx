import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
          <p className="text-xl md:text-2xl opacity-90">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Our Story */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              {t('about.ourStory')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  {t('about.story.paragraph1')}
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {t('about.story.paragraph2')}
                </p>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Company Image</span>
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              {t('about.ourMission')}
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <p className="text-xl text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                {t('about.mission')}
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              {t('about.ourValues')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{t('about.values.safety.title')}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('about.values.safety.description')}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{t('about.values.reliability.title')}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('about.values.reliability.description')}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{t('about.values.affordability.title')}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('about.values.affordability.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              {t('about.ourTeam')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
                <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t('about.team.sarah.name')}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{t('about.team.sarah.role')}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {t('about.team.sarah.description')}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
                <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t('about.team.mike.name')}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{t('about.team.mike.role')}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {t('about.team.mike.description')}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
                <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t('about.team.emma.name')}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{t('about.team.emma.role')}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {t('about.team.emma.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('about.ourImpact')}</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-blue-100">{t('about.impact.customers')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1M+</div>
                <div className="text-blue-100">{t('about.impact.rides')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">{t('about.impact.drivers')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-blue-100">{t('about.impact.cities')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
