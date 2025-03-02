
import Container from "@/components/ui/Container";
import AppLayout from "@/components/layout/AppLayout";

const SocialPage = () => {
  return (
    <AppLayout>
      <div className="py-8">
        <Container size="lg">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Social & Networking</h1>
            <p className="text-muted-foreground">
              Connect with peers, join study groups, and attend campus events
            </p>
          </div>
          
          <div className="flex items-center justify-center p-16 bg-card rounded-xl card-shadow">
            <p className="text-muted-foreground">Social features coming soon!</p>
          </div>
        </Container>
      </div>
    </AppLayout>
  );
};

export default SocialPage;
