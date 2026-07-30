import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
  "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1",
  variant === "primary"
    ? "bg-teal-500 text-white shadow-lg shadow-teal-500/20 hover:bg-teal-400"
    : "border border-zinc-700 bg-transparent text-white hover:border-teal-500 hover:bg-zinc-900",
  className
)}
      {...props}
    >
      {children}
    </button>
  );
}