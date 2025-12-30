import { useState, forwardRef } from "react";
import { ChevronLeft, ChevronRight, Clock, Check, Calendar } from "lucide-react";
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
    <section ref={ref} className="py-16 px-4" id="booking">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Book Your Free Strategy Call
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Select a date and time that works best for you. All calls are 30 minutes with our expert team.
          </p>
        </div>

        <div className="glass-card p-6 md:p-8 scale-in">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calendar */}
            <div className="space-y-6">
              {/* Month Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => navigateMonth('prev')}
                  className="w-10 h-10 rounded-xl bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <h3 className="text-xl font-bold text-foreground">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>
                <button
                  onClick={() => navigateMonth('next')}
                  className="w-10 h-10 rounded-xl bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-2">
                {dayNames.map(day => (
                  <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
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
                        aspect-square rounded-xl flex items-center justify-center text-sm font-medium transition-all duration-200
                        ${isSelected 
                          ? 'gradient-primary text-primary-foreground shadow-soft scale-105' 
                          : isSelectable
                            ? 'bg-muted/50 hover:bg-primary/10 hover:text-primary text-foreground'
                            : 'text-muted-foreground/40 cursor-not-allowed'
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
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Selected Date</p>
                      <p className="font-semibold text-foreground">{formatSelectedDate()}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Available Times</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map(time => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`
                            p-3 rounded-xl text-sm font-medium transition-all duration-200
                            ${selectedTime === time
                              ? 'gradient-primary text-primary-foreground shadow-soft'
                              : 'bg-muted/50 hover:bg-primary/10 hover:text-primary text-foreground border border-border/50'
                            }
                          `}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedTime && (
                    <div className="pt-4 fade-in-up">
                      <Button className="w-full gradient-primary text-primary-foreground shadow-soft btn-glow text-lg py-6 group">
                        <Check className="w-5 h-5 mr-2" />
                        Confirm Booking
                      </Button>
                      <p className="text-center text-sm text-muted-foreground mt-3">
                        {formatSelectedDate()} at {selectedTime}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="h-full flex items-center justify-center text-center p-8">
                  <div>
                    <Calendar className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                    <p className="text-muted-foreground">
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
