import { Cpu, Database, Shield, Microscope, Network, Bot } from "lucide-react";

const TechSection = () => {
  const technologies = [
    {
      icon: Bot,
      title: "Deep Learning Models",
      description: "Advanced neural networks trained on 10M+ dermatological images"
    },
    {
      icon: Microscope,
      title: "Computer Vision",
      description: "State-of-the-art image analysis for precise skin condition detection"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Real-time processing with millisecond response times"
    },
    {
      icon: Database,
      title: "Medical Database",
      description: "Comprehensive skin condition database with treatment protocols"
    },
    {
      icon: Network,
      title: "API Integration",
      description: "Seamless connection to pharmacy and clinic networks"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security meeting healthcare standards"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Technology</span> Behind It
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on a foundation of cutting-edge AI research, medical expertise, and enterprise-grade infrastructure 
            to deliver the most accurate and reliable skincare analysis platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300 group glow-effect">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {tech.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "99.2%", label: "Accuracy Rate" },
            { value: "<3s", label: "Analysis Time" },
            { value: "10M+", label: "Training Images" },
            { value: "24/7", label: "Availability" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;