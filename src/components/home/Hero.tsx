import { SITE } from "@/constants/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <span className="rounded-full border border-zinc-700 px-5 py-2 text-sm text-zinc-300">
          India's Real Estate Learning Platform
        </span>

        <h1 className="mt-10 text-7xl font-black leading-tight text-white">
          Learn Real Estate.
          <br />
          Invest With Confidence.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
          {SITE.description}
        </p>

        <div className="mt-12 flex justify-center gap-5">

          <button className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
            Start Learning
          </button>

          <button className="rounded-xl border border-zinc-700 px-8 py-4 text-white transition hover:bg-zinc-900">
            Read Blogs
          </button>

        </div>

      </div>

    </section>
  );
}