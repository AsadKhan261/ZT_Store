function Badge({ children, tone = 'accent' }) {
  const classes =
    tone === 'soft'
      ? 'bg-surface-strong text-muted-strong'
      : tone === 'warm'
        ? 'bg-highlight/15 text-highlight'
        : 'bg-accent-soft text-accent-strong';

  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] ${classes}`}>
      {children}
    </span>
  );
}

export default Badge;
