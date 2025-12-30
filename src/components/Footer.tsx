import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-border/50 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">Fiale Technologies</span>
              <span className="text-xs text-muted-foreground">Innovation Simplified</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Contact</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Fiale Technologies. Made with 
            <Heart className="w-4 h-4 text-destructive fill-destructive" /> 
            by Pushkar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
