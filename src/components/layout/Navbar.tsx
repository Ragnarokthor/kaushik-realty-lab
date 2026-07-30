"use client";

import Logo from "./Logo";
import Link from "next/link";
import { Menu } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const navItems = [
  { name: "Learning", href: "#" },
  { name: "Blogs", href: "#" },
  { name: "Tools", href: "#" },
  { name: "Resources", href: "#" },
  { name: "About", href: "#" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-zinc-300 transition hover:text-teal-400"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Button className="hidden md:flex">
            Contact
          </Button>

          <button className="rounded-lg border border-zinc-700 p-2 md:hidden">
            <Menu size={22} />
          </button>
        </div>
      </Container>
    </header>
  );
}