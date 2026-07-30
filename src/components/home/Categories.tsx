import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/common/FeatureCard";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          title="Start Learning"
          subtitle="Choose a topic and begin your real estate journey."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
  <FeatureCard
    key={category.title}
    title={category.title}
    description={category.description}
    icon={category.icon}
  />
))}
        </div>
      </Container>
    </section>
  );
}
