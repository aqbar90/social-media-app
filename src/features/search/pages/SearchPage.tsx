import AppLayout from '@/components/layout/app/AppLayout';

import SearchContainer from '../containers/SearchContainer';

export function SearchPage() {
  return (
    <AppLayout>
      <main className='layout-container py-6'>
        <SearchContainer />
      </main>
    </AppLayout>
  );
}
