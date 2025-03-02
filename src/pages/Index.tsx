
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import { 
  Calendar, 
  Book, 
  CheckCircle, 
  Clock, 
  ArrowRight, 
  DollarSign,
  Calculator,
  Award, 
  Heart, 
  GraduationCap, 
  Briefcase,
  Users, 
  Beaker,  // Replacing Flask with Beaker
  Lightbulb,
  BellRing,
  Brain,
  Bookmark,
  Network,
  FileText,
  Headphones,
  PenTool,
  ScrollText,
  Share2,
  Settings,
  FileSpreadsheet,
  Apple,  // Replacing PizzaSlice with Apple
  CalendarDays,
  Repeat,
  BookOpen,
  LayoutGrid,
  Truck,
  Eye,
  UserPlus,
  MessageSquare,
  Presentation,
  School,
  MessageCircle
} from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import { categories } from "@/components/layout/AppHeader";

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  to,
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  to: string;
}) => (
  <div className="bg-card rounded-xl p-6 flex flex-col h-full card-shadow hover:translate-y-[-4px] transition-all duration-300">
    <div className="mb-4 p-3 rounded-full bg-accent/10 w-fit">
      {icon}
    </div>
    <h3 className="text-xl font-medium mb-2">{title}</h3>
    <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
    <Link to={to}>
      <Button variant="link" className="p-0 h-auto text-accent">
        <span className="mr-1">Get Started</span>
        <ArrowRight className="h-4 w-4" />
      </Button>
    </Link>
  </div>
);

const CategorySection = ({
  title,
  features
}: {
  title: string;
  features: {
    icon: React.ReactNode;
    title: string;
    description: string;
    to: string;
  }[];
}) => (
  <div className="mb-16">
    <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          to={feature.to}
        />
      ))}
    </div>
  </div>
);

