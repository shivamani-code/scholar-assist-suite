
import React, { useState } from "react";
import { CheckCircle, Circle, Plus, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Task {
  id: string;
  content: string;
  completed: boolean;
}

interface TaskSectionProps {
  title: string;
  tasks: Task[];
  onAddTask: (content: string) => void;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const TaskSection: React.FC<TaskSectionProps> = ({
  title,
  tasks,
  onAddTask,
  onToggleTask,
  onDeleteTask,
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTaskContent, setNewTaskContent] = useState("");

  const handleAddTask = () => {
    if (newTaskContent.trim()) {
      onAddTask(newTaskContent.trim());
      setNewTaskContent("");
      setIsAdding(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddTask();
    } else if (e.key === "Escape") {
      setIsAdding(false);
      setNewTaskContent("");
    }
  };

  return (
    <div className="bg-card rounded-xl p-4 card-shadow animate-appear">
      <h3 className="text-lg font-medium mb-4">{title}</h3>

      <div className="space-y-2 mb-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={cn(
              "group flex items-start gap-3 p-3 rounded-lg transition-all",
              task.completed
                ? "bg-secondary/50"
                : "bg-secondary/30 hover:bg-secondary/50"
            )}
          >
            <button
              onClick={() => onToggleTask(task.id)}
              className="flex-shrink-0 mt-0.5"
            >
              {task.completed ? (
                <CheckCircle className="h-5 w-5 text-accent transition-colors" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              )}
            </button>
            <span
              className={cn(
                "flex-1 text-sm transition-colors",
                task.completed
                  ? "text-muted-foreground line-through"
                  : "text-foreground"
              )}
            >
              {task.content}
            </span>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-opacity"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      {isAdding ? (
        <div className="flex items-center gap-2 p-2 bg-secondary/50 rounded-lg animate-slide-up">
          <div className="flex-1">
            <input
              type="text"
              value={newTaskContent}
              onChange={(e) => setNewTaskContent(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="What needs to be done?"
              autoFocus
              className="w-full bg-transparent border-none outline-none text-sm"
            />
          </div>
          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="ghost"
              className="h-7 w-7"
              onClick={() => {
                setIsAdding(false);
                setNewTaskContent("");
              }}
            >
              <X className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-7 w-7 text-accent"
              onClick={handleAddTask}
            >
              <CheckCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start text-muted-foreground hover:text-foreground"
          onClick={() => setIsAdding(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          <span className="text-sm">Add task</span>
        </Button>
      )}
    </div>
  );
};

export default TaskSection;
