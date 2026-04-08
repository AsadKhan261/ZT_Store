import { Menu, Search, ShoppingBag, User } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import Container from '../common/Container';
import Button from '../common/Button';
import Input from '../common/Input';
import { navLinks } from '../../data/site';
import { useCart } from '../../context/CartContext';

function Navbar() {
  const { itemCount, mobileMenuOpen, setMobileMenuOpen } = useCart();

  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-background/85 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link to="/" className="min-w-fit">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">ZT Store</p>
          <p className="mt-1 font-display text-2xl leading-none text-foreground">Wellness & Beauty</p>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive ? 'text-foreground' : 'text-muted hover:text-foreground'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden flex-1 justify-center xl:flex">
          <div className="relative w-full max-w-sm">
            <Input placeholder="Search products, routines, concerns..." className="pl-11" />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
          </div>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button as="link" href="/login" variant="secondary" className="px-4 py-2.5">
            <User size={16} />
            Account
          </Button>
          <Button as="link" href="/cart" className="relative px-4 py-2.5">
            <ShoppingBag size={16} />
            Cart
            {itemCount ? (
              <span className="absolute -right-1 -top-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-highlight text-xs font-bold text-white">
                {itemCount}
              </span>
            ) : null}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-full border border-border p-3 text-muted-strong lg:hidden"
        >
          <Menu size={18} />
        </button>
      </Container>
    </header>
  );
}

export default Navbar;
