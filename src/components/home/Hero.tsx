import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full border border-teal-500/40 bg-teal-500/10 px-4 py-2 text-sm text-teal-400">
            India's Modern Real Estate Learning Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Learn Real Estate
            <span className="block text-teal-400">
              Before You Invest
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Kaushik Realty Lab helps first-time buyers,
            investors, and homeowners understand real estate
            through practical guides, calculators, and expert
            insights.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button>Start Learning</Button>

            <Button variant="secondary">
              Explore Tools
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}