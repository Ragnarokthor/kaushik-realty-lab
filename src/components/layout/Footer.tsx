import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712]">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold text-white">KR LAB</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Learn real estate through practical guides, smart tools,
              and transparent knowledge.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Learning</h4>

            <div className="space-y-2">
              <Link href="/learning">Learning</Link><br />
              <Link href="/blogs">Blogs</Link><br />
              <Link href="/tools">Tools</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Resources</h4>

            <div className="space-y-2">
              <Link href="#">EMI Calculator</Link><br />
              <Link href="#">ROI Calculator</Link><br />
              <Link href="#">Stamp Duty</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>

            <div className="space-y-2">
              <Link href="/about">About</Link><br />
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Kaushik Realty Lab. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}