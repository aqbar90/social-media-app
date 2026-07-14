'use client';

import { useState } from 'react';

import ProfileGallery from './ProfileGallery';
import ProfileHeader from './ProfileHeader';
import ProfileStats from './ProfileStats';
import ProfileTabs, { type ProfileTab } from './ProfileTabs';

import type { Profile } from '@/types/entities/profile';
import SavedGallery from './SavedGallery';

interface ProfileLayoutProps {
  profile: Profile;
  username: string;
}

export default function ProfileLayout({
  profile,
  username,
}: ProfileLayoutProps) {
  const [activeTab, setActiveTab] = useState<ProfileTab>('gallery');

  return (
    <main className='layout-container py-6'>
      <div className='flex flex-col gap-8'>
        <ProfileHeader profile={profile} />

        <ProfileStats profile={profile} />

        <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'gallery' ? (
          <ProfileGallery username={username} />
        ) : (
          <SavedGallery />
        )}
      </div>
    </main>
  );
}
