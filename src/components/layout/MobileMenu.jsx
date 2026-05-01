import { AnimatePresence, motion } from 'framer-motion';
import { Search, ShoppingBag, Sparkles, User, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navLinks } from '../../data/site';
import { useCart } from '../../context/CartContext';
import Button from '../common/Button';

function MobileMenu({ open, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { itemCount } = useCart();

  const handleSearch = (event) => {
    event.preventDefault();
    const query = new FormData(event.currentTarget).get('mobileSearch')?.trim();
    onClose();
    navigate(query ? `/shop?search=${encodeURIComponent(query)}` : '/shop');
  };

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-foreground/45 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-white/70 bg-[#fbfcf7]/92 p-5 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white shadow-[0_10px_24px_rgba(77,91,56,0.2)]">
                  <Sparkles size={18} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">ZT Store</p>
                  <p className="mt-1 font-display text-xl leading-none text-foreground">Wellness & Beauty</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dfe7d5] bg-white/80 text-accent shadow-sm"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSearch} className="mt-8">
              <label className="relative block">
                <span className="sr-only">Search products</span>
                <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-accent/70" size={17} />
                <input
                  name="mobileSearch"
                  placeholder="Search beauty & wellness"
                  className="h-12 w-full rounded-full border border-[#dfe7d5] bg-white/82 pl-11 pr-4 text-sm font-semibold text-foreground outline-none transition placeholder:text-muted focus:border-accent/35 focus:ring-4 focus:ring-accent/10"
                />
              </label>
            </form>

            <div className="mt-7 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-base font-bold transition ${
                    location.pathname === link.href
                      ? 'bg-white text-accent shadow-[0_10px_28px_rgba(77,91,56,0.1)]'
                      : 'text-foreground hover:bg-white/72'
                  }`}
                >
                  <span>{link.label}</span>
                  {location.pathname === link.href ? (
                    <span className="h-2 w-2 rounded-full bg-highlight" />
                  ) : null}
                </Link>
              ))}
            </div>

            <div className="mt-auto space-y-3 pt-8">
              <div className="grid grid-cols-2 gap-3">
                <Button as="link" href="/login" variant="secondary" className="w-full border-[#dfe7d5] bg-white/78" onClick={onClose}>
                  <User size={16} />
                  Account
                </Button>
                <Button as="link" href="/cart" className="relative w-full" onClick={onClose}>
                  <ShoppingBag size={16} />
                  Cart
                  {itemCount ? (
                    <span className="absolute -right-1.5 -top-1.5 inline-flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-highlight px-1 text-[11px] font-extrabold leading-none text-white shadow-sm">
                      {itemCount}
                    </span>
                  ) : null}
                </Button>
              </div>
              <Button as="link" href="/shop" className="w-full shadow-[0_12px_28px_rgba(77,91,56,0.16)]" onClick={onClose}>
                Shop Now
              </Button>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export default MobileMenu;
