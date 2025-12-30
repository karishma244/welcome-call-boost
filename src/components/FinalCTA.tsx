import { ArrowRight, Sparkles, Zap, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";

interface FinalCTAProps {
  onBookCallClick: () => void;
}

const FinalCTA = ({ onBookCallClick }: FinalCTAProps) => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="glass-card-elevated p-10 md:p-14 text-center scale-in border-2 border-primary/20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-5 py-2.5 rounded-full text-sm font-bold mb-8 shadow-soft">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Limited Time Opportunity
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
            Ready to Transform <br />
            <span className="text-shimmer">Your Business?</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Join 500+ successful businesses who have partnered with Fiale Technologies. 
            Your free consultation is just one click away.
          </p>

          {/* Countdown Timer */}
          <div className="mb-12">
            <CountdownTimer />
          </div>

          {/* CTA Button */}
          <Button 
            size="lg"
            className="gradient-primary text-primary-foreground shadow-glow-strong btn-glow text-xl px-12 py-8 group"
            onClick={onBookCallClick}
          >
            <Zap className="w-6 h-6 mr-3" />
            Book Your Free Consultation
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Button>

          {/* Urgency line */}
          <p className="text-base text-muted-foreground mt-8 flex items-center justify-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-warning"></span>
            </span>
            <span className="font-semibold">Spots filling fast</span> — Only a few slots left this week
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-10 pt-10 border-t border-border/50">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-success" />
              </div>
              <span className="font-medium">100% Free</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                <Clock className="w-4 h-4 text-success" />
              </div>
              <span className="font-medium">30-Min Strategy Session</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-success" />
              </div>
              <span className="font-medium">No Obligations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
