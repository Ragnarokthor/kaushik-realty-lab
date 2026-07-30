import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { categories } from "@/data/categories";
import { ArrowRight } from "lucide-react";

export default function Categories() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          title="Start Learning"
          subtitle="Choose a topic and begin your real estate journey."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-teal-500/50 hover:bg-white/10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-400">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>

                <p className="mt-4 text-zinc-400">
                  {category.description}
                </p>

                <div className="mt-8 flex items-center gap-2 font-medium text-teal-400">
                  Explore
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}