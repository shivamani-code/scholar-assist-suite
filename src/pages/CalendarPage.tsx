
import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import Container from "@/components/ui/Container";
import Calendar from "@/components/calendar/Calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Calendar as CalendarIcon } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: Date;
  type?: "event" | "assignment" | "exam" | "holiday";
}

const CalendarPage = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      title: "Math Exam",
      date: new Date(2024, 11, 15),
      type: "exam"
    },
    {
      id: "2", 
      title: "Project Due",
      date: new Date(2024, 11, 20),
      type: "assignment"
    }
  ]);
  
  const [newEvent, setNewEvent] = useState({ title: "", date: "", type: "event" });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const addEvent = () => {
    if (newEvent.title && newEvent.date) {
      const event: Event = {
        id: Date.now().toString(),
        title: newEvent.title,
        date: new Date(newEvent.date),
        type: newEvent.type as Event["type"]
      };
      setEvents([...events, event]);
      setNewEvent({ title: "", date: "", type: "event" });
      setIsDialogOpen(false);
    }
  };

  return (
    <AppLayout>
      <div className="py-8">
        <Container size="lg">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Calendar</h1>
              <p className="text-muted-foreground">
                Manage your schedule and important dates
              </p>
            </div>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Event
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Event</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Event Title</label>
                    <Input
                      placeholder="Enter event title"
                      value={newEvent.title}
                      onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Date</label>
                    <Input
                      type="date"
                      value={newEvent.date}
                      onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Type</label>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={newEvent.type}
                      onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
                    >
                      <option value="event">Event</option>
                      <option value="assignment">Assignment</option>
                      <option value="exam">Exam</option>
                      <option value="holiday">Holiday</option>
                    </select>
                  </div>
                  <Button onClick={addEvent} className="w-full">
                    Add Event
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Calendar events={events} />
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {events.slice(0, 5).map((event) => (
                      <div key={event.id} className="p-3 bg-secondary/30 rounded-lg">
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {event.date.toLocaleDateString()}
                        </p>
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          event.type === 'exam' ? 'bg-red-100 text-red-800' :
                          event.type === 'assignment' ? 'bg-blue-100 text-blue-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {event.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </AppLayout>
  );
};

export default CalendarPage;
