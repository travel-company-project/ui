import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { t } = useTranslation();
  const [heroRef, heroVisible] = useScrollAnimation();
  const [storyRef, storyVisible] = useScrollAnimation();
  const [missionRef, missionVisible] = useScrollAnimation();
  const [valuesRef, valuesVisible] = useScrollAnimation();
  const [teamRef, teamVisible] = useScrollAnimation();
  const [impactRef, impactVisible] = useScrollAnimation();
  const [valuesStaggerRef, visibleValues] = useStaggeredAnimation(3, 200);
  const [teamStaggerRef, visibleTeam] = useStaggeredAnimation(3, 150);
  const [statsStaggerRef, visibleStats] = useStaggeredAnimation(4, 100);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 relative overflow-hidden transition-all duration-1000 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white opacity-5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 delay-300 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {t('about.title')}
          </h1>
          <p className={`text-xl md:text-2xl opacity-90 transition-all duration-1000 delay-500 ${
            heroVisible ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Our Story */}
          <div ref={storyRef} className="mb-20">
            <h2 className={`text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white transition-all duration-800 ${
              storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {t('about.ourStory')}
            </h2>
            <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${
              storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('about.story.paragraph1')}
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('about.story.paragraph2')}
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-400 to-purple-500 h-80 rounded-2xl flex items-center justify-center hover-lift animate-float shadow-2xl">
                  <span className="text-white text-8xl">📖</span>
                </div>
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div ref={missionRef} className="mb-20">
            <h2 className={`text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white transition-all duration-800 ${
              missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {t('about.ourMission')}
            </h2>
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10 hover-lift transition-all duration-1000 delay-300 ${
              missionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                  <span className="text-white text-3xl">🎯</span>
                </div>
              </div>
              <p className="text-xl text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                {t('about.mission')}
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div ref={valuesRef} className="mb-20">
            <h2 className={`text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white transition-all duration-800 ${
              valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {t('about.ourValues')}
            </h2>
            <div ref={valuesStaggerRef} className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🛡️",
                  title: t('about.values.safety.title'),
                  description: t('about.values.safety.description'),
                  color: "blue"
                },
                {
                  icon: "⚡",
                  title: t('about.values.reliability.title'),
                  description: t('about.values.reliability.description'),
                  color: "green"
                },
                {
                  icon: "💰",
                  title: t('about.values.affordability.title'),
                  description: t('about.values.affordability.description'),
                  color: "purple"
                }
              ].map((value, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center hover-lift transition-all duration-600 ${
                    visibleValues.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className={`w-20 h-20 bg-${value.color}-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce`} style={{ animationDelay: `${index * 200}ms` }}>
                    <span className="text-white text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{value.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div ref={teamRef} className="mb-20">
            <h2 className={`text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white transition-all duration-800 ${
              teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {t('about.ourTeam')}
            </h2>
            <div ref={teamStaggerRef} className="grid md:grid-cols-3 gap-10">
              {[
                {
                  name: t('about.team.sarah.name'),
                  role: t('about.team.sarah.role'),
                  description: t('about.team.sarah.description'),
                  color: "pink"
                },
                {
                  name: t('about.team.mike.name'),
                  role: t('about.team.mike.role'),
                  description: t('about.team.mike.description'),
                  color: "blue"
                },
                {
                  name: t('about.team.emma.name'),
                  role: t('about.team.emma.role'),
                  description: t('about.team.emma.description'),
                  color: "green"
                }
              ].map((member, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center hover-lift hover-scale transition-all duration-600 ${
                    visibleTeam.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className={`w-32 h-32 bg-gradient-to-br from-${member.color}-400 to-${member.color}-600 rounded-full mx-auto mb-6 flex items-center justify-center animate-float shadow-lg`} style={{ animationDelay: `${index * 300}ms` }}>
                    <span className="text-white text-4xl">👤</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-4 font-semibold">{member.role}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div ref={impactRef} className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-12 shadow-2xl transition-all duration-1000 ${
            impactVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <h2 className="text-4xl font-bold mb-12 text-center">{t('about.ourImpact')}</h2>
            <div ref={statsStaggerRef} className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "50K+", label: t('about.impact.customers') },
                { number: "1M+", label: t('about.impact.rides') },
                { number: "500+", label: t('about.impact.drivers') },
                { number: "25+", label: t('about.impact.cities') }
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`transition-all duration-600 hover-scale ${
                    visibleStats.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="text-5xl font-bold mb-3 animate-bounce" style={{ animationDelay: `${index * 100}ms` }}>
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
