function QuantitySelector({ value, onChange }) {
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-white p-1 shadow-sm">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        className="rounded-full px-3 py-2 text-sm font-semibold text-muted-strong transition hover:bg-surface"
      >
        -
      </button>
      <span className="min-w-10 text-center text-sm font-semibold text-foreground">{value}</span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="rounded-full px-3 py-2 text-sm font-semibold text-muted-strong transition hover:bg-surface"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
