import { Settings, Target, Clock, Rocket, Shield, Zap } from "lucide-react";

const ValueCards = () => {
  const benefits = [
    {
      icon: Settings,
      title: "Done-For-You Systems",
      description: "Automation built specifically for your business needs and workflows.",
      gradient: "from-primary to-primary/70",
    },
    {
      icon: Target,
      title: "Industry-Focused Strategy",
      description: "Tailored approach based on your specific market and goals.",
      gradient: "from-success to-success/70",
    },
    {
      icon: Clock,
      title: "More Time & Growth",
      description: "Free up your schedule to focus on what truly matters.",
      gradient: "from-warning to-warning/70",
    },
    {
      icon: Rocket,
      title: "Rapid Implementation",
      description: "Quick deployment so you can see results faster.",
      gradient: "from-primary to-accent/70",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security for your peace of mind.",
      gradient: "from-success to-primary/70",
    },
    {
      icon: Zap,
      title: "24/7 Support",
      description: "Dedicated support team always ready to help.",
      gradient: "from-warning to-destructive/70",
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-14 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Rocket className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            What <span className="text-shimmer">Fiale Technologies</span> Offers
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Our proven framework has helped hundreds of businesses achieve breakthrough results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`glass-card p-8 hover-lift fade-in-up opacity-0 stagger-${index + 1} group`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform`}>
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueCards;
