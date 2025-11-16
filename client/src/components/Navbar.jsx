import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Navigation links (memoized)
  const navLinks = useMemo(
    () => [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'Technology', href: '/technology' },
      { name: 'About', href: '/about' },
    ],
    []
  );

  // handle scroll to add backdrop and shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const toggleMobile = useCallback(() => setMobileOpen((s) => !s), []);

  // framer-motion variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.22 } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.16 } },
  };

  const linkClass = ({ isActive }) =>
    `text-base font-medium transition-colors duration-200 ${
      isActive ? 'text-primary' : 'text-foreground/85 hover:text-primary'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block text-base font-medium transition-colors py-2 ${
      isActive ? 'text-primary' : 'text-foreground/85 hover:text-primary'
    }`;

  return (
    <header
      aria-label="Main navigation"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3" 
            aria-label="Noesisi Technologies"
            data-testid="link-logo"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div className="leading-tight">
              <div className="text-2xl font-display font-extrabold text-foreground">Noesisi</div>
              <div className="text-xs text-foreground/60 -mt-1">Technologies</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav 
            className="hidden md:flex items-center gap-8" 
            aria-label="Desktop navigation" 
            data-testid="nav-links-desktop"
          >
            {navLinks.map((l) => (
              <NavLink 
                key={l.name} 
                to={l.href} 
                className={linkClass}
                data-testid={`link-nav-${l.name.toLowerCase()}`}
              >
                {l.name}
              </NavLink>
            ))}

            <Link to="/contact">
              <Button 
                size="default" 
                className="ml-2 bg-primary hover:bg-primary/95 text-primary-foreground" 
                data-testid="button-contact"
              >
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button
              aria-controls="mobile-menu"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={toggleMobile}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/60"
              data-testid="button-mobile-menu-toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (animated) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden bg-card/95 backdrop-blur-lg border-t border-border"
            data-testid="mobile-menu-container"
          >
            <div className="px-6 py-5 space-y-3">
              {navLinks.map((l) => (
                <NavLink
                  key={l.name}
                  to={l.href}
                  className={mobileLinkClass}
                  onClick={() => setMobileOpen(false)}
                  data-testid={`mobile-link-${l.name.toLowerCase()}`}
                >
                  {l.name}
                </NavLink>
              ))}

              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                <Button 
                  size="default" 
                  className="w-full bg-primary hover:bg-primary/95 text-primary-foreground" 
                  data-testid="button-mobile-contact"
                >
                  Contact Us
                </Button>
              </Link>

              <div className="pt-2 border-t border-border text-sm text-foreground/70">
                <div>
                  Call us: <a href="tel:+0000000000" className="text-primary hover:underline">+00 0000 0000</a>
                </div>
                <div className="mt-1">Partnering on modern web & AI solutions</div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}