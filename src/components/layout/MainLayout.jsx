import { AnimatePresence, motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import { useCart } from '../../context/CartContext';
import useScrollToTop from '../../hooks/useScrollToTop';

function MainLayout() {
  const { toast, mobileMenuOpen, setMobileMenuOpen } = useCart();

  useScrollToTop();

  return (
    <div className="page-shell">
      <Navbar />
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <main>
        <Outlet />
      </main>
      <Footer />

      <AnimatePresence>
        {toast ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-white shadow-2xl"
          >
            <CheckCircle2 size={18} className="text-accent-soft" />
            {toast}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default MainLayout;
