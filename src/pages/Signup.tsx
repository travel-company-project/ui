import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Input from '../components/Input';
import Button from '../components/Button';

interface SignupForm {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignupForm>();

  const onSubmit = async (data: SignupForm) => {
    // TODO: Implement signup API call
    await new Promise(res => setTimeout(res, 1000));
    // Redirect to dashboard on success
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white dark:bg-gray-800 rounded shadow p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">{t('nav.signup')}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={t('forms.name')}
          type="text"
          {...register('name', { required: t('forms.name') })}
          error={errors.name?.message}
        />
        <Input
          label={t('forms.email')}
          type="email"
          {...register('email', { required: t('forms.email') })}
          error={errors.email?.message}
        />
        <Input
          label={t('forms.password')}
          type="password"
          {...register('password', { required: t('forms.password') })}
          error={errors.password?.message}
        />
        <Button variant="primary" type="submit" loading={isSubmitting} className="w-full">{t('buttons.signup')}</Button>
      </form>
    </div>
  );
};

export default Signup;

