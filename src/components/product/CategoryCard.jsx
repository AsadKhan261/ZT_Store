import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function CategoryCard({ category }) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.25 }}>
      <Link
        to={category.href}
        className="group relative block overflow-hidden rounded-[1.5rem] border border-border bg-white shadow-[var(--shadow-card)]"
      >
        <img
          src={category.image}
          alt={category.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
          <div className="max-w-xs">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/70">Category</p>
            <h3 className="mt-2 text-2xl font-semibold">{category.name}</h3>
            <p className="mt-2 text-sm leading-6 text-white/80">{category.description}</p>
          </div>
          <span className="rounded-full bg-white/15 p-3 backdrop-blur-sm">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default CategoryCard;
