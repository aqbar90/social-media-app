import { AuthBackground } from '@/components/shared/auth/AuthBackground';
import { AuthCard } from '@/components/shared/auth/AuthCard';
import { AuthLayout } from '@/components/shared/auth/AuthLayout';
import { AuthLogo } from '@/components/shared/auth/AuthLogo';
import { AuthTitle } from '@/components/shared/auth/AuthTitle';
import { LoginForm } from '@/features/auth/components/LoginForm';

interface LoginPageProps {
  initialEmail?: string;
}

export function LoginPage({ initialEmail = '' }: LoginPageProps) {
  return (
    <AuthLayout>
      <AuthBackground />

      <AuthCard>
        <AuthLogo />

        <AuthTitle title='Welcome Back!' />

        <LoginForm initialEmail={initialEmail} />
      </AuthCard>
    </AuthLayout>
  );
}
