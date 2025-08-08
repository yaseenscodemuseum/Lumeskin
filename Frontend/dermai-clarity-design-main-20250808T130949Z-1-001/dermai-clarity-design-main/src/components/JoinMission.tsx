import { Button } from "@/components/ui/button";
import { Code, Palette, Users, ArrowRight } from "lucide-react";

const JoinMission = () => {
  const roles = [
    {
      icon: Code,
      title: "Developers",
      description: "Help build the future of AI-powered healthcare",
      action: "Join Dev Team"
    },
    {
      icon: Palette,
      title: "Designers",
      description: "Create beautiful, intuitive experiences for users",
      action: "Design with Us"
    },
    {
      icon: Users,
      title: "Ambassadors",
      description: "Spread the word and help us reach more people",
      action: "Become Ambassador"
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building more than a product—we're creating infrastructure to redefine skincare. 
            Join our community of innovators, creators, and healthcare advocates.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {roles.map((role, index) => (
            <div key={index} className="glass-card p-8 text-center hover:scale-105 transition-all duration-300 group glow-effect">
              <div className="mx-auto w-16 h-16 mb-6 relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-gradient-primary p-4 rounded-2xl">
                  <role.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {role.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {role.description}
              </p>
              
              <Button variant="outline" className="glass-card border-primary/30 hover:bg-primary/10 transition-all duration-300 group">
                {role.action}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="glass-card p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Make an Impact?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a seasoned professional or just starting your journey, 
            there's a place for you in our mission to democratize skincare.
          </p>
          <Button className="btn-gradient text-lg px-8 py-4">
            Get Involved Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinMission;