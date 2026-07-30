import Container from "../ui/Container";
import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <section className="pb-24">
      <Container>
        <div className="grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <h3 className="text-3xl font-bold text-teal-400">{item.value}</h3>

              <p className="mt-2 text-sm text-zinc-400">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
