'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { AuthFooter } from '@/components/shared/auth/AuthFooter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRegister } from '@/features/auth/hooks/useRegister';
import {
  registerSchema,
  type RegisterFormValues,
} from '@/features/auth/schemas/register.schema';

import { PasswordField } from './PasswordField';

import { toast } from 'sonner';

export function RegisterForm() {
  const router = useRouter();

  const registerMutation = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = ({ confirmPassword, ...payload }: RegisterFormValues) => {
    void confirmPassword;

    registerMutation.mutate(payload, {
      onSuccess: () => {
        toast.success('Registration successful. Please login.');

        setTimeout(() => {
          router.replace(`/login?email=${encodeURIComponent(payload.email)}`);
        }, 1200);
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex w-full flex-col gap-5'
    >
      <div className='flex flex-col gap-0.5'>
        <Label htmlFor='name' className='text-sm font-bold text-text-inverse'>
          Name
        </Label>

        <Input
          id='name'
          placeholder='Enter your name'
          autoComplete='name'
          {...register('name')}
          className='h-12 rounded-xl border-border-primary bg-surface-inverse px-4 text-md text-text-inverse placeholder:text-text-placeholder focus-visible:border-border-focus focus-visible:ring-0'
        />

        {errors.name && (
          <p className='text-sm text-text-danger'>{errors.name.message}</p>
        )}
      </div>

      <div className='flex flex-col gap-0.5'>
        <Label
          htmlFor='username'
          className='text-sm font-bold text-text-inverse'
        >
          Username
        </Label>

        <Input
          id='username'
          placeholder='Enter your username'
          autoComplete='username'
          {...register('username')}
          className='h-12 rounded-xl border-border-primary bg-surface-inverse px-4 text-md text-text-inverse placeholder:text-text-placeholder focus-visible:border-border-focus focus-visible:ring-0'
        />

        {errors.username && (
          <p className='text-sm text-text-danger'>{errors.username.message}</p>
        )}
      </div>

      <div className='flex flex-col gap-0.5'>
        <Label htmlFor='email' className='text-sm font-bold text-text-inverse'>
          Email
        </Label>

        <Input
          id='email'
          type='email'
          placeholder='Enter your email'
          autoComplete='email'
          {...register('email')}
          className='h-12 rounded-xl border-border-primary bg-surface-inverse px-4 text-md text-text-inverse placeholder:text-text-placeholder focus-visible:border-border-focus focus-visible:ring-0'
        />

        {errors.email && (
          <p className='text-sm text-text-danger'>{errors.email.message}</p>
        )}
      </div>

      <div className='flex flex-col gap-0.5'>
        <Label htmlFor='phone' className='text-sm font-bold text-text-inverse'>
          Phone Number
        </Label>

        <Input
          id='phone'
          type='tel'
          placeholder='Enter your phone number'
          autoComplete='tel'
          {...register('phone')}
          className='h-12 rounded-xl border-border-primary bg-surface-inverse px-4 text-md text-text-inverse placeholder:text-text-placeholder focus-visible:border-border-focus focus-visible:ring-0'
        />

        {errors.phone && (
          <p className='text-sm text-text-danger'>{errors.phone.message}</p>
        )}
      </div>

      <PasswordField
        label='Password'
        placeholder='Enter your password'
        autoComplete='new-password'
        error={errors.password?.message}
        {...register('password')}
      />

      <PasswordField
        id='confirmPassword'
        label='Confirm Password'
        placeholder='Confirm your password'
        autoComplete='new-password'
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />

      <div className='flex flex-col items-center gap-4'>
        <Button
          type='submit'
          disabled={registerMutation.isPending}
          className='h-12 w-full rounded-full text-md font-bold active:scale-95'
        >
          {registerMutation.isPending ? 'Registering...' : 'Register'}
        </Button>

        <AuthFooter
          label='Already have an account?'
          linkLabel='Login'
          href='/login'
        />
      </div>
    </form>
  );
}
