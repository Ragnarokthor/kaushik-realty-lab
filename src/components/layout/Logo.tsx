import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-lg font-black text-white shadow-lg shadow-teal-500/30">
        KR
      </div>

      <div>
        <h1 className="text-lg font-bold text-white">Kaushik Realty Lab</h1>

        <p className="text-xs text-zinc-400">Learn • Compare • Invest Wisely</p>
      </div>
    </Link>
  );
}
