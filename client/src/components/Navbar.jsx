
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Technology', href: '/technology' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2" data-testid="navbar-logo">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-neural rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-2xl font-display font-bold text-foreground">
              Noesisi Technologies
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8" data-testid="nav-links-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-base font-medium transition-colors duration-200 ${
                  location.pathname === link.href
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-primary'
                }`}
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button
                size="default"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                data-testid="button-contact"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="md:hidden" data-testid="mobile-menu-container">
            <button
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-t border-border">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block text-base font-medium transition-colors py-2 ${
                  location.pathname === link.href
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-primary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`mobile-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button
                size="default"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                data-testid="button-mobile-contact"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
