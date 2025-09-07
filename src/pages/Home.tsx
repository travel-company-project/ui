import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const Home: React.FC = () => {
  const { t } = useTranslation();
    return (
        <div>
            {/* Hero Section */}
            <section
                className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-blue-500 to-blue-300 text-white"
                id="hero">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('home.heroTitle')}</h1>
                <p className="text-lg md:text-xl mb-6">{t('home.heroSubtitle')}</p>
                <div className="flex gap-4">
                    <Button variant="primary" as="a" href="/book">{t('buttons.bookNow')}</Button>
                    <Button variant="outline" as="a" href="/subscribe">{t('buttons.subscribe')}</Button>
                </div>
            </section>
            {/* How to Use Section */}
            <section className="container mx-auto py-12" id="how">
                <h2 className="text-2xl font-bold mb-6 text-center">{t('home.howTitle')}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded shadow p-6 text-center">
                        <span className="text-blue-600 dark:text-blue-400 text-3xl font-bold">1</span>
                        <p className="mt-2">Sign up or log in to your account.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded shadow p-6 text-center">
                        <span className="text-blue-600 dark:text-blue-400 text-3xl font-bold">2</span>
                        <p className="mt-2">Choose your ride or subscription plan.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded shadow p-6 text-center">
                        <span className="text-blue-600 dark:text-blue-400 text-3xl font-bold">3</span>
                        <p className="mt-2">Book and enjoy your ride!</p>
                    </div>
                </div>
            </section>
            {/* Pricing Section */}
            <section className="container mx-auto py-12" id="pricing">
                <h2 className="text-2xl font-bold mb-6 text-center">{t('home.pricingTitle')}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
                        <h3 className="text-xl font-bold mb-2">Single Ride</h3>
                        <p>Pay per ride. Flexible booking for one-time trips.</p>
                        <Button variant="primary" as="a" href="/book">{t('buttons.bookNow')}</Button>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
                        <h3 className="text-xl font-bold mb-2">Monthly Subscription</h3>
                        <p>Unlimited rides for a fixed monthly fee. Best value!</p>
                        <Button variant="outline" as="a" href="/subscribe">{t('buttons.subscribe')}</Button>
                    </div>
                </div>
            </section>
            {/* About Us Section */}
            <section className="container mx-auto py-12" id="about">
                <h2 className="text-2xl font-bold mb-6 text-center">{t('home.aboutTitle')}</h2>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <img src="/public/vite.svg" alt="About" className="w-32 h-32 rounded-full shadow"/>
                    <p className="text-lg">We are committed to making ride booking easy, affordable, and reliable for
                        everyone. Our service connects you to safe and comfortable rides, with flexible plans to suit
                        your needs.</p>
                </div>
            </section>
            {/* Contact Us Section */}
            <section className="container mx-auto py-12" id="contact">
                <h2 className="text-2xl font-bold mb-6 text-center">{t('home.contactTitle')}</h2>
                <form className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded shadow p-6 flex flex-col gap-4">
                    <input type="text" placeholder={t('forms.name')} className="px-3 py-2 border rounded"/>
                    <input type="email" placeholder={t('forms.email')} className="px-3 py-2 border rounded"/>
                    <textarea placeholder={t('forms.message')} className="px-3 py-2 border rounded" rows={4}/>
                    <Button variant="primary" type="submit">{t('forms.submit')}</Button>
                </form>
            </section>
        </div>
    );
};
export default Home;
