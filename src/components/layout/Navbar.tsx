
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Calendar, Book, CheckCircle, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";

type NavItemType = {
  icon: React.ReactNode;
  name: string;
  path: string;
};

const navItems: NavItemType[] = [
  {
    icon: <CheckCircle className="h-5 w-5" />,
    name: "Tasks",
    path: "/tasks",
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    name: "Calendar",
    path: "/calendar",
  },
  {
    icon: <Book className="h-5 w-5" />,
    name: "Notes",
    path: "/notes",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    name: "Timer",
    path: "/timer",
  },
];

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-10 py-4 backdrop-blur-lg bg-background/80 border-b border-border">
      <Container>
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <span className="text-xl font-medium text-gradient">Student Assist</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "nav-item flex items-center gap-2 text-sm font-medium transition-colors",
                  isActive(item.path)
                    ? "text-accent active"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button variant="outline" size="sm" className="glass">
              <span className="text-sm">Get Started</span>
            </Button>
          </div>

          <div className="flex md:hidden items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "nav-item p-2 rounded-md transition-colors",
                  isActive(item.path)
                    ? "text-accent bg-accent/10 active"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
