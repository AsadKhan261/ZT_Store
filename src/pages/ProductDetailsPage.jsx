import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
import Container from '../components/common/Container';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import QuantitySelector from '../components/product/QuantitySelector';
import ProductCard from '../components/product/ProductCard';
import EmptyState from '../components/common/EmptyState';
import { getProductBySlug, products } from '../data/products';
import { calculateDiscount, formatCurrency } from '../utils/format';
import { useCart } from '../context/CartContext';

function ProductDetailsPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product?.gallery?.[0] ?? '');
  const { addToCart } = useCart();

  const relatedProducts = useMemo(
    () =>
      products
        .filter((item) => item.slug !== slug && item.category === product?.category)
        .slice(0, 4),
    [product?.category, slug],
  );

  if (!product) {
    return (
      <section className="section-space">
        <Container>
          <EmptyState
            title="Product not found"
            description="This product detail page could not be located. Browse the collection to discover available items."
            actionLabel="Back to shop"
            actionHref="/shop"
          />
        </Container>
      </section>
    );
  }

  const discount = calculateDiscount(product.price, product.originalPrice);

  return (
    <section className="section-space">
      <Container>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: product.category, href: `/shop?category=${encodeURIComponent(product.category)}` },
            { label: product.name },
          ]}
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <div className="surface-panel overflow-hidden p-4">
              <img src={activeImage} alt={product.name} className="h-[540px] w-full rounded-[1.25rem] object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.gallery.map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className={`overflow-hidden rounded-[1.2rem] border p-2 transition ${
                    activeImage === image ? 'border-accent bg-accent-soft/40' : 'border-border bg-white'
                  }`}
                >
                  <img src={image} alt={product.name} className="h-28 w-full rounded-[1rem] object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge>{product.badge}</Badge>
                {discount ? <Badge tone="warm">Save {discount}%</Badge> : null}
                <Badge tone="soft">{product.category}</Badge>
              </div>
              <h1 className="font-display text-5xl leading-none text-balance text-foreground">
                {product.name}
              </h1>
              <p className="max-w-xl text-base leading-8 text-muted">{product.description}</p>
            </div>

            <div className="surface-panel flex flex-wrap items-end justify-between gap-4 p-6">
              <div>
                <p className="text-3xl font-bold text-foreground">{formatCurrency(product.price)}</p>
                {product.originalPrice ? (
                  <p className="mt-2 text-sm text-muted line-through">{formatCurrency(product.originalPrice)}</p>
                ) : null}
              </div>
              <div className="space-y-2 text-sm text-muted-strong">
                <p className="font-semibold text-foreground">
                  {product.stock > 0 ? `In stock: ${product.stock} units` : 'Out of stock'}
                </p>
                <p>Fast order confirmation and support-first checkout flow.</p>
              </div>
            </div>

            <div className="surface-panel space-y-5 p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">Select quantity</p>
                  <p className="mt-1 text-sm text-muted">Adjust your order before adding it to cart.</p>
                </div>
                <QuantitySelector value={quantity} onChange={setQuantity} />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button className="flex-1" onClick={() => addToCart(product.id, quantity)}>
                  Add to cart
                </Button>
                <Button as="link" href="/checkout" variant="secondary" className="flex-1">
                  Buy now
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="surface-panel p-5">
                <div className="flex items-center gap-3">
                  <Truck className="text-accent" size={18} />
                  <p className="font-semibold text-foreground">Shipping & delivery</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Delivery estimates, city coverage, and cash-on-delivery handling are clarified at checkout to reduce uncertainty.
                </p>
              </div>
              <div className="surface-panel p-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-accent" size={18} />
                  <p className="font-semibold text-foreground">Trust & authenticity</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">
                  The PDP now supports stronger reassurance through product context, support visibility, and cleaner purchase actions.
                </p>
              </div>
            </div>

            <div className="surface-panel p-6">
              <h2 className="text-lg font-semibold text-foreground">Product highlights</h2>
              <div className="mt-4 space-y-3">
                {product.details.map((detail) => (
                  <div key={detail} className="flex gap-3 text-sm text-muted-strong">
                    <CheckCircle2 size={18} className="mt-0.5 text-accent" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Related products</p>
              <h2 className="mt-3 font-display text-4xl leading-none text-foreground">Customers exploring this also view</h2>
            </div>
            <Link to="/shop" className="hidden text-sm font-semibold text-muted-strong transition hover:text-foreground sm:block">
              View all products
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProductDetailsPage;
