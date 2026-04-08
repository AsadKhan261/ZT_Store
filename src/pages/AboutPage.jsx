import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';

function AboutPage() {
  return (
    <section className="section-space">
      <Container>
        <SectionTitle
          eyebrow="About"
          title="A modern brand narrative built around care, trust, and consistency."
          description="ZT Store spans beauty, wellness, nutrition, and family care. The redesign turns that breadth into a more coherent premium retail story."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"
            alt="Brand story"
            className="h-full min-h-[460px] w-full rounded-[1.8rem] object-cover shadow-[var(--shadow-soft)]"
          />
          <div className="space-y-6">
            <div className="surface-panel p-6">
              <h2 className="text-2xl font-semibold text-foreground">Brand story</h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                The original storefront shows a broad catalog and clear ambition. This redesign reframes it as a more polished destination for customers who care about reliable products and a smoother purchase experience.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="surface-panel p-6">
                <h3 className="text-lg font-semibold">Mission</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Make wellness, beauty, and family essentials easier to discover and easier to trust online.
                </p>
              </div>
              <div className="surface-panel p-6">
                <h3 className="text-lg font-semibold">Values</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Clarity, dependable service, product confidence, and a better mobile shopping experience.
                </p>
              </div>
            </div>
            <div className="surface-panel p-6">
              <h3 className="text-lg font-semibold">What changed in the redesign</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Stronger section hierarchy, more balanced visual density, better category entry points, clearer product detail pages, improved cart and checkout UX, and a cleaner tone across the full site.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutPage;
