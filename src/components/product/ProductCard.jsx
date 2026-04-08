import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { calculateDiscount, formatCurrency } from '../../utils/format';
import { useCart } from '../../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const discount = calculateDiscount(product.price, product.originalPrice);

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group surface-panel overflow-hidden"
    >
      <Link to={`/product/${product.slug}`} className="relative block overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <Badge>{product.badge}</Badge>
          {discount ? <Badge tone="warm">-{discount}%</Badge> : null}
        </div>
        <button
          type="button"
          className="absolute right-4 top-4 inline-flex rounded-full bg-white/90 p-3 text-muted-strong shadow-sm transition hover:bg-white"
        >
          <Heart size={16} />
        </button>
      </Link>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-muted">{product.category}</p>
          <Link to={`/product/${product.slug}`} className="block text-lg font-semibold leading-snug text-foreground">
            {product.name}
          </Link>
          <p className="line-clamp-2 text-sm leading-6 text-muted">{product.shortDescription}</p>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-strong">
          <Star size={15} className="fill-highlight text-highlight" />
          <span className="font-semibold text-foreground">{product.rating}</span>
          <span>({product.reviewCount} reviews)</span>
        </div>

        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-xl font-bold text-foreground">{formatCurrency(product.price)}</p>
            {product.originalPrice ? (
              <p className="text-sm text-muted line-through">{formatCurrency(product.originalPrice)}</p>
            ) : null}
          </div>

          <Button
            className="px-4 py-2.5"
            onClick={() => addToCart(product.id)}
          >
            <ShoppingBag size={16} />
            Add
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProductCard;
