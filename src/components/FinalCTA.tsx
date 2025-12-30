import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";

interface FinalCTAProps {
  onBookCallClick: () => void;
}

const FinalCTA = ({ onBookCallClick }: FinalCTAProps) => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="glass-card p-8 md:p-12 text-center scale-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Limited Time Offer
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Scale Your Business?
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join 250+ professionals who have transformed their business with our proven strategy. 
            Your free call is just one click away.
          </p>

          {/* Countdown Timer */}
          <div className="mb-10">
            <CountdownTimer />
          </div>

          {/* CTA Button */}
          <Button 
            size="lg"
            className="gradient-primary text-primary-foreground shadow-glow btn-glow text-lg px-10 py-7 group"
            onClick={onBookCallClick}
          >
            <Zap className="w-5 h-5 mr-2" />
            Confirm My Free Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Urgency line */}
          <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-warning rounded-full animate-pulse" />
            Spots filling fast — Only 3 slots left this week
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 border-t border-border/50">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                <span className="text-success text-xs">✓</span>
              </div>
              No credit card required
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                <span className="text-success text-xs">✓</span>
              </div>
              30-minute strategy session
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                <span className="text-success text-xs">✓</span>
              </div>
              100% free, no obligations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
