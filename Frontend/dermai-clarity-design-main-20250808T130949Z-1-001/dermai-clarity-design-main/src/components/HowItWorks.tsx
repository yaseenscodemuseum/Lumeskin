import { Upload, Brain, HeartHandshake } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Selfie",
      description: "Take a clear photo of your face using our advanced camera interface with AI-guided positioning.",
      step: "01"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our medical-grade AI analyzes your skin using deep learning algorithms trained on millions of dermatological images.",
      step: "02"
    },
    {
      icon: HeartHandshake,
      title: "Personalized Recommendations",
      description: "Receive tailored treatment recommendations and instant connections to nearby pharmacies and beauty centers.",
      step: "03"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">DermaAI</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to revolutionize your skincare journey with cutting-edge AI technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connecting line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-4 z-0" />
              )}
              
              <div className="glass-card p-8 text-center hover:scale-105 transition-all duration-500 glow-effect group-hover:shadow-2xl">
                {/* Step number */}
                <div className="text-6xl font-bold text-primary/20 mb-4 select-none">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="mx-auto w-16 h-16 mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-lg opacity-50" />
                  <div className="relative bg-gradient-primary p-4 rounded-2xl">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;