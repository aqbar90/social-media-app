import { AuthBackground } from '@/components/shared/auth/AuthBackground';
import { AuthCard } from '@/components/shared/auth/AuthCard';
import { AuthLayout } from '@/components/shared/auth/AuthLayout';
import { AuthLogo } from '@/components/shared/auth/AuthLogo';
import { AuthTitle } from '@/components/shared/auth/AuthTitle';

import { RegisterForm } from '../components/RegisterForm';

export function RegisterPage() {
  return (
    <AuthLayout>
      <AuthBackground />

      <AuthCard>
        <AuthLogo />

        <AuthTitle title='Register' />

        <RegisterForm />
      </AuthCard>
    </AuthLayout>
  );
}
