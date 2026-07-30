import Container from "@/components/ui/Container";
import { trustItems } from "@/data/trust";

export default function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-white/5">
      <Container>
        <div className="grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-4 justify-center"
              >
                <div className="rounded-xl bg-teal-500/10 p-3 text-teal-400">
                  <Icon size={22} />
                </div>

                <span className="font-medium text-zinc-200">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}