
import { useState } from "react";
import Container from "@/components/ui/Container";
import StudyTimer from "@/components/timer/StudyTimer";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const TimerPage = () => {
  const [completedSessions, setCompletedSessions] = useState(0);
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);

  const handleTimerComplete = () => {
    setCompletedSessions(prev => prev + 1);
    setShowCompletionMessage(true);
    
    // Hide the message after 5 seconds
    setTimeout(() => {
      setShowCompletionMessage(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-8">
        <Container size="lg">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold">Study Timer</h1>
            <p className="text-muted-foreground">
              Stay focused and productive with timed study sessions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <StudyTimer 
                initialMinutes={25} 
                onComplete={handleTimerComplete} 
              />
              
              {showCompletionMessage && (
                <div className="mt-6 p-4 rounded-lg bg-accent/10 text-accent text-center animate-fade-in">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Great job! You've completed a study session.</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 card-shadow animate-appear">
                <h2 className="text-lg font-medium mb-4">Session Stats</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Completed Sessions</div>
                    <div className="text-3xl font-bold">{completedSessions}</div>
                  </div>
                  
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Total Study Time</div>
                    <div className="text-3xl font-bold">{completedSessions * 25} min</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-6 card-shadow animate-appear">
                <h2 className="text-lg font-medium mb-4">Timer Settings</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Study Session</span>
                    <span className="font-medium">25 min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Short Break</span>
                    <span className="font-medium">5 min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Long Break</span>
                    <span className="font-medium">15 min</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-border">
                    <Button variant="outline" size="sm" className="w-full">
                      Customize
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default TimerPage;
