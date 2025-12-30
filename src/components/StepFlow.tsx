import { Play, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StepFlowProps {
  onBookCallClick: () => void;
}

const StepFlow = ({ onBookCallClick }: StepFlowProps) => {
  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full gradient-success text-success-foreground flex items-center justify-center text-sm font-bold">
              ✓
            </div>
            <span className="text-sm font-medium text-foreground hidden sm:inline">Registration</span>
          </div>
          <div className="w-12 sm:w-24 h-0.5 bg-gradient-to-r from-success to-primary" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary text-primary flex items-center justify-center text-sm font-bold">
              2
            </div>
            <span className="text-sm font-medium text-foreground hidden sm:inline">Next Steps</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Step 1: Watch Training */}
          <div className="glass-card p-6 hover-lift fade-in-up stagger-1 opacity-0">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                  Step 1
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Watch Exclusive Training
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Get instant access to our proven strategies that have helped 250+ professionals scale their business.
                </p>
                <Button variant="outline" className="w-full group border-primary/30 hover:bg-primary/5 hover:border-primary">
                  Watch Training
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Step 2: Book Call */}
          <div className="glass-card p-6 hover-lift fade-in-up stagger-2 opacity-0 border-2 border-primary/30 relative overflow-hidden">
            {/* Recommended badge */}
            <div className="absolute top-0 right-0 gradient-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-xl">
              RECOMMENDED
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-soft">
                <Calendar className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                  Step 2
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Book Your Free Strategy Call
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Choose a date & time that works for you. Limited availability this week!
                </p>
                <Button 
                  className="w-full gradient-primary text-primary-foreground shadow-soft btn-glow group"
                  onClick={onBookCallClick}
                >
                  Select Date & Time
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepFlow;
