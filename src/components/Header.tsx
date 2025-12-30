import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-xl text-foreground">ScaleUp</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#" 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
          >
            Home
          </a>
          <Button className="gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-soft btn-glow group">
            Book Your Call
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </nav>

        {/* Mobile CTA */}
        <Button 
          size="sm" 
          className="md:hidden gradient-primary text-primary-foreground shadow-soft"
        >
          Book Call
        </Button>
      </div>
    </header>
  );
};

export default Header;
