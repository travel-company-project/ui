import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Input from '../components/Input';
import Button from '../components/Button';

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    // TODO: Implement login API call
    // Simulate loading
    await new Promise(res => setTimeout(res, 1000));
    // Redirect to dashboard on success
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white dark:bg-gray-800 rounded shadow p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">{t('nav.login')}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <div className="flex justify-between items-center mb-4">
          <a href="#" className="text-blue-600 dark:text-blue-400 text-sm">{t('forms.forgotPassword')}</a>
        </div>
        <Button variant="primary" type="submit" loading={isSubmitting} className="w-full">{t('buttons.login')}</Button>
      </form>
    </div>
  );
};

export default Login;

