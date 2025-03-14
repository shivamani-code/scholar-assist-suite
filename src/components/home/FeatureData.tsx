
import { 
  Calendar, 
  Book, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Calculator,
  Award, 
  Heart, 
  GraduationCap, 
  Briefcase,
  Users, 
  Beaker,
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
  Apple,
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

export const coreFeatures = [
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

export const academicTools = [
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

export const healthAndWellness = [
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

export const careerAndNetworking = [
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

export const socialAndCollaboration = [
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

export const productivityTools = [
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

export const dailyLifeTools = [
  {
    icon: <Apple className="h-6 w-6 text-accent" />,
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
