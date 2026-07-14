import HomeNavbar from '@/components/layout/navbar/HomeNavbar';

import FeedSection from '@/features/feed/containers/FeedSection';

export default function FeedPage() {
  return (
    <>
      <HomeNavbar />

      <main className='layout-container py-6'>
        <FeedSection />
      </main>
    </>
  );
}
