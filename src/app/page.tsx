import { Navbar } from '@/components/layout/navbar';
import ForYouSection from '@/features/feed/containers/ForYouSection';

export default function HomePage() {
  return (
    <>
      <Navbar isAuthenticated={false} currentUser={null} />

      <main className='layout-container py-6'>
        <ForYouSection />
      </main>
    </>
  );
}
