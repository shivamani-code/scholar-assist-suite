
import { useState } from "react";
import Container from "@/components/ui/Container";
import Calendar from "@/components/calendar/Calendar";
import AppLayout from "@/components/layout/AppLayout";

// Sample events data
const sampleEvents = [
  {
    id: "1",
    title: "Group Study Session",
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 15),
    type: "event" as const,
  },
  {
    id: "2",
    title: "Physics Assignment Due",
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 18),
    type: "assignment" as const,
  },
  {
    id: "3",
    title: "Midterm Exam",
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 22),
    type: "exam" as const,
  },
  {
    id: "4",
    title: "Spring Break",
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 25),
    type: "holiday" as const,
  },
];

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <AppLayout>
      <main className="py-8">
        <Container size="lg">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Calendar</h1>
            <p className="text-muted-foreground">
              Track your academic schedule, deadlines, and events
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Calendar 
                events={sampleEvents} 
                onDateSelect={handleDateSelect} 
              />
            </div>
            
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-4 card-shadow animate-appear">
                <h2 className="text-lg font-medium mb-4">Upcoming Events</h2>
                <div className="space-y-3">
                  {sampleEvents
                    .filter(event => new Date(event.date) >= new Date())
                    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                    .slice(0, 3)
                    .map(event => (
                      <div key={event.id} className="flex items-start p-3 bg-secondary/30 rounded-lg">
                        <div className="flex-1">
                          <p className="font-medium">{event.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {event.date.toLocaleDateString(undefined, { 
                              weekday: 'short', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-4 card-shadow animate-appear">
                <h2 className="text-lg font-medium mb-4">Event Types</h2>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span>Events</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span>Assignments</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <span>Exams</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                    <span>Holidays</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </AppLayout>
  );
};

export default CalendarPage;
