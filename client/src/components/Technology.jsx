import { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';

export function Technology() {
  const canvasRef = useRef(null);
  const parallaxLeft = useParallax(0.8);
  const parallaxRight = useParallax(0.6);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let rotation = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const drawNetwork = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) / 3;

      rotation += 0.005;

      const nodes = 8;
      for (let i = 0; i < nodes; i++) {
        const angle = (i / nodes) * Math.PI * 2 + rotation;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 136, 0.6)';
        ctx.fill();

        for (let j = i + 1; j < nodes; j++) {
          const angle2 = (j / nodes) * Math.PI * 2 + rotation;
          const x2 = centerX + Math.cos(angle2) * radius;
          const y2 = centerY + Math.sin(angle2) * radius;

          ctx.beginPath();
          ctx.strokeStyle = 'rgba(0, 102, 255, 0.2)';
          ctx.lineWidth = 1;
          ctx.moveTo(x, y);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }

      ctx.beginPath();
      ctx.arc(centerX, centerY, 12, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 102, 255, 0.8)';
      ctx.fill();

      animationFrameId = requestAnimationFrame(drawNetwork);
    };

    resizeCanvas();
    drawNetwork();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const features = [
    'Advanced AI & Machine Learning Integration',
    'Real-time Data Processing & Analytics',
    'Scalable Cloud-Native Architecture',
    'Enterprise-Grade Security Protocols',
    'Automated DevOps Workflows',
    'Continuous Innovation & Updates',
  ];

  return (
    <section id="technology" className="relative py-24 lg:py-32 bg-gradient-to-b from-background to-card overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-neural/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div style={{ transform: `translateY(${-parallaxLeft}px)` }}>
            <div className="inline-block px-4 py-2 rounded-full bg-neural/10 border border-neural/20 mb-6" data-testid="badge-technology">
              <span className="text-sm font-semibold text-neural">Technology Stack</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6" data-testid="text-technology-title">
              Built on Modern Architecture
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed" data-testid="text-technology-description">
              Our solutions leverage the latest technologies and best practices to deliver
              exceptional performance, scalability, and reliability for your business.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group"
                  data-testid={`feature-${feature.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-neural group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-base text-foreground/80 group-hover:text-foreground transition-colors" data-testid={`text-feature-${index}`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" style={{ transform: `translateY(${-parallaxRight}px)` }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-neural/20 to-secondary/20 rounded-2xl blur-2xl" />
            <canvas
              ref={canvasRef}
              className="relative w-full h-96 lg:h-[500px] rounded-2xl bg-card/30 backdrop-blur-sm border border-border"
              data-testid="canvas-technology-visualization"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
