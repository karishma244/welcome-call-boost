import { Quote } from "lucide-react";

const FounderMessage = () => {
  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <div className="glass-card p-8 md:p-10 fade-in-up">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Quote Icon */}
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Quote className="w-6 h-6 text-primary" />
            </div>

            {/* Message Content */}
            <div className="flex-1">
              <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                "Hi, this is <span className="font-semibold">Pushkar</span>, Founder of{" "}
                <span className="font-semibold">Fiale Technologies</span>.
                <br /><br />
                Thank you for reaching out — our team will review your details and connect with you shortly."
              </blockquote>

              {/* Founder Signature */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-soft">
                  <span className="text-primary-foreground font-bold text-xl">P</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Pushkar</p>
                  <p className="text-sm text-muted-foreground">Founder, Fiale Technologies</p>
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
