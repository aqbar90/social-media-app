'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { AuthFooter } from '@/components/shared/auth/AuthFooter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLogin } from '@/features/auth/hooks/useLogin';
import {
  loginSchema,
  type LoginFormValues,
} from '@/features/auth/schemas/login.schema';

import { PasswordField } from './PasswordField';

import { useRouter } from 'next/navigation';

import { setAccessToken, setCurrentUser } from '@/lib/auth/auth-storage';
import { toast } from 'sonner';

interface LoginFormProps {
  initialEmail?: string;
}

export function LoginForm({ initialEmail = '' }: LoginFormProps) {
  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: initialEmail,
      password: '',
    },
  });

  const router = useRouter();

  const onSubmit = (values: LoginFormValues) => {
    loginMutation.mutate(values, {
      onSuccess: ({ data }) => {
        setAccessToken(data.token);
        setCurrentUser(data.user);

        toast.success('Login successful.');

        setTimeout(() => {
          router.replace('/feed');
        }, 800);
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex w-full flex-col gap-5'
    >
      <div className='flex flex-col gap-0.5'>
        <Label
          htmlFor='email'
          className='text-sm font-bold tracking-tight text-text-inverse'
        >
          Email
        </Label>

        <Input
          id='email'
          type='email'
          placeholder='Enter your email'
          autoComplete='username'
          {...register('email')}
          className='h-12 rounded-xl border-border-primary bg-surface-inverse px-4 py-2 text-md tracking-tight font-normal text-text-inverse placeholder:text-text-placeholder focus-visible:border-border-focus focus-visible:ring-0'
        />

        {errors.email && (
          <p className='text-sm tracking-tight text-text-danger'>
            {errors.email.message}
          </p>
        )}
      </div>

      <PasswordField
        label='Password'
        placeholder='Enter your password'
        autoComplete='current-password'
        error={errors.password?.message}
        {...register('password')}
      />

      <div className='flex flex-col items-center gap-4'>
        <Button
          type='submit'
          disabled={loginMutation.isPending}
          className='h-12 w-full rounded-full text-md font-bold active:scale-95'
        >
          {loginMutation.isPending ? 'Signing In...' : 'Login'}
        </Button>

        <AuthFooter
          label="Don't have an account?"
          linkLabel='Register'
          href='/register'
        />
      </div>
    </form>
  );
}
