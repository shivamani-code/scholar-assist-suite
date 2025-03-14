
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  to: string;
}

const FeatureCard = ({ icon, title, description, to }: FeatureCardProps) => (
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

export default FeatureCard;
