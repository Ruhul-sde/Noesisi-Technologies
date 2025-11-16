
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const footerLinks = {
    Services: ['Cloud Solutions', 'Cybersecurity', 'AI & ML', 'Custom Development', 'Data Analytics', 'DevOps'],
    Company: ['About Us', 'Careers', 'Blog', 'Press', 'Partners', 'Contact'],
    Resources: ['Documentation', 'Case Studies', 'Whitepapers', 'Webinars', 'Support', 'Community'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Security', 'Compliance'],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-card to-background border-t border-border">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-neural to-secondary" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6" data-testid="footer-logo">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-neural rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-display font-bold text-foreground">
                Noesisi Technologies
              </span>
            </Link>
            <p className="text-foreground/70 mb-6 leading-relaxed" data-testid="text-footer-tagline">
              Pioneering the future of technology with innovative solutions
              that transform businesses and drive digital excellence.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-foreground/70" data-testid="text-footer-email">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@noesisi.tech</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/70" data-testid="text-footer-phone">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/70" data-testid="text-footer-address">
                <MapPin className="w-4 h-4 text-primary" />
                <span>San Francisco, CA 94102</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} data-testid={`footer-section-${category.toLowerCase()}`}>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider" data-testid={`text-footer-category-${category.toLowerCase()}`}>
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200"
                      data-testid={`link-footer-${link.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-foreground/60" data-testid="text-footer-copyright">
              © 2024 Noesisi Technologies. All rights reserved.
            </p>

            <div className="flex items-center gap-3" data-testid="social-links-container">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  size="icon"
                  variant="ghost"
                  className="w-9 h-9 hover-elevate"
                  data-testid={`button-footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" data-testid={`icon-social-${social.label.toLowerCase()}`} />
                  <span className="sr-only">{social.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
