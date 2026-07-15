import SearchHeader from './SearchHeader';
import SearchOverlay from './SearchOverlay';

export default function SearchLayout() {
  return (
    <section className='relative mx-auto flex w-full max-w-content flex-col'>
      <SearchHeader />

      <SearchOverlay />
    </section>
  );
}
