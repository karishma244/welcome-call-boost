import { Star, Users, Award, TrendingUp, Quote } from "lucide-react";

const SocialProof = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Served" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Award, value: "98%", label: "Success Rate" },
    { icon: TrendingUp, value: "3x", label: "Average Growth" }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-hero" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center fade-in-up opacity-0 stagger-${index + 1}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-foreground mb-2 text-shimmer">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="glass-card-elevated p-10 md:p-12 text-center max-w-3xl mx-auto scale-in relative">
          <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/20" />
          
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-7 h-7 text-warning fill-warning drop-shadow-sm" />
            ))}
          </div>
          
          <blockquote className="text-xl md:text-2xl text-foreground font-medium mb-8 leading-relaxed italic">
            "Fiale Technologies transformed our business operations. Within 3 months, we saw 2x efficiency gains and finally had systems that worked seamlessly. Pushkar and team are exceptional!"
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-soft">
              RK
            </div>
            <div className="text-left">
              <div className="font-bold text-lg text-foreground">Rahul Kumar</div>
              <div className="text-muted-foreground">CEO, TechVentures India</div>
            </div>
          </div>
        </div>

        {/* Trust line */}
        <div className="text-center mt-12 fade-in-up">
          <p className="text-muted-foreground font-medium">
            Trusted by businesses across industries • Committed to excellence
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
