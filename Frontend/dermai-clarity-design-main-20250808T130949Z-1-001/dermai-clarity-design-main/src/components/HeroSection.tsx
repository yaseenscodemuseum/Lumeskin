import { Button } from "@/components/ui/button";
import { ArrowRight, Scan, Brain, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-bg-tech.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow rounded-full blur-3xl animate-pulse opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-radial from-secondary/20 to-transparent rounded-full blur-2xl hero-float" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Company Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/5525b7b6-6b63-4dc4-b280-2bee0a229686.png" 
              alt="DermaAI Logo" 
              className="h-24 w-auto filter drop-shadow-lg"
            />
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
              AI-Powered Clarity
            </span>
            <br />
            <span className="text-foreground">for Your Skin</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto font-medium">
            Scan. Diagnose. Treat. Connect.
          </p>
          
          {/* Enhanced description */}
          <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Revolutionary AI technology that analyzes your skin in seconds, detects irregularities with medical precision, 
            and connects you to personalized treatments and nearby specialists.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-gradient text-lg px-8 py-4 min-w-[180px] group">
              Try Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4 min-w-[180px] glass-card border-primary/30 hover:bg-primary/10 transition-all duration-300">
              Join Waitlist
            </Button>
          </div>
          
          {/* Floating feature icons */}
          <div className="hidden lg:flex justify-center space-x-12 mt-16 opacity-60">
            <div className="flex flex-col items-center space-y-2 hero-float" style={{ animationDelay: '0s' }}>
              <div className="p-4 glass-card pulse-glow">
                <Scan className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">AI Scan</span>
            </div>
            <div className="flex flex-col items-center space-y-2 hero-float" style={{ animationDelay: '2s' }}>
              <div className="p-4 glass-card pulse-glow">
                <Brain className="h-8 w-8 text-secondary" />
              </div>
              <span className="text-sm text-muted-foreground">Analysis</span>
            </div>
            <div className="flex flex-col items-center space-y-2 hero-float" style={{ animationDelay: '4s' }}>
              <div className="p-4 glass-card pulse-glow">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">Connect</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;