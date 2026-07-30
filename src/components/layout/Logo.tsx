import Link from "next/link";
import { BRAND } from "@/constants/brand";

type LogoProps = {
  showText?: boolean;
};

export default function Logo({
  showText = true,
}: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 text-lg font-black tracking-tight text-white shadow-lg shadow-teal-500/30">
        KR
      </div>

      {showText && (
        <div>
          <h1 className="text-lg font-bold text-white">
            {BRAND.name}
          </h1>

          <p className="text-xs text-zinc-400">
            {BRAND.tagline}
          </p>
        </div>
      )}
    </Link>
  );
}