import { categories } from './categories';

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
];

export const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Products', href: '/shop' },
      { label: 'Best Sellers', href: '/shop?sort=popular' },
      { label: 'New Arrivals', href: '/shop?sort=newest' },
      { label: 'Checkout', href: '/checkout' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Login', href: '/login' },
    ],
  },
];

export const trustHighlights = [
  {
    title: 'Authenticity First',
    description: 'Detailed product guidance, transparent policies, and support-ready purchase flows.',
  },
  {
    title: 'Cash On Delivery',
    description: 'A familiar payment option presented with clear charges and clean reassurance.',
  },
  {
    title: 'Responsive Support',
    description: 'Fast assistance for product selection, order questions, and after-purchase care.',
  },
];

export const metrics = [
  { label: 'Cities served', value: '20+' },
  { label: 'Repeat customers', value: '8.6k' },
  { label: 'Average rating', value: '4.8/5' },
];

export const availableCategories = [...new Set(categories.map((category) => category.name))];
