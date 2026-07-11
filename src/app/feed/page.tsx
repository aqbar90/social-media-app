import HomeNavbar from '@/components/layout/navbar/HomeNavbar';

export default function HomePage() {
  return (
    <>
      <HomeNavbar />

      <main className='layout-container flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 lg:min-h-[calc(100vh-5rem)] lg:px-0'>
        <h1 className='text-display-md font-bold'>Homepage</h1>
      </main>
    </>
  );
}
