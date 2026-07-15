'use client';

import { useEffect, useMemo } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { updateProfileSchema } from '../schemas/update-profile.schema';
import type { UpdateProfileFormValues } from '../schemas/update-profile.schema';

import AvatarUpload from './AvatarUpload';
import BioField from './BioField';
import EditProfileHeader from './EditProfileHeader';
import EmailField from './EmailField';
import NameField from './NameField';
import PhoneField from './PhoneField';
import ProfileField from './ProfileField';
import SaveChangesButton from './SaveChangesButton';
import UsernameField from './UsernameField';

import type { Profile } from '@/types/entities/profile';

interface EditProfileFormProps {
  profile: Profile;
  onSubmit: (values: UpdateProfileFormValues) => void | Promise<void>;
  isSubmitting?: boolean;
  onBack: () => void;
}

export default function EditProfileForm({
  profile,
  onSubmit,
  isSubmitting = false,
  onBack,
}: EditProfileFormProps) {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<UpdateProfileFormValues>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: profile.name,
      username: profile.username,
      phone: profile.phone ?? '',
      bio: profile.bio ?? '',
      avatar: undefined,
    },
    mode: 'onBlur',
  });

  useEffect(() => {
    reset({
      name: profile.name,
      username: profile.username,
      phone: profile.phone ?? '',
      bio: profile.bio ?? '',
      avatar: undefined,
    });
  }, [reset, profile]);

  const avatar = useWatch({
    control,
    name: 'avatar',
  });

  const avatarFile = useMemo(() => {
    if (avatar instanceof File) {
      return avatar;
    }

    return undefined;
  }, [avatar]);

  const previewUrl = useMemo(() => {
    if (!avatarFile) {
      return profile.avatarUrl ?? null;
    }

    return URL.createObjectURL(avatarFile);
  }, [avatarFile, profile.avatarUrl]);

  useEffect(() => {
    return () => {
      if (previewUrl?.startsWith('blob:')) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const avatarSrc = previewUrl ?? profile.avatarUrl ?? '';

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex w-full flex-col gap-6'
      noValidate
    >
      <EditProfileHeader onBack={onBack} />

      <Controller
        name='avatar'
        control={control}
        render={({ field }) => (
          <AvatarUpload
            imageUrl={avatarSrc}
            alt={profile.name}
            onChange={field.onChange}
          />
        )}
      />

      <ProfileField label='Name' htmlFor='name' error={errors.name?.message}>
        <NameField id='name' {...register('name')} autoComplete='name' />
      </ProfileField>

      <ProfileField
        label='Username'
        htmlFor='username'
        error={errors.username?.message}
      >
        <UsernameField {...register('username')} autoComplete='username' />
      </ProfileField>

      <ProfileField label='Email' htmlFor='email'>
        <EmailField id='email' value={profile.email} readOnly />
      </ProfileField>

      <ProfileField
        label='Phone Number'
        htmlFor='phone'
        error={errors.phone?.message}
      >
        <PhoneField {...register('phone')} autoComplete='tel' />
      </ProfileField>

      <ProfileField label='Bio' htmlFor='bio' error={errors.bio?.message}>
        <BioField {...register('bio')} rows={5} />
      </ProfileField>

      <SaveChangesButton
        type='submit'
        disabled={!isDirty || isSubmitting}
        loading={isSubmitting}
      />
    </form>
  );
}
