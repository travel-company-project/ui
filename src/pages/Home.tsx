import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import Button from '../components/Button';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [heroRef, heroVisible] = useScrollAnimation();
  const [howRef, howVisible] = useScrollAnimation();
  const [pricingRef, pricingVisible] = useScrollAnimation();
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();
  const [stepsRef, visibleSteps] = useStaggeredAnimation(3, 200);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`flex flex-col items-center justify-center py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 text-white relative overflow-hidden transition-all duration-1000 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        id="hero"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-white opacity-10 rounded-full animate-float"></div>
          <div className="absolute top-1/2 -right-10 w-96 h-96 bg-white opacity-5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-white opacity-10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-300 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {t('home.heroTitle')}
          </h1>
          <p className={`text-xl md:text-2xl mb-8 opacity-90 transition-all duration-1000 delay-500 ${
            heroVisible ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {t('home.heroSubtitle')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button variant="primary" className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 hover:bg-gray-100 hover:scale-110 shadow-2xl">
              {t('buttons.bookNow')}
            </Button>
            <Button variant="outline" className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-blue-600 hover:scale-110">
              {t('buttons.subscribe')}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section ref={howRef} className="container mx-auto py-16 px-4" id="how">
        <h2 className={`text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white transition-all duration-800 ${
          howVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {t('home.howTitle')}
        </h2>
        <div ref={stepsRef} className="grid md:grid-cols-3 gap-8">
          {[
            { step: "1", text: t('home.steps.step1'), icon: "👤" },
            { step: "2", text: t('home.steps.step2'), icon: "🚗" },
            { step: "3", text: t('home.steps.step3'), icon: "🎉" }
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center hover-lift transition-all duration-500 ${
                visibleSteps.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="text-6xl mb-4 animate-bounce" style={{ animationDelay: `${index * 200}ms` }}>
                {item.icon}
              </div>
              <span className="text-blue-600 dark:text-blue-400 text-4xl font-bold block mb-4">
                {item.step}
              </span>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="bg-gray-50 dark:bg-gray-800 py-16" id="pricing">
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white transition-all duration-800 ${
            pricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {t('home.pricingTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className={`bg-white dark:bg-gray-700 rounded-xl shadow-xl p-8 hover-lift transition-all duration-600 delay-200 ${
              pricingVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                  <span className="text-white text-2xl">🚗</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {t('home.pricing.singleRide')}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                {t('home.pricing.singleRideDesc')}
              </p>
              <Button variant="primary" className="w-full">
                {t('buttons.bookNow')}
              </Button>
            </div>

            <div className={`bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl shadow-xl p-8 hover-lift transition-all duration-600 delay-400 ${
              pricingVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
                Best Value!
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                  <span className="text-white text-2xl">💎</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {t('home.pricing.monthlySubscription')}
                </h3>
              </div>
              <p className="opacity-90 mb-6 text-center">
                {t('home.pricing.monthlySubscriptionDesc')}
              </p>
              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-blue-600">
                {t('buttons.subscribe')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section ref={aboutRef} className="container mx-auto py-16 px-4" id="about">
        <h2 className={`text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white transition-all duration-800 ${
          aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {t('home.aboutTitle')}
        </h2>
        <div className={`flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto transition-all duration-1000 delay-300 ${
          aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="md:w-1/2">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto animate-float shadow-2xl">
              <span className="text-white text-8xl">🚀</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {t('home.pricing.aboutDesc')}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover-scale">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50K+</div>
                <div className="text-gray-600 dark:text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover-scale">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">1M+</div>
                <div className="text-gray-600 dark:text-gray-400">Rides Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section ref={contactRef} className="bg-gray-50 dark:bg-gray-800 py-16" id="contact">
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white transition-all duration-800 ${
            contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {t('home.contactTitle')}
          </h2>
          <form className={`max-w-2xl mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-xl p-8 transition-all duration-1000 delay-300 ${
            contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input 
                type="text" 
                placeholder={t('forms.name')} 
                className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
              />
              <input 
                type="email" 
                placeholder={t('forms.email')} 
                className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
              />
            </div>
            <textarea 
              placeholder={t('forms.message')} 
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md mb-6" 
              rows={5}
            />
            <Button variant="primary" type="submit" className="w-full text-lg py-3">
              {t('forms.submit')}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
