import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#030712] px-6 text-center">
      <h1 className="text-7xl font-bold text-white">404</h1>

      <p className="mt-4 text-lg text-zinc-400">
        Sorry, the page you're looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-teal-500 px-6 py-3 font-medium text-white transition hover:bg-teal-600"
      >
        Back to Home
      </Link>
    </main>
  );
}