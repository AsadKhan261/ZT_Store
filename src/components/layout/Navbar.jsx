import { Menu, Search, ShoppingBag, Sparkles, User } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Container from '../common/Container';
import Button from '../common/Button';
import { navLinks } from '../../data/site';
import { useCart } from '../../context/CartContext';

function Navbar() {
  const { itemCount, mobileMenuOpen, setMobileMenuOpen } = useCart();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const query = new FormData(event.currentTarget).get('search')?.trim();
    navigate(query ? `/shop?search=${encodeURIComponent(query)}` : '/shop');
  };

  return (
    <header className="sticky top-0 z-30 border-b border-accent/10 bg-[#fbfcf7]/78 backdrop-blur-2xl">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-4">
        <Link to="/" className="group flex min-w-fit items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white shadow-[0_8px_20px_rgba(77,91,56,0.14)] transition duration-300 group-hover:scale-105">
            <Sparkles size={15} />
          </span>
          <span>
            <span className="block text-[10px] font-extrabold uppercase tracking-[0.24em] text-accent">ZT Store</span>
            <span className="mt-0.5 block font-display text-xl leading-none text-foreground sm:text-[1.35rem]">
              Wellness & Beauty
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `relative py-2 text-sm font-bold transition duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-accent after:transition-transform ${
                  isActive
                    ? 'text-accent after:scale-x-100'
                    : 'text-muted-strong after:scale-x-0 hover:text-foreground hover:after:scale-x-100'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <form onSubmit={handleSearch} className="hidden flex-1 justify-center xl:flex">
          <label className="relative w-full max-w-[17rem]">
            <span className="sr-only">Search products</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-accent/70" size={17} />
            <input
              name="search"
              placeholder="Search"
              className="h-10 w-full rounded-full border border-accent/15 bg-white/50 pl-11 pr-4 text-sm font-medium text-foreground outline-none transition duration-300 placeholder:text-muted focus:border-accent/30 focus:bg-white/82 focus:ring-4 focus:ring-accent/10"
            />
          </label>
        </form>

        <div className="hidden items-center gap-2 lg:flex">
          <Button as="link" href="/login" variant="secondary" className="h-10 border-accent/15 bg-transparent px-4 py-0 hover:scale-[1.02] hover:bg-white/64">
            <User size={16} />
            Account
          </Button>
          <Button as="link" href="/cart" className="relative h-10 px-4 py-0 shadow-[0_8px_20px_rgba(77,91,56,0.14)] hover:scale-[1.02]">
            <ShoppingBag size={16} />
            Cart
            {itemCount ? (
              <span className="absolute -right-1.5 -top-1.5 inline-flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-highlight px-1 text-[11px] font-extrabold leading-none text-white shadow-sm">
                {itemCount}
              </span>
            ) : null}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/15 bg-white/50 text-accent transition hover:bg-white lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
