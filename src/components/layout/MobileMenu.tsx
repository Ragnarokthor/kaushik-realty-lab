"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import { X } from "lucide-react";
import { navigation } from "@/config/navigation";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
    const pathname = usePathname();
    useEffect(() => {
  document.body.style.overflow = open ? "hidden" : "auto";

  return () => {
    document.body.style.overflow = "auto";
  };
}, [open]);
useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [onClose]);
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          open
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-72 bg-[#030712] border-l border-white/10 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <h2 className="text-xl font-bold text-white">
            KR LAB
          </h2>

          <button onClick={onClose}>
            <X className="text-white" size={22} />
          </button>
        </div>

        <nav className="flex flex-col p-6">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={onClose}
              className={clsx(
  "rounded-lg px-4 py-3 transition-colors",
  pathname === item.href
    ? "bg-teal-500/15 text-teal-400"
    : "text-zinc-300 hover:bg-white/5 hover:text-teal-400"
)}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}