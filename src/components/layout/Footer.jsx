import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { categories } from '../../data/categories';
import { footerColumns } from '../../data/site';

const socialLinks = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
];

function Footer() {
  return (
    <footer className="border-t border-[#dbe4d2] bg-[linear-gradient(180deg,#edf4e6,#e6efdd)]">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <div className="space-y-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">ZT Store</p>
            <h3 className="mt-3 font-display text-4xl leading-none text-foreground">
              Premium routines for wellness, beauty, and family care.
            </h3>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-strong">
            Trusted wellness, beauty, and family care essentials presented with clarity, comfort, and everyday ease.
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="/"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dbe4d2] bg-white/80 text-muted-strong transition hover:bg-white hover:text-foreground"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">{column.title}</h4>
            <div className="mt-5 space-y-3">
              {column.links.map((link) => (
                <Link key={link.href} to={link.href} className="block text-sm text-muted-strong transition hover:text-foreground">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="space-y-5">
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">Categories</h4>
          <div className="space-y-3">
            {categories.slice(0, 4).map((category) => (
              <Link key={category.id} to={category.href} className="block text-sm text-muted-strong transition hover:text-foreground">
                {category.name}
              </Link>
            ))}
          </div>
          <div className="space-y-3 pt-4 text-sm text-muted-strong">
            <div className="flex gap-3">
              <Phone size={18} className="mt-0.5 text-accent" />
              <span>0922 866664</span>
            </div>
            <div className="flex gap-3">
              <Mail size={18} className="mt-0.5 text-accent" />
              <span>support@ztstore.pk</span>
            </div>
            <div className="flex gap-3">
              <MapPin size={18} className="mt-0.5 text-accent" />
              <span>Kohat, Pakistan</span>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-[#dbe4d2]">
        <Container className="flex flex-col gap-4 py-5 text-sm text-muted-strong sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ZT Store. Wellness, beauty, and family care for everyday confidence.</p>
          <div className="flex gap-5">
            <Link to="/faq" className="transition hover:text-foreground">FAQ</Link>
            <Link to="/contact" className="transition hover:text-foreground">Support</Link>
            <Link to="/checkout" className="transition hover:text-foreground">Secure Checkout</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
