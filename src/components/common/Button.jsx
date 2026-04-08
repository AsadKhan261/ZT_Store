import { Link } from 'react-router-dom';
import { cn } from '../../utils/format';

function Button({
  children,
  variant = 'primary',
  className = '',
  as = 'button',
  href,
  ...props
}) {
  const classes = cn(variant === 'secondary' ? 'btn-secondary' : 'btn-primary', className);

  if (as === 'link') {
    return (
      <Link to={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
