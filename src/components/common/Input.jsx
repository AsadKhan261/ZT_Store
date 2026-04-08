import { cn } from '../../utils/format';

function Input({ label, hint, className = '', ...props }) {
  return (
    <label className="block space-y-2">
      {label ? <span className="text-sm font-semibold text-foreground">{label}</span> : null}
      <input className={cn('field-base', className)} {...props} />
      {hint ? <span className="text-xs text-muted">{hint}</span> : null}
    </label>
  );
}

export default Input;
