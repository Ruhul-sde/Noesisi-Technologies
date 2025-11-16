import { Users, Briefcase, Award, TrendingUp } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Briefcase,
      value: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered across industries',
    },
    {
      icon: Users,
      value: '300+',
      label: 'Happy Clients',
      description: 'Building long-term partnerships',
    },
    {
      icon: Award,
      value: '25+',
      label: 'Industry Awards',
      description: 'Recognition for excellence',
    },
    {
      icon: TrendingUp,
      value: '99%',
      label: 'Success Rate',
      description: 'On-time project delivery',
    },
  ];

  const clients = [
    'TechCorp', 'InnovateLabs', 'CloudFirst', 'DataStream', 
    'SecureNet', 'AI Dynamics', 'FutureScale', 'QuantumEdge'
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-gradient-to-b from-card to-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neural/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6" data-testid="badge-stats">
            <span className="text-sm font-semibold text-accent">Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6" data-testid="text-stats-title">
            Delivering Excellence at Scale
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto" data-testid="text-stats-subtitle">
            Our track record speaks for itself. We've helped hundreds of organizations transform their technology landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
              data-testid={`stat-item-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-neural/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative bg-card/50 backdrop-blur-sm border border-card-border rounded-2xl p-8 text-center hover-elevate active-elevate-2 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-neural/20 mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-primary to-neural bg-clip-text text-transparent mb-2" data-testid={`text-stat-value-${index}`}>
                  {stat.value}
                </div>
                
                <div className="text-lg font-semibold text-foreground mb-2" data-testid={`text-stat-label-${index}`}>
                  {stat.label}
                </div>
                
                <div className="text-sm text-foreground/60" data-testid={`text-stat-description-${index}`}>
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wider" data-testid="text-clients-title">
              Trusted by Leading Organizations
            </p>
          </div>
          
          <div className="relative overflow-hidden" data-testid="clients-carousel">
            <div className="flex items-center justify-center gap-12 flex-wrap">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="text-2xl font-display font-semibold text-foreground/30 hover:text-foreground/60 transition-colors duration-300"
                  data-testid={`text-client-logo-${client.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
