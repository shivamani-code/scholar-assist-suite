import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "@/components/ui/Container";
import TaskSection, { Task } from "@/components/tasks/TaskSection";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface TaskSectionData {
  id: string;
  title: string;
  tasks: Task[];
}

const TasksPage = () => {
  const [sections, setSections] = useState<TaskSectionData[]>([
    {
      id: uuidv4(),
      title: "My Tasks",
      tasks: [
        {
          id: uuidv4(),
          content: "Complete assignment for CS301",
          completed: false,
        },
        {
          id: uuidv4(),
          content: "Study for midterm exam",
          completed: false,
        },
        {
          id: uuidv4(),
          content: "Read chapter 5 of textbook",
          completed: true,
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Projects",
      tasks: [
        {
          id: uuidv4(),
          content: "Research for final project",
          completed: false,
        },
        {
          id: uuidv4(),
          content: "Create presentation slides",
          completed: false,
        },
      ],
    },
  ]);

  const [isSectionInputVisible, setSectionInputVisible] = useState(false);
  const [newSectionTitle, setNewSectionTitle] = useState("");

  const handleAddTask = (sectionId: string, content: string) => {
    setSections((prevSections) =>
      prevSections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            tasks: [
              ...section.tasks,
              {
                id: uuidv4(),
                content,
                completed: false,
              },
            ],
          };
        }
        return section;
      })
    );
  };

  const handleToggleTask = (sectionId: string, taskId: string) => {
    setSections((prevSections) =>
      prevSections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            tasks: section.tasks.map((task) => {
              if (task.id === taskId) {
                return {
                  ...task,
                  completed: !task.completed,
                };
              }
              return task;
            }),
          };
        }
        return section;
      })
    );
  };

  const handleDeleteTask = (sectionId: string, taskId: string) => {
    setSections((prevSections) =>
      prevSections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            tasks: section.tasks.filter((task) => task.id !== taskId),
          };
        }
        return section;
      })
    );
  };

  const handleAddSection = () => {
    if (newSectionTitle.trim()) {
      setSections((prevSections) => [
        ...prevSections,
        {
          id: uuidv4(),
          title: newSectionTitle,
          tasks: [],
        },
      ]);
      setNewSectionTitle("");
      setSectionInputVisible(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddSection();
    } else if (e.key === "Escape") {
      setSectionInputVisible(false);
      setNewSectionTitle("");
    }
  };

  return (
    <AppLayout>
      <main className="py-8">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">Tasks</h1>
            <Button
              onClick={() => setSectionInputVisible(true)}
              className="rounded-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Section
            </Button>
          </div>

          {isSectionInputVisible && (
            <div className="mb-6 p-4 bg-card rounded-xl animate-slide-up card-shadow">
              <h3 className="text-lg font-medium mb-3">New Section</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newSectionTitle}
                  onChange={(e) => setNewSectionTitle(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Section title"
                  className="flex-1 px-3 py-2 rounded-md bg-background border border-input"
                  autoFocus
                />
                <Button onClick={handleAddSection}>Create</Button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <TaskSection
                key={section.id}
                title={section.title}
                tasks={section.tasks}
                onAddTask={(content) => handleAddTask(section.id, content)}
                onToggleTask={(taskId) => handleToggleTask(section.id, taskId)}
                onDeleteTask={(taskId) => handleDeleteTask(section.id, taskId)}
              />
            ))}
          </div>
        </Container>
      </main>
    </AppLayout>
  );
};

export default TasksPage;
