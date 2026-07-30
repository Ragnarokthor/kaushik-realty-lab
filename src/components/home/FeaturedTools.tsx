import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/common/FeatureCard";
import { featuredTools } from "@/data/tools";

export default function FeaturedTools() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          title="Popular Tools"
          subtitle="Interactive calculators designed for buyers, investors, and homeowners."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredTools.map((tool) => (
            <FeatureCard
              key={tool.title}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              href={tool.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}