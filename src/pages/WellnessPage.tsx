
import Container from "@/components/ui/Container";
import AppLayout from "@/components/layout/AppLayout";

const WellnessPage = () => {
  return (
    <AppLayout>
      <div className="py-8">
        <Container size="lg">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Health & Wellness</h1>
            <p className="text-muted-foreground">
              Tools and resources to maintain your physical and mental wellbeing
            </p>
          </div>
          
          <div className="flex items-center justify-center p-16 bg-card rounded-xl card-shadow">
            <p className="text-muted-foreground">Wellness features coming soon!</p>
          </div>
        </Container>
      </div>
    </AppLayout>
  );
};

export default WellnessPage;
