import {
  ArrowRight,
  Headphones,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Stethoscope,
  Truck,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import NewsletterSection from '../components/common/NewsletterSection';
import ProductCard from '../components/product/ProductCard';
import CategoryCard from '../components/product/CategoryCard';
import TrustCard from '../components/home/TrustCard';
import { categories } from '../data/categories';
import { featuredProducts, trendingProducts } from '../data/products';
import { metrics, trustHighlights } from '../data/site';
import { testimonials } from '../data/testimonials';

const icons = [ShieldCheck, Truck, Headphones];
const brandPillars = [
  { label: 'Natural Ingredients', icon: Leaf },
  { label: 'Family Wellness', icon: HeartPulse },
  { label: 'Thoughtful Care', icon: Stethoscope },
  { label: 'Fast Support', icon: Headphones },
];

const brandImages = {
  shampooFront:
    'https://ztonlinestore.com/cdn/shop/files/ShampooT_e410cacc-ce61-43c4-8f7b-03fd14abc3da.jpg?v=1758541297&width=3840',
  shampooBack:
    'https://ztonlinestore.com/cdn/shop/files/ShapooBackWhiteBack.jpg?v=1758541387&width=3840',
  duo:
    'https://ztonlinestore.com/cdn/shop/files/download.png?v=1759210582&width=3840',
  serum:
    'https://ztonlinestore.com/cdn/shop/files/FaceSerumT.jpg?v=1758540559&width=3840',
  granola:
    'https://ztonlinestore.com/cdn/shop/files/GranolaTitile.jpg?v=1758547693&width=3840',
  babyGrow:
    'https://ztonlinestore.com/cdn/shop/files/BAByGrowTTT.jpg?v=1758545772&width=3840',
};

function HomePage() {
  return (
    <>
      <section className="section-space overflow-hidden pt-6 lg:pt-8">
        <Container>
          <div className="relative overflow-hidden rounded-[2.4rem] border border-[#d7e0cf] bg-[linear-gradient(135deg,rgba(244,248,239,0.98),rgba(232,241,225,0.95)_48%,rgba(248,250,245,0.94))] px-5 py-6 shadow-[0_24px_80px_rgba(78,98,68,0.08)] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <div className="absolute -left-20 top-8 h-48 w-48 rounded-full bg-[#dfead4] blur-3xl" />
            <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#eef5e6] blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-[#d9e3cf] bg-white/85 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-accent shadow-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-[#98ab7b]" />
                Wellness & Beauty Essentials
              </div>

              <div className="space-y-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
                  Natural care, everyday confidence
                </p>
                <h1 className="font-display text-[3.15rem] leading-[0.92] text-balance text-foreground sm:text-[4.25rem] lg:text-[5.1rem]">
                  Trusted wellness, skincare, and family care for a beautifully balanced routine.
                </h1>
                <p className="max-w-xl text-[15px] leading-8 text-muted-strong sm:text-base">
                  Shop trusted essentials for haircare, skincare, nutrition, and family wellness, thoughtfully chosen to bring ease and confidence to everyday routines.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button as="link" href="/shop">
                  Shop Now <ArrowRight size={16} />
                </Button>
                <Button as="link" href="/shop" variant="secondary">
                  Explore Categories
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {brandPillars.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-[1.2rem] border border-[#d9e3cf] bg-white/72 px-4 py-3 shadow-[0_12px_30px_rgba(78,98,68,0.05)] backdrop-blur-sm"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e4edd8] text-accent">
                      <Icon size={17} />
                    </span>
                    <span className="text-sm font-semibold text-foreground">{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-1 text-sm text-muted">
                {metrics.map((metric) => (
                  <div key={metric.label} className="flex items-center gap-3">
                    <span className="text-lg font-bold text-foreground">{metric.value}</span>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55 }}
              className="relative"
            >
              <div className="absolute left-8 top-8 hidden h-28 w-28 rounded-full bg-white/70 blur-2xl lg:block" />
              <div className="grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
                <div className="rounded-[2rem] border border-[#d7e0cf] bg-white/74 p-4 shadow-[0_24px_60px_rgba(78,98,68,0.08)] backdrop-blur-sm">
                  <div className="grid gap-4">
                    <div className="overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,#f5f8ef,#ecf3e4)] p-4">
                      <img
                        src={brandImages.duo}
                        alt="Dr. Zain haircare set"
                        className="h-[330px] w-full rounded-[1.2rem] object-cover"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <img
                        src={brandImages.serum}
                        alt="Dr. Zain Face Serum"
                        className="h-40 w-full rounded-[1.3rem] border border-[#e3eadb] bg-white object-cover"
                      />
                      <img
                        src={brandImages.granola}
                        alt="Dr. Zain Granola"
                        className="h-40 w-full rounded-[1.3rem] border border-[#e3eadb] bg-white object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-[1.8rem] border border-[#d7e0cf] bg-white/78 p-6 shadow-[0_20px_50px_rgba(78,98,68,0.08)] backdrop-blur-sm">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent/80">
                      Thoughtfully selected care
                    </p>
                    <h2 className="mt-4 font-display text-4xl leading-[0.95] text-foreground">
                      Natural care for healthier routines and everyday confidence.
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-muted">
                      Discover carefully chosen favorites across beauty, wellness, and nutrition in a calmer shopping experience designed to feel clear and effortless.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    <div className="rounded-[1.6rem] border border-[#d7e0cf] bg-[#eef5e6] p-3 shadow-[0_16px_40px_rgba(78,98,68,0.06)]">
                      <img
                        src={brandImages.shampooFront}
                        alt="Dr. Zain shampoo"
                        className="h-56 w-full rounded-[1.2rem] bg-white object-cover"
                      />
                    </div>
                    <div className="rounded-[1.6rem] border border-[#d7e0cf] bg-white/78 p-3 shadow-[0_16px_40px_rgba(78,98,68,0.06)]">
                      <img
                        src={brandImages.shampooBack}
                        alt="Dr. Zain shampoo back"
                        className="h-56 w-full rounded-[1.2rem] bg-white object-cover"
                      />
                    </div>
                  </div>

                  <div className="rounded-[1.8rem] border border-[#d7e0cf] bg-[linear-gradient(180deg,rgba(236,244,229,0.9),rgba(249,251,246,0.94))] p-4 shadow-[0_20px_50px_rgba(78,98,68,0.06)]">
                    <div className="grid items-center gap-4 sm:grid-cols-[0.62fr_1fr]">
                      <img
                        src={brandImages.babyGrow}
                        alt="Dr. Zain Baby Grow"
                        className="h-28 w-full rounded-[1.2rem] object-cover"
                      />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                          Family wellness
                        </p>
                        <p className="mt-2 text-sm leading-7 text-muted-strong">
                          Trusted products for everyday routines, thoughtful self-care, and growing family needs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden items-center gap-4 px-2 pt-1 lg:flex">
                    <div className="h-px flex-1 bg-[#d5dcbf]" />
                    <div className="h-2.5 w-2.5 rotate-45 bg-[#9cb087]" />
                    <div className="h-px flex-1 bg-[#d5dcbf]" />
                  </div>
                </div>
              </div>
            </motion.div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[2rem] border border-[#dbe4d2] bg-[linear-gradient(180deg,rgba(238,245,230,0.92),rgba(247,250,244,0.92))] p-7 shadow-[0_18px_48px_rgba(78,98,68,0.05)] sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
                Everyday essentials
              </p>
              <h2 className="mt-4 font-display text-4xl leading-none text-foreground sm:text-5xl">
                A calmer way to explore the collections you reach for most.
              </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-muted">
                  Find daily essentials by category and explore the collections most loved for haircare, skincare, and nutrition.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  image: brandImages.serum,
                  title: 'Skincare',
                  tone: 'bg-white/80',
                },
                {
                  image: brandImages.duo,
                  title: 'Haircare',
                  tone: 'bg-[#edf5e5]',
                },
                {
                  image: brandImages.granola,
                  title: 'Nutrition',
                  tone: 'bg-white/80',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-[1.8rem] border border-[#dbe4d2] p-3 shadow-[0_16px_40px_rgba(78,98,68,0.05)] ${item.tone}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-44 w-full rounded-[1.2rem] object-cover"
                  />
                  <p className="px-2 pb-2 pt-4 text-sm font-semibold text-foreground">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <SectionTitle
            eyebrow="Shop by category"
            title="Carefully arranged collections for every daily routine."
            description="Browse beauty, nutrition, and wellness favorites through a cleaner category experience."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-[#f3f7ee]">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle
              eyebrow="Featured"
              title="Best-loved essentials chosen for daily confidence."
              description="A refined selection of haircare, skincare, and nutrition products with clear information and polished presentation."
            />
            <Button as="link" href="/shop" variant="secondary">
              View all products
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="overflow-hidden rounded-[2rem] border border-[#dbe4d2] bg-[linear-gradient(180deg,rgba(239,245,233,0.92),rgba(250,251,247,0.95))] px-6 py-10 shadow-[0_18px_48px_rgba(78,98,68,0.05)] lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Why customers choose us</p>
                <h2 className="font-display text-4xl leading-none text-foreground sm:text-5xl">
                  Quality care, clear support, and a smoother way to shop.
                </h2>
                <p className="text-sm leading-7 text-muted">
                  From product discovery to checkout, every step is designed to feel calmer, clearer, and more reassuring for beauty and wellness customers.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                {trustHighlights.map((highlight, index) => {
                  const Icon = icons[index];
                  return <TrustCard key={highlight.title} icon={Icon} title={highlight.title} description={highlight.description} />;
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <SectionTitle
            eyebrow="Trending now"
            title="Current favorites across beauty, wellness, and nutrition."
            description="Explore products customers are reaching for right now."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trendingProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-[#f3f7ee]">
        <Container>
          <SectionTitle
            eyebrow="Customer confidence"
            title="Trusted by families building better everyday routines."
            description="Thoughtful products, dependable support, and a cleaner shopping experience customers can return to with confidence."
            align="center"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="surface-panel p-6">
                <p className="text-sm leading-7 text-muted-strong">“{testimonial.quote}”</p>
                <div className="mt-6">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <NewsletterSection />
    </>
  );
}

export default HomePage;
