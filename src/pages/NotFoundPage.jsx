import Container from '../components/common/Container';
import EmptyState from '../components/common/EmptyState';

function NotFoundPage() {
  return (
    <section className="section-space">
      <Container>
        <EmptyState
          title="This page doesn’t exist"
          description="The route could not be found. Return to the homepage or keep browsing the store."
          actionLabel="Back home"
          actionHref="/"
        />
      </Container>
    </section>
  );
}

export default NotFoundPage;
