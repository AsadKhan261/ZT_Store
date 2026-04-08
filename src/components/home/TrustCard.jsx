function TrustCard({ icon: Icon, title, description }) {
  return (
    <div className="surface-panel h-full p-6">
      <div className="mb-4 inline-flex rounded-2xl bg-accent-soft p-3 text-accent">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
    </div>
  );
}

export default TrustCard;
