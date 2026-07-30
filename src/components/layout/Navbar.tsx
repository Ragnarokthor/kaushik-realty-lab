"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import clsx from "clsx";
import { useScroll } from "@/hooks/useScroll";

import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navigation } from "@/config/navigation";
import { ROUTES } from "@/constants/routes";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const isScrolled = useScroll();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header
  className={clsx(
    "sticky top-0 z-50 transition-all duration-300",
    isScrolled
      ? "border-b border-white/10 bg-[#030712]/90 shadow-lg backdrop-blur-xl"
      : "bg-transparent"
  )}
>
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
  key={item.title}
  href={item.href}
  className={clsx(
    "relative text-sm transition-colors after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full",
    pathname === item.href
      ? "font-semibold text-teal-400 after:w-full"
      : "text-zinc-300 hover:text-teal-400"
  )}
>
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href={ROUTES.CONTACT}>
  <Button className="hidden md:flex">
    Contact
  </Button>
</Link>

          <button
  type="button"
  onClick={() => setMenuOpen(true)}
  className="rounded-lg border border-zinc-700 p-2 md:hidden"
>
  <Menu size={22} />
</button>
        </div>
      </Container>
      <MobileMenu
  open={menuOpen}
  onClose={() => setMenuOpen(false)}
/>
    </header>
  );
}