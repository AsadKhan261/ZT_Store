import { ArrowRight } from 'lucide-react';
import Button from './Button';
import Container from './Container';
import Input from './Input';

function NewsletterSection() {
  return (
    <section className="section-space">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-border bg-accent px-6 py-10 text-white shadow-[var(--shadow-soft)] sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
              Stay in the loop
            </p>
            <h2 className="font-display text-4xl leading-none sm:text-5xl">
              Wellness launches, routine tips, and exclusive drops.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-white/75">
              Join a curated newsletter for product highlights, restock alerts, and elevated care routines.
            </p>
          </div>

          <form className="mt-8 space-y-3 lg:mt-0 lg:w-full lg:max-w-md">
            <Input
              aria-label="Email address"
              placeholder="Enter your email"
              className="border-white/15 bg-white/95 text-foreground"
            />
            <Button className="w-full bg-highlight text-white hover:bg-[#b57a45]">
              Subscribe <ArrowRight size={16} />
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default NewsletterSection;
