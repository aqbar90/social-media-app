'use client';

import { useState } from 'react';

import FeedTabs, { type FeedTab } from './FeedTabs';

import MyFeedSection from '../containers/MyFeedSection';
import FollowingSection from '../containers/FollowingSection';

export default function FeedLayout() {
  const [activeTab, setActiveTab] = useState<FeedTab>('for-you');

  return (
    <main className='layout-container py-6'>
      <div className='flex flex-col gap-6'>
        <FeedTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'for-you' ? <MyFeedSection /> : <FollowingSection />}
      </div>
    </main>
  );
}
