
import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import Container from "@/components/ui/Container";
import StudyTimer from "@/components/timer/StudyTimer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Play, Pause } from "lucide-react";

const TimerPage = () => {
  const [selectedDuration, setSelectedDuration] = useState(25);
  const [timerKey, setTimerKey] = useState(0);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);

  const durations = [
    { label: "25 min", value: 25, description: "Pomodoro" },
    { label: "15 min", value: 15, description: "Short Focus" },
    { label: "45 min", value: 45, description: "Deep Work" },
    { label: "60 min", value: 60, description: "Extended" },
  ];

  const handleTimerComplete = () => {
    setSessionsCompleted(prev => prev + 1);
    // You could add notification/sound here
  };

  const resetTimer = () => {
    setTimerKey(prev => prev + 1);
  };

  return (
    <AppLayout>
      <div className="py-8">
        <Container size="lg">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Study Timer</h1>
            <p className="text-muted-foreground">
              Use focused study sessions to boost your productivity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <StudyTimer
                key={timerKey}
                initialMinutes={selectedDuration}
                onComplete={handleTimerComplete}
              />
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Timer Duration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {durations.map((duration) => (
                    <Button
                      key={duration.value}
                      variant={selectedDuration === duration.value ? "default" : "outline"}
                      className="w-full justify-between"
                      onClick={() => {
                        setSelectedDuration(duration.value);
                        resetTimer();
                      }}
                    >
                      <span>{duration.label}</span>
                      <span className="text-sm text-muted-foreground">
                        {duration.description}
                      </span>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Session Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          Sessions Completed
                        </span>
                        <span className="font-bold text-lg">{sessionsCompleted}</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          Total Study Time
                        </span>
                        <span className="font-bold">
                          {Math.floor((sessionsCompleted * selectedDuration) / 60)}h {(sessionsCompleted * selectedDuration) % 60}m
                        </span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setSessionsCompleted(0)}
                    >
                      Reset Stats
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Take a 5-minute break after each session</li>
                    <li>• Stay hydrated during study sessions</li>
                    <li>• Remove distractions from your workspace</li>
                    <li>• Use longer breaks after 4 sessions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </AppLayout>
  );
};

export default TimerPage;
