
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { format, addMonths, subMonths, getDay, endOfMonth, startOfMonth, eachDayOfInterval, isSameDay, isToday } from "date-fns";

interface CalendarProps {
  events?: Array<{
    id: string;
    title: string;
    date: Date;
    type?: "event" | "assignment" | "exam" | "holiday";
  }>;
  onDateSelect?: (date: Date) => void;
}

const Calendar = ({ events = [], onDateSelect }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handlePreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  // Calculate days for the current month view
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDay = getDay(monthStart);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Create array for calendar grid including empty cells for previous month days
  const calendarDays = Array(startDay).fill(null).concat(days);

  // Get events for the selected day
  const eventsForSelectedDay = selectedDate 
    ? events.filter(event => 
        selectedDate && isSameDay(new Date(event.date), selectedDate)
      ) 
    : [];

  // Days of the week
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getEventColorClass = (type?: string) => {
    switch (type) {
      case "event": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "assignment": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "exam": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "holiday": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default: return "bg-accent/10 text-accent";
    }
  };

  return (
    <div className="rounded-xl overflow-hidden card-shadow animate-appear">
      <div className="bg-card p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-medium">{format(currentDate, 'MMMM yyyy')}</h2>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={handlePreviousMonth}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleNextMonth}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {weekDays.map((day) => (
            <div 
              key={day} 
              className="text-center text-xs text-muted-foreground font-medium p-2"
            >
              {day}
            </div>
          ))}
          
          {calendarDays.map((day, index) => {
            if (!day) return <div key={`empty-${index}`} className="p-2" />;
            
            // Check if the day has any events
            const hasEvents = events.some(event => 
              isSameDay(new Date(event.date), day)
            );
            
            const isSelected = selectedDate ? isSameDay(day, selectedDate) : false;
            const isCurrentDay = isToday(day);
            
            return (
              <button
                key={day.toISOString()}
                className={cn(
                  "p-2 rounded-md h-10 relative flex items-center justify-center text-sm transition-colors",
                  isSelected 
                    ? "bg-accent text-white" 
                    : isCurrentDay
                      ? "bg-secondary text-accent"
                      : hasEvents 
                        ? "hover:bg-secondary" 
                        : "hover:bg-secondary/50",
                  {"opacity-50": !isCurrentDay && day.getMonth() !== currentDate.getMonth()}
                )}
                onClick={() => handleDateClick(day)}
              >
                {format(day, 'd')}
                {hasEvents && !isSelected && (
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-accent"></span>
                )}
              </button>
            );
          })}
        </div>
      </div>
      
      {selectedDate && (
        <div className="bg-secondary/30 p-4 border-t border-border">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium">
              {format(selectedDate, 'EEEE, MMMM d, yyyy')}
            </h3>
          </div>
          
          {eventsForSelectedDay.length > 0 ? (
            <div className="space-y-2">
              {eventsForSelectedDay.map((event) => (
                <div 
                  key={event.id}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm",
                    getEventColorClass(event.type)
                  )}
                >
                  {event.title}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No events scheduled for this day.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Calendar;
