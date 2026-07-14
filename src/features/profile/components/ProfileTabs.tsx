'use client';

import { Grid2x2, Bookmark } from 'lucide-react';

import ProfileTabItem from './ProfileTabItem';

export type ProfileTab = 'gallery' | 'saved';

interface ProfileTabsProps {
  activeTab: ProfileTab;
  onTabChange: (tab: ProfileTab) => void;
}

export default function ProfileTabs({
  activeTab,
  onTabChange,
}: ProfileTabsProps) {
  return (
    <nav className='flex items-center border-b'>
      <ProfileTabItem
        icon={<Grid2x2 className='size-5' />}
        label='Gallery'
        active={activeTab === 'gallery'}
        onClick={() => onTabChange('gallery')}
      />

      <ProfileTabItem
        icon={<Bookmark className='size-5' />}
        label='Saved'
        active={activeTab === 'saved'}
        onClick={() => onTabChange('saved')}
      />
    </nav>
  );
}
