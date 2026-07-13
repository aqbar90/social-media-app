export function formatRelativeTime(date: string): string {
  const now = Date.now();
  const target = new Date(date).getTime();

  const diff = Math.floor((target - now) / 1000);

  const formatter = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto',
  });

  const units = [
    { limit: 60, value: 1, unit: 'second' as const },
    { limit: 3600, value: 60, unit: 'minute' as const },
    { limit: 86400, value: 3600, unit: 'hour' as const },
    { limit: 604800, value: 86400, unit: 'day' as const },
    { limit: 2629800, value: 604800, unit: 'week' as const },
    { limit: 31557600, value: 2629800, unit: 'month' as const },
    {
      limit: Number.POSITIVE_INFINITY,
      value: 31557600,
      unit: 'year' as const,
    },
  ];

  const selectedUnit = units.find(({ limit }) => Math.abs(diff) < limit)!;

  return formatter.format(
    Math.round(diff / selectedUnit.value),
    selectedUnit.unit
  );
}
