import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAuth } from '../contexts/AuthContext';

interface ProfileForm {
  name: string;
  email: string;
  phone: string;
}

const Profile: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ProfileForm>({
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
    }
  });

  const onSubmit = async (data: ProfileForm) => {
    // TODO: Implement profile update API call
    await new Promise(res => setTimeout(res, 1000));
  };

  return (
    <div className="max-w-lg mx-auto mt-16 bg-white dark:bg-gray-800 rounded shadow p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">{t('nav.profile')}</h2>
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
          label={t('forms.phone')}
          type="tel"
          {...register('phone', { required: t('forms.phone') })}
          error={errors.phone?.message}
        />
        {/* TODO: Addresses list with add/edit/delete */}
        <Button variant="primary" type="submit" loading={isSubmitting} className="w-full">{t('buttons.save')}</Button>
      </form>
    </div>
  );
};

export default Profile;

