import { Settings, Target, Clock } from "lucide-react";

const ValueCards = () => {
  const benefits = [
    {
      icon: Settings,
      title: "Done-For-You Systems",
      description: "Automation built specifically for your business needs and workflows.",
      gradient: "from-primary/10 to-primary/5",
      iconBg: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Target,
      title: "Industry-Focused Strategy",
      description: "Tailored approach based on your specific market and goals.",
      gradient: "from-success/10 to-success/5",
      iconBg: "bg-success/10",
      iconColor: "text-success"
    },
    {
      icon: Clock,
      title: "More Time & Growth",
      description: "Free up your schedule to focus on what truly matters.",
      gradient: "from-warning/10 to-warning/5",
      iconBg: "bg-warning/10",
      iconColor: "text-warning"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What You'll Get
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our proven framework has helped hundreds of professionals achieve breakthrough results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`glass-card p-6 hover-lift fade-in-up opacity-0 stagger-${index + 1}`}
            >
              <div className={`w-14 h-14 rounded-2xl ${benefit.iconBg} flex items-center justify-center mb-5`}>
                <benefit.icon className={`w-7 h-7 ${benefit.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
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
