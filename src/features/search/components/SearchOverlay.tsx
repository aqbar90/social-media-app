export default function SearchOverlay({ children }: React.PropsWithChildren) {
  return (
    <section className='hidden lg:absolute lg:left-1/2 lg:top-19 lg:block lg:w-122.75 lg:-translate-x-1/2'>
      <div className='rounded-2xl border border-border-primary bg-surface-secondary p-5'>
        {children}
      </div>
    </section>
  );
}
