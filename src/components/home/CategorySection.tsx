
import FeatureCard from "./FeatureCard";

interface CategorySectionProps {
  title: string;
  features: {
    icon: React.ReactNode;
    title: string;
    description: string;
    to: string;
  }[];
}

const CategorySection = ({ title, features }: CategorySectionProps) => (
  <div className="mb-16">
    <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          to={feature.to}
        />
      ))}
    </div>
  </div>
);

export default CategorySection;
