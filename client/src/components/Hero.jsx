
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NeuralBackground } from './NeuralBackground';
import { Button } from '../components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const parallaxBg = useParallax(0.5);
  const parallax3D = useParallax(0.7);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card">
      <div className="absolute inset-0" style={{ transform: `translateY(${-parallaxBg}px)` }}>
        <NeuralBackground density={120} speed={0.3} />
      </div>
      
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="absolute inset-0" style={{ transform: `translateY(${-parallax3D}px)` }}>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neural/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm" data-testid="badge-innovation">
          <Sparkles className="w-4 h-4 text-neural" />
          <span className="text-sm font-medium text-foreground">Innovating the Future of Technology</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-foreground mb-6 leading-tight" data-testid="text-hero-title">
          Innovate. Connect.{' '}
          <span className="bg-gradient-to-r from-primary via-secondary to-neural bg-clip-text text-transparent">
            Transform
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
          Pioneering the Future of Modern Technology with cutting-edge solutions
          that drive innovation and transform businesses
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 group"
              data-testid="button-get-started"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/services">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary/30 hover:border-primary/50 backdrop-blur-sm"
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto" data-testid="hero-stats-grid">
          {[
            { value: '500+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '50+', label: 'Expert Team' },
            { value: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-hero-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2" data-testid={`text-hero-stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-sm text-foreground/60" data-testid={`text-hero-stat-label-${index}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
