import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
            <span className="text-primary-foreground font-bold text-lg">F</span>
          </div>
          <span className="font-bold text-xl text-foreground">Fiale Technologies</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            asChild
          >
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Home
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
