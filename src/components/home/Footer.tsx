
import Container from "@/components/ui/Container";

const Footer = () => {
  return (
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
  );
};

export default Footer;
