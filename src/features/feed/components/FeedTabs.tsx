import FeedTabItem from './FeedTabItem';

export type FeedTab = 'home' | 'for-you';

interface FeedTabsProps {
  activeTab: FeedTab;
  onTabChange: (tab: FeedTab) => void;
}

export default function FeedTabs({ activeTab, onTabChange }: FeedTabsProps) {
  return (
    <nav className='flex items-center border-b'>
      <FeedTabItem
        label='Home'
        active={activeTab === 'home'}
        onClick={() => onTabChange('home')}
      />

      <FeedTabItem
        label='For You'
        active={activeTab === 'for-you'}
        onClick={() => onTabChange('for-you')}
      />
    </nav>
  );
}
