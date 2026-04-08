import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={item.label} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link to={item.href} className="transition hover:text-foreground">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? 'font-semibold text-foreground' : ''}>{item.label}</span>
            )}
            {!isLast ? <ChevronRight size={14} /> : null}
          </div>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;
