import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-2xl border-b border-border/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 slide-in-left">
          <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center shadow-soft glow-pulse">
            <span className="text-primary-foreground font-bold text-xl">F</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-foreground">Fiale Technologies</span>
            <span className="text-xs text-muted-foreground -mt-0.5">Innovation Simplified</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 slide-in-right">
          <a 
            href="/" 
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
          >
            Home
          </a>
          <Button className="gradient-primary text-primary-foreground hover:opacity-90 transition-all duration-300 shadow-soft btn-glow group">
            <Sparkles className="w-4 h-4 mr-2" />
            Get Started
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </nav>

        {/* Mobile CTA */}
        <Button 
          size="sm" 
          className="md:hidden gradient-primary text-primary-foreground shadow-soft"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
