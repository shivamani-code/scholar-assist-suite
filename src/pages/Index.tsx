
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import { Calendar, Book, CheckCircle, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24 overflow-hidden">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4 animate-fade-in">
                Your Academic Success Companion
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-down text-balance">
                Organize Your <span className="accent-gradient">Student Life</span> with Precision
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-slide-up max-w-2xl mx-auto text-balance">
                A minimalist tool designed to help students manage tasks, track events, take notes, and stay productive with intuitive features.
              </p>
              <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
                <Link to="/tasks">
                  <Button size="lg" className="rounded-full">
                    <span>Get Started</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="rounded-full glass">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              <FeatureCard
                icon={<CheckCircle className="h-6 w-6 text-accent" />}
                title="Task Management"
                description="Create, organize, and track your tasks with ease. Mark them complete when you're done."
                to="/tasks"
              />
              <FeatureCard
                icon={<Calendar className="h-6 w-6 text-accent" />}
                title="Calendar"
                description="Keep track of all your important events, assignments, and deadlines in one place."
                to="/calendar"
              />
              <FeatureCard
                icon={<Book className="h-6 w-6 text-accent" />}
                title="Notes"
                description="Take and organize your study notes with a clean, distraction-free writing experience."
                to="/notes"
              />
              <FeatureCard
                icon={<Clock className="h-6 w-6 text-accent" />}
                title="Study Timer"
                description="Stay focused with our Pomodoro-style timer designed for effective study sessions."
                to="/timer"
              />
            </div>
          </Container>
        </section>
        
        <section className="py-16 bg-secondary/50 border-y border-border">
          <Container>
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
              <div className="text-center md:text-left max-w-xl">
                <h2 className="text-3xl font-bold mb-4">Ready to boost your productivity?</h2>
                <p className="text-muted-foreground mb-6">
                  Join thousands of students who have transformed their academic life with our tools.
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
              <span className="text-lg font-medium text-gradient">Student Assist</span>
            </div>
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Student Assist. All rights reserved.
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Index;
