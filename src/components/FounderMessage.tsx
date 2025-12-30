import { Quote, Heart, Sparkles } from "lucide-react";

const FounderMessage = () => {
  return (
    <section className="py-16 px-4 bg-muted/40 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="glass-card-elevated p-10 md:p-12 fade-in-up">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Quote Icon with decoration */}
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-soft glow-pulse">
                <Quote className="w-8 h-8 text-primary-foreground" />
              </div>
              <Heart className="absolute -bottom-2 -right-2 w-6 h-6 text-destructive float-animation" />
            </div>

            {/* Message Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-warning" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">A Personal Note</span>
              </div>
              
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                "Hi, this is <span className="text-shimmer font-bold">Pushkar</span>, Founder of{" "}
                <span className="font-bold">Fiale Technologies</span>.
                <br /><br />
                Thank you for reaching out — our dedicated team will review your details and connect with you shortly. We're excited to explore how we can help you achieve your goals!"
              </blockquote>

              {/* Founder Signature */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-glow text-2xl">
                  <span className="text-primary-foreground font-bold">P</span>
                </div>
                <div>
                  <p className="font-bold text-xl text-foreground">Pushkar</p>
                  <p className="text-muted-foreground font-medium">Founder & CEO, Fiale Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
