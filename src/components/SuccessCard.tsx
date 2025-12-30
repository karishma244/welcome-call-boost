import { CheckCircle2, Sparkles, PartyPopper, Stars } from "lucide-react";

const SuccessCard = () => {
  return (
    <section className="py-16 px-4 gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Stars className="w-20 h-20 text-primary float-animation" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <PartyPopper className="w-16 h-16 text-warning float-animation-delayed" />
      </div>

      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="glass-card-elevated p-10 md:p-14 text-center scale-in">
          {/* Success Icon with glow */}
          <div className="relative inline-flex mb-8">
            <div className="w-28 h-28 rounded-full gradient-success flex items-center justify-center shadow-glow-strong glow-pulse">
              <CheckCircle2 className="w-14 h-14 text-success-foreground" />
            </div>
            <Sparkles className="absolute -top-3 -right-3 w-8 h-8 text-warning float-animation" />
            <Sparkles className="absolute -bottom-2 -left-4 w-6 h-6 text-primary float-animation-delayed" />
          </div>

          {/* Headline with shimmer */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Thank You!{" "}
            <span className="text-shimmer">Your Details Have Been Successfully Submitted</span>{" "}
            <span className="inline-block animate-bounce">🎉</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Our team at <span className="font-bold text-foreground">Fiale Technologies</span> has received your information and is excited to connect with you.
          </p>

          {/* Status indicator */}
          <div className="mt-10 inline-flex items-center gap-3 bg-success/15 px-6 py-4 rounded-full text-base font-semibold text-success border-2 border-success/30 shadow-soft">
            <div className="relative">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-success rounded-full animate-ping" />
            </div>
            Submission Received Successfully
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCard;
