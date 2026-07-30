import EMICalculator from "@/features/emi-calculator/components/EMICalculator";

export default function EMICalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="text-4xl font-bold text-white">
        EMI Calculator
      </h1>

      <p className="mt-4 text-zinc-400">
        Calculate your home loan EMI instantly.
      </p>

      <EMICalculator />
    </main>
  );
}