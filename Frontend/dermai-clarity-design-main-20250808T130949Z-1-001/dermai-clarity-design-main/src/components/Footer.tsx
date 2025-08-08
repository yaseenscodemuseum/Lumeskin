import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Linkedin, Github, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  const footerLinks = [
    {
      title: "Product",
      links: ["How it Works", "Pricing", "API", "Demo"]
    },
    {
      title: "Company",
      links: ["About", "Careers", "Press", "Contact"]
    },
    {
      title: "Resources",
      links: ["Blog", "Documentation", "Help Center", "Community"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"]
    }
  ];

  return (
    <footer className="bg-background border-t border-border/30">
      {/* Email capture section */}
      <div className="border-b border-border/30 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Be the First to Experience <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">DermaAI</span>
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of early adopters waiting for beta access. Get notified when we launch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="glass-card border-primary/30 bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground"
            />
            <Button className="btn-gradient whitespace-nowrap">
              Get Beta Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
      
      {/* Main footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Brand */}
            <div className="col-span-2">
              <div className="mb-6">
                <h4 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  DermaAI
                </h4>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  Revolutionizing skincare with AI-powered analysis and personalized treatment recommendations.
                </p>
              </div>
              
              {/* Social links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 group"
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Footer links */}
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h5 className="font-semibold text-foreground mb-4">
                  {section.title}
                </h5>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-border/30 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-center md:text-left">
              © 2024 DermaAI. All rights reserved. Made with ❤️ for better skin health.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>🚀 Forbes 30 Under 30 Contender</span>
              <span>🏆 Healthcare Innovation Award</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;