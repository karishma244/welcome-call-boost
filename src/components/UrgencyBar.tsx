import { Clock, AlertTriangle } from "lucide-react";

const UrgencyBar = () => {
  return (
    <div className="gradient-urgency text-warning-foreground py-3 px-4 mt-[73px]">
      <div className="container mx-auto flex items-center justify-center gap-3 text-sm font-medium">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 animate-bounce" />
          <Clock className="w-4 h-4" />
        </div>
        <span className="text-center">
          <span className="font-bold">LIMITED:</span> Only a few strategy call slots available this week
        </span>
        <div className="hidden sm:flex items-center gap-1">
          <span className="w-2 h-2 bg-warning-foreground rounded-full animate-pulse" />
          <span className="text-xs opacity-90">Live</span>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;
