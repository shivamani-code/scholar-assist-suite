
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

const HeroSection = () => {
  return (
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
      </Container>
    </section>
  );
};

export default HeroSection;
