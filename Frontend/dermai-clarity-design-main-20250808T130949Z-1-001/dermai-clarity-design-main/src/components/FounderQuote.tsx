import { Quote } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const FounderQuote = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-glow rounded-full blur-3xl opacity-30" />
          
          <div className="grid md:grid-cols-4 gap-8 items-center relative">
            {/* Quote icon */}
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                <Quote className="h-8 w-8 text-white" />
              </div>
            </div>
            
            {/* Quote content */}
            <div className="md:col-span-2 text-center md:text-left">
              <blockquote className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed mb-6">
                "We're not building a product. We're building infrastructure to redefine skincare."
              </blockquote>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <img 
                  src={founderImage} 
                  alt="Abdulrahman Khalifa" 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30"
                />
                <div className="text-left">
                  <div className="font-semibold text-foreground">Abdulrahman Khalifa</div>
                  <div className="text-sm text-muted-foreground">Founder & CEO</div>
                </div>
              </div>
            </div>
            
            {/* Founder image large */}
            <div className="md:col-span-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-lg opacity-30" />
                <img 
                  src={founderImage} 
                  alt="Abdulrahman Khalifa, Founder" 
                  className="relative w-32 h-32 rounded-3xl object-cover ring-2 ring-primary/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderQuote;