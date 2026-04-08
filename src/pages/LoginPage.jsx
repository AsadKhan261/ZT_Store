import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

function LoginPage() {
  return (
    <section className="section-space">
      <Container className="max-w-xl">
        <div className="surface-panel p-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Account</p>
          <h1 className="mt-4 font-display text-5xl leading-none text-foreground">Welcome back</h1>
          <p className="mt-4 text-sm leading-7 text-muted">
            Sign in to manage orders, saved details, and a smoother repeat purchase flow.
          </p>
          <form className="mt-8 space-y-4">
            <Input label="Email address" placeholder="you@example.com" />
            <Input label="Password" type="password" placeholder="Enter your password" />
            <div className="flex items-center justify-between text-sm">
              <Link to="/forgot-password" className="text-muted-strong transition hover:text-foreground">
                Forgot password?
              </Link>
              <Link to="/signup" className="text-muted-strong transition hover:text-foreground">
                Create account
              </Link>
            </div>
            <Button className="w-full">Sign in</Button>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default LoginPage;
