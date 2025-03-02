
import Container from "@/components/ui/Container";
import AppLayout from "@/components/layout/AppLayout";

// This is a template component for placeholder pages
interface PlaceholderPageProps {
  title: string;
  description: string;
}

export const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  return (
    <AppLayout>
      <div className="py-8">
        <Container size="lg">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
          
          <div className="flex items-center justify-center p-16 bg-card rounded-xl card-shadow">
            <p className="text-muted-foreground">This feature is coming soon!</p>
          </div>
        </Container>
      </div>
    </AppLayout>
  );
};

export default PlaceholderPage;
