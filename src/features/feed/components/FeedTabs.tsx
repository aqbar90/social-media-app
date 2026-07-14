import FeedTabItem from './FeedTabItem';

export type FeedTab = 'my-posts' | 'for-you' | 'following';

interface FeedTabsProps {
  activeTab: FeedTab;
  onTabChange: (tab: FeedTab) => void;
}

export default function FeedTabs({ activeTab, onTabChange }: FeedTabsProps) {
  return (
    <nav className='flex items-center border-b'>
      <FeedTabItem
        label='My Posts'
        active={activeTab === 'my-posts'}
        onClick={() => onTabChange('my-posts')}
      />

      <FeedTabItem
        label='For You'
        active={activeTab === 'for-you'}
        onClick={() => onTabChange('for-you')}
      />

      <FeedTabItem
        label='Following'
        active={activeTab === 'following'}
        onClick={() => onTabChange('following')}
      />
    </nav>
  );
}
