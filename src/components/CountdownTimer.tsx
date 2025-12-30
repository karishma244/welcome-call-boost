import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 glass-card flex items-center justify-center">
        <span className="text-2xl md:text-3xl font-bold text-foreground">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs text-muted-foreground mt-2 uppercase tracking-wide">
        {label}
      </span>
    </div>
  );

  return (
    <div className="inline-flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 text-primary font-medium">
        <Clock className="w-5 h-5" />
        <span>Offer expires in:</span>
      </div>
      <div className="flex items-center gap-3">
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <span className="text-3xl font-bold text-muted-foreground">:</span>
        <TimeBlock value={timeLeft.minutes} label="Minutes" />
        <span className="text-3xl font-bold text-muted-foreground">:</span>
        <TimeBlock value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

export default CountdownTimer;
