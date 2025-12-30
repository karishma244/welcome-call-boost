import { Clock, AlertTriangle, Zap } from "lucide-react";

const UrgencyBar = () => {
  return (
    <div className="gradient-urgency text-warning-foreground py-3.5 px-4 mt-[73px] relative overflow-hidden">
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_3s_infinite]" />
      
      <div className="container mx-auto flex items-center justify-center gap-4 text-sm font-semibold relative z-10">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 animate-pulse" />
          <AlertTriangle className="w-4 h-4 animate-bounce" />
        </div>
        <span className="text-center">
          <span className="font-black uppercase tracking-wide">Limited Offer:</span>{" "}
          Exclusive consultation slots available — Book yours now!
        </span>
        <div className="hidden sm:flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span className="w-2 h-2 bg-warning-foreground rounded-full animate-pulse" />
          <span className="text-xs font-bold opacity-90">Live</span>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;
