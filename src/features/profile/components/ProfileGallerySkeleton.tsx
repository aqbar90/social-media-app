export default function ProfileGallerySkeleton() {
  return (
    <section className='grid grid-cols-3 gap-1 lg:gap-2'>
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className='aspect-square animate-pulse rounded-lg bg-muted'
        />
      ))}
    </section>
  );
}
