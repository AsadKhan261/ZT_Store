import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import { faqCategories } from '../data/faqs';

function FAQPage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () =>
      faqCategories.map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.question.toLowerCase().includes(query.toLowerCase()) ||
            item.answer.toLowerCase().includes(query.toLowerCase()),
        ),
      })),
    [query],
  );

  return (
    <section className="section-space">
      <Container>
        <SectionTitle
          eyebrow="FAQ"
          title="A searchable help hub with cleaner category structure."
          description="Shipping, payment, returns, ordering, and account guidance are grouped to reduce support friction."
        />

        <div className="relative mt-10">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search common questions"
            className="field-base pl-12"
          />
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
        </div>

        <div className="mt-10 space-y-6">
          {filtered.map((category) => (
            <div key={category.id} className="surface-panel p-6">
              <h2 className="text-lg font-semibold text-foreground">{category.label}</h2>
              <div className="mt-5 space-y-4">
                {category.items.map((item) => (
                  <details key={item.question} className="rounded-[1.2rem] border border-border bg-surface p-5">
                    <summary className="cursor-pointer list-none text-base font-semibold text-foreground">
                      {item.question}
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
                  </details>
                ))}
                {!category.items.length ? <p className="text-sm text-muted">No matching questions in this category.</p> : null}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FAQPage;
