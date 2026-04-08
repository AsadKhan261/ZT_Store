import { SlidersHorizontal, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import EmptyState from '../components/common/EmptyState';
import ProductCard from '../components/product/ProductCard';
import { products } from '../data/products';
import { availableCategories } from '../data/site';

function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const categoryParam = searchParams.get('category') || 'All';
  const sortParam = searchParams.get('sort') || 'featured';

  const filteredProducts = useMemo(() => {
    const result = products
      .filter((product) => categoryParam === 'All' || product.category === categoryParam)
      .filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase()),
      );

    switch (sortParam) {
      case 'price-low':
        return [...result].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...result].sort((a, b) => b.price - a.price);
      case 'popular':
        return [...result].sort((a, b) => b.reviewCount - a.reviewCount);
      case 'newest':
        return [...result].reverse();
      default:
        return result;
    }
  }, [categoryParam, search, sortParam]);

  const setCategory = (category) => {
    const next = new URLSearchParams(searchParams);
    if (category === 'All') next.delete('category');
    else next.set('category', category);
    setSearchParams(next);
  };

  const setSort = (value) => {
    const next = new URLSearchParams(searchParams);
    if (value === 'featured') next.delete('sort');
    else next.set('sort', value);
    setSearchParams(next);
  };

  const sidebar = (
    <div className="surface-panel space-y-6 p-6">
      <div>
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">Categories</h3>
        <div className="mt-4 space-y-2">
          {['All', ...availableCategories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setCategory(category);
                setMobileFiltersOpen(false);
              }}
              className={`block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                categoryParam === category
                  ? 'bg-accent text-white'
                  : 'bg-surface text-muted-strong hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-[1.25rem] bg-[#efe7da] p-5">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Trust block</p>
        <p className="mt-3 text-sm leading-7 text-muted-strong">
          Product authenticity, support-ready service, and cash-on-delivery clarity are emphasized throughout the redesigned catalog.
        </p>
      </div>
    </div>
  );

  return (
    <section className="section-space">
      <Container>
        <SectionTitle
          eyebrow="Shop"
          title="Curated catalog with premium filtering and clean product discovery."
          description="The listing page is structured around fast scanning, confident filtering, and mobile-friendly product browsing."
        />

        <div className="mt-10 flex flex-col gap-4 rounded-[1.5rem] border border-border bg-white/75 p-4 shadow-[var(--shadow-card)] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <Input placeholder="Search by product or category" value={search} onChange={(event) => setSearch(event.target.value)} />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="btn-secondary lg:hidden"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
            <select
              value={sortParam}
              onChange={(event) => setSort(event.target.value)}
              className="field-base min-w-[190px]"
            >
              <option value="featured">Featured</option>
              <option value="popular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="hidden lg:block">{sidebar}</div>
          <div>
            {filteredProducts.length ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <EmptyState
                title="No products match these filters"
                description="Try a broader search or switch categories to explore more of the collection."
                actionLabel="Reset shop"
                actionHref="/shop"
              />
            )}
          </div>
        </div>
      </Container>

      {mobileFiltersOpen ? (
        <div className="fixed inset-0 z-40 bg-black/40 lg:hidden">
          <div className="ml-auto h-full w-full max-w-sm bg-card p-5 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="rounded-full border border-border p-3"
              >
                <X size={16} />
              </button>
            </div>
            {sidebar}
            <Button
              variant="secondary"
              className="mt-4 w-full"
              onClick={() => {
                setSearch('');
                setSearchParams({});
                setMobileFiltersOpen(false);
              }}
            >
              Reset filters
            </Button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default ShopPage;
