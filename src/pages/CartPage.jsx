import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import EmptyState from '../components/common/EmptyState';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import QuantitySelector from '../components/product/QuantitySelector';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/format';

function CartPage() {
  const { cartItems, subtotal, shipping, total, updateQuantity, removeFromCart } = useCart();

  if (!cartItems.length) {
    return (
      <section className="section-space">
        <Container>
          <EmptyState
            title="Your cart is currently empty"
            description="Build a more confident order by exploring our premium routines and adding the products that fit your needs."
            actionLabel="Start shopping"
            actionHref="/shop"
          />
        </Container>
      </section>
    );
  }

  return (
    <section className="section-space">
      <Container>
        <SectionTitle
          eyebrow="Cart"
          title="Order review designed for clarity and confidence."
          description="The cart experience stays lightweight but still reinforces support, pricing clarity, and a clean path to checkout."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-5">
            {cartItems.map(({ product, quantity }) => (
              <div key={product.id} className="surface-panel flex flex-col gap-5 p-5 sm:flex-row">
                <img src={product.image} alt={product.name} className="h-36 w-full rounded-[1.25rem] object-cover sm:w-36" />
                <div className="flex flex-1 flex-col justify-between gap-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{product.category}</p>
                      <h3 className="mt-2 text-lg font-semibold text-foreground">{product.name}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-7 text-muted">{product.shortDescription}</p>
                    </div>
                    <p className="text-lg font-bold text-foreground">{formatCurrency(product.price)}</p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <QuantitySelector value={quantity} onChange={(value) => updateQuantity(product.id, value)} />
                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                      className="text-sm font-semibold text-muted-strong transition hover:text-foreground"
                    >
                      Remove item
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="space-y-5">
            <div className="surface-panel p-6">
              <h2 className="text-lg font-semibold text-foreground">Order summary</h2>
              <div className="mt-5 space-y-4 text-sm text-muted-strong">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span>{formatCurrency(shipping)}</span>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-4 text-base font-semibold text-foreground">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <Input placeholder="Promo code" label="Promo or coupon" />
                <Button as="link" href="/checkout" className="w-full">
                  Continue to checkout
                </Button>
                <Button as="link" href="/shop" variant="secondary" className="w-full">
                  Keep shopping
                </Button>
              </div>
            </div>

            <div className="surface-panel p-6">
              <p className="text-sm font-semibold text-foreground">Secure purchase support</p>
              <p className="mt-3 text-sm leading-7 text-muted">
                Transparent totals, cash-on-delivery support, and clear order confirmation messaging help reduce hesitation before checkout.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

export default CartPage;
