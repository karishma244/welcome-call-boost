import { Button } from "@/components/ui/button";
import { Home, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-xl text-center">
        <div className="fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Thank You for Choosing Fiale Technologies
          </h2>
          <p className="text-muted-foreground mb-8">
            We look forward to connecting with you and helping you achieve your goals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-primary text-primary-foreground shadow-soft btn-glow group"
              asChild
            >
              <a href="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:bg-primary/5 hover:border-primary group"
              asChild
            >
              <a href="/services">
                Explore Our Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
