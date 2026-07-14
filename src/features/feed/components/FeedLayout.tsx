'use client';

import { useState } from 'react';

import FeedTabs, { type FeedTab } from './FeedTabs';

import FollowingSection from '../containers/FollowingSection';
import ForYouSection from '../containers/ForYouSection';
import MyFeedSection from '../containers/MyFeedSection';

export default function FeedLayout() {
  const [activeTab, setActiveTab] = useState<FeedTab>('for-you');

  return (
    <main className='layout-container py-6'>
      <div className='flex flex-col gap-6'>
        <FeedTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'my-posts' && <MyFeedSection />}

        {activeTab === 'for-you' && <ForYouSection />}

        {activeTab === 'following' && <FollowingSection />}
      </div>
    </main>
  );
}
