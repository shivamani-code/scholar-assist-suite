
import Container from "@/components/ui/Container";
import AppLayout from "@/components/layout/AppLayout";

const CareerPage = () => {
  return (
    <AppLayout>
      <div className="py-8">
        <Container size="lg">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Career Development</h1>
            <p className="text-muted-foreground">
              Job opportunities, career resources, and professional development tools
            </p>
          </div>
          
          <div className="flex items-center justify-center p-16 bg-card rounded-xl card-shadow">
            <p className="text-muted-foreground">Career features coming soon!</p>
          </div>
        </Container>
      </div>
    </AppLayout>
  );
};

export default CareerPage;
