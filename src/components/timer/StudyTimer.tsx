
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface StudyTimerProps {
  initialMinutes?: number;
  onComplete?: () => void;
}

const StudyTimer: React.FC<StudyTimerProps> = ({
  initialMinutes = 25,
  onComplete,
}) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const intervalRef = useRef<number | null>(null);
  
  // Progress calculation
  const totalTime = initialMinutes * 60;
  const progress = (timeLeft / totalTime) * 100;
  
  useEffect(() => {
    if (isActive && timeLeft > 0) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !isCompleted) {
      if (onComplete) onComplete();
      setIsActive(false);
      setIsCompleted(true);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive, timeLeft, onComplete, isCompleted]);
  
  const toggleTimer = () => {
    setIsActive(!isActive);
  };
  
  const resetTimer = () => {
    setIsActive(false);
    setIsCompleted(false);
    setTimeLeft(initialMinutes * 60);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  
  // Format time to MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-card rounded-xl p-6 max-w-md mx-auto card-shadow animate-appear">
      <h2 className="text-xl font-medium text-center mb-8">Study Timer</h2>
      
      <div className="relative mb-10">
        <div className="flex justify-center mb-2">
          <div className="relative inline-flex items-center justify-center">
            <svg className="w-48 h-48">
              {/* Background Circle */}
              <circle
                cx="96"
                cy="96"
                r="88"
                fill="none"
                stroke="hsl(var(--secondary))"
                strokeWidth="8"
              />
              
              {/* Progress Circle */}
              <circle
                cx="96"
                cy="96"
                r="88"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="8"
                strokeDasharray={2 * Math.PI * 88}
                strokeDashoffset={2 * Math.PI * 88 * (1 - progress / 100)}
                transform="rotate(-90 96 96)"
                className="transition-all duration-1000 ease-linear"
              />
            </svg>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-medium text-gradient">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-center gap-4">
        <Button
          onClick={resetTimer}
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12"
        >
          <RotateCcw className="h-5 w-5" />
        </Button>
        
        <Button
          onClick={toggleTimer}
          size="icon"
          className={cn(
            "rounded-full h-16 w-16 transition-all",
            isActive ? "bg-destructive hover:bg-destructive/90" : "bg-accent hover:bg-accent/90"
          )}
        >
          {isActive ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6 ml-1" />
          )}
        </Button>
      </div>
      
      {isCompleted && (
        <div className="text-center mt-6 text-accent font-medium animate-pulse">
          Time's up! Take a break.
        </div>
      )}
    </div>
  );
};

export default StudyTimer;
