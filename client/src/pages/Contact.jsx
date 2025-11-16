
import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-semibold text-primary">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Let's Build Something <span className="bg-gradient-to-r from-primary to-neural bg-clip-text text-transparent">Amazing</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
            <p className="text-foreground/70">contact@noesisi.tech</p>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-neural/10 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-neural" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-foreground/70">+1 (555) 123-4567</p>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Office</h3>
            <p className="text-foreground/70">San Francisco, CA 94102</p>
          </Card>
        </div>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-card-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
                rows={6}
                className="w-full"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Send Message
              <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </Card>
      </div>
    </main>
  );
}
