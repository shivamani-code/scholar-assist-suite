
import AppLayout from "@/components/layout/AppLayout";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import CtaSection from "@/components/home/CtaSection";
import Footer from "@/components/home/Footer";
import {
  coreFeatures,
  academicTools,
  healthAndWellness,
  careerAndNetworking,
  socialAndCollaboration,
  productivityTools,
  dailyLifeTools
} from "@/components/home/FeatureData";
import Container from "@/components/ui/Container";

const Index = () => {
  return (
    <AppLayout>
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-4 overflow-hidden">
          <Container>
            <CategorySection 
              title="Core Features" 
              features={coreFeatures} 
            />
            
            <CategorySection 
              title="Academic Tools" 
              features={academicTools} 
            />
            
            <CategorySection 
              title="Health & Wellness" 
              features={healthAndWellness} 
            />
            
            <CategorySection 
              title="Career & Networking" 
              features={careerAndNetworking} 
            />
            
            <CategorySection 
              title="Social & Collaboration" 
              features={socialAndCollaboration} 
            />
            
            <CategorySection 
              title="Productivity Tools" 
              features={productivityTools} 
            />
            
            <CategorySection 
              title="Daily Life Tools" 
              features={dailyLifeTools} 
            />
          </Container>
        </section>
        
        <CtaSection />
      </main>
      
      <Footer />
    </AppLayout>
  );
};

export default Index;
