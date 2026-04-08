import { motion } from 'framer-motion';
import { cn } from '../../utils/format';

function SectionTitle({ eyebrow, title, description, align = 'left', className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45 }}
      className={cn(
        'max-w-2xl space-y-3',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-4xl leading-none text-balance text-foreground sm:text-5xl">
        {title}
      </h2>
      {description ? <p className="text-base leading-7 text-muted">{description}</p> : null}
    </motion.div>
  );
}

export default SectionTitle;
