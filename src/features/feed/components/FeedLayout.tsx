'use client';

import { useState } from 'react';

import FeedTabs, { type FeedTab } from './FeedTabs';

import ForYouSection from '../containers/ForYouSection';
import MyFeedSection from '../containers/MyFeedSection';

export default function FeedLayout() {
  const [activeTab, setActiveTab] = useState<FeedTab>('for-you');

  return (
    <main className='layout-feed mx-auto flex w-full flex-col gap-4 py-4 md:gap-6 md:py-6'>
      <FeedTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'home' && <MyFeedSection />}

      {activeTab === 'for-you' && <ForYouSection />}
    </main>
  );
}
