import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

function SignupPage() {
  return (
    <section className="section-space">
      <Container className="max-w-xl">
        <div className="surface-panel p-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Create account</p>
          <h1 className="mt-4 font-display text-5xl leading-none text-foreground">Join ZT Store</h1>
          <p className="mt-4 text-sm leading-7 text-muted">
            Save your details, review orders faster, and make repeat purchases more convenient.
          </p>
          <form className="mt-8 space-y-4">
            <Input label="Full name" placeholder="Your full name" />
            <Input label="Email address" placeholder="you@example.com" />
            <Input label="Password" type="password" placeholder="Create a password" />
            <Button className="w-full">Create account</Button>
            <p className="text-center text-sm text-muted">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-foreground">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default SignupPage;
