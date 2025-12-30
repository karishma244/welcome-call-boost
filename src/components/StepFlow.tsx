import { ClipboardCheck, PhoneCall, Lightbulb, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StepFlowProps {
  onBookCallClick: () => void;
}

const StepFlow = ({ onBookCallClick }: StepFlowProps) => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "We Review Your Submission",
      description: "Our expert team carefully analyzes your information to understand your unique needs.",
    },
    {
      icon: PhoneCall,
      title: "We Connect With You",
      description: "Expect a call or email from us within 24-48 hours to discuss next steps.",
    },
    {
      icon: Lightbulb,
      title: "Personalized Solution",
      description: "We craft a tailored strategy designed specifically for your success.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            What Happens Next
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Your Journey With <span className="text-shimmer">Fiale Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Here's exactly what to expect from our team
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`glass-card p-8 hover-lift fade-in-up opacity-0 stagger-${index + 1} relative group`}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground shadow-soft group-hover:scale-110 transition-transform">
                {index + 1}
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="glass-card-elevated p-8 md:p-10 text-center fade-in-up opacity-0 stagger-4 border-2 border-primary/30 relative overflow-hidden">
          {/* Decorative corner badge */}
          <div className="absolute top-0 right-0 gradient-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-bl-2xl shadow-soft">
            RECOMMENDED
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
              <Calendar className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Want Faster Results?
              </h3>
              <p className="text-muted-foreground">
                Book a free strategy call and skip the wait — let's connect today!
              </p>
            </div>
            <Button 
              size="lg"
              className="gradient-primary text-primary-foreground shadow-glow btn-glow text-lg px-8 group"
              onClick={onBookCallClick}
            >
              Book Your Free Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepFlow;
