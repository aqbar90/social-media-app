import AppLayout from '@/components/layout/app/AppLayout';

import EditProfileContainer from '../containers/EditProfileContainer';

export function EditProfilePage() {
  return (
    <AppLayout>
      <main className='layout-container py-6'>
        <EditProfileContainer />
      </main>
    </AppLayout>
  );
}
