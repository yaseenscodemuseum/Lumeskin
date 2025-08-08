import { Sparkles, Shield, Zap } from "lucide-react";
import aiBrainImage from "@/assets/ai-brain.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Medical-Grade Precision",
      description: "99.2% accuracy in skin condition detection"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "End-to-end encryption for all your data"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Analysis completed in under 3 seconds"
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">DermaAI</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We're pioneering the future of dermatological care through artificial intelligence. 
                Our platform combines cutting-edge computer vision, machine learning, and medical expertise 
                to democratize access to quality skincare analysis.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Built by a team of dermatologists, AI researchers, and healthcare innovators, 
                DermaAI is trusted by thousands of users worldwide to provide accurate, 
                instant skin health insights.
              </p>
            </div>
            
            {/* Feature highlights */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 p-3 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-glow rounded-3xl blur-2xl opacity-50" />
            <div className="relative glass-card p-8 hero-float">
              <img 
                src={aiBrainImage} 
                alt="AI Brain Technology" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;