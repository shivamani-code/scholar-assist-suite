
import Container from "@/components/ui/Container";
import AppLayout from "@/components/layout/AppLayout";

const ToolsPage = () => {
  return (
    <AppLayout>
      <div className="py-8">
        <Container size="lg">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Academic Tools</h1>
            <p className="text-muted-foreground">
              Utilities and calculators to help with your studies
            </p>
          </div>
          
          <div className="flex items-center justify-center p-16 bg-card rounded-xl card-shadow">
            <p className="text-muted-foreground">Academic tools coming soon!</p>
          </div>
        </Container>
      </div>
    </AppLayout>
  );
};

export default ToolsPage;
