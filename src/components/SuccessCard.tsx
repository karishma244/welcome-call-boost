import { CheckCircle2, Sparkles } from "lucide-react";

const SuccessCard = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="glass-card p-8 md:p-12 text-center scale-in">
          {/* Success Icon */}
          <div className="relative inline-flex mb-6">
            <div className="w-20 h-20 rounded-full gradient-success flex items-center justify-center shadow-glow">
              <CheckCircle2 className="w-10 h-10 text-success-foreground" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-warning float-animation" />
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            You're In! <span className="inline-block animate-bounce">🎉</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Your registration was successful. Check your inbox for confirmation and get ready for the next step!
          </p>

          {/* Email indicator */}
          <div className="mt-6 inline-flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            Confirmation email sent
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCard;
