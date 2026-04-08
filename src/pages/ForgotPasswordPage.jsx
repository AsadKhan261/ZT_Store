import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

function ForgotPasswordPage() {
  return (
    <section className="section-space">
      <Container className="max-w-xl">
        <div className="surface-panel p-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Reset access</p>
          <h1 className="mt-4 font-display text-5xl leading-none text-foreground">Forgot your password?</h1>
          <p className="mt-4 text-sm leading-7 text-muted">
            Enter your email and we’ll send password reset instructions to restore account access.
          </p>
          <form className="mt-8 space-y-4">
            <Input label="Email address" placeholder="you@example.com" />
            <Button className="w-full">Send reset link</Button>
            <p className="text-center text-sm text-muted">
              Remembered it?{' '}
              <Link to="/login" className="font-semibold text-foreground">
                Back to sign in
              </Link>
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default ForgotPasswordPage;
