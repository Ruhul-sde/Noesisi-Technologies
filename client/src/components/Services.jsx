import { useEffect, useRef, useState } from 'react';
import { Cloud, Shield, Brain, Code, Database, Zap } from 'lucide-react';
import { Card } from '../components/ui/card';

export function Services() {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => [...new Set([...prev, entry.target.dataset.index])]);
            }, parseInt(entry.target.dataset.index) * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to power your digital transformation journey.',
      color: 'from-primary to-blue-400',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your data and infrastructure from evolving threats.',
      color: 'from-neural to-emerald-400',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and predictive analytics to unlock new business opportunities.',
      color: 'from-accent to-purple-400',
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built with cutting-edge technologies for your unique needs.',
      color: 'from-secondary to-cyan-400',
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics platforms.',
      color: 'from-primary to-indigo-400',
    },
    {
      icon: Zap,
      title: 'DevOps & Automation',
      description: 'Streamline your development pipeline with modern DevOps practices and automation.',
      color: 'from-neural to-green-400',
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="relative py-24 lg:py-32 bg-gradient-to-b from-card to-background overflow-hidden" data-testid="section-services">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neural to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6" data-testid="badge-services">
            <span className="text-sm font-semibold text-primary">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6" data-testid="text-services-title">
            Cutting-Edge IT Solutions
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto" data-testid="text-services-subtitle">
            Empowering businesses with innovative technology services designed for the modern digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="services-grid">
          {services.map((service, index) => (
            <Card
              key={index}
              data-index={index}
              className={`group p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-500 ${
                visibleCards.includes(index.toString()) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="relative">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`} data-testid={`icon-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-foreground" />
                  </div>
                </div>

                <h3 className="text-2xl font-display font-semibold text-foreground mb-4" data-testid={`text-service-title-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed" data-testid={`text-service-description-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}