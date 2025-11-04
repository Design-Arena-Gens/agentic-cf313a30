import clsx from 'clsx';

type ScoreBadgeProps = {
  label: string;
  value: number | string;
  tone?: 'good' | 'caution' | 'neutral';
};

const toneMap: Record<NonNullable<ScoreBadgeProps['tone']>, string> = {
  good: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/40',
  neutral: 'bg-slate-500/10 text-slate-200 border-slate-500/40',
  caution: 'bg-amber-500/20 text-amber-200 border-amber-400/30'
};

export function ScoreBadge({ label, value, tone = 'neutral' }: ScoreBadgeProps) {
  return (
    <div className={clsx('rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-wide', toneMap[tone])}>
      <span className="mr-2 text-slate-300">{label}</span>
      <span className="font-bold text-white">{value}</span>
    </div>
  );
}
