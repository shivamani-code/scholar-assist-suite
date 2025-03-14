
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { User, ListTodo } from "lucide-react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type CategoryType = {
  name: string;
  path: string;
  subcategories?: Array<{
    name: string;
    path: string;
  }>;
};

// Main categories and all features
export const categories: CategoryType[] = [
  {
    name: "Tasks",
    path: "/tasks",
    subcategories: [
      { name: "Task Management", path: "/tasks" },
      { name: "Assignments", path: "/assignments" },
      { name: "Study Plans", path: "/study-plans" },
    ]
  },
  {
    name: "Calendar",
    path: "/calendar",
    subcategories: [
      { name: "Events", path: "/calendar" },
      { name: "Reminders", path: "/reminders" },
      { name: "Deadlines", path: "/deadlines" },
    ]
  },
  {
    name: "Notes",
    path: "/notes",
    subcategories: [
      { name: "Text Notes", path: "/notes" },
      { name: "Voice Notes", path: "/voice-notes" },
      { name: "Flashcards", path: "/flashcards" },
    ]
  },
  {
    name: "Timer",
    path: "/timer",
    subcategories: [
      { name: "Study Timer", path: "/timer" },
      { name: "Focus Mode", path: "/focus-mode" },
    ]
  },
  {
    name: "Finance",
    path: "/finance",
    subcategories: [
      { name: "Budget Tracker", path: "/finance" },
      { name: "Bills", path: "/bills" },
      { name: "Investments", path: "/investments" },
    ]
  },
  {
    name: "Academic",
    path: "/academic",
    subcategories: [
      { name: "GPA Calculator", path: "/gpa-calculator" },
      { name: "Citation Generator", path: "/citations" },
      { name: "Scholarships", path: "/scholarships" },
    ]
  },
  {
    name: "Wellness",
    path: "/wellness",
    subcategories: [
      { name: "Health Tracker", path: "/wellness" },
      { name: "Meditation", path: "/meditation" },
      { name: "Resources", path: "/wellness-resources" },
    ]
  },
  {
    name: "Career",
    path: "/career",
    subcategories: [
      { name: "Job Finder", path: "/career" },
      { name: "Resume Builder", path: "/resume" },
      { name: "Mock Interviews", path: "/interviews" },
    ]
  },
  {
    name: "Social",
    path: "/social",
    subcategories: [
      { name: "Group Study", path: "/group-study" },
      { name: "Campus Events", path: "/campus-events" },
      { name: "Network", path: "/network" },
    ]
  },
  {
    name: "Tools",
    path: "/tools",
    subcategories: [
      { name: "Calculator", path: "/calculator" },
      { name: "Equation Solver", path: "/equation-solver" },
      { name: "Converters", path: "/converters" },
    ]
  },
];

const AppHeader = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 py-3 backdrop-blur-lg bg-background/80 border-b border-border">
      <Container size="full">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <span className="text-xl font-medium text-gradient">Scholar Hub</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {categories.slice(0, 6).map((item) => (
              <DropdownMenu key={item.path}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    size="sm"
                    className={cn(
                      "rounded-full px-3",
                      isActive(item.path) ? "bg-accent text-accent-foreground" : ""
                    )}
                  >
                    <span>{item.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                {item.subcategories && (
                  <DropdownMenuContent align="center">
                    <DropdownMenuLabel>{item.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {item.subcategories.map((sub) => (
                      <DropdownMenuItem key={sub.path} asChild>
                        <Link to={sub.path}>{sub.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                )}
              </DropdownMenu>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full px-3"
                >
                  <span>More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {categories.slice(6).map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path} className="flex items-center">
                      <span>{item.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" size="sm" className="rounded-full">
              <span className="text-sm">Profile</span>
            </Button>
          </div>

          <div className="flex md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <ListTodo className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-60">
                <DropdownMenuLabel>Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {categories.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link 
                      to={item.path}
                      className={cn(
                        "flex items-center",
                        isActive(item.path) ? "font-medium text-accent" : ""
                      )}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default AppHeader;
