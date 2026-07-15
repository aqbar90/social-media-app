export default function SearchOverlay({ children }: React.PropsWithChildren) {
  return (
    <section className='absolute inset-x-0 top-16 z-50'>
      <div className='rounded-2xl border border-border-primary bg-surface-secondary p-5'>
        {children}
      </div>
    </section>
  );
}
