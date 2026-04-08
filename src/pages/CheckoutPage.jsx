import { CheckCircle2, LockKeyhole, ShieldCheck } from 'lucide-react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/format';

function CheckoutPage() {
  const { cartItems, subtotal, shipping, total, clearCart } = useCart();

  return (
    <section className="section-space">
      <Container>
        <SectionTitle
          eyebrow="Checkout"
          title="A refined, security-forward checkout experience."
          description="This layout prioritizes trust, field clarity, and a stable mobile flow for high-intent customers."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <form className="space-y-8">
            <div className="surface-panel p-6">
              <h2 className="text-lg font-semibold text-foreground">Shipping details</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Input label="First name" placeholder="Asad" />
                <Input label="Last name" placeholder="Khan" />
                <div className="sm:col-span-2">
                  <Input label="Email address" placeholder="asad@example.com" />
                </div>
                <div className="sm:col-span-2">
                  <Input label="Street address" placeholder="House no, street, area" />
                </div>
                <Input label="City" placeholder="Karachi" />
                <Input label="Postal code" placeholder="74000" />
              </div>
            </div>

            <div className="surface-panel p-6">
              <h2 className="text-lg font-semibold text-foreground">Billing and payment</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="surface-panel flex cursor-pointer gap-4 border-2 border-accent bg-accent-soft/30 p-4">
                  <input type="radio" name="payment" defaultChecked className="mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Cash on delivery</p>
                    <p className="mt-2 text-sm leading-7 text-muted">Most familiar option for new customers with clear delivery charges.</p>
                  </div>
                </label>
                <label className="surface-panel flex cursor-pointer gap-4 p-4">
                  <input type="radio" name="payment" className="mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Card payment</p>
                    <p className="mt-2 text-sm leading-7 text-muted">Payment gateway-ready UI for future backend integration.</p>
                  </div>
                </label>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Input label="Cardholder name" placeholder="Name on card" />
                <Input label="Card number" placeholder="1234 5678 9012 3456" />
                <Input label="Expiry" placeholder="MM/YY" />
                <Input label="CVV" placeholder="123" />
              </div>
            </div>

            <div className="surface-panel p-6">
              <h2 className="text-lg font-semibold text-foreground">Security and trust</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {[
                  ['Secure checkout flow', LockKeyhole],
                  ['Policy clarity and support', ShieldCheck],
                  ['Order confirmation updates', CheckCircle2],
                ].map(([label, Icon]) => (
                  <div key={label} className="rounded-[1.25rem] bg-surface p-4">
                    <Icon size={18} className="text-accent" />
                    <p className="mt-3 text-sm font-semibold text-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </form>

          <aside className="space-y-5">
            <div className="surface-panel p-6">
              <h2 className="text-lg font-semibold text-foreground">Order summary</h2>
              <div className="mt-5 space-y-4">
                {cartItems.map(({ product, quantity }) => (
                  <div key={product.id} className="flex items-center gap-4">
                    <img src={product.image} alt={product.name} className="h-16 w-16 rounded-2xl object-cover" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">{product.name}</p>
                      <p className="text-sm text-muted">Qty {quantity}</p>
                    </div>
                    <p className="text-sm font-semibold text-foreground">{formatCurrency(product.price * quantity)}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-3 border-t border-border pt-5 text-sm text-muted-strong">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{formatCurrency(shipping)}</span>
                </div>
                <div className="flex justify-between text-base font-semibold text-foreground">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Input label="Promo code" placeholder="Enter promo code" />
                <Button className="w-full" onClick={clearCart} type="button">
                  Place order
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

export default CheckoutPage;
