import NavbarSearchButton from './NavbarSearchButton';
import NavbarSearchInput from './NavbarSearchInput';

export default function NavbarSearch() {
  return (
    <>
      <div className='lg:hidden'>
        <NavbarSearchButton />
      </div>

      <div className='hidden w-full lg:block'>
        <NavbarSearchInput />
      </div>
    </>
  );
}
