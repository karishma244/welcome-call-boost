import { Shield, Lock } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <div className="glass-card p-6 md:p-8 text-center fade-in-up">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-success" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-3">
            <Lock className="w-4 h-4 text-muted-foreground" />
            <p className="text-lg font-medium text-foreground">
              Your Information is Safe
            </p>
          </div>

          <p className="text-muted-foreground max-w-md mx-auto">
            Your information is safe and will never be shared. We respect your privacy and are committed to protecting your data.
          </p>

          {/* Credibility line */}
          <div className="mt-6 pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              Trusted by businesses across industries • Committed to excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
