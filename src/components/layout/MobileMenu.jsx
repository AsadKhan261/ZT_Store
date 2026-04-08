import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/site';
import Button from '../common/Button';

function MobileMenu({ open, onClose }) {
  const location = useLocation();

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/45"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-card p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-accent">ZT Store</p>
                <p className="mt-2 text-sm text-muted">Wellness, beauty, and family essentials.</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-border p-3 text-muted-strong"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-10 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={onClose}
                  className={`block rounded-2xl px-4 py-3 text-base font-semibold transition ${
                    location.pathname === link.href
                      ? 'bg-accent-soft text-accent'
                      : 'text-foreground hover:bg-surface'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto space-y-3 pt-8">
              <Button as="link" href="/shop" className="w-full" onClick={onClose}>
                Shop Collection
              </Button>
              <Button as="link" href="/login" variant="secondary" className="w-full" onClick={onClose}>
                Sign In
              </Button>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export default MobileMenu;
