import Button from './Button';

function EmptyState({ title, description, actionLabel, actionHref }) {
  return (
    <div className="surface-panel flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="mb-4 rounded-full bg-accent-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-accent">
        Nothing here yet
      </div>
      <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 max-w-md text-sm leading-7 text-muted">{description}</p>
      {actionLabel && actionHref ? (
        <Button as="link" href={actionHref} className="mt-6">
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}

export default EmptyState;
