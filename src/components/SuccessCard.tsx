import { CheckCircle2, Sparkles } from "lucide-react";

const SuccessCard = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="glass-card p-8 md:p-12 text-center scale-in">
          {/* Success Icon */}
          <div className="relative inline-flex mb-6">
            <div className="w-24 h-24 rounded-full gradient-success flex items-center justify-center shadow-glow">
              <CheckCircle2 className="w-12 h-12 text-success-foreground" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 w-7 h-7 text-warning float-animation" />
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Thank You! Your Details Have Been Successfully Submitted{" "}
            <span className="inline-block animate-bounce">🎉</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Our team at <span className="font-semibold text-foreground">Fiale Technologies</span> has received your information.
          </p>

          {/* Status indicator */}
          <div className="mt-8 inline-flex items-center gap-2 bg-success/10 px-5 py-3 rounded-full text-sm font-medium text-success border border-success/20">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            Submission Received
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCard;