const Index = () => {
  const coreFeatures = [
    {
      icon: <CheckCircle className="h-6 w-6 text-accent" />,
      title: "Task Management",
      description: "Create, organize, and track your tasks with ease. Mark them complete when you're done.",
      to: "/tasks"
    },
    {
      icon: <Calendar className="h-6 w-6 text-accent" />,
      title: "Calendar",
      description: "Keep track of all your important events, assignments, and deadlines in one place.",
      to: "/calendar"
    },
    {
      icon: <Book className="h-6 w-6 text-accent" />,
      title: "Notes",
      description: "Take and organize your study notes with a clean, distraction-free writing experience.",
      to: "/notes"
    },
    {
      icon: <BellRing className="h-6 w-6 text-accent" />,
      title: "Reminders",
      description: "Set time and date-based reminders for important deadlines and events.",
      to: "/reminders"
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "Study Timer",
      description: "Stay focused with our Pomodoro-style timer designed for effective study sessions.",
      to: "/timer"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-accent" />,
      title: "Budget Tracker",
      description: "Track your expenses and manage your finances with ease.",
      to: "/finance"
    },
    {
      icon: <Bookmark className="h-6 w-6 text-accent" />,
      title: "Assignments Tracker",
      description: "Keep track of your assignments, due dates, and progress.",
      to: "/assignments"
    },
    {
      icon: <Brain className="h-6 w-6 text-accent" />,
      title: "Study Plans",
      description: "Create personalized study plans and set daily/weekly goals.",
      to: "/study-plans"
    }
  ];
  
  const academicTools = [
    {
      icon: <FileText className="h-6 w-6 text-accent" />,
      title: "Plagiarism Checker",
      description: "Check your assignments for plagiarism before submission.",
      to: "/plagiarism-checker"
    },
    {
      icon: <ScrollText className="h-6 w-6 text-accent" />,
      title: "Citation Generator",
      description: "Generate citations in APA, MLA, and Chicago formats.",
      to: "/citations"
    },
    {
      icon: <Calculator className="h-6 w-6 text-accent" />,
      title: "Equation Solver",
      description: "Solve mathematical and physics equations step by step.",
      to: "/equation-solver"
    },
    {
      icon: <PenTool className="h-6 w-6 text-accent" />,
      title: "Grammar Checker",
      description: "Check your writing for grammar and style errors.",
      to: "/grammar-checker"
    },
    {
      icon: <Award className="h-6 w-6 text-accent" />,
      title: "GPA Calculator",
      description: "Calculate your GPA based on course credits and grades.",
      to: "/gpa-calculator"
    },
    {
      icon: <Network className="h-6 w-6 text-accent" />,
      title: "Mind Mapping",
      description: "Create visual mind maps for better brainstorming.",
      to: "/mind-mapping"
    },
    {
      icon: <Beaker className="h-6 w-6 text-accent" />,
      title: "Academic Tools",
      description: "Access specialized calculators, converters, and other academic tools.",
      to: "/tools"
    }
  ];
  
  const healthAndWellness = [
    {
      icon: <Heart className="h-6 w-6 text-accent" />,
      title: "Wellness Tracker",
      description: "Track your sleep, water intake, exercise, and mental health.",
      to: "/wellness"
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "Posture Reminder",
      description: "Get reminders to maintain good posture while studying.",
      to: "/posture-reminder"
    },
    {
      icon: <Eye className="h-6 w-6 text-accent" />,
      title: "Eye Strain Alert",
      description: "Receive alerts to take breaks and reduce eye strain.",
      to: "/eye-strain"
    },
    {
      icon: <Brain className="h-6 w-6 text-accent" />,
      title: "Meditation",
      description: "Access guided meditation and breathing exercises for stress relief.",
      to: "/meditation"
    }
  ];
  
  const careerAndNetworking = [
    {
      icon: <Briefcase className="h-6 w-6 text-accent" />,
      title: "Job & Internship",
      description: "Find jobs, internships, and career opportunities.",
      to: "/career"
    },
    {
      icon: <FileText className="h-6 w-6 text-accent" />,
      title: "Resume Builder",
      description: "Create professional resumes and CVs with customizable templates.",
      to: "/resume"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-accent" />,
      title: "Mock Interviews",
      description: "Practice interview questions and receive feedback.",
      to: "/interviews"
    },
    {
      icon: <Award className="h-6 w-6 text-accent" />,
      title: "Scholarships",
      description: "Track scholarship deadlines and application status.",
      to: "/scholarships"
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-accent" />,
      title: "Skill Development",
      description: "Follow learning paths for coding, design, data analysis, and more.",
      to: "/skill-development"
    }
  ];
  
  const socialAndCollaboration = [
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Group Study",
      description: "Create and join study groups, share notes and schedules.",
      to: "/group-study"
    },
    {
      icon: <Share2 className="h-6 w-6 text-accent" />,
      title: "Note Sharing",
      description: "Share and discover notes from other students.",
      to: "/note-sharing"
    },
    {
      icon: <Calendar className="h-6 w-6 text-accent" />,
      title: "Campus Events",
      description: "Discover and RSVP to campus events and activities.",
      to: "/campus-events"
    },
    {
      icon: <UserPlus className="h-6 w-6 text-accent" />,
      title: "Study Buddy Finder",
      description: "Find study partners for your courses and subjects.",
      to: "/study-buddy"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-accent" />,
      title: "Campus Noticeboard",
      description: "Browse and post campus announcements, lost items, and more.",
      to: "/noticeboard"
    },
    {
      icon: <School className="h-6 w-6 text-accent" />,
      title: "Faculty Directory",
      description: "Find professors by department and expertise, request mentorship.",
      to: "/faculty"
    }
  ];
  
  const productivityTools = [
    {
      icon: <Headphones className="h-6 w-6 text-accent" />,
      title: "Voice Notes",
      description: "Record voice notes and convert speech to text.",
      to: "/voice-notes"
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "Focus Mode",
      description: "Block distractions and stay focused on your work.",
      to: "/focus-mode"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-accent" />,
      title: "Flashcards",
      description: "Create and study with digital flashcards and self-tests.",
      to: "/flashcards"
    },
    {
      icon: <FileSpreadsheet className="h-6 w-6 text-accent" />,
      title: "File Converter",
      description: "Convert documents between different formats.",
      to: "/converters"
    },
    {
      icon: <Repeat className="h-6 w-6 text-accent" />,
      title: "Habit Tracker",
      description: "Set and track daily habits and routines.",
      to: "/habits"
    },
    {
      icon: <CalendarDays className="h-6 w-6 text-accent" />,
      title: "Class Schedule",
      description: "Organize your class schedule with a visual timetable.",
      to: "/class-schedule"
    }
  ];
  
  const dailyLifeTools = [
    {
      icon: <Apple className="h-6 w-6 text-accent" />,  // Changed from PizzaSlice to Apple
      title: "Meal Planner",
      description: "Plan affordable meals and discover budget-friendly recipes.",
      to: "/meal-planner"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-accent" />,
      title: "Textbook Exchange",
      description: "Buy, sell, or trade textbooks with other students.",
      to: "/textbook-exchange"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-accent" />,
      title: "Expense Splitter",
      description: "Split bills and expenses with roommates and friends.",
      to: "/expense-splitter"
    },
    {
      icon: <LayoutGrid className="h-6 w-6 text-accent" />,
      title: "Transport Planner",
      description: "Find the best routes for campus travel and commuting.",
      to: "/transport"
    },
    {
      icon: <Truck className="h-6 w-6 text-accent" />,
      title: "Parcel Tracker",
      description: "Track your packages and deliveries in one place.",
      to: "/parcels"
    }
  ];

  return (
    <AppLayout>
      <main className="flex-grow">
        <section className="py-16 md:py-24 overflow-hidden">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4 animate-fade-in">
                Your Complete Academic Success Suite
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-down text-balance">
                Organize Your <span className="accent-gradient">Student Life</span> with Precision
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-slide-up max-w-2xl mx-auto text-balance">
                A comprehensive platform designed to help students manage every aspect of their academic life with intuitive features and tools.
              </p>
              <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
                <Link to="/tasks">
                  <Button size="lg" className="rounded-full">
                    <span>Get Started</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="rounded-full glass">
                  Explore Features
                </Button>
              </div>
            </div>
            
            <CategorySection 
              title="Core Features" 
              features={coreFeatures} 
            />
            
            <CategorySection 
              title="Academic Tools" 
              features={academicTools} 
            />
            
            <CategorySection 
              title="Health & Wellness" 
              features={healthAndWellness} 
            />
            
            <CategorySection 
              title="Career & Networking" 
              features={careerAndNetworking} 
            />
            
            <CategorySection 
              title="Social & Collaboration" 
              features={socialAndCollaboration} 
            />
            
            <CategorySection 
              title="Productivity Tools" 
              features={productivityTools} 
            />
            
            <CategorySection 
              title="Daily Life Tools" 
              features={dailyLifeTools} 
            />
          </Container>
        </section>
        
        <section className="py-16 bg-secondary/50 border-y border-border">
          <Container>
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
              <div className="text-center md:text-left max-w-xl">
                <h2 className="text-3xl font-bold mb-4">Ready to boost your productivity?</h2>
                <p className="text-muted-foreground mb-6">
                  Join thousands of students who have transformed their academic life with our comprehensive suite of tools.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                <Link to="/tasks">
                  <Button size="lg" className="rounded-full">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      
      <footer className="py-8 border-t border-border bg-background">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-lg font-medium text-gradient">Scholar Hub</span>
            </div>
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Scholar Hub. All rights reserved.
            </div>
          </div>
        </Container>
      </footer>
    </AppLayout>
  );
};

export default Index;
