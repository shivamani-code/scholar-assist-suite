
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import TasksPage from "./pages/TasksPage";
import CalendarPage from "./pages/CalendarPage";
import NotesPage from "./pages/NotesPage";
import TimerPage from "./pages/TimerPage";
import NotFound from "./pages/NotFound";

// New page imports (placeholder pages will be created)
import FinancePage from "./pages/FinancePage";
import AcademicPage from "./pages/AcademicPage";
import WellnessPage from "./pages/WellnessPage";
import CareerPage from "./pages/CareerPage";
import SocialPage from "./pages/SocialPage";
import ToolsPage from "./pages/ToolsPage";

// Subcategory pages
import RemindersPage from "./pages/RemindersPage";
import AssignmentsPage from "./pages/AssignmentsPage";
import StudyPlansPage from "./pages/StudyPlansPage";
import VoiceNotesPage from "./pages/VoiceNotesPage";
import FlashcardsPage from "./pages/FlashcardsPage";
import FocusModePage from "./pages/FocusModePage";
import BillsPage from "./pages/BillsPage";
import InvestmentsPage from "./pages/InvestmentsPage";
import GPACalculatorPage from "./pages/GPACalculatorPage";
import CitationsPage from "./pages/CitationsPage";
import ScholarshipsPage from "./pages/ScholarshipsPage";
import MeditationPage from "./pages/MeditationPage";
import WellnessResourcesPage from "./pages/WellnessResourcesPage";
import ResumePage from "./pages/ResumePage";
import InterviewsPage from "./pages/InterviewsPage";
import GroupStudyPage from "./pages/GroupStudyPage";
import CampusEventsPage from "./pages/CampusEventsPage";
import NetworkPage from "./pages/NetworkPage";
import CalculatorPage from "./pages/CalculatorPage";
import EquationSolverPage from "./pages/EquationSolverPage";
import ConvertersPage from "./pages/ConvertersPage";
import DeadlinesPage from "./pages/DeadlinesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Main category pages */}
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/academic" element={<AcademicPage />} />
          <Route path="/wellness" element={<WellnessPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          
          {/* Subcategory pages */}
          <Route path="/reminders" element={<RemindersPage />} />
          <Route path="/assignments" element={<AssignmentsPage />} />
          <Route path="/study-plans" element={<StudyPlansPage />} />
          <Route path="/voice-notes" element={<VoiceNotesPage />} />
          <Route path="/flashcards" element={<FlashcardsPage />} />
          <Route path="/focus-mode" element={<FocusModePage />} />
          <Route path="/bills" element={<BillsPage />} />
          <Route path="/investments" element={<InvestmentsPage />} />
          <Route path="/gpa-calculator" element={<GPACalculatorPage />} />
          <Route path="/citations" element={<CitationsPage />} />
          <Route path="/scholarships" element={<ScholarshipsPage />} />
          <Route path="/meditation" element={<MeditationPage />} />
          <Route path="/wellness-resources" element={<WellnessResourcesPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/interviews" element={<InterviewsPage />} />
          <Route path="/group-study" element={<GroupStudyPage />} />
          <Route path="/campus-events" element={<CampusEventsPage />} />
          <Route path="/network" element={<NetworkPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/equation-solver" element={<EquationSolverPage />} />
          <Route path="/converters" element={<ConvertersPage />} />
          <Route path="/deadlines" element={<DeadlinesPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
