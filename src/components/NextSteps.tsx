import { ClipboardCheck, PhoneCall, Lightbulb } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "We Review Your Submission",
    description: "Our team carefully reviews your information to understand your needs.",
  },
  {
    icon: PhoneCall,
    title: "We Contact You",
    description: "We'll reach out via phone or email within 24-48 hours.",
  },
  {
    icon: Lightbulb,
    title: "Personalized Solution",
    description: "We share a tailored solution designed specifically for you.",
  },
];

const NextSteps = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            What Happens Next?
          </h2>
          <p className="text-muted-foreground">
            Here's what to expect from our team
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`glass-card p-6 hover-lift fade-in-up stagger-${index + 1} opacity-0`}
            >
              <div className="flex items-start gap-5">
                {/* Step Number & Icon */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground shadow-soft">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
