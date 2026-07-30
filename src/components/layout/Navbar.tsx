import { SITE } from "@/constants/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <div>
          <h1 className="text-xl font-bold text-white">
            {SITE.name}
          </h1>

          <p className="text-xs text-zinc-400">
            {SITE.title}
          </p>
        </div>

        <nav className="hidden gap-8 text-sm text-zinc-300 md:flex">
          <a href="#">Learning</a>
          <a href="#">Blogs</a>
          <a href="#">Tools</a>
          <a href="#">Resources</a>
          <a href="#">Portfolio</a>
          <a href="#">About</a>
        </nav>

        <button className="rounded-xl bg-white px-5 py-2 font-medium text-black">
          Contact
        </button>
      </div>
    </header>
  );
}