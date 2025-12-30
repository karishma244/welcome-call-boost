import { Star, Users, Award, TrendingUp } from "lucide-react";

const SocialProof = () => {
  const stats = [
    { icon: Users, value: "250+", label: "Professionals Served" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Award, value: "98%", label: "Success Rate" },
    { icon: TrendingUp, value: "3x", label: "Average Growth" }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center fade-in-up opacity-0 stagger-${index + 1}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="glass-card p-8 md:p-10 text-center max-w-3xl mx-auto scale-in">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-warning fill-warning" />
            ))}
          </div>
          
          <blockquote className="text-xl md:text-2xl text-foreground font-medium mb-6 leading-relaxed">
            "The strategy call was a game-changer. Within 3 months, we doubled our revenue and finally had systems that worked on autopilot."
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
              SJ
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Sarah Johnson</div>
              <div className="text-sm text-muted-foreground">CEO, TechScale Solutions</div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 opacity-60">
          <div className="text-muted-foreground text-sm font-medium">Trusted by professionals at:</div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Google", "Meta", "Stripe", "Shopify"].map((company) => (
              <span key={company} className="text-muted-foreground font-semibold text-lg">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
