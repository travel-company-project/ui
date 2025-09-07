import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import Input from '../components/Input';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    // TODO: Implement contact form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Contact form submitted:', data);
    reset();
    alert(t('success.messageSent'));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-xl md:text-2xl opacity-90">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                {t('contact.getInTouch')}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                {t('contact.description')}
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {t('contact.officeAddress')}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                      {t('contact.address')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {t('contact.phoneNumbers')}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                      {t('contact.phones')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {t('contact.emailAddresses')}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                      {t('contact.emails')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {t('contact.businessHours')}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                      {t('contact.hours')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t('contact.followUs')}
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    f
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                    t
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                    i
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transition-colors">
                    in
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('contact.sendMessage')}
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <Input
                    label={t('forms.fullName')}
                    type="text"
                    placeholder={t('placeholders.enterName')}
                    {...register('name', { required: t('errors.nameRequired') })}
                    error={errors.name?.message}
                  />

                  <Input
                    label={t('forms.email')}
                    type="email"
                    placeholder={t('placeholders.enterEmail')}
                    {...register('email', { 
                      required: t('errors.emailRequired'),
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: t('errors.invalidEmail')
                      }
                    })}
                    error={errors.email?.message}
                  />

                  <Input
                    label={t('forms.subject')}
                    type="text"
                    placeholder={t('placeholders.whatAbout')}
                    {...register('subject', { required: t('errors.subjectRequired') })}
                    error={errors.subject?.message}
                  />

                  <div className="mb-4">
                    <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
                      {t('forms.message')}
                    </label>
                    <textarea
                      rows={6}
                      placeholder={t('placeholders.tellUsMore')}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring transition bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 focus:ring-blue-500 dark:border-gray-600"
                      {...register('message', { required: t('errors.messageRequired') })}
                    />
                    {errors.message && (
                      <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
                    )}
                  </div>

                  <Button 
                    variant="primary" 
                    type="submit" 
                    loading={isSubmitting} 
                    className="w-full"
                  >
                    {t('buttons.sendMessage')}
                  </Button>
                </form>
              </div>

              {/* FAQ Quick Links */}
              <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {t('contact.quickHelp')}
                </h3>
                <div className="space-y-2">
                  <a href="#" className="block text-blue-600 dark:text-blue-400 hover:underline">
                    {t('contact.helpLinks.howToBook')}
                  </a>
                  <a href="#" className="block text-blue-600 dark:text-blue-400 hover:underline">
                    {t('contact.helpLinks.subscriptionPlans')}
                  </a>
                  <a href="#" className="block text-blue-600 dark:text-blue-400 hover:underline">
                    {t('contact.helpLinks.paymentIssues')}
                  </a>
                  <a href="#" className="block text-blue-600 dark:text-blue-400 hover:underline">
                    {t('contact.helpLinks.safetyPolicies')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
