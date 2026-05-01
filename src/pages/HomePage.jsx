import {
  ArrowRight,
  ArrowUpRight,
  Headphones,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Stethoscope,
  Truck,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import NewsletterSection from '../components/common/NewsletterSection';
import TrustCard from '../components/home/TrustCard';
import { categories } from '../data/categories';
import { featuredProducts, trendingProducts } from '../data/products';
import { metrics, trustHighlights } from '../data/site';
import { testimonials } from '../data/testimonials';
import { formatCurrency } from '../utils/format';

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

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const staggerGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const editorialCollections = [
  {
    title: 'Skincare ritual',
    label: 'Daily glow',
    image: brandImages.serum,
    href: '/shop?category=Skincare',
  },
  {
    title: 'Haircare edit',
    label: 'Root to length',
    image: brandImages.duo,
    href: '/shop?category=Haircare',
  },
  {
    title: 'Wellness pantry',
    label: 'Balanced nutrition',
    image: brandImages.granola,
    href: '/shop?category=Food',
  },
];

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-14 sm:pb-24 sm:pt-18 lg:pb-28 lg:pt-20">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(145deg,#fbfcf7_0%,#eef5e7_45%,#f8faf4_100%)]" />
        <div className="absolute left-[-8rem] top-16 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#dfead2]/75 blur-3xl" />
        <div className="absolute right-[-10rem] top-8 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#f2dfc6]/45 blur-3xl" />
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[0.86fr_1.14fr] xl:gap-16">
            <motion.div variants={staggerGroup} initial="hidden" animate="visible" className="max-w-[590px] space-y-8">
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.24em] text-accent"
              >
                <span className="h-px w-10 bg-accent/45" />
                Wellness & Beauty
              </motion.div>

              <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="space-y-6">
                <h1 className="font-display text-[4rem] leading-[0.9] text-balance text-foreground sm:text-[5.6rem] lg:text-[6.2rem] xl:text-[7rem]">
                  Rituals for luminous everyday care.
                </h1>
                <p className="max-w-[35rem] text-base leading-8 text-muted-strong sm:text-lg sm:leading-9">
                  A refined selection of wellness, skincare, haircare, and family essentials presented with the calm clarity of a luxury retail experience.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="flex flex-col gap-3 pt-1 sm:flex-row">
                <Button as="link" href="/shop" className="px-6 shadow-[0_16px_34px_rgba(77,91,56,0.18)] hover:scale-[1.025]">
                  Shop Now <ArrowRight size={16} />
                </Button>
                <Button as="link" href="/shop" variant="secondary" className="border-accent/20 bg-transparent px-6 hover:scale-[1.025] hover:bg-white/58">
                  Explore Collections
                </Button>
              </motion.div>

              <motion.div variants={staggerGroup} className="grid gap-x-5 gap-y-4 pt-3 sm:grid-cols-2">
                {brandPillars.map(({ label, icon: Icon }) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.22 }}
                    className="flex items-center gap-3"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/80 text-accent shadow-[0_8px_24px_rgba(77,91,56,0.08)]">
                      <Icon size={17} />
                    </span>
                    <span className="text-sm font-bold text-muted-strong">{label}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="flex flex-wrap gap-x-9 gap-y-4 border-t border-accent/10 pt-6 text-sm text-muted">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <span className="block text-2xl font-extrabold text-foreground">{metric.value}</span>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="relative min-h-[520px] sm:min-h-[620px] lg:min-h-[650px]"
            >
              <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-3xl" />
              <motion.img
                src={brandImages.duo}
                alt="Dr. Zain haircare set"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-0 top-8 h-[360px] w-[68%] rounded-[2rem] object-cover shadow-[0_34px_90px_rgba(77,91,56,0.22)] sm:h-[500px] lg:left-4 lg:top-6 lg:h-[550px]"
              />
              <motion.img
                src={brandImages.serum}
                alt="Dr. Zain Face Serum"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.035 }}
                className="absolute right-2 top-0 h-56 w-[38%] rounded-[1.6rem] object-cover shadow-[0_24px_70px_rgba(77,91,56,0.18)] sm:h-72 lg:right-6 lg:top-10"
              />
              <motion.img
                src={brandImages.granola}
                alt="Dr. Zain Granola"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.035 }}
                className="absolute bottom-12 right-0 h-52 w-[42%] rounded-[1.7rem] object-cover shadow-[0_24px_70px_rgba(77,91,56,0.17)] sm:h-72 lg:bottom-8"
              />
              <motion.img
                src={brandImages.shampooFront}
                alt="Dr. Zain shampoo"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.04 }}
                className="absolute bottom-0 left-[20%] h-44 w-[34%] rounded-[1.5rem] object-cover shadow-[0_22px_60px_rgba(77,91,56,0.18)] sm:h-60 lg:left-[23%]"
              />
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="absolute bottom-8 left-0 max-w-[15rem] rounded-3xl bg-white/82 px-5 py-4 shadow-[0_18px_50px_rgba(77,91,56,0.14)] backdrop-blur-xl sm:left-6"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">Curated edit</p>
                <p className="mt-2 text-sm leading-6 text-muted-strong">
                  Carefully chosen essentials for a smoother daily routine.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="bg-[#fbfcf7] py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div className="max-w-md">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Shop the edit</p>
              <h2 className="mt-5 font-display text-5xl leading-[0.95] text-foreground sm:text-6xl">
                Designed around everyday care.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted-strong lg:justify-self-end">
              Move through the collection like a premium shelf: spacious imagery, quiet details, and clear paths into the rituals customers return to most.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {editorialCollections.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.48, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <Link to={item.href} className="group block">
                  <div className="overflow-hidden rounded-[1.7rem] bg-[#eef5e6] shadow-[0_22px_60px_rgba(77,91,56,0.11)]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`h-[360px] w-full object-cover transition duration-700 group-hover:scale-[1.045] ${
                        index === 1 ? 'md:h-[430px]' : 'md:h-[390px]'
                      }`}
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">{item.label}</p>
                      <h3 className="mt-2 font-display text-4xl leading-none text-foreground">{item.title}</h3>
                    </div>
                    <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-accent shadow-[0_10px_28px_rgba(77,91,56,0.1)] transition group-hover:translate-x-1">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f4f8ef] py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Featured products</p>
              <h2 className="mt-5 font-display text-5xl leading-[0.95] text-foreground sm:text-6xl">
                Best-loved essentials, given room to breathe.
              </h2>
            </div>
            <Button as="link" href="/shop" variant="secondary" className="border-accent/20 bg-white/70">
              View all products
            </Button>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {featuredProducts.slice(0, 3).map((product, index) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className={index === 1 ? 'lg:pt-14' : ''}
              >
                <Link to={`/product/${product.slug}`} className="group block">
                  <div className="overflow-hidden rounded-[1.9rem] bg-white shadow-[0_24px_70px_rgba(77,91,56,0.12)]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[390px] w-full object-cover transition duration-700 group-hover:scale-[1.045] xl:h-[450px]"
                    />
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">{product.category}</p>
                      <h3 className="mt-2 text-xl font-bold leading-snug text-foreground">{product.name}</h3>
                      <p className="mt-3 max-w-sm text-sm leading-7 text-muted">{product.shortDescription}</p>
                    </div>
                    <p className="shrink-0 text-lg font-extrabold text-foreground">{formatCurrency(product.price)}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#fbfcf7] py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="sticky top-28 max-w-md">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Collections</p>
              <h2 className="mt-5 font-display text-5xl leading-[0.95] text-foreground sm:text-6xl">
                Four ways into daily wellness.
              </h2>
              <p className="mt-6 text-base leading-8 text-muted-strong">
                Browse by routine, concern, or family need with spacious editorial collection entries.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                  className={index % 2 ? 'sm:mt-14' : ''}
                >
                  <Link to={category.href} className="group block">
                    <div className="overflow-hidden rounded-[1.7rem] bg-[#eef5e6] shadow-[0_20px_56px_rgba(77,91,56,0.1)]">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="h-80 w-full object-cover transition duration-700 group-hover:scale-[1.045]"
                      />
                    </div>
                    <div className="mt-5">
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Category</p>
                      <h3 className="mt-2 font-display text-4xl leading-none text-foreground">{category.name}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{category.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-[#f8faf4] py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="max-w-lg">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Why customers choose us</p>
              <h2 className="mt-5 font-display text-5xl leading-[0.95] text-foreground sm:text-6xl">
                Clear care, thoughtful support, quieter shopping.
              </h2>
              <p className="mt-6 text-base leading-8 text-muted-strong">
                From discovery to checkout, every step is designed to feel calmer, clearer, and more reassuring for beauty and wellness customers.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {trustHighlights.map((highlight, index) => {
                const Icon = icons[index];
                return <TrustCard key={highlight.title} icon={Icon} title={highlight.title} description={highlight.description} />;
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#fbfcf7] py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Trending now</p>
              <h2 className="mt-5 font-display text-5xl leading-[0.95] text-foreground sm:text-6xl">
                Current favorites, quietly elevated.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted-strong lg:justify-self-end">
              Explore the products customers are reaching for right now, presented with larger imagery and a slower, more premium rhythm.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {trendingProducts.slice(0, 4).map((product, index) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -7 }}
              >
                <Link to={`/product/${product.slug}`} className="group block">
                  <div className="overflow-hidden rounded-[1.6rem] bg-[#eef5e6] shadow-[0_18px_52px_rgba(77,91,56,0.1)]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-80 w-full object-cover transition duration-700 group-hover:scale-[1.045]"
                    />
                  </div>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-accent">{product.badge}</p>
                  <h3 className="mt-2 text-lg font-extrabold leading-snug text-foreground">{product.name}</h3>
                  <p className="mt-2 text-sm font-bold text-muted-strong">{formatCurrency(product.price)}</p>
                </Link>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f3f7ee] py-20 sm:py-24 lg:py-28">
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
