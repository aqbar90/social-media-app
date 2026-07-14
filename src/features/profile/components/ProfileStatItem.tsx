interface ProfileStatItemProps {
  value: number;
  label: string;
}

export default function ProfileStatItem({
  value,
  label,
}: ProfileStatItemProps) {
  return (
    <div className='flex flex-1 flex-col items-center gap-1'>
      <span className='text-display-sm font-bold'>{value}</span>

      <span className='text-body-md text-muted-foreground'>{label}</span>
    </div>
  );
}
