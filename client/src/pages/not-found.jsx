import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-card">
      <div className="text-center px-6">
        <div className="mb-8">
          <h1 className="text-9xl font-display font-bold bg-gradient-to-r from-primary to-neural bg-clip-text text-transparent">
            404
          </h1>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Home className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </main>
  );
}