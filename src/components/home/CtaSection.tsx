
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

const CtaSection = () => {
  return (
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
  );
};

export default CtaSection;
