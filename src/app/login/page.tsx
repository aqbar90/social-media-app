import { LoginPage } from '@/features/auth/pages/LoginPage';

interface LoginPageProps {
  searchParams: Promise<{
    email?: string;
  }>;
}

export default async function Page({ searchParams }: LoginPageProps) {
  const { email } = await searchParams;

  return <LoginPage initialEmail={email ?? ''} />;
}
