import { useState, forwardRef } from "react";
import { ChevronLeft, ChevronRight, Clock, Check, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CalendarBooking = forwardRef<HTMLElement>((_, ref) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM",
    "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    return { daysInMonth, startingDay: startingDay === 0 ? 6 : startingDay - 1 };
  };

  const { daysInMonth, startingDay } = getDaysInMonth(currentDate);

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const isDateSelectable = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayOfWeek = date.getDay();
    return date >= today && dayOfWeek !== 0 && dayOfWeek !== 6;
  };

  const handleDateSelect = (day: number) => {
    if (isDateSelectable(day)) {
      setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
      setSelectedTime(null);
    }
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const formatSelectedDate = () => {
    if (!selectedDate) return "";
    return selectedDate.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-muted/30 relative overflow-hidden" id="booking">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Calendar className="w-4 h-4" />
            Schedule Your Call
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Book Your <span className="text-shimmer">Free Consultation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Select a date and time that works best for you. All calls are 30 minutes with our expert team.
          </p>
        </div>

        <div className="glass-card-elevated p-8 md:p-10 scale-in">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Calendar */}
            <div className="space-y-6">
              {/* Month Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => navigateMonth('prev')}
                  className="w-12 h-12 rounded-xl bg-muted hover:bg-primary/10 flex items-center justify-center transition-all hover:scale-105"
                >
                  <ChevronLeft className="w-6 h-6 text-foreground" />
                </button>
                <h3 className="text-2xl font-bold text-foreground">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>
                <button
                  onClick={() => navigateMonth('next')}
                  className="w-12 h-12 rounded-xl bg-muted hover:bg-primary/10 flex items-center justify-center transition-all hover:scale-105"
                >
                  <ChevronRight className="w-6 h-6 text-foreground" />
                </button>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-2">
                {dayNames.map(day => (
                  <div key={day} className="text-center text-sm font-semibold text-muted-foreground py-3">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-2">
                {/* Empty cells for starting day offset */}
                {Array.from({ length: startingDay }).map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}
                
                {/* Days of the month */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const isSelectable = isDateSelectable(day);
                  const isSelected = selectedDate?.getDate() === day && 
                    selectedDate?.getMonth() === currentDate.getMonth() &&
                    selectedDate?.getFullYear() === currentDate.getFullYear();

                  return (
                    <button
                      key={day}
                      onClick={() => handleDateSelect(day)}
                      disabled={!isSelectable}
                      className={`
                        aspect-square rounded-xl flex items-center justify-center text-sm font-semibold transition-all duration-300
                        ${isSelected 
                          ? 'gradient-primary text-primary-foreground shadow-glow scale-110' 
                          : isSelectable
                            ? 'bg-muted/50 hover:bg-primary/20 hover:text-primary hover:scale-105 text-foreground'
                            : 'text-muted-foreground/30 cursor-not-allowed'
                        }
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slots */}
            <div className="space-y-6">
              {selectedDate ? (
                <>
                  <div className="flex items-center gap-4 p-5 bg-primary/10 rounded-2xl border border-primary/20">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">Selected Date</p>
                      <p className="font-bold text-lg text-foreground">{formatSelectedDate()}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-5 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-warning" />
                      Available Time Slots
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {timeSlots.map(time => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`
                            p-4 rounded-xl text-sm font-semibold transition-all duration-300
                            ${selectedTime === time
                              ? 'gradient-primary text-primary-foreground shadow-glow scale-105'
                              : 'bg-muted/50 hover:bg-primary/15 hover:text-primary hover:scale-102 text-foreground border border-border/50 hover:border-primary/30'
                            }
                          `}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedTime && (
                    <div className="pt-6 fade-in-up">
                      <Button className="w-full gradient-primary text-primary-foreground shadow-glow-strong btn-glow text-lg py-7 group">
                        <Check className="w-6 h-6 mr-3" />
                        Confirm Booking
                      </Button>
                      <p className="text-center text-muted-foreground mt-4 font-medium">
                        {formatSelectedDate()} at {selectedTime}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="h-full flex items-center justify-center text-center p-10">
                  <div>
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Calendar className="w-10 h-10 text-primary/40" />
                    </div>
                    <p className="text-lg text-muted-foreground font-medium">
                      Select a date from the calendar to see available time slots
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

CalendarBooking.displayName = "CalendarBooking";

export default CalendarBooking;
