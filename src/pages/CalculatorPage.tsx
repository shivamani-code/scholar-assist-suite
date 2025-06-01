
import AppLayout from "@/components/layout/AppLayout";
import Container from "@/components/ui/Container";
import BasicCalculator from "@/components/calculator/BasicCalculator";

const CalculatorPage = () => {
  return (
    <AppLayout>
      <div className="py-8">
        <Container size="lg">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Calculator</h1>
            <p className="text-muted-foreground">
              Scientific and financial calculators for academic needs
            </p>
          </div>
          
          <div className="flex justify-center">
            <BasicCalculator />
          </div>
        </Container>
      </div>
    </AppLayout>
  );
};

export default CalculatorPage;
