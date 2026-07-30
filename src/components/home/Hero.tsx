import { BookOpen, Calculator, MapPinned, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Container from "../ui/Container";

const highlights = [
  {
    icon: BookOpen,
    text: "100+ Learning Articles",
  },
  {
    icon: Calculator,
    text: "15+ Smart Tools",
  },
  {
    icon: MapPinned,
    text: "Bangalore Focus",
  },
  {
    icon: ShieldCheck,
    text: "Trusted Resources",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="hero-glow" />

      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-teal-500/30 bg-teal-500/10 px-5 py-2 text-sm font-medium text-teal-400">
            🇮🇳 India's Modern Real Estate Learning Platform
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            Learn Real Estate
            <span className="block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Before You Invest
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Kaushik Realty Lab simplifies real estate through practical
            learning, calculators, legal guides, market insights and
            educational resources for home buyers and investors.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button>Start Learning</Button>

            <Button variant="secondary">
              Explore Tools
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">
            {highlights.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <Icon className="mx-auto mb-3 text-teal-400" size={28} />

                <p className="text-sm text-zinc-300">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}