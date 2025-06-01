
import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import Container from "@/components/ui/Container";
import TaskSection, { Task } from "@/components/tasks/TaskSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

const TasksPage = () => {
  const [todoTasks, setTodoTasks] = useState<Task[]>([
    { id: "1", content: "Complete math homework", completed: false },
    { id: "2", content: "Read chapter 5 for history class", completed: false },
  ]);

  const [inProgressTasks, setInProgressTasks] = useState<Task[]>([
    { id: "3", content: "Work on science project", completed: false },
  ]);

  const [completedTasks, setCompletedTasks] = useState<Task[]>([
    { id: "4", content: "Submit essay draft", completed: true },
  ]);

  const handleAddTask = (section: 'todo' | 'inProgress' | 'completed') => (content: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      content,
      completed: section === 'completed'
    };

    if (section === 'todo') {
      setTodoTasks([...todoTasks, newTask]);
    } else if (section === 'inProgress') {
      setInProgressTasks([...inProgressTasks, newTask]);
    } else {
      setCompletedTasks([...completedTasks, newTask]);
    }
  };

  const handleToggleTask = (section: 'todo' | 'inProgress' | 'completed') => (id: string) => {
    if (section === 'todo') {
      const task = todoTasks.find(t => t.id === id);
      if (task) {
        setTodoTasks(todoTasks.filter(t => t.id !== id));
        setCompletedTasks([...completedTasks, { ...task, completed: true }]);
      }
    } else if (section === 'inProgress') {
      const task = inProgressTasks.find(t => t.id === id);
      if (task) {
        setInProgressTasks(inProgressTasks.filter(t => t.id !== id));
        setCompletedTasks([...completedTasks, { ...task, completed: true }]);
      }
    } else {
      const task = completedTasks.find(t => t.id === id);
      if (task) {
        setCompletedTasks(completedTasks.filter(t => t.id !== id));
        setTodoTasks([...todoTasks, { ...task, completed: false }]);
      }
    }
  };

  const handleDeleteTask = (section: 'todo' | 'inProgress' | 'completed') => (id: string) => {
    if (section === 'todo') {
      setTodoTasks(todoTasks.filter(t => t.id !== id));
    } else if (section === 'inProgress') {
      setInProgressTasks(inProgressTasks.filter(t => t.id !== id));
    } else {
      setCompletedTasks(completedTasks.filter(t => t.id !== id));
    }
  };

  const totalTasks = todoTasks.length + inProgressTasks.length + completedTasks.length;
  const completedCount = completedTasks.length;
  const progressPercentage = totalTasks > 0 ? (completedCount / totalTasks) * 100 : 0;

  return (
    <AppLayout>
      <div className="py-8">
        <Container size="lg">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Tasks</h1>
            <p className="text-muted-foreground">
              Organize and track your tasks and assignments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalTasks}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{todoTasks.length + inProgressTasks.length}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{completedCount}</div>
                <p className="text-xs text-muted-foreground">
                  {progressPercentage.toFixed(0)}% completion rate
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TaskSection
              title="To Do"
              tasks={todoTasks}
              onAddTask={handleAddTask('todo')}
              onToggleTask={handleToggleTask('todo')}
              onDeleteTask={handleDeleteTask('todo')}
            />

            <TaskSection
              title="In Progress"
              tasks={inProgressTasks}
              onAddTask={handleAddTask('inProgress')}
              onToggleTask={handleToggleTask('inProgress')}
              onDeleteTask={handleDeleteTask('inProgress')}
            />

            <TaskSection
              title="Completed"
              tasks={completedTasks}
              onAddTask={handleAddTask('completed')}
              onToggleTask={handleToggleTask('completed')}
              onDeleteTask={handleDeleteTask('completed')}
            />
          </div>
        </Container>
      </div>
    </AppLayout>
  );
};

export default TasksPage;
