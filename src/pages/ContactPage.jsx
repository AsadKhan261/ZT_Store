import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

function ContactPage() {
  return (
    <section className="section-space">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Support-first contact design for pre-purchase and post-order questions."
          description="Customers buying beauty, baby, or nutrition products need quick answers. This page keeps support clear and reassuring."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <div className="surface-panel p-6">
              <h2 className="text-lg font-semibold text-foreground">Business details</h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-muted">
                <p>Phone: 0922 866664</p>
                <p>Email: support@ztstore.pk</p>
                <p>Address: College Town Plaza, Pindi Road, Kohat, Pakistan</p>
              </div>
            </div>
            <div className="surface-panel p-6">
              <h2 className="text-lg font-semibold text-foreground">FAQ shortcut</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Common questions about delivery, payment, returns, and accounts are also available in the FAQ hub.
              </p>
              <Button as="link" href="/faq" variant="secondary" className="mt-5">
                Open FAQ
              </Button>
            </div>
            <div className="surface-panel flex min-h-[240px] items-center justify-center bg-[#eadfcf] p-6 text-center text-sm text-muted-strong">
              Map placeholder for future store locator integration
            </div>
          </div>

          <form className="surface-panel p-6">
            <h2 className="text-lg font-semibold text-foreground">Send a message</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Input label="First name" placeholder="First name" />
              <Input label="Last name" placeholder="Last name" />
              <div className="sm:col-span-2">
                <Input label="Email" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block space-y-2">
                  <span className="text-sm font-semibold text-foreground">Message</span>
                  <textarea className="field-base min-h-40 resize-none" placeholder="How can we help?" />
                </label>
              </div>
            </div>
            <Button className="mt-6">Send message</Button>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default ContactPage;
